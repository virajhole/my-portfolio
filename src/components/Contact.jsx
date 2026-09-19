import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import Reveal from './Reveal';

const SERVICE_ID = 'service_c1s3n66';
const TEMPLATE_ID = 'template_etbsjfa';
const PUBLIC_KEY = 'phy_xVT5NVj3Gajf9';

export default function Contact() {
  const form = useRef(null);
  const cardRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(
        () => {
          form.current.reset();
        },
        (error) => {
          console.error('Email sending error:', error.text);
        }
      );
  };

  const handleMouseMove = (e) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    node.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <h2 className="text-center text-4xl font-normal text-white md:text-6xl">
            Let&apos;s <span className="text-gradient-sky">collaborate!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base font-thin text-gray-400">
            Have a project in mind or just want to say hello? My inbox is always
            open — based in Ahmednagar, Maharashtra, India.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 flex max-w-md flex-col gap-8">
            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:virajhole7774@gmail.com"
                className="glass group rounded-2xl p-4 text-center transition-colors duration-300 hover:border-sky-400/50"
              >
                <MdOutlineEmail
                  className="mx-auto mb-2 text-sky-400"
                  size={22}
                />
                <p className="text-xs font-medium text-white">Email</p>
                <p className="mt-1 break-all text-[10px] font-thin text-gray-500">
                  virajhole7774@gmail.com
                </p>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+917774829155"
                target="_blank"
                rel="noopener noreferrer"
                className="glass group rounded-2xl p-4 text-center transition-colors duration-300 hover:border-emerald-400/50"
              >
                <BsWhatsapp
                  className="mx-auto mb-2 text-emerald-400"
                  size={22}
                />
                <p className="text-xs font-medium text-white">WhatsApp</p>
                <p className="mt-1 text-[10px] font-thin text-gray-500">
                  +91 7774829155
                </p>
              </a>
            </div>

            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-black/70 p-8 backdrop-blur-sm"
            >
              <span className="pointer-events-none absolute left-0 top-5 h-px w-20 bg-gradient-to-r from-sky-400/40 to-transparent" />
              <span className="pointer-events-none absolute bottom-5 right-0 h-px w-20 bg-gradient-to-l from-sky-400/40 to-transparent" />

              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  backgroundImage:
                    'radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(56,189,248,0.14), transparent 60%)',
                }}
              />

              <form ref={form} onSubmit={sendEmail} className="relative space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/30"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/30"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-gray-600 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/30"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-400 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-sky-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.55)]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}