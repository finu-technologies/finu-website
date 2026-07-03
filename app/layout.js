import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'FinU Technologies — The Missing Layer in Online Checkout',
  description: 'FinU Technologies is building split payment checkout infrastructure for India, enabling customers to complete a single online purchase using multiple payment methods while merchants continue using their existing payment stack.',
  keywords: ['fintech infrastructure', 'split payment', 'payment orchestration', 'India fintech', 'checkout infrastructure', 'FinU'],
  openGraph: {
    title: 'FinU Technologies — The Missing Layer in Online Checkout',
    description: 'Split payment checkout infrastructure for India.',
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
