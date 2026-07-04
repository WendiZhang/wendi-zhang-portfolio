export default function Footer() {
  return (
    <footer className="bg-[#f7f5ef]">
      <div className="mx-auto flex min-h-[120px] w-[min(1160px,calc(100%-48px))] items-center justify-between border-t border-ink/15 text-[13px] text-[#707571] max-md:w-[calc(100%-32px)] max-md:flex-col max-md:justify-center max-md:gap-1 max-md:text-center">
        <a
          className="font-display text-[26px] font-bold tracking-[-0.08em] text-[#131514]"
          href="#top"
        >
          WZ<span className="text-[#75649c]">.</span>
        </a>
        <p>Designed and built with care in London, Ontario.</p>
        <p>© {new Date().getFullYear()} Wendi Zhang</p>
      </div>
    </footer>
  );
}
