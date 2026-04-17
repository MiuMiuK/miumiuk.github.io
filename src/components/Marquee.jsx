import { motion, useReducedMotion } from 'framer-motion';

export default function Marquee({
  items,
  className = '',
  itemClassName = '',
  duration = 24,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className={`flex overflow-hidden whitespace-nowrap border-y-[3px] border-black bg-[#D4FF00] py-3 ${className}`}
    >
      <motion.div
        initial={false}
        animate={prefersReducedMotion ? { x: 0 } : { x: '-50%' }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration, repeat: Infinity, ease: 'linear' }
        }
        className={`flex text-[1.6rem] font-black uppercase tracking-[-0.08em] text-black md:text-[2.15rem] ${itemClassName}`}
      >
        {[...Array(8)].map((_, groupIndex) => (
          <span key={groupIndex} className="flex items-center">
            {items.map((item) => (
              <span key={`${groupIndex}-${item}`} className="flex items-center">
                {item}
                <span className="mx-5 md:mx-7">•</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
