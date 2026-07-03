'use client'

import Link from 'next/link'
import FinULogo from '@/components/FinULogo'
import { ArrowLeft, MapPin, Mail } from 'lucide-react'

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link href="/"><FinULogo /></Link>
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-4">
          <span className="text-xs font-semibold text-amber-800 tracking-wide">LEGAL</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: {updated}</p>
        <div className="mt-10 space-y-5 text-slate-600 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:tracking-tight [&_p]:leading-relaxed [&_a]:text-amber-700 [&_a]:underline [&_a:hover]:text-amber-900 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-slate-900 [&_strong]:font-semibold">
          {children}
        </div>
      </div>
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 py-8 text-sm text-slate-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>© 2026 FinU Technologies Private Limited</div>
            <div className="flex items-center gap-3">
              <a href="mailto:info@finutechnologies.com" className="flex items-center gap-1.5 hover:text-slate-900"><Mail className="w-3.5 h-3.5" /> info@finutechnologies.com</a>
            </div>
          </div>
          <div className="mt-4 flex gap-6">
            <Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms of Use</Link>
            <Link href="/refund" className="hover:text-slate-900">Refund Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
