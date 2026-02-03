import type { CSSProperties } from 'react';
import { Page } from '../types';

type FooterProps = {
  onNavigate: (page: Page) => void;
  onArchiveClick?: () => void;
};

const textButton =
  "absolute -translate-x-full font-['Plus_Jakarta_Sans',sans-serif] leading-[normal] not-italic text-black-normal text-[16px] text-right bg-transparent border-none cursor-pointer";

const lineBase =
  'absolute flex h-[96px] items-center justify-center w-0';

export default function Footer({ onNavigate, onArchiveClick = () => {} }: FooterProps) {
  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div className="absolute contents left-[24px] top-[3528px]">
      <div className="absolute h-0 left-[24px] right-[24px] top-[3528px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1392 1.00012">
            <line id="Line 6" stroke="var(--stroke-0, #212222)" x1="0" x2="100%" y1="0.5" y2="0.500122" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onNavigate('projects')}
        className={`${textButton} left-[calc(62.5%+73px)] top-[3624px]`}
      >
        Projects
      </button>

      <button
        type="button"
        onClick={() => onNavigate('about')}
        className={`${textButton} left-[calc(62.5%+56px)] top-[3648px]`}
      >
        About
      </button>

      <button
        type="button"
        onClick={() => openExternal('https://www.linkedin.com/in/hajin-lee-ca')}
        className={`${textButton} left-[calc(75%+70px)] top-[3624px]`}
        aria-label="Open LinkedIn profile (new tab)"
      >
        LinkedIn
      </button>

      <button
        type="button"
        onClick={() => openExternal('https://github.com/Jinontheclock')}
        className={`${textButton} left-[calc(75%+61px)] top-[3648px]`}
        aria-label="Open GitHub profile (new tab)"
      >
        GitHub
      </button>

      <button
        type="button"
        onClick={onArchiveClick}
        className={`${textButton} left-[calc(75%+63px)] top-[3672px]`}
      >
        Archive
      </button>

      <div
        className={`${lineBase} left-[calc(75%-6px)] top-[3624px]`}
        style={{ '--transform-inner-width': '1185', '--transform-inner-height': '18' } as CSSProperties}
      >
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[96px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
                <line id="Line 8" stroke="var(--stroke-0, #212222)" x2="96" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${lineBase} left-[calc(62.5%-3px)] top-[3624px]`}
        style={{ '--transform-inner-width': '1185', '--transform-inner-height': '18' } as CSSProperties}
      >
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[96px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 1">
                <line id="Line 8" stroke="var(--stroke-0, #212222)" x2="96" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <p className="-translate-x-full absolute font-['Plus_Jakarta_Sans',sans-serif] leading-[normal] left-[calc(62.5%+138px)] not-italic text-black-normal text-[16px] text-right top-[3708px]">
        © Hajin Lee 2026
      </p>
    </div>
  );
}
