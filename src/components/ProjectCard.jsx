import { ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onClick, index }) {
  const isClickable = typeof onClick === 'function' && Boolean(project.caseStudy);
  const borderClass =
    index === 0 ? 'border-t-[3px] border-t-[#D4FF00]' : 'border-t border-t-black/10';
  const Wrapper = isClickable ? 'button' : 'div';
  const wrapperProps = isClickable
    ? { type: 'button', onClick: () => onClick(project) }
    : {};

  return (
    <Wrapper
      className={`group relative block w-full overflow-hidden border-b border-b-black/10 bg-white text-left ${borderClass} ${
        isClickable ? 'cursor-pointer' : 'cursor-default'
      }`}
      {...wrapperProps}
    >
      <div className="px-0 py-8 md:grid md:h-[729px] md:grid-cols-[756px_684px] md:items-start md:gap-0 md:py-0">
        <div className="px-5 md:px-0 md:pt-[100px]">
          <div
            className="overflow-hidden md:h-[529px] md:w-[756px]"
            style={{ background: project.imageBackground ?? '#ffffff' }}
          >
            <img
              src={project.coverImage}
              alt={project.coverAlt}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="px-5 md:pt-[103px]">
          <div className="flex flex-col gap-8 md:h-[523px] md:px-[60px]">
            <div className="space-y-6 md:space-y-[30px]">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#737373] md:text-[0.95rem] md:leading-[1]">
                {project.coverMeta}
              </p>

              <div className="text-black">
                {project.titleLines?.length ? (
                  project.titleLines.map((line) => (
                    <p
                      key={`${project.id}-${line}`}
                      className="text-[3.45rem] font-black leading-[0.93] tracking-[-0.04em] md:text-[5rem] md:leading-[1.125]"
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <h3 className="text-[3.45rem] font-black leading-[0.93] tracking-[-0.04em] md:text-[5rem] md:leading-[1.125]">
                    {project.title}
                  </h3>
                )}
              </div>

              <p className="max-w-[14ch] text-[1.6rem] font-medium leading-[1.28] text-[#404040] md:max-w-[564px] md:text-[2.5rem] md:leading-[1.375]">
                {project.coverSummary}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-[30px]">
                {(project.coverTags ?? []).map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="rounded-[8px] bg-[#EDEFF2] px-[10px] py-[5px] text-[0.95rem] font-semibold leading-[1.4] text-[#87888A] md:text-[1.25rem]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-[5px] pt-2 text-[1.3rem] font-semibold tracking-[0.02em] text-black md:mt-auto md:pt-0 md:text-[1.5rem]">
              <span>阅读完整复盘</span>
              <ExternalLink size={22} strokeWidth={2.2} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
