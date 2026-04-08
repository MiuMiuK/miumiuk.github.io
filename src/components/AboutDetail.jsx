import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const pointHighlights = [
  '9+年',
  '3年设计管理',
  'SaaS 企业服务',
  '7年',
  '独立负责 0-1、1-N 的企业级项目',
  '海外项目经验',
  '0-1 构建设计系统',
  '实战经验',
  'AI 项目交互设计经验',
  'AIGC 创新大赛',
  '建设、管理设计团队',
  '迅速适应多变项目业务场景和需求',
];

function HighlightedPoint({ text }) {
  const escapedPhrases = pointHighlights.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = new RegExp(`(${escapedPhrases.join('|')})`, 'g');

  return text.split(pattern).filter(Boolean).map((segment, index) => {
    const isHighlight = pointHighlights.includes(segment);

    return (
      <span
        key={`${segment}-${index}`}
        className={isHighlight ? 'font-semibold text-[#D4FF00]' : 'text-neutral-400'}
      >
        {segment}
      </span>
    );
  });
}

export default function AboutDetail({
  aboutSection,
  profileTags,
  workExperience,
  onBack,
  isCaptureMode = false,
  preserveCaptureChrome = false,
}) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      className={
        isCaptureMode
          ? 'relative min-h-screen bg-[#050505] text-white'
          : 'fixed inset-0 z-[60] overflow-y-auto bg-[#050505] text-white'
      }
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-12">
        {isCaptureMode && !preserveCaptureChrome ? null : (
          <button
            type="button"
            onClick={onBack}
            className="fixed left-6 top-4 z-[70] flex items-center gap-2 rounded-full border border-white/12 bg-black/70 p-2 text-xs font-black uppercase tracking-widest text-white backdrop-blur transition hover:border-[#D4FF00] hover:bg-[#D4FF00] hover:text-black md:left-12 md:p-3"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back
          </button>
        )}

        <div className="mb-14 flex items-center gap-4 border-b border-white/10 pb-6">
          <span className="text-[2.2rem] leading-none md:text-[2.9rem]">{aboutSection.icon}</span>
          <div>
            <h2 className="text-[2.6rem] font-black tracking-[-0.06em] md:text-[3.6rem]">
              {aboutSection.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          <div>
            <h3 className="mb-8 text-[1.2rem] font-bold tracking-[-0.03em] text-white md:text-[1.35rem]">
              {aboutSection.tagsTitle}
            </h3>
            <div className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
              {profileTags.map((tag) => (
                <span
                  key={tag.label}
                  className={`rounded-[0.85rem] border px-3 py-2 text-[11px] font-semibold tracking-[0.04em] transition duration-300 hover:-translate-y-0.5 ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-[1.2rem] font-bold tracking-[-0.03em] text-white md:text-[1.35rem]">
              {aboutSection.pointsTitle}
            </h3>
            <div className="space-y-4">
              {aboutSection.points.map((point, index) => (
                <div
                  key={point}
                  className="grid items-start grid-cols-[1.65rem_minmax(0,1fr)] gap-0 md:grid-cols-[2rem_minmax(0,1fr)] md:gap-0"
                >
                  <span className="pt-[6px] text-left text-[1rem] font-semibold leading-none text-white md:text-[1.05rem]">
                    {index + 1}.
                  </span>
                  <p className="text-[16px] font-medium leading-[1.9] tracking-[-0.01em]">
                    <HighlightedPoint text={point} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-24 border-t border-white/10 pt-12">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-[2.2rem] leading-none md:text-[2.9rem]">💼</span>
            <h3 className="text-[2.6rem] font-black tracking-[-0.06em] md:text-[3.6rem]">
              {workExperience.title}
            </h3>
          </div>

          <div className="space-y-8">
            {workExperience.items.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="mb-8 grid gap-3 border-b border-white/10 pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                  <div>
                    <h4 className="text-2xl font-black tracking-tight">{job.company}</h4>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-neutral-400">
                      {job.role}
                    </p>
                  </div>
                  <p className="text-sm font-bold tracking-[0.18em] text-neutral-400">
                    {job.period}
                  </p>
                </div>

                {job.sections ? (
                  <div className="space-y-8">
                    {job.sections.map((section) => (
                      <section key={section.title}>
                        <h5 className="mb-4 text-lg font-black tracking-tight text-[#D4FF00]">
                          {section.title}
                        </h5>
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li
                              key={item}
                            className="text-base leading-8 text-neutral-200"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        {section.links?.length ? (
                          <div className="mt-4 flex flex-wrap gap-3">
                            {section.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-full border border-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-300 transition hover:border-[#D4FF00] hover:bg-[#D4FF00] hover:text-black"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </section>
                    ))}
                  </div>
                ) : null}

                {job.summary ? (
                  <ul className="space-y-3">
                    {job.summary.map((item) => (
                      <li key={item} className="text-base leading-8 text-neutral-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
