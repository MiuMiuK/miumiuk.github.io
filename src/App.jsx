import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import AboutDetail from './components/AboutDetail';
import SiteFooter from './components/SiteFooter';
import {
  aboutSection,
  footerSection,
  heroSection,
  profileTags,
  projects,
  thinkingSection,
  workExperience,
} from './data/siteContent';

const heroHighlights = [
  '9+ 年',
  '擅长企业级产品体验设计、设计系统搭建、复杂流程梳理与国际化适配',
];

const getPrimaryHashSegment = (hash) => {
  if (!hash) {
    return '';
  }

  const [primarySegment] = hash.split('&');
  return primarySegment;
};

const isFigmaCaptureHash = (hash) => hash.includes('figmacapture=');

const getOverlayStateFromHash = () => {
  if (typeof window === 'undefined') {
    return { selectedProject: null, isAboutOpen: false };
  }

  const url = new URL(window.location.href);
  const projectIdFromQuery = url.searchParams.get('project');
  const overlayFromQuery = url.searchParams.get('overlay');

  if (overlayFromQuery === 'about') {
    return { selectedProject: null, isAboutOpen: true };
  }

  if (projectIdFromQuery) {
    const matchedProject = projects.find((project) => project.id === projectIdFromQuery) ?? null;
    return { selectedProject: matchedProject, isAboutOpen: false };
  }

  const hash = getPrimaryHashSegment(window.location.hash);

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
  const isCaptureMode =
    typeof window !== 'undefined' ? isFigmaCaptureHash(window.location.hash) : false;
  const preserveCaptureChrome =
    typeof window !== 'undefined'
      ? new URL(window.location.href).searchParams.get('captureChrome') === '1'
      : false;
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openProject = (project) => {
    if (!project.caseStudy) {
      shouldRestoreScrollRef.current = false;
      updateHash('');
      window.requestAnimationFrame(() => {
        scrollToSection('work');
      });
      return;
    }

    rememberHomeScrollPosition();
    updateHash(`#project=${encodeURIComponent(project.id)}`);
  };

  const closeOverlay = () => {
    shouldRestoreScrollRef.current = true;
    updateHash('');
  };

  const handleNavigate = (id) => {
    if (id === 'experience') {
      rememberHomeScrollPosition();
      updateHash('#about');
      return;
    }

    closeOverlay();

    if (id === 'projects') {
      scrollToSection('work');
      return;
    }

    if (id === 'about') {
      scrollToSection('thinking');
      return;
    }

    if (id === 'contact') {
      scrollToSection('contact');
      return;
    }

    scrollToSection('home');
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
      <Navbar brand={heroSection.navBrand} onNavigate={handleNavigate} />

      <main className="pt-[72px] md:pt-[91px]">
        <section id="home" className="relative overflow-hidden">
          <div className="mx-auto max-w-[1440px] px-5 md:px-[3.75rem]">
            <div className="flex flex-col">
              <div className="h-10 md:h-[95px]" />

              <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_12rem]">
                <div className="space-y-[4.6875rem]">
                  <div>
                    <p className="mb-5 text-[10px] font-black uppercase tracking-[0.42em] text-neutral-500 md:text-[0.95rem] md:leading-none">
                      {heroSection.eyebrow}
                    </p>
                    <h1 className="text-[4.3rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-black md:text-[10rem] md:leading-[0.83]">
                      {heroSection.name.split(' ').map((part) => (
                        <span key={part} className="mr-[0.06em] inline-block">
                          {part}
                        </span>
                      ))}
                    </h1>
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

                <div className="justify-self-start pt-2 md:justify-self-end md:pt-[6.25rem]">
                  <div className="h-36 w-36 overflow-hidden rounded-full border-[4px] border-black bg-neutral-100 md:h-44 md:w-44">
                    <img
                      src={heroSection.portrait}
                      alt={heroSection.portraitAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="h-10 md:h-[95px]" />
            </div>
          </div>

          <Marquee items={heroSection.marqueeItems} />
        </section>

        <section id="work" className="pt-0">
          <div className="mx-auto max-w-[1440px]">
            <div className="relative h-[14.5rem] px-5 pt-10 md:h-[267px] md:px-[3.75rem] md:pt-[100px]">
              <div className="max-w-[32rem]">
                <p className="text-[3.15rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-black md:text-[5rem]">
                  SELECTED
                </p>
                <p className="mt-1 text-[3.15rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-[#D4FF00] md:text-[5rem]">
                  PROJECTS.
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[3px] bg-[#D4FF00]" />
            </div>
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

        <section id="thinking" className="border-t-[3px] border-t-[#D4FF00] bg-black">
          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-[3.75rem] md:py-[6.25rem]">
            <div className="grid gap-14 md:grid-cols-[30rem_minmax(0,1fr)] md:gap-10">
              <div className="flex flex-col justify-between md:min-h-[29.5rem]">
                <div>
                  <h2 className="text-[4rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[5rem] md:leading-[5.625rem] md:tracking-[0.0125em]">
                    {(thinkingSection.titleLines ?? [thinkingSection.title]).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>
                </div>

                <div className="grid max-w-[26.625rem] grid-cols-2 gap-x-10 gap-y-10 pt-6 text-[1rem] font-black tracking-[-0.02em] text-white md:pt-0 md:text-[1rem] md:leading-[0.95rem] md:tracking-[0.2625rem]">
                  {thinkingSection.keywords.map((keyword) => (
                    <p key={keyword}>{keyword}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-end md:min-h-[29.5rem]">
                <div className="max-w-[42.5rem] space-y-8 pb-1 md:space-y-[0.625rem]">
                  <p className="text-[1.2rem] font-light leading-[2] tracking-[-0.02em] text-[#C4C4C4] md:text-[1.25rem] md:leading-[3.4375rem] md:tracking-normal">
                    {thinkingSection.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleNavigate('experience')}
                    className="inline-flex items-center gap-[0.3125rem] text-[1rem] font-semibold tracking-[0.0625rem] text-[#D4FF00] transition hover:text-[#F1FF8A] md:text-[1rem] md:leading-[2.5rem]"
                  >
                    <span>{thinkingSection.ctaText}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter footerSection={footerSection} onNavigate={handleNavigate} />
      </main>

      <AnimatePresence initial={false}>
        {selectedProject ? (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onBack={closeOverlay}
            onOpenProject={openProject}
            isCaptureMode={isCaptureMode}
            preserveCaptureChrome={preserveCaptureChrome}
          />
        ) : null}
        {isAboutOpen ? (
          <AboutDetail
            aboutSection={aboutSection}
            profileTags={profileTags}
            workExperience={workExperience}
            onBack={closeOverlay}
            isCaptureMode={isCaptureMode}
            preserveCaptureChrome={preserveCaptureChrome}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
