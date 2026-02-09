import { useEffect, useRef, useState, type CSSProperties } from 'react';

type RevealLineProps = {
  height: number | string;
  className?: string;
  style?: CSSProperties;
  color?: string;
  thickness?: number;
  delayMs?: number;
};

type RevealHLineProps = {
  width?: number | string;
  className?: string;
  style?: CSSProperties;
  color?: string;
  thickness?: number;
  delayMs?: number;
  repeatable?: boolean; // allow re-trigger on each intersection if needed
};

/**
 * Vertical line that animates downward when entering viewport.
 */
export default function RevealLine({
  height,
  className = '',
  style,
  color = 'var(--color-black-normal)',
  thickness = 1,
  delayMs = 0,
}: RevealLineProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggeredRef.current) {
            triggeredRef.current = true;
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`reveal-line ${visible ? 'is-visible' : ''} ${className}`}
      style={
        {
          ...style,
          '--line-height': typeof height === 'number' ? `${height}px` : height,
          '--line-color': color,
          '--line-thickness': `${thickness}px`,
          '--line-delay': `${delayMs}ms`,
        } as CSSProperties
      }
    />
  );
}

/**
 * Horizontal line that animates left -> right when entering viewport.
 */
export function RevealHLine({
  width = '100%',
  className = '',
  style,
  color = 'var(--color-black-normal)',
  thickness = 1,
  delayMs = 0,
  repeatable = false,
}: RevealHLineProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggeredRef.current || repeatable)) {
            if (!repeatable) triggeredRef.current = true;
            setVisible(true);
            if (!repeatable) observer.unobserve(entry.target);
          } else if (!entry.isIntersecting && repeatable) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`reveal-hline ${visible ? 'is-visible' : ''} ${className}`}
      style={
        {
          width,
          ...style,
          '--line-width': typeof width === 'number' ? `${width}px` : width,
          '--line-color': color,
          '--line-thickness': `${thickness}px`,
          '--line-delay': `${delayMs}ms`,
        } as CSSProperties
      }
    />
  );
}
