function FooterNavButton({ label, target, onNavigate }) {
  return (
    <button
      type="button"
      onClick={() => onNavigate(target)}
      className="text-left text-[1.3rem] font-bold leading-[2.2] text-black transition hover:text-[#737373] md:text-[14px] md:leading-[55px]"
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

        <div className="px-5 pb-0 pt-12 md:px-[3.75rem] md:pb-0 md:pt-[8.5rem]">
          <div>
            <div className="grid gap-12 md:grid-cols-[minmax(16rem,1.1fr)_minmax(26rem,1fr)_11.5rem] md:items-start">
              <h2 className="max-w-[5ch] text-[3.7rem] font-black leading-[0.9] tracking-[-0.06em] text-black md:text-[6.5rem]">
                {footerSection.title}
              </h2>

              <div className="space-y-8">
                <p
                  className="text-[0.82rem] font-black uppercase tracking-[0.46em] text-[#737373] md:text-[12px] md:leading-[15px] md:tracking-[4.2px]"
                  style={{ fontFamily: '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif' }}
                >
                  {footerSection.informationLabel}
                </p>
                <div className="grid grid-cols-[6rem_minmax(0,1fr)] gap-x-4 gap-y-3 md:grid-cols-[94px_271px] md:gap-x-[10px] md:gap-y-0">
                  {footerSection.fields.map(([label, value]) => (
                    <div key={label} className="contents">
                      <p
                        className="text-[1rem] leading-[1.9] text-[#9D9D9D] md:text-[12px] md:leading-[55px]"
                      >
                        {label}
                      </p>
                      <p
                        className="text-[1rem] font-bold leading-[1.9] text-black md:text-[14px] md:leading-[55px]"
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
                <p
                  className="text-[0.82rem] font-black uppercase tracking-[0.46em] text-[#737373] md:text-[12px] md:leading-[15px] md:tracking-[4.2px]"
                  style={{ fontFamily: '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif' }}
                >
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

            <div className="mt-12 flex flex-col gap-4 border-t border-[#DFE1E5] py-8 md:mt-[4.5rem] md:flex-row md:items-center md:justify-between md:py-[50px]">
              <p
                className="text-[12px] font-black uppercase tracking-[4.2px] text-[#737373] md:leading-[15px]"
                style={{ fontFamily: '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif' }}
              >
                {footerSection.copyright}
              </p>
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-[10px] self-start text-[12px] font-black uppercase tracking-[4.2px] text-[#737373] transition hover:text-black md:leading-[15px]"
                style={{ fontFamily: '"Arial Black", "Helvetica Neue", "Arial Narrow", "Noto Sans SC", Arial, sans-serif' }}
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
