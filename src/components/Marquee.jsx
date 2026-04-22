export default function Marquee({
  items,
  className = '',
  itemClassName = '',
  duration = 24,
}) {
  const repeatedItems = [...items, ...items];

  return (
    <div
      className={`flex overflow-hidden whitespace-nowrap border-y-[3px] border-black bg-[#D4FF00] py-3 ${className}`}
    >
      <div
        className={`marquee-track flex min-w-max items-center text-[1.6rem] font-black uppercase tracking-[-0.08em] text-black md:text-[2.15rem] ${itemClassName}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[0, 1].map((groupIndex) => (
          <span
            key={groupIndex}
            className="flex shrink-0 items-center"
            aria-hidden={groupIndex === 1}
          >
            {repeatedItems.map((item, itemIndex) => (
              <span
                key={`${groupIndex}-${item}-${itemIndex}`}
                className="flex items-center"
              >
                {item}
                <span className="mx-5 md:mx-7">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
