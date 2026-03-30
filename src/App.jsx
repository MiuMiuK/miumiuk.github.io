import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import AboutDetail from './components/AboutDetail';
import {
  aboutSection,
  contactSection,
  heroSection,
  profileTags,
  projects,
  workExperience,
} from './data/siteContent';

const heroHighlights = [
  '9+ 年',
  '擅长企业级产品体验设计、设计系统搭建、复杂流程梳理与国际化适配',
];

const getOverlayStateFromHash = () => {
  if (typeof window === 'undefined') {
    return { selectedProject: null, isAboutOpen: false };
  }

  const hash = window.location.hash;

  if (hash === '#about') {
    return { selectedProject: null, isAboutOpen: true };
  }

  if (hash.startsWith('#project=')) {
    const projectId = decodeURIComponent(hash.replace('#project=', ''));
    const matchedProject = projects.find((project) => project.id === projectId) ?? null;

    return { selectedProject: matchedProject, isAboutOpen: false };
  }

  return { selectedProject: null, isAboutOpen: false };
};

export default function App() {
  const [overlayState, setOverlayState] = useState(() => getOverlayStateFromHash());
  const { selectedProject, isAboutOpen } = overlayState;
  const homeScrollPositionRef = useRef(0);
  const shouldRestoreScrollRef = useRef(false);

  useEffect(() => {
    const syncOverlayFromHash = () => {
      setOverlayState(getOverlayStateFromHash());
    };

    window.addEventListener('hashchange', syncOverlayFromHash);

    return () => {
      window.removeEventListener('hashchange', syncOverlayFromHash);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject && !isAboutOpen && shouldRestoreScrollRef.current) {
      shouldRestoreScrollRef.current = false;

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: homeScrollPositionRef.current, behavior: 'auto' });
      });
    }
  }, [selectedProject, isAboutOpen]);

  const updateHash = (nextHash) => {
    if (window.location.hash === nextHash) {
      return;
    }

    window.location.hash = nextHash;
  };

  const rememberHomeScrollPosition = () => {
    homeScrollPositionRef.current = window.scrollY;
  };

  const openProject = (project) => {
    rememberHomeScrollPosition();
    updateHash(`#project=${encodeURIComponent(project.id)}`);
  };

  const closeOverlay = () => {
    shouldRestoreScrollRef.current = true;
    updateHash('');
  };

  const handleNavigate = (id) => {
    if (id === 'about') {
      rememberHomeScrollPosition();
      updateHash('#about');
      return;
    }

    closeOverlay();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="min-h-screen bg-white text-black antialiased selection:bg-[#D4FF00] selection:text-black">
      <Navbar brand={heroSection.navBrand ?? heroSection.name} onNavigate={handleNavigate} />

      <main>
        <section
          id="home"
          className="relative min-h-[calc(100svh-6.8rem)] overflow-hidden px-6 pb-20 pt-32 md:min-h-[calc(100svh-8.2rem)] md:px-16 md:pb-28 md:pt-44"
        >
          <div className="mx-auto max-w-7xl">
            <div className="pb-10">
              <div className="mb-14 grid items-end gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-6">
                <div className="min-w-0">
                  <p className="mb-6 text-[10px] font-black uppercase tracking-[0.42em] text-neutral-500">
                    {heroSection.eyebrow}
                  </p>
                  <h1 className="max-w-[10ch] text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.085em] md:text-[11vw]">
                    {heroSection.name.split(' ').map((part) => (
                      <span key={part} className="mr-[0.06em] inline-block">
                        {part}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className="flex items-center justify-start xl:justify-start xl:pb-2">
                  <div className="h-36 w-36 overflow-hidden rounded-full border-[4px] border-black bg-neutral-100 md:h-44 md:w-44">
                    <img
                      src={heroSection.portrait}
                      alt={heroSection.portraitAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-8 pt-2 md:grid-cols-[0.22rem_minmax(0,1fr)] md:items-stretch">
                <div className="hidden self-stretch bg-[#D4FF00] md:block" />
                <div className="max-w-5xl">
                  <div className="space-y-3 md:space-y-4">
                    {heroSection.intro.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[0.98rem] font-medium leading-[1.72] tracking-[-0.01em] text-neutral-800 md:text-[1.28rem] md:leading-[1.58]"
                      >
                        {renderHighlightedIntro(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee items={heroSection.marqueeItems} />

        <section id="work" className="bg-transparent px-0 pb-12 pt-8 md:pb-20 md:pt-12">
          <div className="mx-auto flex max-w-[1520px] flex-col gap-10 md:gap-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                project={project}
                onClick={openProject}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="bg-white px-6 py-20 text-center md:px-12">
          <h2 className="mb-10 text-3xl font-black uppercase leading-none tracking-tighter md:text-[6vw]">
            {contactSection.title}{' '}
            <span className="text-neutral-300">{contactSection.highlight}</span>
          </h2>

          <a
            href={`mailto:${contactSection.email}`}
            className="text-xl font-black uppercase underline decoration-[#D4FF00] decoration-[8px] underline-offset-[8px] transition hover:text-neutral-500 md:text-4xl lg:text-5xl"
          >
            {contactSection.email}
          </a>

          <div className="mt-20 flex flex-col justify-between gap-4 border-t border-neutral-100 pt-10 text-[9px] font-black uppercase tracking-[0.3em] text-neutral-400 md:flex-row">
            <span>{contactSection.copyright}</span>
            <div className="flex justify-center gap-6">
              {contactSection.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AnimatePresence initial={false}>
        {selectedProject ? (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onBack={closeOverlay}
            onOpenProject={openProject}
          />
        ) : null}
        {isAboutOpen ? (
          <AboutDetail
            aboutSection={aboutSection}
            profileTags={profileTags}
            workExperience={workExperience}
            onBack={closeOverlay}
          />
        ) : null}
      </AnimatePresence>

      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-multiply"
        style={{ backgroundImage: 'url("/images/noise.svg")' }}
      />
    </div>
  );
}
