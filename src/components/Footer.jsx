import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center md:px-8">
        <p className="text-lg font-light text-white">
          Viraj <span className="text-gradient-sky">Hole</span>
        </p>

        <div className="mt-6 flex items-center justify-center gap-5">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition-colors duration-300 hover:text-sky-300"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="mt-8 text-xs font-thin text-gray-600">
          &copy; 2026 Viraj Hole &middot; All rights reserved.
        </p>
      </div>
    </footer>
  );
}