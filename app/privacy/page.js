import LegalLayout from '@/components/LegalLayout'

export const metadata = { title: 'Privacy Policy — FinU Technologies' }

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>FinU Technologies Private Limited ("FinU", "we", "our", "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage with us as a business partner, merchant, or enterprise customer.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Contact Information:</strong> Name, email, company name, and message content submitted through our contact form.</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited, collected via standard server logs and analytics.</li>
        <li><strong>Business Correspondence:</strong> Information you share with us during commercial discussions, pilots, or integrations.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To respond to inquiries and business proposals.</li>
        <li>To evaluate potential partnerships, pilots, and commercial engagements.</li>
        <li>To improve our website, product roadmap, and service delivery.</li>
        <li>To comply with legal, regulatory, and audit obligations.</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>FinU does not sell personal information. We may share information with trusted vendors (e.g., cloud hosting, email delivery) strictly for the purposes above, under appropriate contractual safeguards. We may disclose information where required by law or to protect rights, safety, and property.</p>

      <h2>4. Data Security</h2>
      <p>We implement industry-standard technical and organisational measures — encryption in transit, access controls, and secure infrastructure — to protect information. No system is perfectly secure; we continuously improve our controls.</p>

      <h2>5. Data Retention</h2>
      <p>We retain data only as long as necessary for the purposes described in this policy or as required by applicable Indian law.</p>

      <h2>6. Your Rights</h2>
      <p>Subject to applicable law, you may request access, correction, or deletion of your personal information by emailing <a href="mailto:info@finutechnologies.com">info@finutechnologies.com</a>.</p>

      <h2>7. Cookies</h2>
      <p>Our website may use essential cookies for functionality and anonymous analytics. You can control cookies through your browser settings.</p>

      <h2>8. Contact</h2>
      <p>Questions regarding this Privacy Policy may be directed to <a href="mailto:info@finutechnologies.com">info@finutechnologies.com</a>. FinU Technologies Private Limited is headquartered in Gorakhpur, Uttar Pradesh, India.</p>

      <h2>9. Updates</h2>
      <p>We may update this policy periodically. Material changes will be reflected on this page with a revised "Last updated" date.</p>
    </LegalLayout>
  )
}
