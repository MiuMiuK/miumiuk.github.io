import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import SiteFooter from './components/SiteFooter';
import { trackPageview } from './lib/analytics';
import { applySiteMetadata } from './lib/siteMetadata';
import {
  aboutPage,
  aboutSection,
  experiencePage,
  footerSection,
  heroSection,
  pageEndBar,
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
    return { selectedProject: null, activePage: null };
  }

  const url = new URL(window.location.href);
  const projectIdFromQuery = url.searchParams.get('project');
  const overlayFromQuery = url.searchParams.get('overlay');

  if (overlayFromQuery === 'about') {
    return { selectedProject: null, activePage: 'about' };
  }

  if (overlayFromQuery === 'experience') {
    return { selectedProject: null, activePage: 'experience' };
  }

  if (projectIdFromQuery) {
    const matchedProject =
      projects.find((project) => project.id === projectIdFromQuery) ?? null;
    return { selectedProject: matchedProject, activePage: null };
  }

  const hash = getPrimaryHashSegment(window.location.hash);

  if (hash === '#about') {
    return { selectedProject: null, activePage: 'about' };
  }

  if (hash === '#experience') {
    return { selectedProject: null, activePage: 'experience' };
  }

  if (hash.startsWith('#project=')) {
    const projectId = decodeURIComponent(hash.replace('#project=', ''));
    const matchedProject =
      projects.find((project) => project.id === projectId) ?? null;
    return { selectedProject: matchedProject, activePage: null };
  }

  return { selectedProject: null, activePage: null };
};

const buildOverlayPath = ({ projectId = null, page = null } = {}) => {
  const searchParams = new URLSearchParams();

  if (projectId) {
    searchParams.set('project', projectId);
  } else if (page) {
    searchParams.set('overlay', page);
  }

  const search = searchParams.toString();

  return search ? `/?${search}` : '/';
};

const getPageMetadata = ({ selectedProject, activePage }) => {
  if (selectedProject) {
    return {
      title: `${selectedProject.title} | Miao Ke Portfolio`,
      description: selectedProject.description || selectedProject.coverSummary,
      path: buildOverlayPath({ projectId: selectedProject.id }),
      image: selectedProject.coverImage,
    };
  }

  if (activePage === 'about') {
    return {
      title: 'About | Miao Ke Portfolio',
      description:
        '了解 Miao Ke 的设计背景、方法论，以及在企业服务与 AI 产品中的实践经验。',
      path: buildOverlayPath({ page: 'about' }),
    };
  }

  if (activePage === 'experience') {
    return {
      title: 'Experience | Miao Ke Portfolio',
      description:
        '查看 Miao Ke 的职业经历、设计系统建设经验与跨团队协作实践。',
      path: buildOverlayPath({ page: 'experience' }),
    };
  }

  return {
    title: 'Miao Ke Portfolio',
    description:
      'Miao Ke 的产品体验设计作品集，聚焦企业服务、设计系统、复杂流程设计与 AI 协作体验。',
    path: '/',
    image: '/og-cover.svg',
  };
};

export default function App() {
  const [overlayState, setOverlayState] = useState(() =>
    getOverlayStateFromHash()
  );
  const { selectedProject, activePage } = overlayState;
  const isCaptureMode =
    typeof window !== 'undefined'
      ? isFigmaCaptureHash(window.location.hash)
      : false;
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
    window.addEventListener('popstate', syncOverlayFromHash);

    return () => {
      window.removeEventListener('hashchange', syncOverlayFromHash);
      window.removeEventListener('popstate', syncOverlayFromHash);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject && !activePage && shouldRestoreScrollRef.current) {
      shouldRestoreScrollRef.current = false;
      window.requestAnimationFrame(() => {
        window.scrollTo({
          top: homeScrollPositionRef.current,
          behavior: 'auto',
        });
      });
    }
  }, [selectedProject, activePage]);

  useEffect(() => {
    const metadata = getPageMetadata({ selectedProject, activePage });
    applySiteMetadata(metadata);
    trackPageview(window.location.href);
  }, [selectedProject, activePage]);

  const updateOverlayLocation = ({ projectId = null, page = null } = {}) => {
    const url = new URL(window.location.href);
    const nextSearchParams = new URLSearchParams();
    const preservedHash = isFigmaCaptureHash(url.hash) ? url.hash : '';

    if (projectId) {
      nextSearchParams.set('project', projectId);
    } else if (page) {
      nextSearchParams.set('overlay', page);
    }

    const nextSearch = nextSearchParams.toString();
    const nextUrl = `${url.pathname}${nextSearch ? `?${nextSearch}` : ''}${preservedHash}`;

    if (`${url.pathname}${url.search}${url.hash}` === nextUrl) {
      return;
    }

    window.history.pushState({}, '', nextUrl);
    setOverlayState(getOverlayStateFromHash());
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
      updateOverlayLocation();
      window.requestAnimationFrame(() => {
        scrollToSection('work');
      });
      return;
    }

    rememberHomeScrollPosition();
    updateOverlayLocation({ projectId: project.id });
  };

  const closeOverlay = () => {
    shouldRestoreScrollRef.current = true;
    updateOverlayLocation();
  };

  const closeOverlayWithoutRestore = () => {
    shouldRestoreScrollRef.current = false;
    updateOverlayLocation();
  };

  const openPage = (page) => {
    rememberHomeScrollPosition();
    updateOverlayLocation({ page });
  };

  const navigateHomeSection = (sectionId) => {
    closeOverlayWithoutRestore();
    window.requestAnimationFrame(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      scrollToSection(sectionId);
    });
  };

  const handleNavigate = (id) => {
    if (id === 'about') {
      openPage('about');
      return;
    }

    if (id === 'experience') {
      openPage('experience');
      return;
    }

    if (id === 'projects') {
      navigateHomeSection('work');
      return;
    }

    if (id === 'contact') {
      navigateHomeSection('contact');
      return;
    }

    navigateHomeSection('home');
  };

  const renderHighlightedIntro = (text) => {
    const escapedPhrases = heroHighlights.map((phrase) =>
      phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const pattern = new RegExp(`(${escapedPhrases.join('|')})`, 'gi');

    return text
      .split(pattern)
      .filter(Boolean)
      .map((segment, index) => {
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

              <div className="relative md:h-[496px]">
                <div className="grid items-start gap-10 md:grid-cols-[674px_1fr] md:gap-0">
                  <div>
                    <div className="md:h-[168px]">
                      <p className="text-[10px] font-black uppercase tracking-[0.42em] text-neutral-500 md:text-[0.95rem] md:leading-none">
                        {heroSection.eyebrow}
                      </p>
                      <h1 className="mt-5 text-[4.3rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-black md:text-[10rem] md:leading-[0.83]">
                        {heroSection.name.split(' ').map((part) => (
                          <span key={part} className="mr-[0.06em] inline-block">
                            {part}
                          </span>
                        ))}
                      </h1>
                    </div>

                    <div className="mt-10 md:mt-[75px]">
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

                      <button
                        type="button"
                        onClick={() => handleNavigate(heroSection.ctaTarget)}
                        className="mt-8 inline-flex h-[42px] items-center justify-end rounded-[3px] bg-black px-[20px] py-[10px] transition duration-200 hover:bg-black/80 md:mt-[50px] md:w-[195px]"
                      >
                        <span className="inline-flex items-center gap-[10px] text-center text-[14px] font-bold text-[#D4FF00]">
                          <span>{heroSection.ctaText}</span>
                          <ArrowRight size={10} strokeWidth={2.5} />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="justify-self-start pt-2 md:absolute md:left-[799px] md:top-[28px] md:pt-0">
                    <div className="h-36 w-36 overflow-hidden rounded-full border-[4px] border-black bg-[#F5F5F5] p-1 md:h-44 md:w-44">
                      <img
                        src={heroSection.portrait}
                        alt={heroSection.portraitAlt}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                        className="h-full w-full scale-[1.22] rounded-full object-cover object-[center_18%]"
                      />
                    </div>
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
              <h2
                className="relative z-10 max-w-[32.5rem] text-[3.15rem] font-black uppercase leading-[0.88] tracking-[-0.02em] text-black md:text-[5rem] md:leading-[90px] md:tracking-[1px]"
                style={{
                  fontFamily:
                    '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif',
                }}
              >
                <span className="block">SELECTED</span>
                <span className="block text-[#D4FF00]">PROJECTS.</span>
              </h2>
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

        <section
          id="thinking"
          className="border-t-[3px] border-t-[#D4FF00] bg-black"
        >
          <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-[3.75rem] md:py-[6.25rem]">
            <div className="flex flex-col gap-12 md:gap-[2.875rem]">
              <h2 className="w-full max-w-[30rem] text-[4rem] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white md:text-[5rem] md:leading-[5.625rem] md:tracking-[0.0125em]">
                {(thinkingSection.titleLines ?? [thinkingSection.title]).map(
                  (line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  )
                )}
              </h2>

              <div className="grid gap-10 md:grid-cols-[34rem_42.5rem] md:items-end md:justify-between">
                <div className="grid gap-10 md:grid-cols-2 md:grid-rows-2 md:gap-x-12 md:gap-y-[3.25rem]">
                  {thinkingSection.capabilities.map((capability) => (
                    <div
                      key={capability.labelZh}
                      className="w-full max-w-[14rem] space-y-[0.3125rem]"
                    >
                      <p className="text-[0.875rem] font-black uppercase leading-[0.9375rem] tracking-[0.2625rem] text-[#D5FF02]">
                        {capability.labelZh}
                      </p>
                      <p className="text-[1.125rem] font-semibold leading-[1.5rem] tracking-[0.0625rem] text-white">
                        {capability.labelEn}
                      </p>
                      <p className="whitespace-nowrap text-[0.75rem] leading-[1rem] tracking-[0.18rem] text-[#909090]">
                        {capability.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex min-h-[9.375rem] flex-col items-start justify-between gap-6">
                  <p className="w-full max-w-[42.5rem] text-[1.25rem] font-light leading-[2.1875rem] text-[#C4C4C4]">
                    {thinkingSection.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleNavigate(thinkingSection.ctaTarget)}
                    className="inline-flex items-center justify-end gap-[0.3125rem] rounded-[3px] bg-[#D4FF00] px-5 py-2.5 text-[0.875rem] font-bold leading-[1.375rem] text-black transition hover:bg-[#E7FF5F]"
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
            brand={heroSection.navBrand}
            project={selectedProject}
            onBack={closeOverlay}
            onOpenProject={openProject}
            onNavigate={handleNavigate}
            isCaptureMode={isCaptureMode}
            preserveCaptureChrome={preserveCaptureChrome}
          />
        ) : null}
        {activePage === 'about' ? (
          <AboutPage
            brand={heroSection.navBrand}
            aboutPage={aboutPage}
            aboutSection={aboutSection}
            profileTags={profileTags}
            pageEndBar={pageEndBar}
            onBack={closeOverlay}
            onNavigate={handleNavigate}
            isCaptureMode={isCaptureMode}
            preserveCaptureChrome={preserveCaptureChrome}
          />
        ) : null}
        {activePage === 'experience' ? (
          <ExperiencePage
            brand={heroSection.navBrand}
            heroSection={heroSection}
            experiencePage={experiencePage}
            jobs={workExperience.items}
            pageEndBar={pageEndBar}
            onBack={closeOverlay}
            onNavigate={handleNavigate}
            isCaptureMode={isCaptureMode}
            preserveCaptureChrome={preserveCaptureChrome}
          />
        ) : null}
      </AnimatePresence>
    </div>
  );
}
