import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/siteContent';
import Navbar from './Navbar';

const overlayTransition = {
  duration: 0.34,
  ease: [0.22, 1, 0.36, 1],
};

const contentTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.04,
};

function NextProjectBlock({ project, onOpenProject }) {
  if (!project) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => onOpenProject(project)}
      className="flex min-h-[205px] w-full flex-col rounded-[32px] border border-black/10 bg-white px-[30px] py-[30px] text-left transition hover:border-[#D4FF00] hover:bg-[#D4FF00]/10"
    >
      <p
        className="text-[10px] font-black uppercase leading-[15px] tracking-[3.5px] text-[#A3A3A3]"
        style={{
          fontFamily:
            '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
        }}
      >
        Next Project
      </p>
      <h3
        className="text-[30px] font-black leading-[48px] tracking-[1px] text-black"
        style={{
          fontFamily:
            '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
        }}
      >
        {project.title}
      </h3>
      <p className="mt-[10px] text-[14px] leading-[32px] text-[#525252]">
        {project.coverSummary}
      </p>
      <div
        className="mt-5 inline-flex items-center gap-3 text-[14px] font-black uppercase leading-5 tracking-[3.08px] text-black"
        style={{
          fontFamily:
            '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
        }}
      >
        <span>View Project</span>
        <ArrowRight size={16} />
      </div>
    </button>
  );
}

function FigureBlock({ block }) {
  const isPlaceholder =
    block.kind === 'motion-placeholder' || block.kind === 'placeholder';
  const isVideo =
    block.kind === 'motion-placeholder' ||
    block.src?.endsWith('.mp4') ||
    block.src?.endsWith('.mov') ||
    block.src?.endsWith('.webm');
  const captionLines =
    typeof block.caption === 'string'
      ? block.caption.split('\n').filter(Boolean)
      : [];
  const figureStyle = block.height
    ? { height: `${block.height}px` }
    : undefined;
  const figureAspectRatio = block.aspectRatio
    ? { aspectRatio: block.aspectRatio }
    : undefined;
  const shouldFillFrame = Boolean(block.height || block.aspectRatio);
  const imageClassName = shouldFillFrame
    ? 'h-full w-full object-cover'
    : 'h-auto w-full object-cover';

  return (
    <figure className="space-y-3">
      {isPlaceholder ? (
        <div
          className="w-full overflow-hidden bg-[#EDEFF2]"
          style={{ ...figureAspectRatio, ...figureStyle }}
        >
          {isVideo && block.src ? (
            <video
              src={block.src}
              aria-label={block.alt}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className={imageClassName}
            />
          ) : block.src ? (
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              decoding="async"
              className={`${imageClassName} opacity-0`}
            />
          ) : null}
        </div>
      ) : (
        <div
          className="overflow-hidden bg-white"
          style={{ ...figureAspectRatio, ...figureStyle }}
        >
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
            className={imageClassName}
          />
        </div>
      )}
      <figcaption className="space-y-[5px] text-[14px] leading-6 text-[#737373]">
        {captionLines.length > 1 ? (
          captionLines.map((line) => <p key={line}>{line}</p>)
        ) : (
          <p>{block.caption}</p>
        )}
      </figcaption>
    </figure>
  );
}

function HighlightSideCard({
  children,
  className = '',
  contentClassName = 'px-[20px] py-[18px] pl-[30px] md:px-[24px] md:py-[22px] md:pl-[36px]',
  barClassName = '',
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[8px] border border-[#E6E7EB] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04)] ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-[6px] bg-[#D5FF02] ${barClassName}`}
      />
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

function ContentBlock({ block, projectId }) {
  const isWorkItemRefactor = projectId === 'spotify-live';

  if (block.type === 'html') {
    const paragraphGapClass = block.paragraphGapClass ?? '[&_p+p]:mt-[5px]';
    const paragraphClass =
      block.paragraphClass ??
      '[&_p]:text-[16px] [&_p]:leading-[24px] [&_p]:text-black';
    const strongClass =
      block.strongClass ?? '[&_strong]:font-bold [&_strong]:text-black';
    const emClass =
      block.emClass ?? '[&_em]:font-medium [&_em]:italic [&_em]:text-[#404040]';
    const ulClass =
      block.ulClass ??
      '[&_ul]:my-0 [&_ul]:pl-6 [&_ul]:text-[16px] [&_ul]:leading-[24px] [&_li+li]:mt-0';

    return (
      <div
        className={`${block.className ?? ''} [&_p]:m-0 ${paragraphGapClass} ${paragraphClass} ${strongClass} ${emClass} ${ulClass}`}
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  }

  if (block.type === 'callout') {
    const tone =
      block.variant === 'danger'
        ? 'border-red bg-[rgba(255,0,0,0.1)]'
        : 'border-[#D4FF00]/35 bg-[rgba(212,255,0,0.1)]';
    const textClassName = isWorkItemRefactor
      ? 'max-w-none text-[16px] leading-[30px] text-[#404040] [&_p]:my-0 [&_p+p]:mt-0 [&_p]:text-[16px] [&_p]:leading-[30px] [&_p]:text-[#404040] [&_strong]:font-bold [&_strong]:text-[#404040] [&_em]:font-medium [&_em]:italic [&_em]:text-[#404040] [&_ol]:my-0 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-[16px] [&_ol]:text-[#404040] [&_li]:leading-[30px] [&_li]:marker:text-[#404040] [&_li]:marker:font-normal'
      : 'max-w-none text-[16px] leading-[24px] text-[#404040] [&_p]:my-0 [&_p+p]:mt-0 [&_p]:text-[16px] [&_p]:leading-[24px] [&_p]:text-[#404040] [&_strong]:font-bold [&_strong]:text-[#404040] [&_em]:font-medium [&_em]:italic [&_em]:text-[#404040] [&_ol]:my-0 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-[16px] [&_ol]:text-[#404040] [&_li]:leading-[24px] [&_li]:marker:text-[#404040] [&_li]:marker:font-normal';

    return (
      <div className={`rounded-[16px] border px-[21px] py-5 ${tone}`}>
        <div
          className={`flex items-start ${isWorkItemRefactor ? 'gap-3' : 'gap-3'}`}
        >
          <div className="flex h-[30px] w-[30px] shrink-0 items-start justify-center pt-[2px] text-[24px] leading-none text-black">
            <span aria-hidden="true">{block.icon}</span>
          </div>
          <div className="min-w-0 flex-1">
            <div
              className={textClassName}
              dangerouslySetInnerHTML={{ __html: block.html }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (block.type === 'keyConflictsCard') {
    return (
      <div className="space-y-[10px]">
        <p className="text-[16px] leading-[24px] text-black">{block.intro}</p>
        <HighlightSideCard>
          <div className="space-y-[4px] md:space-y-[6px]">
            {block.items.map((item) => (
              <p
                key={item.title}
                className="text-[16px] leading-[24px] tracking-[-0.01em] text-[#222222]"
              >
                <strong className="font-bold text-black">{item.title}</strong>
                <span className="px-1 text-[#333333]">{'→'}</span>
                <span className="text-[#3F3F46]">{item.detail}</span>
              </p>
            ))}
          </div>
        </HighlightSideCard>
      </div>
    );
  }

  if (block.type === 'insightListCard') {
    return (
      <HighlightSideCard>
        <div className="space-y-0">
          <ol className="list-decimal space-y-0 pl-5 text-[16px] text-black marker:font-normal marker:text-black">
            {block.items.map((item) => (
              <li key={item.title} className="leading-[24px]">
                <strong className="font-bold text-black">{item.title}</strong>
                <span>{` → ${item.detail}`}</span>
              </li>
            ))}
          </ol>
        </div>
      </HighlightSideCard>
    );
  }

  if (block.type === 'goalListCard') {
    return (
      <HighlightSideCard contentClassName="px-[20px] py-[18px] pl-[30px] md:px-[24px] md:py-[22px] md:pl-[36px]">
        <div className="space-y-[4px] text-[16px] text-black">
          <p className="font-bold leading-[24px] text-black">{block.title}</p>
          {block.items.map((item) => (
            <p key={item} className="leading-[24px] text-[#404040]">
              {item}
            </p>
          ))}
        </div>
      </HighlightSideCard>
    );
  }

  if (block.type === 'numberedCard') {
    return (
      <HighlightSideCard>
        <div className={block.compact ? 'space-y-2' : 'space-y-3'}>
          <h4 className="text-[16px] font-bold leading-[24px] text-black">
            {block.number} {block.title}
          </h4>

          <div className={`space-y-[6px] ${block.compact ? '' : 'pl-[12px]'}`}>
            {block.highlight ? (
              <p className="text-[16px] leading-[24px] text-black">
                {block.highlight.includes('：') ? (
                  <>
                    {block.highlight.split('：')[0]}：
                    <strong>
                      {block.highlight.split('：').slice(1).join('：')}
                    </strong>
                  </>
                ) : (
                  <strong>{block.highlight}</strong>
                )}
              </p>
            ) : null}

            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[16px] leading-[24px] text-black"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {block.badge ? (
            <div className={block.compact ? '' : 'pl-[12px]'}>
              <span className="inline-flex items-center rounded-[13.6px] border border-[#DAFF26] bg-[#F5FFC3] px-[13px] py-2 text-[16px] font-bold leading-5 tracking-[0.44px] text-black">
                {block.badge}
              </span>
            </div>
          ) : null}
        </div>
      </HighlightSideCard>
    );
  }

  if (block.type === 'sectionTitle') {
    return (
      <h4
        className="text-[20px] font-black leading-7 tracking-[-0.5px] text-black"
        style={{
          fontFamily:
            '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
        }}
      >
        {block.text}
      </h4>
    );
  }

  if (block.type === 'figure') {
    return <FigureBlock block={block} />;
  }

  if (block.type === 'list') {
    if (block.ordered) {
      return (
        <ol className="space-y-[5px] pl-6 text-[16px] leading-8 text-[#404040]">
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ol>
      );
    }

    return (
      <ul className="space-y-2 text-[1rem] leading-8 text-neutral-700">
        {block.items.map((item, index) => (
          <li key={`${item}-${index}`} className="flex gap-3">
            <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === 'meta') {
    return (
      <div className="grid gap-y-4 rounded-[16px] border border-black/10 bg-[rgba(255,255,255,0.65)] p-6 md:grid-cols-2 md:gap-x-10">
        {block.items.map(([label, value]) => (
          <div key={label} className="space-y-2">
            <p
              className="text-[10px] font-black uppercase leading-[15px] tracking-[3.2px] text-[#A3A3A3]"
              style={{
                fontFamily:
                  '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
              }}
            >
              {label}
            </p>
            <p className="text-[16px] leading-7 text-[#404040]">{value}</p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === 'textLines') {
    return (
      <div className="space-y-[5px] text-[16px] leading-8 text-[#404040]">
        {block.itemsTitle ? (
          <p className="leading-[24px] text-black">{block.itemsTitle}</p>
        ) : null}
        {block.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }

  if (block.type === 'table') {
    if (isWorkItemRefactor) {
      return (
        <div className="overflow-x-auto rounded-[32px] border border-black/10 bg-white">
          <table className="min-w-full border-collapse text-left">
            <thead className="bg-black/[0.03]">
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-black/10 px-7 py-6 text-[14px] font-black leading-[20px] text-[#737373]"
                    style={{
                      fontFamily:
                        '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`${rowIndex}-${row[0]}`} className="align-top">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className={`px-7 py-7 text-[14px] leading-[24px] text-[#525252] ${
                        rowIndex === block.rows.length - 1
                          ? ''
                          : 'border-b border-black/10'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto rounded-[16px] border border-black/10 bg-[rgba(255,255,255,0.75)]">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-black/[0.03]">
            <tr>
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-black/10 px-4 py-3 text-[14px] font-black leading-5 text-[#737373]"
                  style={{
                    fontFamily:
                      '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${rowIndex}-${row[0]}`} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${rowIndex}-${cellIndex}`}
                    className="border-b border-black/10 px-4 py-4 text-[14px] leading-7 text-[#404040]"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (block.type === 'details') {
    if (isWorkItemRefactor) {
      return (
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center gap-2 text-[14px] font-black leading-5 tracking-[0.64px] text-black transition duration-200 hover:text-[#737373] [&::-webkit-details-marker]:hidden">
            <ArrowRight
              size={14}
              className="transition duration-200 group-open:rotate-90"
            />
            <span>{block.summary}</span>
          </summary>
          <div className="mt-[14px] space-y-[14px]">
            {block.blocks.map((child, index) => (
              <ContentBlock
                key={`${block.summary}-${index}`}
                block={child}
                projectId={projectId}
              />
            ))}
          </div>
        </details>
      );
    }

    return (
      <details className="rounded-2xl border border-black/10 bg-white p-5">
        <summary className="cursor-pointer list-none text-[16px] leading-5 text-black transition duration-200 hover:text-[#737373]">
          {block.summary}
        </summary>
        <div className="mt-5 space-y-5">
          {block.blocks.map((child, index) => (
            <ContentBlock
              key={`${block.summary}-${index}`}
              block={child}
              projectId={projectId}
            />
          ))}
        </div>
      </details>
    );
  }

  return null;
}

function Outline({ outline, activeOutlineId, onNavigate, mobile = false }) {
  return (
    <div
      className={
        mobile
          ? 'rounded-2xl border border-black/10 bg-white p-5'
          : 'w-[276px] pl-[20px]'
      }
    >
      {mobile ? (
        <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-neutral-400">
          Outline
        </p>
      ) : null}
      <nav className={mobile ? 'space-y-4' : 'space-y-[5px]'}>
        {outline.map((item) => (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`block w-full text-left transition ${
                activeOutlineId === item.id ||
                item.children.some((child) => child.id === activeOutlineId)
                  ? mobile
                    ? 'text-black text-sm font-bold leading-6'
                    : 'font-bold text-[14px] leading-[30px] tracking-[1px] text-black'
                  : mobile
                    ? 'text-neutral-600 text-sm font-bold leading-6 hover:text-black'
                    : 'font-bold text-[14px] leading-[30px] tracking-[1px] text-black hover:text-[#737373]'
              }`}
            >
              {item.title}
            </button>
            {item.children.length ? (
              <div
                className={
                  mobile
                    ? 'mt-2 space-y-2 border-l border-neutral-200 pl-3'
                    : 'mt-[5px] border-l border-[#dfe1e5] pl-[10px]'
                }
              >
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    type="button"
                    onClick={() => onNavigate(child.id)}
                    className={`block w-full text-left transition ${
                      activeOutlineId === child.id
                        ? mobile
                          ? 'text-xs font-semibold leading-5 text-black'
                          : 'text-[14px] leading-[30px] text-black'
                        : mobile
                          ? 'text-xs leading-5 text-neutral-500 hover:text-black'
                          : 'text-[14px] leading-[30px] text-[#505050] hover:text-black'
                    }`}
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default function ProjectDetail({
  brand,
  project,
  onBack,
  onOpenProject,
  onNavigate,
  isCaptureMode = false,
  preserveCaptureChrome = false,
}) {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const showChrome = !isCaptureMode || preserveCaptureChrome;
  const desktopOutlineStyle = {
    top: showChrome ? '121px' : '30px',
    left: 'max(20px, calc(50vw - 720px + 1144px))',
    width: '276px',
    maxHeight: showChrome ? 'calc(100vh - 141px)' : 'calc(100vh - 70px)',
  };
  const currentProjectIndex = projects.findIndex(
    (item) => item.id === project.id
  );
  const nextProject =
    currentProjectIndex === -1
      ? null
      : projects[(currentProjectIndex + 1) % projects.length];

  const outline = useMemo(
    () =>
      project.caseStudy.blocks
        .filter((block) => block.type === 'chapter')
        .map((block, chapterIndex) => ({
          id: `case-chapter-${chapterIndex}`,
          title: block.title,
          children: block.blocks
            .filter((child) => child.type === 'subchapter')
            .map((child, childIndex) => ({
              id: `case-chapter-${chapterIndex}-sub-${childIndex}`,
              title: child.title,
            })),
        })),
    [project.caseStudy.blocks]
  );

  const [activeOutlineId, setActiveOutlineId] = useState(outline[0]?.id ?? '');
  const shellMotionProps = prefersReducedMotion
    ? {
        initial: false,
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: overlayTransition,
      };
  const contentMotionProps = prefersReducedMotion
    ? {
        initial: false,
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 18, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        exit: { opacity: 0, y: 12, filter: 'blur(8px)' },
        transition: contentTransition,
      };

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !outline.length) {
      return;
    }

    const targetIds = outline.flatMap((item) => [
      item.id,
      ...item.children.map((child) => child.id),
    ]);

    const updateActiveOutline = () => {
      let currentId = outline[0].id;

      targetIds.forEach((id) => {
        const element = document.getElementById(id);

        if (!element) {
          return;
        }

        const { top } = element.getBoundingClientRect();

        if (top <= 160) {
          currentId = id;
        }
      });

      setActiveOutlineId(currentId);
    };

    updateActiveOutline();
    container.addEventListener('scroll', updateActiveOutline, {
      passive: true,
    });
    window.addEventListener('scroll', updateActiveOutline, { passive: true });

    return () => {
      container.removeEventListener('scroll', updateActiveOutline);
      window.removeEventListener('scroll', updateActiveOutline);
    };
  }, [outline]);

  const handleOutlineNavigate = (targetId) => {
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={shellMotionProps.initial}
      animate={shellMotionProps.animate}
      exit={shellMotionProps.exit}
      transition={shellMotionProps.transition}
      className={
        isCaptureMode
          ? 'relative min-h-screen bg-white'
          : 'fixed inset-0 z-[60] overflow-y-auto bg-white'
      }
    >
      {showChrome ? (
        <Navbar
          brand={brand}
          onNavigate={onNavigate}
          className="fixed left-0 top-0 z-50 flex h-[91px] w-full items-center justify-between border-b border-black/10 bg-white/95 px-5 py-5 backdrop-blur md:px-[60px] md:py-7"
        />
      ) : null}

      <div
        className={`mx-auto max-w-[1440px] px-5 pb-20 md:px-[60px] ${
          showChrome ? 'pt-[91px]' : 'pt-24'
        }`}
      >
        {showChrome ? (
          <div className="h-[103px] w-[1024px] py-[30px]">
            <button
              type="button"
              onClick={onBack}
              className="fixed left-[max(20px,calc(50vw-720px+60px))] top-[121px] z-[70] flex h-[43px] w-[108px] items-center justify-center gap-2 rounded-full border border-[#c2bfbf] bg-white text-xs font-bold text-black transition hover:border-[#D4FF00] hover:bg-[#D4FF00]"
            >
              <ArrowRight size={14} className="rotate-180" />
              Back
            </button>
          </div>
        ) : null}

        <motion.div
          initial={contentMotionProps.initial}
          animate={contentMotionProps.animate}
          exit={contentMotionProps.exit}
          transition={contentMotionProps.transition}
          className="relative lg:pr-[336px]"
        >
          <div className="w-full max-w-[1024px] space-y-0">
            <div className="flex flex-col gap-5">
              <p
                className="text-[14px] font-black uppercase leading-[15px] tracking-[4.2px] text-[#737373]"
                style={{
                  fontFamily:
                    '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
                }}
              >
                {project.detailMeta ??
                  `${project.caseStudy.label} / ${project.year}`}
              </p>
              <h1
                className="text-[46.4px] font-black leading-[53.36px] tracking-[-2.32px] text-black"
                style={{
                  fontFamily:
                    '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
                }}
              >
                {project.title}
              </h1>
              <div className="rounded-[16px] border border-[#D4FF00]/35 bg-[rgba(212,255,0,0.1)] px-[21px] py-5">
                <div className="flex items-start gap-2">
                  <p className="w-[30px] text-[30px] leading-7">🎯</p>
                  <p className="flex-1 text-[16px] font-medium leading-[30px] text-[#404040]">
                    {project.caseStudy.introCallout}
                  </p>
                </div>
              </div>
            </div>

            <div className="pb-[40px] pt-[40px] lg:hidden">
              <Outline
                outline={outline}
                activeOutlineId={activeOutlineId}
                onNavigate={handleOutlineNavigate}
                mobile
              />
            </div>

            <div className="space-y-0">
              {project.caseStudy.blocks.map((block, index) => {
                if (block.type !== 'chapter') {
                  return (
                    <ContentBlock
                      key={`${project.id}-case-${index}`}
                      block={block}
                      projectId={project.id}
                    />
                  );
                }

                return (
                  <section
                    id={`case-chapter-${index}`}
                    key={`${project.id}-case-${index}`}
                    className="space-y-5 pt-[40px]"
                  >
                    <h2 className="text-[30.4px] font-black leading-[45.6px] tracking-[-0.76px] text-black">
                      {block.title}
                    </h2>
                    {block.blocks.map((child, childIndex) => {
                      if (child.type === 'subchapter') {
                        return (
                          <section
                            id={`case-chapter-${index}-sub-${childIndex}`}
                            key={`${block.title}-${childIndex}`}
                            className="space-y-[10px]"
                          >
                            <h3 className="text-[20px] font-black leading-7 tracking-[-0.5px] text-black">
                              {child.title}
                            </h3>
                            {child.blocks.map((grandChild, grandChildIndex) => (
                              <ContentBlock
                                key={`${child.title}-${grandChildIndex}`}
                                block={grandChild}
                                projectId={project.id}
                              />
                            ))}
                          </section>
                        );
                      }

                      return (
                        <ContentBlock
                          key={`${block.title}-${childIndex}`}
                          block={child}
                          projectId={project.id}
                        />
                      );
                    })}
                  </section>
                );
              })}
              <div className="pt-[60px]">
                <NextProjectBlock
                  project={nextProject}
                  onOpenProject={onOpenProject}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <aside
          className={
            isCaptureMode && !preserveCaptureChrome
              ? 'hidden'
              : 'pointer-events-none hidden lg:block'
          }
        >
          <div
            className="pointer-events-auto fixed overflow-y-auto"
            style={desktopOutlineStyle}
          >
            <Outline
              outline={outline}
              activeOutlineId={activeOutlineId}
              onNavigate={handleOutlineNavigate}
            />
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
