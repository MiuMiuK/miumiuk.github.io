import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import PageEndBar from './PageEndBar';

const overlayTransition = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1],
};

const heroHighlights = [
  '9+ 年',
  '擅长企业级产品体验设计、设计系统搭建、复杂流程梳理与国际化适配',
];

function ExperienceActionButton({ button, onNavigate }) {
  const isPrimary = button.variant === 'primary';
  const isDark = button.variant === 'secondary-dark';

  return (
    <button
      type="button"
      onClick={() => onNavigate(button.target)}
      className={`flex h-[100px] w-full items-center justify-center rounded-[3px] text-[1.25rem] font-bold transition ${
        isPrimary
          ? 'bg-[#D4FF00] text-black hover:bg-[#E7FF5F]'
          : isDark
            ? 'bg-black text-[#D4FF00] hover:bg-neutral-900'
            : 'bg-[#E2E2E2] text-black hover:bg-[#D6D6D6]'
      }`}
    >
      <span className="inline-flex items-center gap-5">
        {isDark ? <ArrowRight className="rotate-180" size={17} strokeWidth={2.5} /> : null}
        <span>{button.label}</span>
        {isDark ? null : <ArrowRight size={17} strokeWidth={2.5} />}
      </span>
    </button>
  );
}

function TagChip({ label }) {
  return (
    <span className="inline-flex items-center rounded-[3px] border-2 border-black bg-white px-5 py-2 text-[16px] font-bold leading-6 text-black">
      {label}
    </span>
  );
}

function FeaturedJobArticle({ job }) {
  return (
    <article className="w-full space-y-8 pb-[50px] pt-[50px]">
      <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="space-y-[15px]">
          <div className="space-y-[15px]">
            <h3 className="text-[30px] font-black leading-8 tracking-[-0.02em] text-black">
              {job.company}（ONES）
            </h3>
            <p className="text-[20px] font-medium uppercase leading-5 tracking-[0.168em] text-black">
              {job.role}
            </p>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {job.badges?.map((badge) => (
              <TagChip key={badge} label={badge} />
            ))}
          </div>
        </div>
        <p className="pt-[6px] text-[14px] font-bold tracking-[0.14em] text-black">{job.period}</p>
      </div>

      <div className="space-y-8">
        {job.sections?.map((section) => (
          <section key={section.title} className="space-y-4">
            <h4 className="text-[18px] font-black leading-7 tracking-[-0.025em] text-black">
              {section.title}
            </h4>
            <ul className="space-y-[10px]">
              {section.items.map((item) => (
                <li key={item} className="ml-6 list-disc text-[16px] leading-8 text-black">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}

function CompactJobArticle({ job }) {
  return (
    <article className="w-full border-t-2 border-black py-[50px]">
      <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
        <div className="space-y-[15px]">
          <div className="space-y-[15px]">
            <h3 className="text-[30px] font-black leading-8 tracking-[-0.02em] text-black">
              {job.company}
            </h3>
            <p className="text-[20px] font-medium uppercase leading-5 tracking-[0.168em] text-black">
              {job.role}
            </p>
          </div>
          <div className="flex flex-wrap gap-[10px]">
            {job.badges?.map((badge) => (
              <TagChip key={badge} label={badge} />
            ))}
          </div>
        </div>
        <p className="pt-[6px] text-[14px] font-bold tracking-[0.14em] text-black">{job.period}</p>
      </div>

      {job.sections ? (
        <div className="space-y-4">
          {job.sections.map((section) => (
            <section key={section.title} className="space-y-[5px]">
              <h4 className="text-[18px] font-black leading-7 tracking-[-0.025em] text-black">
                {section.title}
              </h4>
              <ul className="space-y-[10px]">
                {section.items.map((item) => (
                  <li key={item} className="ml-6 list-disc text-[16px] leading-8 text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : null}

      {job.summary ? (
        <div className="space-y-[5px]">
          {job.summary.map((item) => (
            <section key={item} className="space-y-[5px]">
              <ul className="space-y-[10px]">
                <li className="ml-6 list-disc text-[16px] leading-8 text-black">{item}</li>
              </ul>
            </section>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ExperiencePage({
  brand,
  heroSection,
  experiencePage,
  jobs,
  pageEndBar,
  onBack,
  onNavigate,
  isCaptureMode = false,
  preserveCaptureChrome = false,
}) {
  const showChrome = !isCaptureMode || preserveCaptureChrome;

  const renderHighlightedIntro = (text) => {
    const escapedPhrases = heroHighlights.map((phrase) =>
      phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const pattern = new RegExp(`(${escapedPhrases.join('|')})`, 'gi');

    return text.split(pattern).filter(Boolean).map((segment, index) => {
      const isHighlight = heroHighlights.some(
        (phrase) => phrase.toLowerCase() === segment.toLowerCase()
      );

      if (isHighlight) {
        return (
          <mark
            key={`${segment}-${index}`}
            className="rounded-[0.2rem] bg-[#D4FF00]/85 px-1 py-[0.08rem] font-semibold text-black"
          >
            {segment}
          </mark>
        );
      }

      return <span key={`${segment}-${index}`}>{segment}</span>;
    });
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={overlayTransition}
      className={
        isCaptureMode
          ? 'relative min-h-screen bg-white text-black'
          : 'fixed inset-0 z-[60] overflow-y-auto bg-white text-black'
      }
    >
      {showChrome ? <Navbar brand={brand} onNavigate={onNavigate} activeItem="experience" /> : null}

      <div className={showChrome ? 'pt-[72px] md:pt-[91px]' : ''}>
        {showChrome ? (
          <button
            type="button"
            onClick={onBack}
            className="fixed left-5 top-[6.5rem] z-[70] flex h-[43px] w-[108px] items-center justify-center gap-2 rounded-full border border-[#c2bfbf] bg-white px-[16px] text-[12px] font-bold text-black transition hover:border-[#D4FF00] hover:bg-[#D4FF00] md:left-[3.75rem] md:top-[121px]"
          >
            <ArrowRight className="rotate-180" size={14} strokeWidth={2.5} />
            <span>Back</span>
          </button>
        ) : null}

        <section className="bg-white">
          <div className="mx-auto max-w-[1440px] px-5 md:px-[3.75rem]">
            <div className="h-[103px]" />

            <div className="flex flex-col gap-[50px] pb-[100px]">
              <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-[65px]">
                <div className="w-full md:w-[674px]">
                  <h1 className="text-[4.5rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-black md:text-[10rem] md:leading-[0.83]">
                    {heroSection.name.split(' ').map((part) => (
                      <span key={part} className="inline-block">
                        {part}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="h-36 w-36 overflow-hidden rounded-full border-[4px] border-black bg-[#F5F5F5] p-1 md:h-44 md:w-44">
                  <img
                    src={heroSection.portrait}
                    alt={heroSection.portraitAlt}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-[6px_1033px] md:gap-8">
                <div className="hidden rounded-full bg-[#D4FF00] md:block md:h-[161px]" />
                <div className="space-y-4">
                  {heroSection.intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-[65rem] text-[1rem] font-medium leading-[1.95] tracking-[-0.01em] text-neutral-800 md:text-[1.28rem] md:leading-[1.58]"
                    >
                      {renderHighlightedIntro(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="border-y-2 border-black bg-[#D4FF00]">
            <div className="mx-auto flex h-[68px] max-w-[1440px] items-start px-5 pb-[2px] pt-[14px] md:px-[3.75rem]">
              <p className="text-[1.75rem] font-black uppercase leading-10 tracking-[-0.05em] text-black md:text-[2.25rem]">
                {experiencePage.barTitle}
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-[1440px] px-5 md:px-[3.75rem]">
            <div>
              {jobs.map((job, index) =>
                index === 0 ? (
                  <FeaturedJobArticle key={`${job.company}-${job.period}`} job={job} />
                ) : (
                  <CompactJobArticle key={`${job.company}-${job.period}`} job={job} />
                )
              )}
            </div>

            <div className="grid gap-[60px] pb-[100px] pt-[50px] md:grid-cols-2 md:gap-[60px]">
              {experiencePage.ctaButtons.map((button) => (
                <ExperienceActionButton key={button.label} button={button} onNavigate={onNavigate} />
              ))}
            </div>

            <PageEndBar
              meta={pageEndBar}
              onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              theme="light"
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
