import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Team() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] to-[#1a1a2e] flex flex-col items-center justify-center px-5 py-[120px]">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[#22d3ee] text-sm font-semibold uppercase tracking-[0.3em] mb-6">
            Oprix Labs
          </p>
          <h1 className="text-7xl sm:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            Coming<br />Soon
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0a192f] mx-auto rounded mb-8"></div>
          <p className="text-lg text-gray-400 mb-10">
            We're putting the finishing touches on our Team page. Check back shortly.
          </p>
          <Link
            to="/"
            className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

/* ============================================================
   ORIGINAL TEAM PAGE — uncomment when ready to go live
   ============================================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Team() {
  const leadership = [
    {
      id: 1,
      name: 'Founders',
      role: 'Foundational Architects & Vision Custodians',
      avatar: '🧭',
      responsibilities: [
        'Preserving the founding vision and purpose of Oprix Lab',
        'Providing strategic guidance when necessary',
        'Advising executive leadership when consulted',
        'Safeguarding the long-term integrity of the brand',
        'Participating in major structural or long-term strategic decisions when required',
      ],
      bio: 'Founders conceptualized and established Oprix Lab. During the trial phase they remain governance custodians but do not manage daily operations, assign projects, or directly supervise members.',
    },
    {
      id: 2,
      name: 'President',
      role: 'Operational Head & Strategic Leader',
      avatar: '⚙️',
      responsibilities: [
        'Final authority on operational decisions',
        'Oversight of client communication and project approval',
        'Approval of project assignments to members',
        'Financial oversight and payment management',
        'Quality control and final project review before delivery',
        'Protecting and managing the reputation of the Oprix Lab brand',
        'Strategic planning and operational development',
        'Final authority in internal dispute resolution',
      ],
      bio: 'Leads operational execution of Oprix Lab and ensures service quality, client trust, and strategic direction across all active functions.',
    },
    {
      id: 3,
      name: 'Vice President',
      role: 'Deputy Operational Leader & Internal Coordination Support',
      avatar: '🧩',
      responsibilities: [
        'Assisting the President in overseeing operations',
        'Coordinating internal teams when necessary',
        'Ensuring internal procedures and policies are followed',
        'Supporting monitoring of project progress and deadlines',
        'Managing internal escalation issues',
        'Acting on behalf of the President when delegated',
      ],
      bio: 'Supports operational execution by coordinating teams, reinforcing policy compliance, and acting for the President when delegated.',
    },
    {
      id: 4,
      name: 'Operations & Talent Management Team (Internal)',
      role: 'Internal Coordination, Member Management, Performance Oversight',
      avatar: '⚙️',
      responsibilities: [
        'Member onboarding and identity verification',
        'Documentation of member skills and specialties',
        'Managing internal communication channels',
        'Monitoring project timelines and deadlines',
        'Tracking member performance and reliability',
        'Recommending qualified members for project assignments',
        'Enforcing internal operational policies and standards',
      ],
      bio: 'Ensures that internal operations run smoothly and members are properly managed, verified, and coordinated for project execution.',
    },
    {
      id: 5,
      name: 'Client Acquisition Team (External)',
      role: 'Business Development & Client Sourcing',
      avatar: '📣',
      responsibilities: [
        'Lead generation and prospect identification',
        'Client outreach and networking',
        'Preparing proposals and service pitches',
        'Coordinating marketing activities',
        'Maintaining relationships with existing clients',
        'Recording and documenting incoming service inquiries',
      ],
      bio: 'Expands Oprix Lab client opportunities through outreach, proposals, and relationship management with external stakeholders.',
    },
  ];

  const members = [
    {
      id: 6,
      name: 'Members (Technical Pool)',
      role: 'Technical Professionals Responsible for Project Execution',
      avatar: '🛠️',
      skills: ['Web Development', 'Mobile Development', 'IT Support', 'Digital Systems', 'Facilitation Services'],
      services: [
        'Executing assigned projects according to defined scope',
        'Meeting agreed deadlines and project milestones',
        'Maintaining communication with internal teams',
        'Upholding confidentiality and professional ethics',
        'Following established quality and service standards',
      ],
      bio: 'Members represent the operational workforce of Oprix Lab and contribute specialized technical expertise to deliver approved client projects.',
    },
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] to-[#1a1a2e] px-5 sm:px-20 py-[60px]">
        <section className="text-center mb-20 animate-fadeInDown pt-[60px]">
          <h1 className="text-5xl sm:text-5xl font-bold text-white mb-4 tracking-[-0.025em]">
            Meet the Team
          </h1>
          <p className="text-xl text-[#22d3ee] mb-5 font-light tracking-widest">
            Collective Brilliance, Real-World Results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22d3ee] to-[#0a192f] mx-auto rounded shadow-lg shadow-[rgba(34,211,238,0.5)]"></div>
        </section>

        <section className="mb-16 max-w-7xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {leadership.map((member) => (
              <div
                key={member.id}
                className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#22d3ee]/20 rounded-xl p-7 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col min-h-[360px] group hover:border-[#22d3ee]/60 hover:shadow-lg hover:shadow-[#22d3ee]/15 hover:-translate-y-2 ${
                  expandedCard === member.id ? 'ring-2 ring-[#22d3ee]/40' : ''
                }`}
                onClick={() => toggleCard(member.id)}
              >
                <div className="absolute -top-1/2 -right-1/2 w-52 h-52 bg-gradient-radial from-[#22d3ee]/10 to-transparent rounded-full blur-3xl group-hover:top-1/4 group-hover:right-1/4 transition-all duration-600"></div>

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#22d3ee] to-[#0a192f] rounded-lg flex items-center justify-center text-5xl flex-shrink-0 shadow-lg shadow-[#22d3ee]/30">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#22d3ee] text-base font-medium">{member.role}</p>
                  </div>
                </div>

                <div
                  className={`relative z-10 flex-1 transition-all duration-500 overflow-hidden ${
                    expandedCard === member.id ? 'max-h-[1000px]' : 'max-h-20'
                  }`}
                >
                  <p className="text-gray-300 text-base leading-relaxed mb-5 italic">{member.bio}</p>

                  <div>
                    <h4 className="text-[#22d3ee] text-xs font-semibold uppercase tracking-wider mb-3">
                      Responsibilities
                    </h4>
                    <ul
                      className={`space-y-2 transition-opacity duration-500 ${
                        expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {member.responsibilities.map((r, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-center gap-3 hover:translate-x-1 transition-transform"
                        >
                          <span className="text-[#22d3ee] font-bold text-lg">•</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#22d3ee]/10 flex justify-end items-center relative z-10">
                  <span className="text-gray-500 text-xs font-medium tracking-wide group-hover:text-[#22d3ee] transition-colors">
                    {expandedCard === member.id ? '✓ Click to collapse' : '+ Click for details'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto mb-20 px-5">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Pool</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {members.map((member) => (
              <div
                key={member.id}
                className={`bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#22d3ee]/20 rounded-xl p-7 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col min-h-[400px] group hover:border-[#22d3ee]/60 hover:shadow-lg hover:shadow-[#22d3ee]/15 hover:-translate-y-2 ${
                  expandedCard === member.id ? 'ring-2 ring-[#22d3ee]/40' : ''
                }`}
                onClick={() => toggleCard(member.id)}
              >
                <div className="absolute -top-1/2 -right-1/2 w-52 h-52 bg-gradient-radial from-[#22d3ee]/10 to-transparent rounded-full blur-3xl group-hover:top-1/4 group-hover:right-1/4 transition-all duration-600"></div>

                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#22d3ee] to-[#0a192f] rounded-lg flex items-center justify-center text-5xl flex-shrink-0 shadow-lg shadow-[#22d3ee]/30">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-[#22d3ee] text-base font-medium">{member.role}</p>
                  </div>
                </div>

                <div
                  className={`relative z-10 flex-1 transition-all duration-500 overflow-hidden ${
                    expandedCard === member.id ? 'max-h-[1000px]' : 'max-h-36'
                  }`}
                >
                  <p className="text-gray-300 text-base leading-relaxed mb-5 italic">{member.bio}</p>

                  <div className="mb-5">
                    <h4 className="text-[#22d3ee] text-xs font-semibold uppercase tracking-wider mb-3">
                      Skills
                    </h4>
                    <div
                      className={`flex flex-wrap gap-2 transition-opacity duration-500 ${
                        expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-[#22d3ee]/10 text-[#22d3ee] px-4 py-2 rounded-full text-sm border border-[#22d3ee]/30 hover:bg-[#22d3ee]/20 hover:border-[#22d3ee]/60 hover:scale-105 transition-all cursor-pointer"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#22d3ee] text-xs font-semibold uppercase tracking-wider mb-3">
                      Services Offered
                    </h4>
                    <ul
                      className={`space-y-2 transition-opacity duration-500 ${
                        expandedCard === member.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {member.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-center gap-3 hover:translate-x-1 transition-transform"
                        >
                          <span className="text-[#22d3ee] font-bold text-lg">•</span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#22d3ee]/10 flex justify-between items-center relative z-10">
                  <Link
                    to="/contact"
                    onClick={(e) => e.stopPropagation()}
                    className={`btn-animated-border inline-block px-5 py-2 border-2 border-[#22d3ee] text-[#22d3ee] text-sm font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300 ${
                      expandedCard === member.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    Get In Touch
                  </Link>
                  <span className="text-gray-500 text-xs font-medium tracking-wide group-hover:text-[#22d3ee] transition-colors">
                    {expandedCard === member.id ? '✓ Click to collapse' : '+ Click for details'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 px-10 bg-gradient-to-br from-[#22d3ee]/5 to-blue-500/5 border border-[#22d3ee]/20 rounded-xl max-w-2xl mx-auto animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how Oprix Labs can help bring your project to life.
          </p>
          <Link
            to="/contact"
            className="btn-animated-border inline-block px-6 py-3 border-2 border-[#22d3ee] text-[#22d3ee] font-semibold rounded no-underline cursor-pointer hover:bg-[rgba(34,211,238,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

============================================================ */
