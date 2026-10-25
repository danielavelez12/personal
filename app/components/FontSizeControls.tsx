import { useEffect, useState } from "react";

const MIN_SIZE = 14;
const MAX_SIZE = 22;
const DEFAULT_SIZE = 16;
const STORAGE_KEY = "fontSize";

export const FontSizeControls = () => {
  const [size, setSize] = useState(DEFAULT_SIZE);

  useEffect(() => {
    let stored = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      stored = null;
    }
    const parsed = parseInt(stored, 10);
    if (!Number.isNaN(parsed)) {
      setSize(Math.min(MAX_SIZE, Math.max(MIN_SIZE, parsed)));
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.fontSize = size + "px";
    try {
      window.localStorage.setItem(STORAGE_KEY, String(size));
    } catch (e) {}
  }, [size]);

  const buttonClassName =
    "font-mono text-sm leading-none w-6 h-6 flex items-center justify-center text-med hover:text-blue disabled:text-light";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center rounded-full border border-zinc200 bg-white px-3 py-2 shadow-sm">
      <span className="font-mono text-xs text-light mr-2">text size</span>
      <button
        type="button"
        aria-label="Decrease text size"
        className={buttonClassName}
        onClick={() => setSize((current) => Math.max(MIN_SIZE, current - 1))}
        disabled={size <= MIN_SIZE}
      >
        &minus;
      </button>
      <button
        type="button"
        aria-label="Increase text size"
        className={buttonClassName}
        onClick={() => setSize((current) => Math.min(MAX_SIZE, current + 1))}
        disabled={size >= MAX_SIZE}
      >
        +
      </button>
    </div>
  );
};
