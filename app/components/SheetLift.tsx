import { useEffect } from "react";

const RESTING_GAP = 72;
const FRICTION = 0.11;
const HOLD = 140;
const SCROLL_RATE = 0.55;
const LIFT_RATE = 0.55;

type Box = {
  el: HTMLElement;
  max: number;
  engage: number;
};

export const SheetLift = () => {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let container: HTMLElement | null = null;
    let scroller: HTMLElement | null = null;
    let maxLift = 0;
    let liftSpan = 0;
    let latched = false;
    let progress = 0;
    let progressTarget = 0;
    let raf = 0;

    const resolve = () => {
      const next = document.querySelector(
        "[data-main-scroll]"
      ) as HTMLElement | null;
      if (!next) return false;
      const parent = next.closest(".page-top") as HTMLElement | null;
      if (!parent) return false;
      if (next !== scroller || parent !== container) {
        scroller = next;
        container = parent;
        container.style.setProperty("--sheet-lift", "0px");
        const basePad = parseFloat(getComputedStyle(container).paddingTop) || 0;
        maxLift = Math.max(0, basePad - RESTING_GAP);
        liftSpan = LIFT_RATE > 0 ? maxLift / LIFT_RATE : maxLift;
        latched = false;
        progress = 0;
        progressTarget = 0;
        scroller.scrollTop = 0;
      }
      return true;
    };

    const pageMax = () =>
      scroller ? Math.max(0, scroller.scrollHeight - scroller.clientHeight) : 0;

    const readBoxes = (): Box[] => {
      if (!scroller) return [];
      const top = scroller.getBoundingClientRect().top;
      const limit = pageMax();
      const found: Box[] = [];
      scroller
        .querySelectorAll("[data-seq-scroll]")
        .forEach((node) => {
          const el = node as HTMLElement;
          const max = Math.max(0, el.scrollHeight - el.clientHeight);
          if (max < 1) return;
          const offset =
            el.getBoundingClientRect().top - top + (scroller as HTMLElement).scrollTop;
          const engage = Math.min(
            limit,
            Math.max(
              0,
              offset +
                el.clientHeight / 2 -
                (scroller as HTMLElement).clientHeight / 2
            )
          );
          found.push({ el, max, engage });
        });
      return found.sort((a, b) => a.engage - b.engage);
    };

    const contentSpan = () => {
      const boxes = readBoxes();
      let total = pageMax();
      boxes.forEach((b) => {
        total += b.max + 2 * HOLD * SCROLL_RATE;
      });
      return total;
    };

    const apply = () => {
      if (!container || !scroller) return;
      const phase = liftSpan > 0 ? Math.min(1, progress / liftSpan) : 1;
      const eased = 1 - Math.pow(1 - phase, 3);
      container.style.setProperty(
        "--sheet-lift",
        (maxLift * eased).toFixed(2) + "px"
      );

      let remaining = Math.max(0, (progress - liftSpan - HOLD) * SCROLL_RATE);
      const boxes = readBoxes();
      const limit = pageMax();
      const positions = boxes.map(() => 0);
      let page = 0;

      const pause = HOLD * SCROLL_RATE;
      for (let i = 0; i < boxes.length; i++) {
        const gap = Math.max(0, boxes[i].engage - page);
        if (remaining <= gap) {
          page += remaining;
          remaining = 0;
          break;
        }
        remaining -= gap;
        page = boxes[i].engage;

        if (remaining <= pause) {
          remaining = 0;
          break;
        }
        remaining -= pause;

        if (remaining <= boxes[i].max) {
          const t = boxes[i].max > 0 ? remaining / boxes[i].max : 1;
          positions[i] = boxes[i].max * t * t * (3 - 2 * t);
          remaining = 0;
          break;
        }
        positions[i] = boxes[i].max;
        remaining -= boxes[i].max;

        if (remaining <= pause) {
          remaining = 0;
          break;
        }
        remaining -= pause;
      }
      if (remaining > 0) page = Math.min(limit, page + remaining);

      scroller.scrollTop = page;
      boxes.forEach((b, i) => {
        b.el.scrollTop = positions[i];
      });
    };

    const tick = () => {
      const diff = progressTarget - progress;
      if (Math.abs(diff) < 0.3) {
        progress = progressTarget;
        apply();
        raf = 0;
        return;
      }
      progress += diff * FRICTION;
      apply();
      raf = requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth <= 900) return;
      if (!resolve() || !scroller) return;

      let delta = event.deltaY;
      if (event.deltaMode === 1) delta *= 16;
      if (delta === 0) return;

      event.preventDefault();

      const limit = liftSpan + HOLD + contentSpan() / SCROLL_RATE;
      progressTarget = Math.min(limit, Math.max(0, progressTarget + delta));
      if (!latched && progressTarget >= liftSpan) latched = true;
      if (latched) progressTarget = Math.max(liftSpan, progressTarget);

      if (reduce) {
        progress = progressTarget;
        apply();
        return;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      scroller = null;
      container = null;
      resolve();
    };

    resolve();
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
};
