import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'FinU Technologies — Infrastructure for Smarter Digital Payments',
  description: 'FinU Technologies is an Indian fintech infrastructure company building API-first software that improves how money moves through digital commerce.',
  keywords: ['fintech infrastructure', 'split payment', 'payment orchestration', 'India fintech', 'checkout infrastructure', 'FinU'],
  openGraph: {
    title: 'FinU Technologies — Infrastructure for Smarter Digital Payments',
    description: 'API-first payment infrastructure for digital commerce.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
