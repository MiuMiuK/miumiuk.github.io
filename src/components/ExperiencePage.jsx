import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import PageEndBar from './PageEndBar';

const overlayTransition = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1],
};

function ExperienceActionButton({ button, onNavigate }) {
  const isPrimary = button.variant === 'primary';

  return (
    <button
      type="button"
      onClick={() => onNavigate(button.target)}
      className={`flex h-[100px] w-full items-center justify-center rounded-[3px] text-[1.25rem] font-bold text-black transition ${
        isPrimary ? 'bg-[#D4FF00] hover:bg-[#E7FF5F]' : 'bg-[#E2E2E2] hover:bg-[#D6D6D6]'
      }`}
    >
      <span className="inline-flex items-center gap-5">
        <span>{button.label}</span>
        <ArrowRight size={17} strokeWidth={2.5} />
      </span>
    </button>
  );
}

function LinkChip({ label, href }) {
  const content = (
    <span className="rounded-full border border-[#E5E7EB] px-4 py-[9px] text-[12px] font-bold uppercase leading-4 tracking-[0.2em] text-[#D4D4D4] transition hover:border-[#D4FF00] hover:text-[#D4FF00]">
      {label}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

function JobCard({ job, featured = false }) {
  return (
    <article className={`w-full rounded-[28px] border border-white/10 bg-white/[0.03] px-[33px] pb-8 pt-[33px] ${featured ? 'space-y-8' : 'space-y-8'}`}>
      <div className="grid gap-3 border-b border-white/10 pb-[25px] md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="space-y-2">
          <h3 className="text-[24px] font-black tracking-[-0.025em] text-white">{job.company}</h3>
          <p className="text-[14px] font-medium uppercase tracking-[0.24em] text-[#A3A3A3]">
            {job.role}
          </p>
        </div>
        <p className="text-[14px] font-bold tracking-[0.18em] text-[#A3A3A3]">{job.period}</p>
      </div>

      {job.sections ? (
        <div className="space-y-8">
          {job.sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <h4 className="text-[18px] font-black tracking-[-0.025em] text-[#D4FF00]">
                {section.title}
              </h4>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <p key={item} className="text-[16px] leading-8 text-[#E5E5E5]">
                    {item}
                  </p>
                ))}
              </div>
              {section.links?.length ? (
                <div className="flex flex-wrap gap-3">
                  {section.links.map((link) => (
                    <LinkChip key={link.label} label={link.label} href={link.href} />
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      ) : null}

      {job.summary ? (
        <div className="space-y-3">
          {job.summary.map((item) => (
            <p key={item} className="text-[16px] leading-8 text-[#E5E5E5]">
              {item}
            </p>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function ExperiencePage({
  brand,
  experiencePage,
  jobs,
  pageEndBar,
  onBack,
  onNavigate,
  isCaptureMode = false,
  preserveCaptureChrome = false,
}) {
  const showChrome = !isCaptureMode || preserveCaptureChrome;

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
        <section className="border-t-[3px] border-t-[#D4FF00] bg-black">
          <div className="mx-auto max-w-[1440px] px-5 pb-[90px] md:px-[3.75rem]">
            <div className="py-[30px]">
              {showChrome ? (
                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex h-[43px] items-center gap-2 rounded-full border border-[#C2BFBF] px-[16px] text-[12px] font-bold text-white transition hover:border-[#D4FF00] hover:bg-[#D4FF00] hover:text-black"
                >
                  <ArrowRight className="rotate-180" size={14} strokeWidth={2.5} />
                  <span>Back</span>
                </button>
              ) : null}
            </div>

            <div className="border-t border-white/10">
              <div className="flex items-center gap-4 border-b border-white/10 pb-[31px] pt-[30px] text-white">
                <span className="text-[46px] leading-none">{experiencePage.icon}</span>
                <h1 className="text-[57.6px] font-black leading-[1.5] tracking-[-0.06em]">
                  {experiencePage.title}
                </h1>
              </div>

              <div className="space-y-8 pt-[30px]">
                {jobs.map((job, index) => (
                  <JobCard key={`${job.company}-${job.period}`} job={job} featured={index === 0} />
                ))}
              </div>

              <div className="mt-[95px] grid gap-[60px] md:grid-cols-2 md:gap-[60px]">
                {experiencePage.ctaButtons.map((button) => (
                  <ExperienceActionButton key={button.label} button={button} onNavigate={onNavigate} />
                ))}
              </div>

              <PageEndBar
                meta={pageEndBar}
                onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                theme="dark"
              />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
