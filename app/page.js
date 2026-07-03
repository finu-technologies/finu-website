'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import FinULogo from '@/components/FinULogo'
import {
  ArrowRight, CheckCircle2, Zap, Shield, Layers, TrendingUp,
  Menu, X, MapPin, Mail, Sparkles, CreditCard, Smartphone, Building2, ArrowDown
} from 'lucide-react'

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#product', label: 'Product' },
    { href: '#why', label: 'Why FinU' },
    { href: '#vision', label: 'Vision' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/"><FinULogo /></Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-slate-900 transition font-medium">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-5 h-9 text-sm">Contact Us</Button>
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-slate-700 py-2">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-slate-900 text-white rounded-full">Contact Us</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section className="relative navy-bg text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #4B70E2 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 glow-pulse" />
              <span className="text-xs font-medium text-amber-300 tracking-wide">PRODUCT UNDER DEVELOPMENT</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Building Infrastructure for <span className="gold-gradient">Smarter Digital Payments</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              FinU Technologies is an Indian fintech infrastructure company building software that improves how money moves through digital commerce.
            </p>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl">
              Our first product, currently under development, enables customers to complete a single online purchase using multiple payment methods through one seamless checkout.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#product">
                <Button className="bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-full h-12 px-7 font-semibold shadow-lg shadow-amber-500/20">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="h-12 px-7 rounded-full border-slate-600 bg-white/5 text-white hover:bg-white/10 hover:text-white font-semibold">
                  Contact Us
                </Button>
              </a>
            </div>
            <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-widest text-slate-500">
              <span>API-First</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Enterprise Grade</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Made in India</span>
            </div>
          </div>

          <div className="relative float-anim">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500/60" />
            <div className="w-2 h-2 rounded-full bg-amber-500/60" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-[10px] font-mono text-slate-500">checkout.finu.io</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Order Total</span>
            <span className="font-mono text-white text-base">₹ 12,450.00</span>
          </div>

          <div className="h-px shimmer-border" />

          <div className="space-y-2 pt-2">
            <PayMethod icon={<CreditCard className="w-4 h-4" />} label="HDFC Credit Card" amount="₹ 6,000" pct="48%" />
            <PayMethod icon={<Smartphone className="w-4 h-4" />} label="UPI — @okicici" amount="₹ 4,000" pct="32%" />
            <PayMethod icon={<Building2 className="w-4 h-4" />} label="Net Banking" amount="₹ 2,450" pct="20%" />
          </div>

          <div className="pt-3 mt-3 border-t border-slate-800">
            <div className="w-full h-10 rounded-lg flex items-center justify-center text-sm font-semibold text-slate-950" style={{ background: 'linear-gradient(135deg, #F4D06F 0%, #D4AF37 60%, #B8860B 100%)' }}>
              Complete Split Payment
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border border-amber-500/30 bg-slate-900/80 backdrop-blur p-3 shadow-xl rotate-6">
        <div className="text-[9px] text-slate-500 uppercase tracking-wider">Success Rate</div>
        <div className="text-2xl font-bold gold-gradient mt-1">+18%</div>
        <div className="text-[9px] text-slate-500">projected</div>
      </div>
      <div className="absolute -bottom-6 -left-6 w-28 h-20 rounded-2xl border border-slate-700 bg-slate-900/80 backdrop-blur p-3 shadow-xl -rotate-3">
        <div className="text-[9px] text-slate-500 uppercase tracking-wider">Latency</div>
        <div className="text-lg font-bold text-white mt-1">&lt;120ms</div>
        <div className="text-[9px] text-emerald-400">● API online</div>
      </div>
    </div>
  )
}

function PayMethod({ icon, label, amount, pct }) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-800/40 border border-slate-800">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center">{icon}</div>
        <div>
          <div className="text-xs font-medium text-white">{label}</div>
          <div className="text-[10px] text-slate-500">{pct} of order</div>
        </div>
      </div>
      <div className="text-xs font-mono text-slate-300">{amount}</div>
    </div>
  )
}

function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 text-center mb-6 font-medium">Built to integrate with India's payment ecosystem</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-slate-400">
          {['Razorpay', 'Cashfree', 'Juspay', 'PayU', 'BillDesk', 'UPI'].map(p => (
            <span key={p} className="text-lg font-semibold tracking-tight opacity-70 hover:opacity-100 transition">{p}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <span className="text-xs font-semibold text-amber-800 tracking-wide">WHO WE ARE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Payment infrastructure that adapts to how customers manage money.
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            FinU Technologies builds <span className="font-semibold text-slate-900">API-first payment infrastructure</span> for digital commerce.
          </p>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Our mission is to simplify online payments through intelligent orchestration technology that integrates with existing payment ecosystems. We believe payment infrastructure should adapt to how customers manage money — not force them into rigid checkout flows.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <StatBlock label="Approach" value="API-first" />
            <StatBlock label="Focus" value="Orchestration" />
            <StatBlock label="Market" value="India" />
            <StatBlock label="Segment" value="B2B Fintech" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 dot-pattern opacity-70" />
          <div className="relative grid grid-cols-2 gap-4">
            <MiniCard title="Merchants" desc="Accept more payments, reduce failures." icon={<Building2 />} />
            <MiniCard title="Gateways" desc="Complement existing partnerships." icon={<Layers />} accent />
            <MiniCard title="Customers" desc="Pay across multiple methods, once." icon={<Smartphone />} accent />
            <MiniCard title="Enterprises" desc="Secure, scalable infrastructure." icon={<Shield />} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatBlock({ label, value }) {
  return (
    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{label}</div>
      <div className="text-lg font-bold text-slate-900 mt-1">{value}</div>
    </div>
  )
}

function MiniCard({ title, desc, icon, accent }) {
  return (
    <div className={`p-5 rounded-2xl border ${accent ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200'} shadow-sm`}>
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${accent ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-50 text-amber-700'}`}>
        {icon}
      </div>
      <div className={`font-semibold ${accent ? 'text-white' : 'text-slate-900'}`}>{title}</div>
      <div className={`text-xs mt-1 ${accent ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</div>
    </div>
  )
}

function Product() {
  return (
    <section id="product" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 mb-6">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span className="text-xs font-semibold text-amber-400 tracking-wide">OUR FLAGSHIP PRODUCT</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Split Payment Checkout <span className="gold-gradient">Infrastructure</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Enable customers to complete one online purchase using multiple payment methods such as Card + UPI, two cards, or other supported combinations. Built to integrate with merchants' existing payment gateways and checkout systems.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 glow-pulse" />
            <span className="text-xs font-semibold text-amber-800">Currently Under Development</span>
          </div>
        </div>

        <FlowDiagram />
      </div>
    </section>
  )
}

function FlowDiagram() {
  return (
    <div className="mt-8 bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-lg shadow-slate-900/5">
      <div className="grid md:grid-cols-5 gap-6 items-center">
        <FlowNode label="Customer" sub="initiates checkout" primary />

        <div className="md:col-span-3 flex flex-col gap-3">
          <div className="text-center text-[10px] uppercase tracking-widest text-slate-500 font-semibold">FinU Orchestration Layer</div>
          <div className="grid grid-cols-3 gap-3">
            <MethodBadge icon={<CreditCard className="w-4 h-4" />} label="Card" />
            <MethodBadge icon={<Smartphone className="w-4 h-4" />} label="UPI" />
            <MethodBadge icon={<Building2 className="w-4 h-4" />} label="Bank" />
          </div>
          <div className="h-px shimmer-border" />
          <div className="text-center text-[10px] text-slate-500">One transaction · Multiple rails · Single confirmation</div>
        </div>

        <FlowNode label="Merchant" sub="receives full settlement" primary />
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200">
        <IntegrationPoint step="01" title="Drop-in SDK" desc="Add split checkout to existing flows in minutes." />
        <IntegrationPoint step="02" title="Gateway Agnostic" desc="Works alongside your current payment partners." />
        <IntegrationPoint step="03" title="Reconciliation" desc="Unified settlement and reporting across methods." />
      </div>
    </div>
  )
}

function FlowNode({ label, sub, primary }) {
  return (
    <div className={`p-5 rounded-2xl text-center ${primary ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900'}`}>
      <div className="text-sm font-semibold">{label}</div>
      <div className={`text-xs mt-1 ${primary ? 'text-slate-400' : 'text-slate-500'}`}>{sub}</div>
    </div>
  )
}

function MethodBadge({ icon, label }) {
  return (
    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex flex-col items-center gap-1 text-amber-900">
      {icon}
      <span className="text-xs font-semibold">{label}</span>
    </div>
  )
}

function IntegrationPoint({ step, title, desc }) {
  return (
    <div>
      <div className="text-xs font-mono text-amber-600">{step}</div>
      <div className="mt-1 font-semibold text-slate-900">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  )
}

function WhyFinU() {
  const features = [
    { icon: TrendingUp, title: 'Better Checkout Conversion', desc: 'Recover transactions that would otherwise fail due to insufficient balance, credit limits, or single-method restrictions.' },
    { icon: Layers, title: 'Flexible Customer Experience', desc: 'Combine funds across multiple payment methods in a single, seamless checkout flow.' },
    { icon: Zap, title: 'API-First Infrastructure', desc: 'Integrates cleanly with existing payment gateways, PSPs, and checkout systems used by merchants today.' },
    { icon: Shield, title: 'Secure & Scalable', desc: 'Enterprise-grade payment orchestration designed for high-volume digital commerce.' },
  ]
  return (
    <section id="why" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <span className="text-xs font-semibold text-amber-800 tracking-wide">WHY FINU</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Infrastructure engineered for real-world commerce.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <Card key={i} className="group border-slate-200 hover:border-amber-300 transition-all hover:shadow-lg hover:shadow-amber-100/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500 transition">
                    <f.icon className="w-5 h-5 text-amber-400 group-hover:text-slate-950 transition" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section id="vision" className="py-24 lg:py-32 navy-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 mb-6">
          <span className="text-xs font-semibold text-amber-300 tracking-wide">OUR VISION</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Building the infrastructure behind <span className="gold-gradient">future digital payments</span>.
        </h2>
        <p className="mt-8 text-lg text-slate-300 leading-relaxed">
          Split Payment Checkout is our first product. Our long-term vision is to build infrastructure that simplifies how businesses accept, route and optimize digital payments.
        </p>

        <div className="mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-amber-500/40 bg-amber-500/5">
          <span className="w-2 h-2 rounded-full bg-amber-400 glow-pulse" />
          <span className="text-sm font-semibold text-white">Product Under Active Development</span>
          <span className="text-xs text-slate-400 hidden sm:inline">· Building with pilot merchants and payment partners</span>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in name, email and message.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      toast.success("Thank you — we'll be in touch shortly.")
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      toast.error(err.message || 'Failed to send. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-6">
            <span className="text-xs font-semibold text-amber-800 tracking-wide">CONTACT</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Let's build the future of payments together.
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Merchants, payment partners, banks, and enterprise teams — reach out to explore how FinU can integrate with your stack.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Email</div>
                <a href="mailto:info@finutechnologies.com" className="text-slate-900 font-medium hover:text-amber-700">info@finutechnologies.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Headquarters</div>
                <div className="text-slate-900 font-medium">Gorakhpur, Uttar Pradesh, India</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="bg-slate-50 rounded-3xl border border-slate-200 p-8 space-y-4">
          <div>
            <Label htmlFor="name" className="text-slate-700">Name *</Label>
            <Input id="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-1.5 bg-white h-11" placeholder="Your full name" />
          </div>
          <div>
            <Label htmlFor="email" className="text-slate-700">Email *</Label>
            <Input id="email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-1.5 bg-white h-11" placeholder="you@company.com" />
          </div>
          <div>
            <Label htmlFor="company" className="text-slate-700">Company</Label>
            <Input id="company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="mt-1.5 bg-white h-11" placeholder="Company name" />
          </div>
          <div>
            <Label htmlFor="message" className="text-slate-700">Message *</Label>
            <Textarea id="message" rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="mt-1.5 bg-white" placeholder="Tell us about your use case, integration needs, or partnership interest." />
          </div>
          <Button type="submit" disabled={loading} className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold">
            {loading ? 'Sending...' : (<>Send Message <ArrowRight className="w-4 h-4 ml-1" /></>)}
          </Button>
          <p className="text-xs text-slate-500 text-center pt-1">We typically respond within 1–2 business days.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="md:col-span-2">
            <FinULogo variant="light" />
            <p className="mt-5 text-sm text-slate-400 max-w-sm leading-relaxed">
              Building payment infrastructure for digital commerce. API-first orchestration technology for the next generation of Indian fintech.
            </p>
            <div className="mt-6 flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <span>Gorakhpur, Uttar Pradesh, India</span>
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm">
              <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <a href="mailto:info@finutechnologies.com" className="hover:text-white transition">info@finutechnologies.com</a>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">Company</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#product" className="hover:text-white transition">Product</a></li>
              <li><a href="#vision" className="hover:text-white transition">Vision</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">Legal</div>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">Terms of Use</Link></li>
              <li><Link href="/refund" className="hover:text-white transition">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© 2026 FinU Technologies Private Limited. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 glow-pulse" />
            <span>Fintech Infrastructure · Product Under Development</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Product />
      <WhyFinU />
      <Vision />
      <Contact />
      <Footer />
    </main>
  )
}
