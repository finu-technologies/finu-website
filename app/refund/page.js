import LegalLayout from '@/components/LegalLayout'

export const metadata = { title: 'Refund Policy — FinU Technologies' }

export default function Refund() {
  return (
    <LegalLayout title="Refund Policy" updated="June 2026">
      <h2>1. Nature of Business</h2>
      <p>FinU Technologies Private Limited is a B2B fintech infrastructure software company. We build API-first payment orchestration technology intended for use by merchants, payment gateways, financial institutions, and enterprise partners.</p>

      <h2>2. No Direct Consumer Sales</h2>
      <p>FinU does not sell products, subscriptions, or services directly to individual consumers through this website. No fees are collected from website visitors, and no consumer purchase transactions occur on this website.</p>

      <h2>3. Commercial Engagements</h2>
      <p>All commercial engagements between FinU and its business customers, partners, or pilot merchants are governed by separate written agreements. Any pricing, invoicing, refund, cancellation, or termination terms — including circumstances under which fees paid under a commercial agreement may be refundable — are set out exclusively in those individual agreements.</p>

      <h2>4. Product Status</h2>
      <p>FinU's flagship product, Split Payment Checkout Infrastructure, is currently under active development. Access to the product during development phases (including any pilot or evaluation programs) is provided under bespoke arrangements between FinU and each participating partner.</p>

      <h2>5. Payments Made in Error</h2>
      <p>In the unlikely event a payment is made to FinU in error, please contact <a href="mailto:info@finutechnologies.com">info@finutechnologies.com</a> with transaction details. Verified erroneous payments will be reversed to the originating account, subject to applicable banking timelines and verification requirements.</p>

      <h2>6. Contact</h2>
      <p>For any refund-related queries, please write to <a href="mailto:info@finutechnologies.com">info@finutechnologies.com</a>.</p>
    </LegalLayout>
  )
}
