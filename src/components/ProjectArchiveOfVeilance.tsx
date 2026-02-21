import type { CSSProperties } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProjectHeader from './ProjectHeader';
import { Language, Page } from '../types';
import VeilanceBanner from '../assets/projects/archiveofveilance/veilance_banner.webp';

type Props = {
  currentPage: Page;
  language: Language;
  onNavigate: (page: Page) => void;
  onLanguageChange: (language: Language) => void;
};


const MOOD_BOARD_FIGMA_URL = 'https://www.figma.com/design/1H8FYTkzKkDBKAPR01a5Wb/Archive-of-Veilance?node-id=1-2&t=unjbvFlGCW8CsnyK-1';
const MOOD_BOARD_EMBED_URL = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(MOOD_BOARD_FIGMA_URL)}`;

type VeilanceTypographyRow = {
  label: string;
  value: string;
  sample: string;
  style: CSSProperties;
};

const veilanceTypographyGroups: Array<{ language: string; rows: VeilanceTypographyRow[] }> = [
  {
    language: 'English',
    rows: [
      {
        label: 'H1',
        value: '48px SemiBold Outfit',
        sample: 'Where form follows purpose.',
        style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 48, fontWeight: 600, lineHeight: '1' },
      },
      {
        label: 'H2',
        value: '24px SemiBold Outfit',
        sample: 'Where form follows purpose.',
        style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 600, lineHeight: '1.1' },
      },
      {
        label: 'H3',
        value: '16px Medium Outfit',
        sample: 'Where form follows purpose.',
        style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '1.2' },
      },
      {
        label: 'Body_large',
        value: '24px Thin Outfit',
        sample: 'Where form follows purpose.',
        style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 300, lineHeight: '1.2' },
      },
      {
        label: 'Body',
        value: '8px Thin Outfit',
        sample: 'Where form follows purpose.',
        style: { fontFamily: '"Outfit", "Plus Jakarta Sans", sans-serif', fontSize: 8, fontWeight: 300, lineHeight: '1.3' },
      },
    ],
  },
  {
    language: 'Korean',
    rows: [
      {
        label: 'H1',
        value: '48px ExtraBold GothicA1',
        sample: '형태는 목적을 따른다.',
        style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 48, fontWeight: 800, lineHeight: '1' },
      },
      {
        label: 'H2',
        value: '24px SemiBold GothicA1',
        sample: '형태는 목적을 따른다.',
        style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 600, lineHeight: '1.1' },
      },
      {
        label: 'H3',
        value: '16px Medium GothicA1',
        sample: '형태는 목적을 따른다.',
        style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '1.2' },
      },
      {
        label: 'Body_large',
        value: '24px Thin GothicA1',
        sample: '형태는 목적을 따른다.',
        style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 300, lineHeight: '1.2' },
      },
      {
        label: 'Body',
        value: '8px Thin GothicA1',
        sample: '형태는 목적을 따른다.',
        style: { fontFamily: '"Gothic A1", "Plus Jakarta Sans", sans-serif', fontSize: 8, fontWeight: 300, lineHeight: '1.3' },
      },
    ],
  },
  {
    language: 'Japanese',
    rows: [
      {
        label: 'H1',
        value: '48px Black ZenKakuGothic',
        sample: '形は目的に従う。',
        style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 48, fontWeight: 900, lineHeight: '1' },
      },
      {
        label: 'H2',
        value: '24px Black ZenKakuGothic',
        sample: '形は目的に従う。',
        style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 900, lineHeight: '1.1' },
      },
      {
        label: 'H3',
        value: '16px Medium ZenKakuGothic',
        sample: '形は目的に従う。',
        style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 16, fontWeight: 500, lineHeight: '1.2' },
      },
      {
        label: 'Body_large',
        value: '24px Thin ZenKakuGothic',
        sample: '形は目的に従う。',
        style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 24, fontWeight: 300, lineHeight: '1.2' },
      },
      {
        label: 'Body',
        value: '8px Thin ZenKakuGothic',
        sample: '形は目的に従う。',
        style: { fontFamily: '"Zen Kaku Gothic New", "Plus Jakarta Sans", sans-serif', fontSize: 8, fontWeight: 300, lineHeight: '1.3' },
      },
    ],
  },
];

export default function ProjectArchiveOfVeilance({ currentPage, language, onNavigate, onLanguageChange }: Props) {
  return (
    <div className="layout-viewport hide-scrollbar bg-grey-normal">
      <div className="layout-canvas" style={{ "--layout-base-height": "6200px" } as CSSProperties}>
        <div className="layout-canvas-inner">
          <div className="relative" style={{ minHeight: "var(--layout-base-height)" } as CSSProperties}>
            <Header currentPage={currentPage} language={language} onNavigate={onNavigate} onLanguageChange={onLanguageChange} />
            <div className="flex flex-col gap-0 mt-12">
              <ProjectHeader
                title="Archive of Veilance"
                titleFontSize={148}
                category="Poster Design"
                timeline="2 weeks"
                tools={['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator']}
                role="Independent"
                roleLabel="Role"
                description={[
                  'This project explores a conceptual exhibition poster series developed for an archive show hosted by Arc\'teryx Veliance, reflecting the brand\'s design legacy and evolution.',
                  'The exhibition is imagined to take place across Canada, Japan, and Korea, with each poster adapting the presentation to its local cultural and linguistic context while preserving the integrity of Veliance\'s established identity.',
                ]}
              />

              {/* Hero image */}
              <section className="px-7">
                <div className="flex justify-center">
                  <img
                    src={VeilanceBanner}
                    alt="Archive of Veilance overview"
                    className="w-full max-w-[1400px] h-auto"
                  />
                </div>
              </section>
            </div>

            <div>
              {/* 01 Design Process */}
              <section className="px-7 pb-16 mt-16">
                <div className="grid grid-cols-[260px_1fr] gap-12 items-start">
                  <h2 className="type-heading-2 text-black-normal m-0 leading-[1.2] whitespace-nowrap">01 Design Process</h2>
                  <div className="grid gap-2 pl-48 max-w-[1280px]">
                    <p className="type-body-lg m-0 text-black-normal font-semibold">Design Approach</p>
                    <p className="type-body m-0 text-black-normal leading-[1.5]">
                      Arc&apos;teryx Veilance&apos;s identity is defined by precision, restraint, and functional minimalism.
                      <br />
                      Building on these principles, the visual system prioritizes clarity and reduction, using a grayscale
                      palette to strip away excess and emphasize form, structure, and material presence.
                      <br />
                      Motion elements are applied with the same restraint: subtle, controlled movements reference the
                      brand&apos;s performance-driven nature without becoming expressive or decorative. By limiting color and
                      motion, the design maintains focus on functionality and intent, allowing typographic structure and
                      spatial rhythm to carry the visual narrative while preserving Veilance&apos;s understated character across
                      all executions.
                    </p>

                    <div className="grid gap-2 mt-8">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Mood Board</p>
                      <div className="w-full border border-black/10 rounded-[4px] overflow-hidden">
                        <iframe
                          title="Archive of Veilance mood board"
                          style={{ border: '0' }}
                          width="100%"
                          height="560"
                          src={MOOD_BOARD_EMBED_URL}
                          allowFullScreen
                        />
                      </div>
                    </div>

                    <div className="grid gap-2 mt-12">
                      <p className="type-body-lg m-0 text-black-normal font-semibold">Typography</p>
                      <div className="grid gap-14">
                        {veilanceTypographyGroups.map((group) => (
                          <div key={group.language} className="grid gap-4">
                            <p className="type-body m-0 text-black-normal leading-[1.5]">{group.language}</p>
                            <div className="grid grid-cols-[260px_1fr] gap-10 items-start">
                              <div className="text-[12px] leading-[1.5] text-black-normal space-y-3">
                                {group.rows.map((row) => (
                                  <div key={`${group.language}-${row.label}`} className="grid grid-cols-[140px_1fr] items-start gap-6">
                                    <div>
                                      <p className="m-0 text-[16px] font-normal leading-[1.3]">{row.label}</p>
                                      <p className="m-0 text-[12px] font-normal leading-[1.3] whitespace-nowrap">{row.value}</p>
                                    </div>
                                    <div className="flex items-center min-h-[44px] pl-14">
                                      <p className="m-0 text-black-normal whitespace-nowrap" style={row.style}>
                                        {row.sample}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 02 Final Result */}
              <section className="px-7 pb-16 mt-12">
                <div className="grid grid-cols-[260px_1fr] gap-12 items-start">
                  <h2 className="type-heading-2 text-black-normal m-0 leading-[1.2] whitespace-nowrap">02 Final Result</h2>
                  <div className="grid gap-6 pl-48 max-w-[1280px]">
                    <div>
                      <p className="type-heading-3 text-black-normal m-0 leading-[1.3]">Orginal View</p>
                    </div>
                  </div>
                </div>
              </section>

              <Footer onNavigate={onNavigate} top={5900} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
