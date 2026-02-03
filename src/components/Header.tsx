import imgLogoDark1 from '../assets/c0ff9b06a95d08b684f7bb2cd6d1ffad12acf27c.png';
import { Language, Page } from '../types';

type HeaderProps = {
  currentPage: Page;
  language: Language;
  onNavigate: (page: Page) => void;
  onLanguageChange: (language: Language) => void;
};

const navBase =
  "absolute font-['Plus_Jakarta_Sans',sans-serif] leading-[normal] not-italic text-black-normal text-[16px] top-[24px] cursor-pointer bg-transparent border-none z-10";

const activeUnderline = 'underline [text-decoration-skip-ink:none] decoration-solid';

export default function Header({ currentPage, language, onNavigate, onLanguageChange }: HeaderProps) {
  const languageButtonClass = (lang: Language) =>
    `cursor-pointer bg-transparent border-none leading-[normal] ${language === lang ? activeUnderline : ''}`;

  return (
    <header className="relative h-[96px]">
      <button
        onClick={() => onNavigate('home')}
        className="absolute left-[24px] size-[48px] top-[24px] cursor-pointer z-10"
        aria-label="Go to home"
      >
        <img alt="Logo" className="size-full object-cover" src={imgLogoDark1} />
      </button>

      <button
        onClick={() => onNavigate('projects')}
        className={`${navBase} left-[calc(75%-18px)] ${currentPage === 'projects' ? activeUnderline : ''}`}
      >
        Projects
      </button>

      <button
        onClick={() => onNavigate('about')}
        className={`${navBase} left-[calc(75%+134px)] ${currentPage === 'about' ? activeUnderline : ''}`}
      >
        About
      </button>

      <div className="absolute top-[24px] right-[24px] flex items-center gap-[6px] text-[10px] whitespace-nowrap z-10">
        <button onClick={() => onLanguageChange('EN')} className={languageButtonClass('EN')}>
          EN
        </button>
        <span className="leading-[normal]">|</span>
        <button onClick={() => onLanguageChange('JP')} className={languageButtonClass('JP')}>
          JP
        </button>
        <span className="leading-[normal]">|</span>
        <button onClick={() => onLanguageChange('KR')} className={languageButtonClass('KR')}>
          KR
        </button>
      </div>
    </header>
  );
}
