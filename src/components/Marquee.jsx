import { motion } from 'framer-motion';

export default function Marquee({ items }) {
  return (
    <div className="flex overflow-hidden whitespace-nowrap border-y-2 border-black bg-[#D4FF00] py-3">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '-50%' }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="flex text-2xl font-black uppercase tracking-tighter text-black md:text-4xl"
      >
        {[...Array(8)].map((_, groupIndex) => (
          <span key={groupIndex} className="flex items-center">
            {items.map((item) => (
              <span key={`${groupIndex}-${item}`} className="flex items-center">
                {item}
                <span className="mx-8">•</span>
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
