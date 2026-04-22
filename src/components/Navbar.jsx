import { useState } from 'react';

const navItems = [
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

export default function Navbar({
  brand,
  onNavigate,
  getHref = () => '/',
  activeItem = null,
  className = '',
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const parts = brand.split(' ');

  const handleNavigate = (id, event) => {
    setIsMobileMenuOpen(false);
    onNavigate(id, event);
  };

  return (
    <nav
      className={
        className ||
        'fixed left-0 top-0 z-50 flex h-[91px] w-full items-center border-b border-black/10 bg-white/95 px-5 py-5 backdrop-blur md:px-[60px] md:py-7'
      }
    >
      <div className="flex w-full items-center justify-between gap-4">
        <a
          href={getHref('home')}
          className="group cursor-pointer text-left text-[0.94rem] font-semibold uppercase leading-none tracking-[-0.03em] text-black transition duration-200 hover:opacity-80 md:text-[1.18rem]"
          onClick={(event) => handleNavigate('home', event)}
        >
          {parts.map((part, index) => (
            <span
              key={part}
              className={
                index === parts.length - 1
                  ? 'ml-[0.14em] bg-black px-[0.22em] py-[0.16em] text-[#D4FF00] transition duration-200 group-hover:bg-[#D4FF00] group-hover:text-black'
                  : 'text-black transition duration-200'
              }
            >
              {part}
            </span>
          ))}
        </a>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center text-black transition hover:text-black/70 md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      <div className="ml-auto hidden items-center justify-end gap-2 whitespace-nowrap text-[0.72rem] font-black tracking-[0.08em] md:flex md:text-[0.95rem]">
        {navItems.map(([label, id]) => (
          <a
            key={id}
            href={getHref(id)}
            onClick={(event) => handleNavigate(id, event)}
            aria-current={activeItem === id ? 'page' : undefined}
            className={`rounded-full border px-3 py-1.5 uppercase transition md:px-4 md:py-2 ${
              activeItem === id
                ? 'border-[#DFE1E5] bg-[#D4FF00] text-black'
                : 'border-transparent hover:border-black/10 hover:bg-[#D4FF00] hover:text-black'
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {isMobileMenuOpen ? (
        <div className="mt-4 grid gap-2 border-t border-black/10 pt-4 md:hidden">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={getHref(id)}
              onClick={(event) => handleNavigate(id, event)}
              aria-current={activeItem === id ? 'page' : undefined}
              className={`flex w-full items-center justify-between rounded-[3px] border px-4 py-3 text-left text-[0.9rem] font-black uppercase tracking-[0.08em] transition ${
                activeItem === id
                  ? 'border-[#DFE1E5] bg-[#D4FF00] text-black'
                  : 'border-black/10 bg-white text-black hover:bg-[#D4FF00]'
              }`}
            >
              <span>{label}</span>
              <span aria-hidden="true">+</span>
            </a>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
