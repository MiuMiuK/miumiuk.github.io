import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onClick, index }) {
  const glowPalettes = [
    'from-[#b8f15a]/0 via-[#b8f15a]/10 to-[#67c6ff]/12',
    'from-[#75d7ff]/0 via-[#75d7ff]/10 to-[#9a8cff]/12',
    'from-[#ffe96c]/0 via-[#d6ff72]/10 to-[#88d8ff]/10',
  ];
  const glowPalette = glowPalettes[index % glowPalettes.length];

  return (
    <button
      type="button"
      className="group relative isolate grid w-full cursor-pointer overflow-hidden border-y border-black/10 bg-transparent text-left transition duration-500 md:grid-cols-12"
      onClick={() => onClick(project)}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
        <div className={`absolute -left-[8%] top-[12%] h-[34%] w-[40%] rounded-full bg-gradient-to-br ${glowPalette} blur-[58px]`} />
        <div className="absolute right-[8%] top-[18%] h-[28%] w-[24%] rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_rgba(117,215,255,0.12)_42%,_transparent_72%)] blur-[42px]" />
        <div className="absolute bottom-[10%] left-[36%] h-[26%] w-[22%] rounded-full bg-[radial-gradient(circle,_rgba(212,255,0,0.12),_rgba(212,255,0,0.05)_48%,_transparent_75%)] blur-[46px]" />
      </div>

      <div className="absolute inset-0 bg-white/0 transition duration-500 group-hover:bg-white/[0.02]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-black/6 transition duration-500 group-hover:bg-black/12" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/6 transition duration-500 group-hover:bg-black/12" />

      <div className="relative z-10 flex flex-col justify-between border-b border-black/10 px-6 py-10 transition duration-500 group-hover:bg-white/66 md:col-span-5 md:min-h-[560px] md:border-b-0 md:border-r md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="mx-auto flex w-full max-w-[30rem] flex-1 flex-col justify-center">
          <div className="space-y-8 md:space-y-9">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-neutral-400">
              {project.coverMeta ?? `${project.year}｜${project.category}`}
            </p>

            <h3 className="max-w-[9.4ch] [--title-underline:#111111] text-[2.7rem] font-black leading-[1.4] tracking-[0.015em] text-black transition duration-500 group-hover:-translate-y-0.5 group-hover:[--title-underline:#D4FF00] md:text-[3.7rem]">
              <span
                className="[box-decoration-break:clone] inline px-0 pb-[0.04em] transition duration-500 group-hover:[background-size:100%_100%]"
                style={{
                  WebkitBoxDecorationBreak: 'clone',
                  backgroundImage:
                    'linear-gradient(to top, var(--title-underline) 0.3rem, transparent 0.3rem)',
                }}
              >
                {project.title}
              </span>
            </h3>

            <p className="max-w-[20rem] text-[0.98rem] font-medium leading-[1.78] text-neutral-700 md:text-[1.04rem]">
              {project.coverSummary ?? project.subtitle}
            </p>

            <div className="max-w-[23rem] space-y-4 pt-2">
              {(project.coverInfo ?? []).map(([label, value]) => (
                <div key={`${project.id}-${label}`} className="space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                    {label}
                  </p>
                  <p className="text-[0.95rem] leading-[1.68] text-neutral-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <span className="mt-10 inline-flex h-12 w-12 items-center justify-center border border-black bg-white transition duration-500 group-hover:translate-x-1 group-hover:bg-[#D4FF00]">
            <ExternalLink size={18} />
          </span>
        </div>
      </div>

      <div
        className={`relative z-10 min-h-[360px] overflow-hidden transition duration-500 md:col-span-7 md:min-h-[560px] ${project.bgClass}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_24%)] opacity-90 transition duration-500 group-hover:opacity-100" />
        <div className="absolute inset-5 overflow-hidden border border-white/28 bg-white/8 transition duration-500 group-hover:inset-4 md:inset-10 md:group-hover:inset-8">
          <img
            src={project.coverImage}
            alt={project.coverAlt}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute inset-0 bg-black/8 transition duration-500 group-hover:bg-black/4" />
        </div>

        <div className="absolute bottom-5 left-5 border border-black/90 bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-black transition duration-300 group-hover:translate-y-[-2px] md:bottom-8 md:left-8">
          {project.client}
        </div>
      </div>
    </button>
  );
}
