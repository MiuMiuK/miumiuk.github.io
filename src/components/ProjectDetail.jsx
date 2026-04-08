import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/siteContent';

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
      className="mt-8 w-full rounded-[2rem] border border-black/10 bg-white px-6 py-8 text-left transition hover:border-[#D4FF00] hover:bg-[#D4FF00]/10 md:px-8 md:py-10"
    >
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-neutral-400">
        Next Project
      </p>
      <h3 className="mt-4 text-3xl font-black leading-[1] tracking-[-0.05em] text-black md:text-[3rem]">
        {project.title}
      </h3>
      <p className="mt-3 text-base leading-8 text-neutral-600 md:text-lg">
        {project.coverSummary}
      </p>
      <div className="mt-6 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-black">
        <span>View Project</span>
        <ArrowRight size={16} />
      </div>
    </button>
  );
}

function FigureBlock({ block }) {
  const isMotionPlaceholder = block.kind === 'motion-placeholder';

  return (
    <figure className="space-y-3">
      {isMotionPlaceholder ? (
        <div className="relative aspect-[1024/568] overflow-hidden rounded-2xl bg-[#EDEFF2]">
          <img src={block.src} alt={block.alt} className="h-full w-full object-cover opacity-0" />
          <div className="absolute inset-0 flex items-center justify-center bg-[#EDEFF2] px-8 text-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
                Motion Placeholder
              </p>
              <p className="mt-4 text-base font-medium leading-7 text-neutral-600">{block.alt}</p>
              <p className="mt-2 text-sm text-neutral-400">WEBP slot preserved for future animation</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
          <img src={block.src} alt={block.alt} className="h-full w-full object-cover" />
        </div>
      )}
      <figcaption className="text-sm leading-6 text-neutral-500">{block.caption}</figcaption>
    </figure>
  );
}

function ContentBlock({ block }) {
  if (block.type === 'html') {
    return (
      <div
        className="prose prose-neutral max-w-none prose-p:my-0 prose-p:text-[1rem] prose-p:leading-6 prose-p:text-black prose-strong:text-black"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  }

  if (block.type === 'callout') {
    return (
      <div className="rounded-2xl border border-[#D4FF00]/35 bg-[#D4FF00]/10 px-5 py-5">
        <div className="flex items-start gap-3">
          <p className="text-[1.8rem] leading-none">{block.icon}</p>
          <div
            className="prose prose-neutral max-w-none prose-p:my-0 prose-p:text-[1rem] prose-p:leading-7 prose-strong:text-black prose-em:font-medium prose-em:text-neutral-700"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
      </div>
    );
  }

  if (block.type === 'sectionTitle') {
    return <h4 className="text-[1.35rem] font-black tracking-tight text-black">{block.text}</h4>;
  }

  if (block.type === 'figure') {
    return <FigureBlock block={block} />;
  }

  if (block.type === 'list') {
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
      <div className="grid gap-5 rounded-2xl border border-black/10 bg-white/80 p-6 md:grid-cols-2">
        {block.items.map(([label, value]) => (
          <div key={label} className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.32em] text-neutral-400">
              {label}
            </p>
            <p className="text-base leading-7 text-neutral-700">{value}</p>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === 'table') {
    return (
      <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white">
        <table className="min-w-full border-collapse text-left">
          <thead className="bg-black/[0.03]">
            <tr>
              {block.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-black/10 px-4 py-3 text-sm font-black text-neutral-500"
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
                    className="border-b border-black/10 px-4 py-4 text-sm leading-7 text-neutral-700"
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
    return (
      <details className="rounded-2xl border border-black/10 bg-white p-5">
        <summary className="cursor-pointer list-none text-sm font-black uppercase tracking-[0.22em] text-neutral-600">
          {block.summary}
        </summary>
        <div className="mt-5 space-y-5">
          {block.blocks.map((child, index) => (
            <ContentBlock key={`${block.summary}-${index}`} block={child} />
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
          : 'sticky top-28 rounded-[1.75rem] border border-black/10 bg-white/92 p-5 backdrop-blur'
      }
    >
      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-neutral-400">
        Outline
      </p>
      <nav className="space-y-4">
        {outline.map((item) => (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`block text-left text-sm font-bold leading-6 transition ${
                activeOutlineId === item.id ||
                item.children.some((child) => child.id === activeOutlineId)
                  ? 'text-black'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              {item.title}
            </button>
            {item.children.length ? (
              <div className="mt-2 space-y-2 border-l border-neutral-200 pl-3">
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    type="button"
                    onClick={() => onNavigate(child.id)}
                    className={`block text-left text-xs leading-5 transition ${
                      activeOutlineId === child.id
                        ? 'font-semibold text-black'
                        : 'text-neutral-500 hover:text-black'
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
  project,
  onBack,
  onOpenProject,
  isCaptureMode = false,
  preserveCaptureChrome = false,
}) {
  const containerRef = useRef(null);
  const currentProjectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject =
    currentProjectIndex === -1 ? null : projects[(currentProjectIndex + 1) % projects.length];

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

  useEffect(() => {
    const container = containerRef.current;

    if (!container || !outline.length) {
      return;
    }

    const targetIds = outline.flatMap((item) => [item.id, ...item.children.map((child) => child.id)]);

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
    container.addEventListener('scroll', updateActiveOutline, { passive: true });
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={overlayTransition}
      className={
        isCaptureMode
          ? 'relative min-h-screen bg-white'
          : 'fixed inset-0 z-[60] overflow-y-auto bg-white'
      }
    >
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-24 md:px-[3.75rem]">
        {isCaptureMode && !preserveCaptureChrome ? null : (
          <button
            type="button"
            onClick={onBack}
            className="fixed left-5 top-4 z-[70] flex items-center gap-2 rounded-full border border-[#c2bfbf] bg-white px-4 py-2 text-xs font-bold text-black transition hover:border-[#D4FF00] hover:bg-[#D4FF00] md:left-[3.75rem]"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back
          </button>
        )}

        <motion.div
          initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
          transition={contentTransition}
          className="grid gap-10 lg:grid-cols-[minmax(0,1024px)_minmax(220px,298px)] lg:items-start"
        >
          <div className="space-y-8">
            <div className="flex flex-col gap-5 border-b border-black/10 pb-10">
              <p className="text-[10px] font-black uppercase tracking-[0.32em] text-neutral-400">
                {project.caseStudy.label} / {project.year}
              </p>
              <h1 className="text-[2.9rem] font-black leading-[0.95] tracking-[-0.05em] text-black md:text-[4rem]">
                {project.title}
              </h1>
              <div className="rounded-2xl border border-[#D4FF00]/35 bg-[#D4FF00]/10 px-5 py-5">
                <div className="flex items-start gap-3">
                  <p className="text-[1.8rem] leading-none">🎯</p>
                  <p className="text-lg leading-8 text-neutral-700">{project.caseStudy.introCallout}</p>
                </div>
              </div>
            </div>

            <div className="lg:hidden">
              <Outline
                outline={outline}
                activeOutlineId={activeOutlineId}
                onNavigate={handleOutlineNavigate}
                mobile
              />
            </div>

            <div className="space-y-10">
              {project.caseStudy.blocks.map((block, index) => {
                if (block.type !== 'chapter') {
                  return <ContentBlock key={`${project.id}-case-${index}`} block={block} />;
                }

                return (
                  <section id={`case-chapter-${index}`} key={`${project.id}-case-${index}`} className="space-y-6 pt-2">
                    <h2 className="text-[2rem] font-black tracking-[-0.03em] text-black md:text-[2.3rem]">
                      {block.title}
                    </h2>
                    {block.blocks.map((child, childIndex) => {
                      if (child.type === 'subchapter') {
                        return (
                          <section
                            id={`case-chapter-${index}-sub-${childIndex}`}
                            key={`${block.title}-${childIndex}`}
                            className="space-y-5"
                          >
                            <h3 className="text-[1.35rem] font-black tracking-tight text-black">
                              {child.title}
                            </h3>
                            {child.blocks.map((grandChild, grandChildIndex) => (
                              <ContentBlock
                                key={`${child.title}-${grandChildIndex}`}
                                block={grandChild}
                              />
                            ))}
                          </section>
                        );
                      }

                      return <ContentBlock key={`${block.title}-${childIndex}`} block={child} />;
                    })}
                  </section>
                );
              })}

              <NextProjectBlock project={nextProject} onOpenProject={onOpenProject} />
            </div>
          </div>

          <aside className={isCaptureMode && !preserveCaptureChrome ? 'hidden' : 'hidden lg:block'}>
            <div className="space-y-5">
              <div className="sticky top-24 overflow-hidden rounded-[2rem] bg-[#F5F5F5]">
                <img
                  src={project.detailImage}
                  alt={project.detailAlt}
                  className="h-auto w-full object-cover"
                />
              </div>
              <Outline
                outline={outline}
                activeOutlineId={activeOutlineId}
                onNavigate={handleOutlineNavigate}
              />
            </div>
          </aside>
        </motion.div>
      </div>
    </motion.div>
  );
}
