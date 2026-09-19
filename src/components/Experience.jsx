import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaCertificate } from 'react-icons/fa';
import Reveal from './Reveal';

const JOBS = [
  {
    role: 'Full Stack Developer (Odoo)',
    company: 'Odoo India',
    location: 'Gandhinagar, Gujarat',
    period: 'Mar 2026 – Present',
    points: [
      'Develop and customise Odoo modules using Python, XML, OWL and JavaScript to meet business requirements.',
      'Build and extend Odoo backend models, views (Form, Tree, Kanban), wizards and server actions.',
      'Design OWL-based frontend components and integrate them with Odoo\u2019s RPC layer for dynamic UI interactions.',
      'Create custom RESTful API endpoints in Odoo for third-party system integrations.',
      'Manage and optimise PostgreSQL databases; write complex SQL queries and ORM operations using Odoo\u2019s model layer.',
      'Collaborate with functional consultants to translate business workflows into technical Odoo implementations.',
      'Perform module upgrades, migrations and performance tuning across Odoo instances.',
      'Follow Agile sprint cycles; conduct code reviews and maintain Git repositories on GitHub/Bitbucket.',
    ],
  },
  {
    role: 'Java Developer',
    company: 'Mangosoft Technologies Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    period: 'Nov 2024 – Jan 2026',
    points: [
      'Developed and maintained web applications using Java, Spring Boot and RESTful APIs.',
      'Integrated frontend technologies (React.js, HTML, CSS) with backend services for a seamless user experience.',
      'Managed database operations using MySQL and PostgreSQL with Hibernate/JPA.',
      'Applied design patterns (MVC, Singleton, Factory) and participated in Agile ceremonies, code reviews and bug fixes.',
      'Worked with Core Java, Java 8 features, Spring IOC, Spring MVC, Spring Boot and RESTful Web Services.',
      'Used Git, GitHub and Bitbucket for source code management and version control.',
    ],
  },
];

const CERTS = [
  'Full Stack Developer Certification – QSpider',
  'Junior Software Developer – The American India Foundation (AIF)',
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-center text-4xl font-normal text-white md:text-6xl">
            Work <span className="text-gradient-sky">Experience</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base font-thin text-gray-400">
            Where I&apos;ve built, shipped and maintained production software.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {JOBS.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <article className="glass hover:border-sky-400/40 group h-full rounded-3xl p-6 transition-colors duration-300 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-light text-white md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-sky-300">
                      <FaBuilding size={13} />
                      {job.company}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-light text-gray-400">
                    {job.period}
                  </span>
                </div>

                <p className="mt-3 flex items-center gap-2 text-xs font-thin text-gray-500">
                  <FaMapMarkerAlt size={12} className="text-gray-600" />
                  {job.location}
                </p>

                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <FaCheckCircle
                        size={14}
                        className="mt-1 shrink-0 text-sky-400"
                      />
                      <span className="text-sm font-thin leading-relaxed text-gray-400">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-sm font-light uppercase tracking-[0.25em] text-gray-400">
              <FaCertificate size={15} className="text-sky-400" />
              Certifications
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {CERTS.map((cert) => (
                <div
                  key={cert}
                  className="star-chip glass overflow-hidden rounded-2xl px-5 py-4 text-sm font-light text-gray-300"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}