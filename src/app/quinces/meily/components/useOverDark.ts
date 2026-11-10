import { RefObject, useEffect, useState } from "react";

/**
 * Indica si el centro del elemento (un botón fijo) está encima de una
 * sección con fondo oscuro, marcada con `data-bg="dark"`.
 */
export function useOverDark(ref: RefObject<HTMLElement | null>) {
  const [overDark, setOverDark] = useState(false);

  useEffect(() => {
    let frame = 0;

    const check = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const y = rect.top + rect.height / 2;
      const dark = Array.from(
        document.querySelectorAll<HTMLElement>('[data-bg="dark"]')
      ).some((section) => {
        const s = section.getBoundingClientRect();
        return y >= s.top && y <= s.bottom;
      });
      setOverDark(dark);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return overDark;
}
