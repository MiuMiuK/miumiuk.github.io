import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutDetail({
  aboutSection,
  profileTags,
  workExperience,
  onBack,
}) {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      className="fixed inset-0 z-[60] overflow-y-auto bg-white text-black"
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-24 md:px-12">
        <button
          type="button"
          onClick={onBack}
          className="fixed left-6 top-4 z-[70] flex items-center gap-2 rounded-full border border-black/10 bg-white p-2 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#D4FF00] md:left-12 md:p-3"
        >
          <ArrowRight size={14} className="rotate-180" />
          Back
        </button>

        <div className="mb-16 flex items-center gap-4 border-b border-black/10 pb-6">
          <span className="text-4xl">{aboutSection.icon}</span>
          <div>
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-black/35">
              Editorial Profile
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              {aboutSection.title}
            </h2>
          </div>
        </div>

        <div className="grid gap-16 md:gap-24 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="mb-10 max-w-sm">
                  <p className="text-sm leading-7 text-neutral-500">
                A compact snapshot of how I lead design: balancing system thinking,
                business clarity, and an obsession with product details.
              </p>
            </div>

                <h3 className="mb-8 border-l-4 border-[#D4FF00] pl-4 text-2xl font-black uppercase tracking-widest">
                  {aboutSection.tagsTitle}
                </h3>
            <div className="flex flex-wrap gap-3">
              {profileTags.map((tag) => (
                <span
                  key={tag.label}
                    className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] transition duration-300 hover:-translate-y-0.5 ${tag.color}`}
                    >
                      {tag.label}
                    </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <h3 className="mb-8 border-l-4 border-[#D4FF00] pl-4 text-2xl font-black uppercase tracking-widest">
              {aboutSection.pointsTitle}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {aboutSection.points.map((point, index) => (
                <div
                  key={point}
                    className="group rounded-[1.5rem] border border-black/10 bg-black/[0.02] p-6 transition duration-300 hover:border-[#D4FF00]/40 hover:bg-[#D4FF00]/[0.04]"
                  >
                  <span className="mb-6 block text-3xl font-black leading-none text-[#D4FF00] opacity-80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                      <p className="text-base font-medium leading-8 text-neutral-600 transition group-hover:text-black">
                        {point}
                      </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-20 border-t border-black/10 pt-12">
          <div className="mb-10 flex items-center gap-4">
            <span className="text-3xl">💼</span>
            <div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.35em] text-black/35">
                Experience
              </p>
              <h3 className="text-3xl font-black tracking-tight">
                {workExperience.title}
              </h3>
            </div>
          </div>

          <div className="space-y-8">
            {workExperience.items.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="rounded-[1.75rem] border border-black/10 bg-black/[0.02] p-6 md:p-8"
              >
                <div className="mb-8 grid gap-3 border-b border-black/10 pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                  <div>
                    <h4 className="text-2xl font-black tracking-tight">{job.company}</h4>
                    <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
                      {job.role}
                    </p>
                  </div>
                  <p className="text-sm font-bold tracking-[0.18em] text-neutral-500">
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
                            className="text-base leading-8 text-neutral-700"
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
                                className="rounded-full border border-black/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-neutral-600 transition hover:border-[#D4FF00] hover:text-black"
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
                      <li key={item} className="text-base leading-8 text-neutral-700">
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
