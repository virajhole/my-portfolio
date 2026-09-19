import { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { MdWorkOutline } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';
import CV from '../assets/virajh_CV.pdf';

const LINKS = [
  { id: 'home', label: 'Home', Icon: AiOutlineHome },
  { id: 'about', label: 'About', Icon: AiOutlineUser },
  { id: 'skills', label: 'Skills', Icon: GiSkills },
  { id: 'work', label: 'Work', Icon: MdWorkOutline },
  { id: 'contact', label: 'Contact', Icon: BiMessageSquareDetail },
];

export default function NavBar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="glass flex items-center gap-1 rounded-full px-3 py-2 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
        {LINKS.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={`group relative grid h-10 w-10 place-items-center rounded-full transition-colors duration-300 ${
              active === id
                ? 'bg-sky-400/10 text-sky-400'
                : 'text-gray-400 hover:text-sky-300'
            }`}
          >
            <span className="absolute -top-8 whitespace-nowrap rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[10px] uppercase tracking-widest text-gray-300 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
              {label}
            </span>
            <Icon size={18} />
          </a>
        ))}

        <span className="mx-2 h-6 w-px bg-white/20" />

        <a
          href={CV}
          download="Viraj_Hole_Resume.pdf"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-white/5"
        >
          <FiDownload size={15} />
          Resume
        </a>
      </div>
    </nav>
  );
}