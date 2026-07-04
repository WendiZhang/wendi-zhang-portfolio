export default function Header() {
  return (
    <header
      id="top"
      className="relative flex min-h-[820px] scroll-mt-16 items-center overflow-hidden bg-[#151918] text-white max-md:min-h-[760px]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[length:72px_72px] opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-[min(1160px,calc(100%-48px))] pt-[100px] max-md:w-[calc(100%-32px)]">
        <div className="flex items-center gap-2.5 text-[13px] uppercase tracking-[0.08em] text-[#d6d9d5]">
          <span className="h-2 w-2 rounded-full bg-[#aa9acb] shadow-[0_0_0_5px_rgba(170,154,203,0.14)]" />
          Full-Stack Developer · AI-Ready Web Applications
        </div>

        <h1 className="my-7 max-w-[1020px] font-display text-[clamp(52px,7.5vw,104px)] font-medium leading-[0.99] tracking-[-0.06em] max-md:mt-7 max-md:text-[clamp(48px,14vw,68px)]">
          I create modern web experiences to {" "}
          <em className="not-italic text-[#aa9acb]">solve business problems.</em>
        </h1>

        <p className="max-w-[650px] text-[clamp(18px,2vw,21px)] text-[#bbc0bc]">
          Hi, I’m Wendi Zhang, a full-stack developer based in London, Ontario.
          I build polished web applications with clean interfaces, secure
          authentication, database-driven features, and AI-powered workflows.
        </p>

        <div className="mt-[38px] flex gap-3 max-md:flex-col">
          <a
            className="inline-flex min-h-[52px] items-center justify-center gap-[18px] rounded-full bg-[#aa9acb] px-6 text-sm font-semibold text-[#131514] transition hover:-translate-y-0.5 motion-reduce:transition-none"
            href="#work"
          >
            View projects <span>↗</span>
          </a>

          <a
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 motion-reduce:transition-none"
            href="#contact"
          >
            Let’s connect
          </a>
        </div>

        <div className="mb-[22px] mt-[74px] grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/15 pt-[22px] text-[13px] text-[#8f9691] md:flex md:justify-between">
          <span>React + TypeScript</span>
          <span>Python + Flask</span>
          <span>AI API Integration</span>
          <span>Authentication + Databases</span>
        </div>
      </div>
    </header>
  );
}