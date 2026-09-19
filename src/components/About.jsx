import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaFolderOpen } from 'react-icons/fa';
import Reveal from './Reveal';

const STATS = [
  { icon: FaBriefcase, value: '1+ Year', label: 'Experience' },
  { icon: FaGraduationCap, value: "Master's", label: 'Computer Science' },
  { icon: FaFolderOpen, value: '10+', label: 'Projects Completed' },
];

const TIMELINE = [
  {
    badge: 'Introduction',
    title: 'Career objective',
    body: 'Results-driven Full Stack Developer with hands-on experience in Java, Python, Odoo ERP, and modern web technologies. Committed to delivering scalable, high-performance applications and contributing to organisational growth through innovative and efficient software solutions.',
  },
  {
    badge: 'Experience',
    title: 'Odoo India + Mangosoft Technologies',
    body: "Full Stack Developer (Odoo) at Odoo India building custom modules with Python, XML, OWL and JavaScript — and Java Developer at Mangosoft Technologies shipping Spring Boot, React.js and RESTful backends for enterprise clients.",
  },
  {
    badge: 'Education',
    title: 'M.Sc. & B.Sc. in Computer Science',
    body: "Master of Science – Computer Science (2023) and Bachelor of Science – Computer Science (2021) from Ahmednagar College, Pune University, Ahmednagar, Maharashtra.",
  },
  {
    badge: 'Focus',
    title: 'Design, APIs & architecture',
    body: 'I design clean, modern, mobile-friendly interfaces and robust RESTful APIs — applying design patterns, Agile (Scrum) and SDLC best practices to every product I ship.',
  },
];

const CHIPS = [
  'Python',
  'Core Java',
  'Java 8',
  'Odoo 19/20',
  'OWL',
  'QWeb / XML',
  'Spring Boot',
  'Spring MVC',
  'Spring Data JPA',
  'Hibernate 5',
  'REST APIs',
  'React.js',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'JavaScript',
  'PostgreSQL',
  'MySQL',
  'Git',
  'Agile (Scrum)',
];

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="section-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black_80%)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-center text-4xl font-normal text-white md:text-6xl">
            About <span className="text-gradient-sky">Me</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base font-thin text-gray-400">
            Full Stack Developer crafting scalable applications with Java,
            Python and Odoo ERP.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 md:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <p className="text-2xl font-light leading-relaxed text-gray-200">
              Hi, I&apos;m{' '}
              <span className="text-sky-300">Viraj Vasant Hole</span> — a Full
              Stack Developer working across{' '}
              <span className="text-white">Odoo ERP</span>,{' '}
              <span className="text-white">Java &amp; Spring</span> and{' '}
              <span className="text-white">modern web technologies</span> from
              Ahmednagar, Maharashtra.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-4 text-center transition-colors duration-300 hover:border-sky-400/40"
                >
                  <Icon className="mx-auto mb-3 text-sky-400" size={20} />
                  <p className="text-sm font-medium text-white">{value}</p>
                  <p className="mt-1 text-[11px] font-thin uppercase tracking-widest text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="star-chip overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-light text-gray-300 transition-colors duration-300 hover:border-sky-400/50 hover:text-sky-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
              className="absolute bottom-2 left-[7px] top-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-sky-400 via-blue-500 to-sky-900"
            />
            <div className="absolute bottom-2 left-[7px] top-2 w-[2px] -translate-x-[1px] rounded-full bg-white/10" />

            <div className="space-y-10 pl-10">
              {TIMELINE.map((entry, i) => (
                <Reveal key={entry.title} delay={i * 0.08} className="relative">
                  <span className="absolute -left-10 top-1 h-4 w-4 rounded-full border-2 border-sky-400 bg-night shadow-[0_0_14px_rgba(56,189,248,0.5)]" />
                  <span className="glass max-w-[230px] rounded-xl px-3 py-1 text-[10px] font-light uppercase tracking-[0.25em] text-sky-300">
                    {entry.badge}
                  </span>
                  <h3 className="mt-3 text-xl font-light text-white md:text-2xl">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm font-thin leading-relaxed text-gray-400 md:text-base">
                    {entry.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}