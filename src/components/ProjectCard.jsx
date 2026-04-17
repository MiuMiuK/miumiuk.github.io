import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project, onClick, index }) {
  const isClickable =
    typeof onClick === 'function' && Boolean(project.caseStudy);
  const borderClass =
    index === 0
      ? 'border-t-[3px] border-t-[#D4FF00]'
      : 'border-t border-t-black/10';
  const hasTags = (project.coverTags ?? []).length > 0;
  const Wrapper = isClickable ? 'button' : 'div';
  const wrapperProps = isClickable
    ? { type: 'button', onClick: () => onClick(project) }
    : {};

  return (
    <Wrapper
      className={`group relative block w-full overflow-hidden border-b border-b-black/10 bg-white text-left transition duration-200 ${borderClass} ${
        isClickable ? 'cursor-pointer hover:bg-black/[0.02]' : 'cursor-default'
      }`}
      {...wrapperProps}
    >
      <div className="px-0 py-8 md:grid md:h-[729px] md:grid-cols-[756px_684px] md:items-start md:gap-0 md:py-0">
        <div className="px-5 md:px-0 md:pt-[100px]">
          <div
            className="overflow-hidden transition duration-200 md:h-[529px] md:w-[756px] md:group-hover:scale-[1.01]"
            style={{ background: project.imageBackground ?? '#ffffff' }}
          >
            <img
              src={project.coverImage}
              alt={project.coverAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div
          className="px-5 md:pt-0"
          style={{ paddingTop: project.coverTopOffset ?? '149.5px' }}
        >
          <div
            className="flex flex-col gap-8 md:px-[60px]"
            style={{ gap: '60px' }}
          >
            <div
              className="space-y-6 md:space-y-0"
              style={{ gap: '20px', display: 'flex', flexDirection: 'column' }}
            >
              <p className="text-[0.7rem] font-black uppercase tracking-[0.24em] text-[#737373] md:text-[16px] md:leading-[15px] md:tracking-[4.2px]">
                {project.coverMeta}
              </p>

              <div
                className="text-black"
                style={{
                  fontFamily:
                    '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
                }}
              >
                {project.titleLines?.length ? (
                  project.titleLines.map((line) => (
                    <p
                      key={`${project.id}-${line}`}
                      className="text-[3.45rem] font-black leading-[0.93] tracking-[-0.04em] md:text-[60px] md:leading-[80px] md:tracking-[1px]"
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <h3 className="text-[3.45rem] font-black leading-[0.93] tracking-[-0.04em] md:text-[60px] md:leading-[80px] md:tracking-[1px]">
                    {project.title}
                  </h3>
                )}
              </div>

              <p
                className="max-w-[14ch] text-[1.6rem] font-medium leading-[1.5] text-[#404040] md:max-w-[564px] md:text-[20px]"
                style={{ lineHeight: project.coverSummaryLineHeight ?? '40px' }}
              >
                {project.coverSummary}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-5">
                {(project.coverTags ?? []).map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="rounded-[8px] bg-[#EDEFF2] px-[10px] py-[5px] text-[0.95rem] font-medium leading-[1.4] text-[#87888A] md:h-[38px] md:text-[14px] md:leading-[22px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 md:pt-0">
              <span
                className="inline-flex h-[42px] items-center justify-end rounded-[3px] bg-black px-[20px] py-[10px] transition duration-200 group-hover:bg-black/80"
                style={{ width: hasTags ? '144px' : '144px' }}
              >
                <span className="inline-flex items-center gap-[10px] text-center text-[14px] font-bold text-[#D4FF00] transition duration-200">
                  <span>阅读完整复盘</span>
                  <ArrowRight size={10} strokeWidth={2.5} />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
