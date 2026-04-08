function FooterNavButton({ label, target, onNavigate }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(target)}
      className="text-left text-[1.3rem] font-bold leading-[2.2] text-black transition hover:text-[#737373] md:text-[1.2rem] md:leading-[2.6]"
    >
      {label}
    </button>
  );
}

export default function SiteFooter({ footerSection, onNavigate }) {
  const navigateTargets = {
    Home: 'home',
    About: 'about',
    Experience: 'experience',
    Contact: 'contact',
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-white">
      <div className="relative z-10">
        <div className="border-y-[3px] border-black bg-[#D4FF00] px-5 py-3 md:px-[3.75rem] md:py-[1.15rem]">
          <p className="text-[1.45rem] font-black uppercase leading-none tracking-[-0.06em] text-black md:text-[3.35rem]">
            {footerSection.marqueeText}
          </p>
        </div>

        <div className="px-5 pb-8 pt-12 md:px-[3.75rem] md:pb-[2.75rem] md:pt-[8.5rem]">
          <div>
            <div className="grid gap-12 md:grid-cols-[minmax(16rem,1.1fr)_minmax(26rem,1fr)_11.5rem] md:items-start">
              <h2 className="max-w-[5ch] text-[3.7rem] font-black leading-[0.9] tracking-[-0.06em] text-black md:text-[6.5rem]">
                {footerSection.title}
              </h2>

              <div className="space-y-8">
                <p className="text-[0.82rem] font-black uppercase tracking-[0.46em] text-[#737373] md:text-[0.8rem]">
                  {footerSection.informationLabel}
                </p>
                <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-4 gap-y-3 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-y-7">
                  {footerSection.fields.map(([label, value]) => (
                    <div key={label} className="contents">
                      <p
                        className="text-[1rem] leading-[1.9] text-[#9D9D9D] md:text-[1rem] md:leading-[1.35]"
                      >
                        {label}
                      </p>
                      <p
                        className="text-[1rem] font-bold leading-[1.9] text-black md:text-[1rem] md:leading-[1.35]"
                      >
                        {label === 'Email' ? (
                          <a href={`mailto:${value}`} className="underline decoration-black underline-offset-4">
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <p className="text-[0.82rem] font-black uppercase tracking-[0.46em] text-[#737373] md:text-[0.8rem]">
                  {footerSection.navigationLabel}
                </p>
                <div className="flex flex-col items-start">
                  {footerSection.navigationItems.map((item) => (
                    <FooterNavButton
                      key={item}
                      label={item}
                      target={navigateTargets[item]}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-[#DFE1E5] py-8 md:mt-[4.5rem] md:flex-row md:items-center md:justify-between md:py-[3.25rem]">
              <p className="text-[0.82rem] font-black uppercase tracking-[0.42em] text-[#737373]">
                {footerSection.copyright}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-2 self-start text-[0.82rem] font-black uppercase tracking-[0.42em] text-[#737373] transition hover:text-black"
              >
                <span>{footerSection.backToTop}</span>
                <span aria-hidden="true">↑</span>
              </button>
            </div>
          </div>
      </div>
    </footer>
  );
}
