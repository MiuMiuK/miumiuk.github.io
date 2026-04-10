const navItems = [
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

export default function Navbar({ brand, onNavigate, activeItem = null, className = '' }) {
  const parts = brand.split(' ');

  return (
    <nav
      className={
        className ||
        'fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-black/10 bg-white/95 px-5 py-5 backdrop-blur md:px-16 md:py-7'
      }
    >
      <button
        type="button"
        className="cursor-pointer text-left text-[0.94rem] font-semibold uppercase leading-none tracking-[-0.03em] text-black transition md:text-[1.18rem]"
        onClick={() => onNavigate('home')}
      >
        {parts.map((part, index) => (
          <span
            key={part}
            className={
              index === parts.length - 1
                ? 'ml-[0.14em] bg-black px-[0.22em] py-[0.16em] text-[#D4FF00]'
                : 'text-black'
            }
          >
            {part}
          </span>
        ))}
      </button>

      <div className="flex flex-wrap justify-end gap-x-1 gap-y-1 text-[0.72rem] font-black tracking-[0.08em] md:gap-2 md:text-[0.95rem]">
        {navItems.map(([label, id]) => (
          <button
            key={id}
            type="button"
            onClick={() => onNavigate(id)}
            className={`rounded-full border px-3 py-1.5 uppercase transition md:px-4 md:py-2 ${
              activeItem === id
                ? 'border-[#DFE1E5] bg-[#D4FF00] text-black'
                : 'border-transparent hover:border-black/10 hover:bg-[#D4FF00] hover:text-black'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
