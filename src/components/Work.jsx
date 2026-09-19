import Reveal from './Reveal';
import IMG1 from '../assets/youtubeclone.png';
import IMG2 from '../assets/tictactoe.png';
import IMG3 from '../assets/gymwebapp.png';
import IMG4 from '../assets/library.png';
import IMG6 from '../assets/hospital.png';
import IMG5 from '../assets/portfolio.png';
import IMG7 from '../assets/food.jpg';
import EstateArt from '../assets/projects/estate.svg';
import LMSArt from '../assets/projects/lms.svg';
import AuditArt from '../assets/projects/audit.svg';

const PROJECTS = [
  {
    id: 1,
    image: IMG1,
    title: 'MyMedia — YouTube Clone App',
    category: 'Clone',
    tags: ['React', 'Material UI', 'REST API'],
    github: 'https://github.com/virajhole',
    demo: 'https://github.com/virajhole',
    wide: true,
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tic-Tac-Toe Game',
    category: 'Game',
    tags: ['React', 'JavaScript'],
    github: 'https://github.com/virajhole/Tic-Tac-Toe',
    demo: 'https://tic-tac-toe-virajhole.vercel.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Fitness Club Website',
    category: 'Web App',
    tags: ['React', 'CSS'],
    github: 'https://github.com/virajhole/Gym-Fitness-Website',
    demo: 'https://gym-fitness-website-delta.vercel.app/',
  },
  {
    id: 8,
    image: EstateArt,
    title: 'Estate Module Development',
    category: 'Odoo ERP',
    tags: ['Python', 'Odoo 19', 'PostgreSQL', 'OWL', 'XML'],
    github: 'https://github.com/virajhole',
    demo: 'https://github.com/virajhole',
  },
  {
    id: 9,
    image: LMSArt,
    title: 'LMS – Fundly.ai',
    category: 'Enterprise',
    tags: ['Java', 'Spring MVC', 'MySQL', 'Hibernate/JPA'],
    github: 'https://github.com/virajhole',
    demo: 'https://github.com/virajhole',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Hospital App',
    category: 'System',
    tags: ['Node.js', 'MongoDB'],
    github: 'https://github.com/virajhole/Hospital-App',
    demo: 'https://github.com/virajhole/Hospital-App',
  },
  {
    id: 10,
    image: AuditArt,
    title: 'NSF Audit 2.0',
    category: 'Enterprise',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs'],
    github: 'https://github.com/virajhole',
    demo: 'https://github.com/virajhole',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Personal Portfolio Web App',
    category: 'Web App',
    tags: ['React', 'Vite'],
    github: 'https://github.com/virajhole/my-portfolio',
    demo: 'https://my-portfolio-virajhole.vercel.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Library Management System',
    category: 'System',
    tags: ['Java', 'Spring Boot', 'SQL'],
    github: 'https://github.com/virajhole/Library-Management-System',
    demo: 'https://github.com/virajhole/Library-Management-System',
    wide: true,
  },
  {
    id: 7,
    image: IMG7,
    title: 'Food App',
    category: 'Web App',
    tags: ['MERN Stack'],
    github: 'https://github.com/virajhole/Food-App',
    demo: 'https://github.com/virajhole/Food-App',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-center text-4xl font-normal text-white md:text-6xl">
            Featured <span className="text-gradient-sky">Work</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base font-thin text-gray-400">
            A selection of products I&apos;ve designed, developed and shipped.
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-[16rem] grid-cols-1 gap-5 md:auto-rows-[20rem] md:grid-cols-3 md:gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.id}
              delay={(i % 3) * 0.08}
              className={project.wide ? 'md:col-span-2' : ''}
            >
              <article className="gradient-card group relative h-full rounded-[17px] p-[1.2px]">
                <div className="relative h-full overflow-hidden rounded-2xl bg-[#161617]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-900/50 via-[#161617] to-[#161617]">
                      <div className="text-center">
                        <span className="text-6xl font-thin text-sky-400/30 transition-colors duration-300 group-hover:text-sky-400/60">
                          {project.monogram}
                        </span>
                        <p className="mt-2 text-[10px] font-light uppercase tracking-[0.3em] text-gray-600">
                          Enterprise Project
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                  <span className="absolute left-4 top-4 rounded-xl border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-light uppercase tracking-[0.2em] text-white backdrop-blur-md transition-colors duration-300 group-hover:border-sky-400/60 group-hover:bg-sky-400/30 group-hover:text-sky-100">
                    {project.category}
                  </span>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="absolute right-4 top-4 grid h-9 w-9 translate-y-1 place-items-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-sky-400 hover:text-black"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-gray-600/40 bg-black/30 px-2 py-0.5 text-[10px] font-light text-gray-300 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex translate-y-2 gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-white/25 px-4 py-2 text-xs font-light text-white transition-colors hover:border-sky-400/60 hover:text-sky-300"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-sky-400 px-4 py-2 text-xs font-medium text-black transition-shadow hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}