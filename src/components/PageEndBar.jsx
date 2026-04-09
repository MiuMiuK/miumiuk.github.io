export default function PageEndBar({ meta, onBackToTop, theme = 'light' }) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`flex h-[100px] items-center justify-between border-t px-0 ${
        isDark ? 'border-white/10' : 'border-[#DFE1E5]'
      }`}
    >
      <p className="text-[12px] font-black uppercase tracking-[0.35em] text-[#737373]">
        {meta.copyright}
      </p>
      <button
        type="button"
        onClick={onBackToTop}
        className="inline-flex items-center gap-[10px] text-[12px] font-black uppercase tracking-[0.35em] text-[#737373] transition hover:text-black"
      >
        <span>{meta.backToTop}</span>
        <span aria-hidden="true">↑</span>
      </button>
    </div>
  );
}
