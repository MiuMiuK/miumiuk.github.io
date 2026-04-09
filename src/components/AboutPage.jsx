import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import PageEndBar from './PageEndBar';

const overlayTransition = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1],
};

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

function renderPoint(text) {
  const escapedPhrases = pointHighlights.map((phrase) =>
    phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = new RegExp(`(${escapedPhrases.join('|')})`, 'g');

  return text.split(pattern).filter(Boolean).map((segment, index) => (
    <span
      key={`${segment}-${index}`}
      className={pointHighlights.includes(segment) ? 'font-bold text-black' : 'font-medium text-black'}
    >
      {segment}
    </span>
  ));
}

function renderHeroParagraph(line, index) {
  return (
    <p key={index} className="text-[1.65rem] font-light leading-[2.55rem] text-[#C4C4C4] md:text-[30px] md:leading-[55px]">
      {line.map((segment, segmentIndex) => (
        <span
          key={`${segment.text}-${segmentIndex}`}
          className={segment.highlight ? 'font-bold text-[#D4FF00]' : undefined}
        >
          {segment.text}
        </span>
      ))}
    </p>
  );
}

function ActionButton({ button, onNavigate }) {
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

export default function AboutPage({
  brand,
  aboutPage,
  aboutSection,
  profileTags,
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
      {showChrome ? <Navbar brand={brand} onNavigate={onNavigate} activeItem="about" /> : null}

      <div className={showChrome ? 'pt-[72px] md:pt-[91px]' : ''}>
        <section className="border-t-[3px] border-t-[#D4FF00] bg-black">
          <div className="mx-auto max-w-[1440px] px-5 md:h-[699px] md:px-[3.75rem]">
            <div className="h-full py-[30px]">
            {showChrome ? (
              <button
                type="button"
                onClick={onBack}
                className="flex h-[43px] w-[108px] items-center justify-center gap-2 rounded-full border border-[#C2BFBF] bg-white text-[12px] font-bold text-black transition hover:border-[#D4FF00] hover:bg-[#D4FF00]"
              >
                <ArrowRight size={12} className="rotate-180" />
                <span>{aboutPage.backLabel}</span>
              </button>
            ) : null}

            <div className="mt-12 md:mt-[60px]">
              <h1 className="max-w-[1320px] text-[4.5rem] font-black uppercase leading-[0.9] tracking-[0.01em] text-white md:w-[1320px] md:text-[100px] md:leading-[90px] md:tracking-[1px]">
                {aboutPage.heroTitleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            <div className="mt-12 max-w-[82.5rem] md:mt-[60px] md:w-[1320px]">
              {aboutPage.heroParagraphs.map(renderHeroParagraph)}
            </div>
            </div>
          </div>
        </section>

        <section className="border-t-[3px] border-t-[#D4FF00] bg-white">
          <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-[30px] md:px-[3.75rem] md:pb-0 md:pt-[50px]">
            <div className="flex items-center gap-4">
              <span className="text-[2.9rem] leading-none">{aboutSection.icon}</span>
              <h2 className="text-[3.6rem] font-black tracking-[-0.06em] text-black">
                About me
              </h2>
            </div>

            <div className="mt-[50px] grid gap-12 md:grid-cols-[240px_minmax(0,1075px)] md:gap-[5.625rem]">
              <div>
                <h3 className="text-[1.35rem] font-bold tracking-[-0.03em] text-black">
                  {aboutSection.tagsTitle}
                </h3>
                <div className="mt-[15px] flex flex-wrap gap-[15px] md:flex-col md:items-start">
                  {profileTags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`whitespace-nowrap rounded-[13.6px] border px-[13px] py-[8px] text-[11px] font-bold tracking-[0.04em] ${tag.color}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="max-w-[1075px]">
                <h3 className="text-[1.35rem] font-bold tracking-[-0.03em] text-black">
                  {aboutSection.pointsTitle}
                </h3>
                <ol className="mt-[30px] space-y-4">
                  {aboutSection.points.map((point, index) => (
                    <li key={point} className="text-[16px] leading-[30px] tracking-[0.01em] text-black">
                      <span className="mr-1.5 font-semibold">{index + 1}.</span>
                      {renderPoint(point)}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-[100px] grid gap-[60px] md:grid-cols-2 md:gap-[60px]">
              {aboutPage.ctaButtons.map((button) => (
                <ActionButton key={button.label} button={button} onNavigate={onNavigate} />
              ))}
            </div>

            <div className="mt-[100px]">
              <PageEndBar
                meta={pageEndBar}
                onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
