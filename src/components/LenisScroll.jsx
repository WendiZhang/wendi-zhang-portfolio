import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      anchors: {
        offset: -80,
      },
    });

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    const initialHashFrame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) lenis.scrollTo(target, { immediate: true, offset: -80 });
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(initialHashFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}
