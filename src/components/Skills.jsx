import Reveal from './Reveal';
import CenterLogo from '../assets/logo.jpg';

import Design from '../assets/web-design.svg';
import WebDevelopment from '../assets/web-development.svg';
import Responsive from '../assets/responsive_.svg';
import Analytics from '../assets/analytics.svg';

import Html from '../assets/Logos/html.svg';
import Css from '../assets/Logos/css.3.svg';
import Bootstrap from '../assets/Logos/bootstrap.svg';
import Javascript from '../assets/Logos/javascript.svg';
import ReactLogo from '../assets/Logos/react.svg';
import NodeLogo from '../assets/Logos/nodejs.svg';
import Python from '../assets/Logos/python.svg';
import Java from '../assets/Logos/java.svg';
import Springboot from '../assets/Logos/springboot.svg';
import Sql from '../assets/Logos/sql.png';
import Mongodb from '../assets/Logos/mongodb.svg';
import Mongoose from '../assets/Logos/mongoose.png';
import Postman from '../assets/Logos/postman.png';
import Git from '../assets/Logos/git.svg';

const ORBIT_OUTER = [
  { logo: Html, name: 'HTML' },
  { logo: Css, name: 'CSS' },
  { logo: Bootstrap, name: 'Bootstrap' },
  { logo: Javascript, name: 'JS' },
  { logo: ReactLogo, name: 'React' },
  { logo: Python, name: 'Python' },
  { logo: NodeLogo, name: 'Node' },
];

const ORBIT_INNER = [
  { logo: Java, name: 'Java' },
  { logo: Springboot, name: 'Spring' },
  { logo: Sql, name: 'SQL' },
  { logo: Mongodb, name: 'MongoDB' },
  { logo: Mongoose, name: 'Mongoose' },
  { logo: Postman, name: 'Postman' },
  { logo: Git, name: 'Git' },
];

const SERVICES = [
  {
    icon: Design,
    title: 'Odoo ERP Development',
    color: '#38BDF8',
    text: 'Custom Odoo modules with Python, XML, QWeb, OWL & JavaScript — models, views, wizards and reports.',
  },
  {
    icon: WebDevelopment,
    title: 'Full Stack Development',
    color: '#10B981',
    text: 'Complete web applications — React.js frontends, Java/Spring & RESTful backend APIs, databases & hosting.',
  },
  {
    icon: Responsive,
    title: 'Mobile-Friendly UI',
    color: '#8B5CF6',
    text: 'Responsive layouts that make your site accessible to users on any device.',
  },
  {
    icon: Analytics,
    title: 'Web Analytics',
    color: '#F59E0B',
    text: 'Insights into who visits your site so you can make smarter business decisions.',
  },
  {
    icon: WebDevelopment,
    title: 'API Development',
    color: '#0EA5E9',
    text: 'Robust RESTful APIs built with Spring Boot, Spring MVC and Odoo\u2019s RPC layer.',
  },
];

const FRONTEND = [
  ['React.js', 5],
  ['HTML5', 5],
  ['CSS3', 5],
  ['JavaScript', 4],
  ['Bootstrap', 5],
  ['XML (QWeb)', 4],
];

const BACKEND = [
  ['Core Java / Java 8', 5],
  ['Python', 4],
  ['Spring Boot / MVC', 4],
  ['Spring Data JPA', 4],
  ['Hibernate 5', 4],
  ['RESTful Services', 5],
];

const ERP_DB = [
  ['Odoo 19 / 20', 4],
  ['OWL Framework', 3],
  ['PostgreSQL', 5],
  ['MySQL', 5],
  ['SQL / ORM', 5],
  ['Apache Tomcat', 4],
];

function OrbitalLayer({ items, radius, duration }) {
  return (
    <div
      className="absolute inset-0"
      style={{ animation: `spin-slow ${duration}s linear infinite` }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        return (
          <span
            key={item.name}
            className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-white/10 bg-black/60 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.9)] backdrop-blur"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
              animation: `spin-slow ${duration}s linear infinite reverse`,
            }}
            title={item.name}
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-6 w-6 object-contain"
            />
          </span>
        );
      })}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-center text-4xl font-normal text-white md:text-6xl">
            Skills <span className="text-gradient-sky">&amp; Tools</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base font-thin text-gray-400">
            The technologies I use every day to design, build and ship products.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass relative h-[420px] overflow-hidden rounded-2xl lg:h-[500px]">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[240px] w-[240px] rounded-full border border-white/5" />
                <div className="absolute h-[150px] w-[150px] rounded-full border border-white/5" />
              </div>

              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2">
                <OrbitalLayer items={ORBIT_OUTER} radius={138} duration={70} />
                <OrbitalLayer items={ORBIT_INNER} radius={80} duration={44} />
              </div>

              <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/90 shadow-[0_0_24px_rgba(56,189,248,0.45)]">
                <img
                  src={CenterLogo}
                  alt="Viraj Hole"
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass relative h-[420px] overflow-hidden rounded-2xl lg:h-[500px]">
              <div className="animate-scroll-up space-y-4 p-4">
                {[...SERVICES, ...SERVICES].map((s, i) => (
                  <div
                    key={`${s.title}-${i}`}
                    className="group flex items-start gap-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.05] to-transparent p-4 backdrop-blur transition-transform duration-300 hover:scale-[103%]"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl"
                      style={{ backgroundColor: `${s.color}1f` }}
                    >
                      <img
                        src={s.icon}
                        alt={s.title}
                        className="h-5 w-5 object-contain"
                      />
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-white">
                        {s.title}
                      </h4>
                      <p className="mt-1 text-xs font-thin leading-relaxed text-gray-400">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/70 to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <Proficiency title="Frontend Development" rows={FRONTEND} delay={0} />
          <Proficiency title="Backend Development" rows={BACKEND} delay={0.12} />
          <Proficiency title="ERP & Databases" rows={ERP_DB} delay={0.24} />
        </div>
      </div>
    </section>
  );
}

function Proficiency({ title, rows, delay }) {
  return (
    <Reveal delay={delay}>
      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-light text-white">{title}</h3>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
          {rows.map(([name, level]) => (
            <div key={name}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-xs font-light text-gray-300">{name}</span>
              </div>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-[5px] flex-1 rounded-full ${
                      i < level ? 'bg-sky-400' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}