import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiDownload, FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import Aurora from './Aurora';
import CV from '../assets/virajh_CV.pdf';

const ROLES = [
  'Full Stack Developer',
  'Odoo ERP Developer',
  'Java Developer',
  'React.js Developer',
];

const SOCIALS = [
  { href: 'https://github.com/virajhole', label: 'GitHub', Icon: FaGithub },
  {
    href: 'https://www.linkedin.com/in/viraj-hole-96b00a13b',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
  },
  { href: 'https://medium.com/@viraj_hole', label: 'Medium', Icon: SiMedium },
  {
    href: 'https://www.instagram.com/viraj_hole/',
    label: 'Instagram',
    Icon: FaInstagram,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/25" />
      <Aurora />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-sm font-light uppercase tracking-[0.35em] text-sky-300"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl font-light tracking-tight text-white md:text-8xl"
        >
          Viraj Hole
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 flex h-9 items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45 }}
              className="text-xl font-thin text-sky-300 md:text-2xl"
            >
              {ROLES[index]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={CV}
            download="Viraj_Hole_Resume.pdf"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-sky-400 px-7 py-3 text-sm font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.55)]"
          >
            <FiDownload size={16} className="transition-transform duration-300 group-hover:rotate-12" />
            Download CV
            <StarBurst />
          </a>

          <a
            href="#work"
            className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-light text-white backdrop-blur-sm transition-all duration-300 hover:border-sky-400/60 hover:text-sky-300"
          >
            View My Work
            <FiArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-500 transition-colors hover:text-sky-300"
            >
              <Icon
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-20 left-1/2 z-10 -translate-x-1/2 text-gray-500 transition-colors hover:text-sky-300 md:bottom-24"
      >
        <FiArrowDown size={18} className="animate-scroll-hint" />
      </a>
    </section>
  );
}

function StarBurst() {
  const dots = [
    'left-1/2 top-0',
    'left-[15%] top-1/4',
    'right-[12%] top-1/3',
    'left-[22%] bottom-1',
    'right-[25%] bottom-0',
  ];
  return (
    <>
      {dots.map((pos, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute ${pos} h-1 w-1 rounded-full bg-sky-100 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-[-6px] group-hover:opacity-100 group-hover:drop-shadow-[0_0_6px_#7dd3fc]`}
        />
      ))}
    </>
  );
}