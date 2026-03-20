export default function Navbar({ brand, onNavigate }) {
  const parts = brand.split(' ');

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-black/6 bg-white/88 px-6 py-5 backdrop-blur-md md:px-16 md:py-6">
      <button
        type="button"
        className="cursor-pointer text-left text-[1rem] font-semibold uppercase leading-none tracking-[-0.03em] text-black/78 transition hover:text-black md:text-[1.18rem]"
        onClick={() => onNavigate('home')}
      >
        {parts.map((part, index) => (
          <span
            key={part}
            className={
              index === parts.length - 1
                ? 'ml-[0.14em] bg-black px-[0.22em] py-[0.16em] text-[#D4FF00]'
                : 'text-black/78'
            }
          >
            {part}
          </span>
        ))}
      </button>

      <div className="flex gap-3 text-[0.85rem] font-black tracking-[0.04em] md:gap-4 md:text-[1rem]">
        <button
          type="button"
          onClick={() => onNavigate('work')}
          className="rounded-full border border-transparent px-3 py-2 transition hover:border-black/10 hover:bg-[#D4FF00] hover:text-black md:px-4"
        >
          Work
        </button>
        <button
          type="button"
          onClick={() => onNavigate('about')}
          className="rounded-full border border-transparent px-3 py-2 transition hover:border-black/10 hover:bg-[#D4FF00] hover:text-black md:px-4"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="rounded-full border border-transparent px-3 py-2 transition hover:border-black/10 hover:bg-[#D4FF00] hover:text-black md:px-4"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
