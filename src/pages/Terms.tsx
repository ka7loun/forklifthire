import { FC } from 'react';

const Terms: FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions of Business</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600">Forklift Hire Solutions Ltd</h2>
          <p className="text-gray-600">Website: www.forklifthiresolutions.co.uk</p>
          <p className="text-gray-600">Effective Date: 5 April 2025</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Definitions</h2>
          <p className="mb-2 text-gray-700">"Company" refers to Forklift Hire Solutions Ltd, registered and operating in the United Kingdom.</p>
          <p className="mb-2 text-gray-700">"Client" refers to any individual, company, or organization engaging with the Company's services or products.</p>
          <p className="mb-2 text-gray-700">"Website" refers to the official website of Forklift Hire Solutions Ltd (www.forklifthiresolutions.co.uk).</p>
          <p className="mb-2 text-gray-700">"Equipment" includes all machinery, tools, forklifts, attachments, or accessories provided by the Company.</p>
          <p className="mb-2 text-gray-700">"Services" include but are not limited to: equipment hire, forklift operator provision, transport, sales, repairs, consultations, and related logistics.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Website Usage and Internet Terms</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">2.1 Acceptance of Terms</h3>
          <p className="mb-4 text-gray-700">By accessing or using our Website or services, you agree to comply with these Terms and all applicable laws. If you do not agree, you should not use the Website or services.</p>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">2.2 Copyright & Intellectual Property</h3>
          <p className="mb-4 text-gray-700">All content on this Website is protected under UK copyright law and is the property of Forklift Hire Solutions Ltd. No content (text, images, code, or layout) may be copied, reproduced, or redistributed without prior written permission.</p>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">2.3 Internet Law & Security</h3>
          <p className="mb-4 text-gray-700">The Company adheres to the UK Data Protection Act 2018 and the UK General Data Protection Regulation (UK GDPR). We implement robust cybersecurity measures to protect the Website and any data submitted through it. Users are prohibited from attempting to hack, spam, or disrupt any part of our site.</p>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">2.4 Misuse & Misrepresentation</h3>
          <p className="mb-4 text-gray-700">We comply with the Misrepresentation Act 1967 and The Business Protection from Misleading Marketing Regulations 2008. While we strive for accuracy in all descriptions, users should contact us for clarification if any detail is unclear or material to a decision.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Regulatory Compliance</h2>
          <p className="mb-2 text-gray-700">Our operations adhere to the following UK regulations:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Health and Safety at Work etc. Act 1974:</strong> Mandates the duty of employers to ensure the health, safety, and welfare of employees and others affected by work activities.</li>
            <li className="mb-2"><strong>Lifting Operations and Lifting Equipment Regulations 1998 (LOLER):</strong> Governs the use of lifting equipment to ensure it is safe and fit for purpose.</li>
            <li className="mb-2"><strong>Provision and Use of Work Equipment Regulations 1998 (PUWER):</strong> Requires that work equipment is suitable for intended use, safe, and maintained in a safe condition.</li>
            <li className="mb-2"><strong>Control of Vibration at Work Regulations 2005:</strong> Addresses risks from vibration, such as those associated with operating forklifts, to prevent conditions like Hand-Arm Vibration Syndrome (HAVS).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Industry Standards and Training Accreditation</h2>
          <p className="mb-2 text-gray-700">We ensure that all training and operations comply with standards set by recognized UK accrediting bodies, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-1">Road Transport Industry Training Board (RTITB)</li>
            <li className="mb-1">Independent Training Standards Scheme and Register (ITSSAR)</li>
            <li className="mb-1">Construction Industry Training Board (CITB)</li>
            <li className="mb-1">Lantra National Training Organisation Ltd. (LANTRA)</li>
            <li className="mb-1">National Plant Operators Registration Scheme (NPORS)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Scope of Services</h2>
          <p className="mb-2 text-gray-700">We provide:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-1">Forklift hire (with or without operator)</li>
            <li className="mb-1">Forklift & manual handling equipment sales</li>
            <li className="mb-1">Operator & manpower hire</li>
            <li className="mb-1">Transport, delivery & removal services</li>
            <li className="mb-1">Attachments, batteries & accessories</li>
            <li className="mb-1">Site visits, safety checks & assessments</li>
            <li className="mb-1">Emergency breakdown cover & servicing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Hire Terms</h2>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">6.1 Agreement</h3>
          <p className="mb-4 text-gray-700">All hires are subject to a written agreement confirming duration, rates, location, and delivery instructions.</p>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">6.2 Renewal</h3>
          <p className="mb-4 text-gray-700">Hires are set for agreed periods and will automatically renew every 8 hours for ongoing operations (e.g., shift work), unless otherwise agreed in writing. One week's notice is required for hire renewal, unless prearranged.</p>
          
          <h3 className="text-xl font-semibold text-gray-700 mb-2">6.3 Equipment Use</h3>
          <p className="mb-2 text-gray-700">Clients are responsible for:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-1">Safe and correct use of Equipment</li>
            <li className="mb-1">Protection against theft or misuse</li>
            <li className="mb-1">Immediate reporting of faults or incidents</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Insurance</h2>
          <p className="mb-4 text-gray-700">Hired-in Plant Insurance (HIP) is a mandatory requirement for any hire without an operator. Proof must be provided prior to delivery.</p>
          <p className="mb-4 text-gray-700">If you are hiring both the Equipment and our operator, this falls under our business insurance, and separate HIP cover is not required.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Operators / Manpower</h2>
          <p className="mb-2 text-gray-700">All operators are fully certified and comply with RTITB, ITSSAR, or equivalent standards.</p>
          <p className="mb-2 text-gray-700">A signed timesheet is required from the client or on-site representative for each shift or daily record.</p>
          <p className="mb-2 text-gray-700">Unsigned records may be deemed accepted for invoicing.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Sales Terms</h2>
          <p className="mb-2 text-gray-700">All sales are final once accepted and confirmed in writing.</p>
          <p className="mb-2 text-gray-700">We describe Equipment as accurately as possible; however, all prospective buyers are encouraged to inspect or request further details before purchasing.</p>
          <p className="mb-2 text-gray-700">Title remains with Forklift Hire Solutions Ltd until full payment is received.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Pricing & Payments</h2>
          <p className="mb-2 text-gray-700">Minimum charges will be clearly specified and agreed in advance.</p>
          <p className="mb-2 text-gray-700">All shift-based service charges are billed in 8-hour increments at the agreed rate.</p>
          <p className="mb-2 text-gray-700">All payment terms are agreed before order confirmation. A deposit is typically required to secure booking.</p>
          <p className="mb-2 text-gray-700">Late payments may result in interest, service suspension, or recovery costs.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Delivery & Collection</h2>
          <p className="mb-2 text-gray-700">The client must ensure clear and safe access for all deliveries or collections.</p>
          <p className="mb-2 text-gray-700">Waiting time or aborted visits caused by access issues may incur additional fees.</p>
          <p className="mb-2 text-gray-700">While we aim to deliver promptly, delays caused by external factors are not the Company's liability.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Cancellations & Termination</h2>
          <p className="mb-2 text-gray-700">Cancellations must be provided with at least 24 hours' notice.</p>
          <p className="mb-2 text-gray-700">Late cancellations or failed deliveries may incur full-day charges.</p>
          <p className="mb-2 text-gray-700">We reserve the right to terminate services for safety breaches, misuse, or non-payment.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Liability & Indemnity</h2>
          <p className="mb-2 text-gray-700">We are not liable for:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-1">Loss of profit, production, or contract due to delays or breakdowns</li>
            <li className="mb-1">Misuse or improper handling of Equipment</li>
            <li className="mb-1">Unauthorized repairs or modifications</li>
          </ul>
          <p className="mb-4 text-gray-700">The client agrees to indemnify us against third-party claims or legal actions arising from misuse.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">14. Complaints & Dispute Resolution</h2>
          <p className="mb-2 text-gray-700">Complaints should be submitted in writing to our head office.</p>
          <p className="mb-2 text-gray-700">We will respond within 7 working days.</p>
          <p className="mb-2 text-gray-700">Disputes unresolved by negotiation may be referred to mediation or settled under the jurisdiction of the courts of England and Wales.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
