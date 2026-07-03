import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let cachedClient = null
async function getDb() {
  if (!cachedClient) {
    cachedClient = new MongoClient(process.env.MONGO_URL)
    await cachedClient.connect()
  }
  const dbName = process.env.DB_NAME || 'finu_db'
  return cachedClient.db(dbName)
}

function json(data, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function OPTIONS() { return json({}, 200) }

async function handle(request, { params }) {
  const resolved = await params
  const path = resolved?.path || []
  const route = '/' + path.join('/')
  const method = request.method

  try {
    if (route === '/' && method === 'GET') {
      return json({ service: 'FinU API', status: 'ok' })
    }

    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      const { name, email, company, message } = body || {}
      if (!name || !email || !message) {
        return json({ error: 'Name, email and message are required.' }, 400)
      }
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRe.test(email)) {
        return json({ error: 'Please provide a valid email.' }, 400)
      }
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        name: String(name).trim(),
        email: String(email).trim(),
        company: company ? String(company).trim() : '',
        message: String(message).trim(),
        createdAt: new Date().toISOString(),
      }
      await db.collection('contact_submissions').insertOne(doc)
      return json({ success: true, id: doc.id })
    }

    if (route === '/contact' && method === 'GET') {
      const db = await getDb()
      const items = await db.collection('contact_submissions')
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray()
      return json({ items })
    }

    return json({ error: 'Route not found', route, method }, 404)
  } catch (err) {
    console.error('API error:', err)
    return json({ error: 'Internal server error', detail: String(err?.message || err) }, 500)
  }
}

export const GET = handle
export const POST = handle
export const PUT = handle
export const DELETE = handle
