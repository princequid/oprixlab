import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Client Inquiry Received',
      description:
        'A prospective client reaches out via our contact form, direct message, or referral. We acknowledge the inquiry promptly and gather initial details about the project.',
      deliverables: 'Inquiry acknowledgment',
    },
    {
      number: '02',
      title: 'Scope Definition & Project Pricing',
      description:
        'We work with the client to clearly define the project scope, deliverables, timeline, and budget. A formal quote or proposal is prepared and agreed upon.',
      deliverables: 'Project scope document, pricing quote',
    },
    {
      number: '03',
      title: 'Payment Secured',
      description:
        'Payment is collected in full or as a confirmed deposit before work begins. This ensures commitment from both parties and protects all involved.',
      deliverables: 'Payment confirmation',
    },
    {
      number: '04',
      title: 'Member Recommendation',
      description:
        'The Operations Manager reviews the project requirements and recommends the most suitable member from our technical pool based on skills, availability, and past performance.',
      deliverables: 'Member recommendation',
    },
    {
      number: '05',
      title: 'Executive Approval',
      description:
        'The Executive team reviews the recommended assignment and grants final approval. This ensures every project is assigned with strategic oversight and quality assurance in mind.',
      deliverables: 'Assignment approval',
    },
    {
      number: '06',
      title: 'Member Executes Project',
      description:
        'The assigned member begins work on the project under the Oprix Labs brand. Regular updates are provided to keep the client informed of progress.',
      deliverables: 'Work-in-progress updates',
    },
    {
      number: '07',
      title: 'Quality Review & Final Adjustments',
      description:
        'Before delivery, the project is reviewed internally for quality, completeness, and alignment with the agreed scope. Any necessary adjustments are made.',
      deliverables: 'Quality-reviewed deliverable',
    },
    {
      number: '08',
      title: 'Delivery to Client',
      description:
        'The completed project is delivered to the client. Final walkthrough, documentation, or handover instructions are provided as needed.',
      deliverables: 'Final delivery, handover documentation',
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-[#020c1b] text-[#8892b0] font-['Inter',system-ui,-apple-system,sans-serif] antialiased leading-relaxed">
        {/* Page Header */}
        <section className="py-16 bg-[#020c1b] pt-[120px] pb-10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h1 className="text-[3rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              How We Work
            </h1>
            <p className="text-xl leading-relaxed max-w-[600px] mx-auto text-[#8892b0]">
              A transparent, structured project flow from inquiry to delivery — with accountability at every step.
            </p>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[800px] mx-auto px-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group flex mb-12 relative"
              >
                <div
                  className="font-['Fira Code',monospace] text-6xl font-bold mr-8 leading-none text-[#112240] opacity-50 transition-all duration-300 group-hover:text-[#22d3ee] group-hover:opacity-100"
                >
                  {step.number}
                </div>
                <div
                  className="flex-1 border-l-2 border-[#112240] pl-8 pb-8 transition-colors duration-300 group-hover:border-[#22d3ee]"
                >
                  <h2 className="text-[1.75rem] font-bold leading-tight text-[#ccd6f6] mb-4">
                    {step.title}
                  </h2>
                  <p className="text-[#8892b0] mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-[#8892b0]">
                    <strong>Deliverables:</strong> {step.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Member Visibility Policy */}
        <section className="py-16 bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-6">
              Member Visibility Policy
            </h2>
            <p className="text-[#8892b0] leading-relaxed max-w-[700px]">
              Oprix Labs maintains public profiles for all active members, including their role, core
              skills, and portfolio samples. This policy promotes accountability, builds client trust,
              and ensures transparency across our curated network.
            </p>
          </div>
        </section>

        {/* Ethical & Service Limitations */}
        <section className="py-16 bg-[#020c1b]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-6">
              Ethical &amp; Service Limitations
            </h2>
            <p className="text-[#8892b0] mb-6 leading-relaxed max-w-[700px]">
              Oprix Labs is committed to lawful, ethical service delivery. The following activities
              are strictly prohibited under our operational guidelines:
            </p>
            <ul className="list-disc ml-6 text-[#8892b0] space-y-2 max-w-[700px]">
              <li>No illegal or fraudulent services of any kind</li>
              <li>No data misuse, unauthorized access, or privacy violations</li>
              <li>No impersonation of individuals, institutions, or organizations</li>
              <li>All services must remain lawful under applicable regulations</li>
            </ul>

            <div className="mt-12 max-w-[900px] space-y-10">
              <div>
                <h3 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Privacy Policy
                </h3>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  Oprix Labs collects only the information required to deliver and support client
                  services, such as contact details, project requirements, and communication records.
                </p>
                <ul className="list-disc ml-6 text-[#8892b0] space-y-2">
                  <li>Client information is used solely for project communication, delivery, and support.</li>
                  <li>We do not sell or rent personal data to third parties.</li>
                  <li>Data access is restricted to authorized team members assigned to a project.</li>
                  <li>Reasonable technical and organizational safeguards are applied to protect stored data.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold leading-tight text-[#ccd6f6] mb-4">
                  Terms of Service
                </h3>
                <p className="text-[#8892b0] mb-4 leading-relaxed">
                  By engaging Oprix Labs, clients agree to the project scope, payment terms, and
                  delivery process defined in the approved proposal or written agreement.
                </p>
                <ul className="list-disc ml-6 text-[#8892b0] space-y-2">
                  <li>Work begins only after payment confirmation according to agreed billing terms.</li>
                  <li>Clients must provide accurate project requirements and timely feedback.</li>
                  <li>Delivery timelines may be adjusted if scope changes or required inputs are delayed.</li>
                  <li>All services must be requested and used for lawful purposes only.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-[#112240]">
          <div className="max-w-[1200px] mx-auto px-8">
            <h2 className="text-[2.5rem] font-bold leading-tight text-[#ccd6f6] mb-4">
              Ready to start your project?
            </h2>
            <p className="text-[#8892b0] mb-8 leading-relaxed">
              Send us an inquiry and we'll walk you through the process from day one.
            </p>
            <Link
              to="/contact"
              className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
