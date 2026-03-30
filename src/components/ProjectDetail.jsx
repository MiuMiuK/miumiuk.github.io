import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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

const sidebarTransition = {
  duration: 0.42,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.12,
};

function NextProjectBlock({ project, onOpenProject }) {
  if (!project) {
    return null;
  }

  const summary = project.coverSummary ?? project.description;

  return (
    <button
      type="button"
      onClick={() => onOpenProject(project)}
      className="group mt-16 w-full rounded-[2rem] border border-black/10 bg-white px-6 py-8 text-left transition hover:border-[#D4FF00] hover:bg-[#D4FF00]/10 md:mt-20 md:px-8 md:py-10"
    >
      <p className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-neutral-400 transition group-hover:text-black">
        Next Project
      </p>
      <h3 className="max-w-4xl text-3xl font-black leading-[1.02] tracking-[-0.05em] text-black md:text-5xl">
        {project.title}
      </h3>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base md:leading-8">
        {summary}
      </p>
      <div className="mt-8 flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-black">
        <span>View Project</span>
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </button>
  );
}

function FigureBlock({ block }) {
  return (
    <figure className="space-y-3">
      {block.src ? (
        <div className="overflow-hidden rounded-xl border border-black/10 bg-white/70">
          <img src={block.src} alt={block.alt} className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-black/15 bg-white/60 p-6 text-neutral-500">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-400">
            Image Slot Preserved
          </p>
          <p className="mt-3 text-base leading-7">{block.alt}</p>
          <p className="mt-2 text-sm text-neutral-400">{block.assetName}</p>
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
        className="prose prose-neutral max-w-none prose-p:my-0 prose-p:leading-8 prose-p:text-neutral-700 prose-strong:text-black"
        dangerouslySetInnerHTML={{ __html: block.html }}
      />
    );
  }

  if (block.type === 'callout') {
    return (
      <div className="rounded-2xl border border-[#D4FF00]/35 bg-[#D4FF00]/10 p-5">
        <p className="mb-2 text-xl">{block.icon}</p>
        <div
          className="prose prose-neutral max-w-none prose-p:mb-0 prose-p:leading-8 prose-strong:text-black"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      </div>
    );
  }

  if (block.type === 'sectionTitle') {
    return <h3 className="text-2xl font-black tracking-tight text-black">{block.text}</h3>;
  }

  if (block.type === 'figure') {
    return <FigureBlock block={block} />;
  }

  if (block.type === 'list') {
    const ListTag = block.ordered ? 'ol' : 'ul';
    return (
      <ListTag className="space-y-3 pl-5 text-base leading-8 text-neutral-700 marker:text-neutral-400">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ListTag>
    );
  }

  if (block.type === 'meta') {
    return (
      <div className="grid gap-4 rounded-2xl border border-black/10 bg-white/65 p-6 md:grid-cols-2">
        {block.items.map(([label, value]) => (
          <div key={label}>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.32em] text-neutral-400">
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
      <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white/75">
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
              <tr key={`${row[0]}-${rowIndex}`} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cellIndex}-${cell.slice(0, 24)}`}
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
      <details className="rounded-2xl border border-black/10 bg-white/65 p-5">
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

  if (block.type === 'subchapter') {
    return (
      <section className="space-y-5">
        <h4 className="text-xl font-black tracking-tight text-black">{block.title}</h4>
        {block.blocks.map((child, index) => (
          <ContentBlock key={`${block.title}-${index}`} block={child} />
        ))}
      </section>
    );
  }

  if (block.type === 'chapter') {
    return (
      <section className="space-y-6 pt-6 first:pt-0">
        <h3 className="text-[1.9rem] font-black tracking-tight text-black">{block.title}</h3>
        {block.blocks.map((child, index) => (
          <ContentBlock key={`${block.title}-${index}`} block={child} />
        ))}
      </section>
    );
  }

  return null;
}

export default function ProjectDetail({ project, onBack, onOpenProject }) {
  const currentProjectIndex = projects.findIndex((item) => item.id === project.id);
  const nextProject =
    currentProjectIndex === -1
      ? null
      : projects[(currentProjectIndex + 1) % projects.length];

  if (project.caseStudy) {
    const containerRef = useRef(null);
    const outline = project.caseStudy.blocks
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
      }));
    const [activeOutlineId, setActiveOutlineId] = useState(outline[0]?.id ?? '');

    const handleOutlineNavigate = (targetId) => {
      const element = document.getElementById(targetId);

      if (!element) {
        return;
      }

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
      const container = containerRef.current;

      if (!container || !outline.length) {
        return;
      }

      const targetIds = outline.flatMap((item) => [item.id, ...item.children.map((child) => child.id)]);

      const updateActiveOutline = () => {
        const containerTop = container.getBoundingClientRect().top;
        let currentId = outline[0].id;

        targetIds.forEach((id) => {
          const element = document.getElementById(id);

          if (!element) {
            return;
          }

          const { top } = element.getBoundingClientRect();

          if (top - containerTop <= 140) {
            currentId = id;
          }
        });

        setActiveOutlineId(currentId);
      };

      updateActiveOutline();
      container.addEventListener('scroll', updateActiveOutline, { passive: true });

      return () => {
        container.removeEventListener('scroll', updateActiveOutline);
      };
    }, [outline]);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={overlayTransition}
        className="fixed inset-0 z-[60] overflow-y-auto bg-white"
        ref={containerRef}
      >
        <div className="mx-auto max-w-[96rem] px-6 pb-20 pt-24 md:px-10">
          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
            type="button"
            onClick={onBack}
            className="fixed left-6 top-4 z-[70] flex items-center gap-2 rounded-full border border-black/10 bg-white/92 px-3 py-2 text-xs font-black uppercase tracking-widest text-black backdrop-blur transition hover:border-[#D4FF00] hover:bg-[#D4FF00] md:left-12"
          >
            <ArrowRight size={14} className="rotate-180" />
            Back
          </motion.button>

          <div
            className="relative pr-[clamp(10.5rem,22vw,18.5rem)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              transition={contentTransition}
              className="min-w-0"
              style={{
                width: '100%',
                maxWidth: 'min(72rem, calc(100vw - clamp(12rem, 24vw, 22rem)))',
              }}
            >
              <div className="mb-8">
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.32em] text-neutral-400">
                  {project.caseStudy.label} / {project.year}
                </p>
                <h1 className="text-[2.2rem] font-black leading-[1.15] tracking-[-0.05em] text-black md:text-[2.9rem]">
                  {project.title}｜{project.subtitle}
                </h1>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                <span className="rounded-full border border-neutral-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                  {project.client}
                </span>
                <span className="rounded-full border border-neutral-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                  {project.category}
                </span>
                <span className="rounded-full border border-neutral-300 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                  {project.year}
                </span>
              </div>

              <div className="mb-8 rounded-2xl border border-[#D4FF00]/35 bg-[#D4FF00]/10 p-5">
                <p className="mb-2 text-xl">🎯</p>
                <p className="text-base leading-8 text-neutral-800">
                  {project.caseStudy.introCallout}
                </p>
              </div>

              <div className="space-y-8">
                {project.caseStudy.blocks.map((block, index) => {
                  if (block.type === 'chapter') {
                    return (
                      <section id={`case-chapter-${index}`} key={`${project.id}-case-${index}`}>
                        <div className="space-y-6 pt-6 first:pt-0">
                          <h3 className="text-[1.9rem] font-black tracking-tight text-black">
                            {block.title}
                          </h3>
                          {block.blocks.map((child, childIndex) => {
                            if (child.type === 'subchapter') {
                              return (
                                <section
                                  id={`case-chapter-${index}-sub-${childIndex}`}
                                  key={`${block.title}-${childIndex}`}
                                  className="space-y-5"
                                >
                                  <h4 className="text-xl font-black tracking-tight text-black">
                                    {child.title}
                                  </h4>
                                  {child.blocks.map((grandChild, grandChildIndex) => (
                                    <ContentBlock
                                      key={`${child.title}-${grandChildIndex}`}
                                      block={grandChild}
                                    />
                                  ))}
                                </section>
                              );
                            }

                            return (
                              <ContentBlock
                                key={`${block.title}-${childIndex}`}
                                block={child}
                              />
                            );
                          })}
                        </div>
                      </section>
                    );
                  }

                  return <ContentBlock key={`${project.id}-case-${index}`} block={block} />;
                })}

                <NextProjectBlock project={nextProject} onOpenProject={onOpenProject} />
              </div>
            </motion.div>

            <aside>
              <motion.div
                initial={{ opacity: 0, x: 12, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 8, filter: 'blur(6px)' }}
                transition={sidebarTransition}
                className="fixed top-[3.75rem] max-h-[calc(100vh-10.75rem)] border-l border-black/10 pl-4 md:top-[4.25rem] md:pl-5"
                style={{
                  width: 'clamp(9rem, 18vw, 15.5rem)',
                  right: 'clamp(0.75rem, calc((100vw - 96rem) / 2 + 1.5rem), 4rem)',
                }}
              >
                <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-neutral-400">
                  Outline
                </p>
                <nav className="space-y-4">
                  {outline.map((item) => (
                    <div key={item.id}>
                      <button
                        type="button"
                        onClick={() => handleOutlineNavigate(item.id)}
                        className={`block text-left text-xs font-bold leading-5 transition md:text-sm md:leading-6 ${
                          activeOutlineId === item.id || item.children.some((child) => child.id === activeOutlineId)
                            ? 'text-black'
                            : 'text-neutral-700 hover:text-black'
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
                              onClick={() => handleOutlineNavigate(child.id)}
                              className={`block text-left text-[11px] leading-5 transition md:text-xs ${
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
              </motion.div>
            </aside>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={overlayTransition}
      className="fixed inset-0 z-[60] overflow-y-auto bg-white"
    >
      <div className="mx-auto max-w-[96rem] px-6 pb-16 pt-24 md:px-10">
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1], delay: 0.02 }}
          type="button"
          onClick={onBack}
          className="fixed left-6 top-4 z-[70] flex items-center gap-2 rounded-full bg-black px-3 py-2 text-xs font-black uppercase tracking-widest text-white transition hover:bg-[#D4FF00] hover:text-black md:left-12 md:px-4 md:py-3"
        >
          <ArrowRight size={14} className="rotate-180" />
          Back
        </motion.button>

        <div className="relative pr-[clamp(10.5rem,22vw,18.5rem)]">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            transition={contentTransition}
            className="min-w-0"
            style={{
              width: '100%',
              maxWidth: 'min(72rem, calc(100vw - clamp(12rem, 24vw, 22rem)))',
            }}
          >
            <div className="mb-16">
              <span className="mb-3 block text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">
                Case Study / {project.year}
              </span>
              <h2 className="mb-6 text-5xl font-black uppercase leading-[0.85] tracking-tighter md:text-7xl">
                {project.title}
              </h2>
              <p className="max-w-2xl text-xl font-medium leading-relaxed text-neutral-800 md:text-2xl">
                {project.description}
              </p>
            </div>

            <div className="relative mb-16 h-80 overflow-hidden rounded-2xl border border-black/10 bg-white/70 md:h-[30rem]">
              <img
                src={project.detailImage}
                alt={project.detailAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 text-2xl font-black uppercase tracking-[0.2em] text-white/70 md:text-4xl">
                {project.title}
              </span>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="mb-3 text-lg font-black uppercase tracking-tight">
                  The Challenge
                </h3>
                <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
                  {project.overview}
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-lg font-black uppercase tracking-tight">
                  Process
                </h3>
                <div className="space-y-4">
                  {project.process.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-2xl border border-black/10 bg-white/65 p-5"
                    >
                      <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-neutral-400">
                        {item.step}
                      </p>
                      <p className="text-neutral-700">{item.details}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-black/10 bg-white/65 p-6 md:p-8">
                <h3 className="mb-4 text-lg font-black uppercase tracking-tight">
                  Outcome & Impact
                </h3>
                <p className="text-2xl font-black uppercase leading-tight tracking-tight text-black md:text-3xl">
                  {project.results}
                </p>
              </section>

              <NextProjectBlock project={nextProject} onOpenProject={onOpenProject} />
            </div>
          </motion.div>

          <aside>
              <motion.div
                initial={{ opacity: 0, x: 12, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: 8, filter: 'blur(6px)' }}
                transition={sidebarTransition}
                className="fixed top-[3.75rem] max-h-[calc(100vh-10.75rem)] border-l border-black/10 pl-4 md:top-[4.25rem] md:pl-5"
                style={{
                  width: 'clamp(9rem, 18vw, 15.5rem)',
                right: 'clamp(0.75rem, calc((100vw - 96rem) / 2 + 1.5rem), 4rem)',
              }}
            >
              <p className="mb-4 text-[10px] font-black uppercase tracking-[0.28em] text-neutral-400">
                Project
              </p>
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-neutral-400">
                    Client
                  </p>
                  <p className="text-xs font-bold leading-5 text-neutral-700 md:text-sm">
                    {project.client}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-neutral-400">
                    Year
                  </p>
                  <p className="text-xs font-bold leading-5 text-neutral-700 md:text-sm">
                    {project.year}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-neutral-400">
                    Category
                  </p>
                  <p className="text-[11px] leading-5 text-neutral-500 md:text-xs">
                    {project.category}
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-neutral-400">
                    Highlights
                  </p>
                  <ul className="space-y-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-[11px] leading-5 text-neutral-500 md:text-xs"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </motion.div>
            </aside>
          </div>
      </div>
    </motion.div>
  );
}
