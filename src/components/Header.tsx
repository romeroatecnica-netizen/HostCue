import React from 'react';
import {Globe, Printer} from 'lucide-react';
import {SUPPORTED_LANGUAGES} from '../constants/seo';
import type {UiDictionary} from '../i18n/translations';
import type {GeneratorTab, LangCode} from '../types/hostcue';
import {BrandMarkSvg} from './OperationalWorkflowSvg';

interface HeaderProps {
  lang: LangCode;
  onChangeLang: (lang: LangCode) => void;
  onSelectTab: (tab: GeneratorTab) => void;
  onPrintSheet: () => void;
  dict: UiDictionary;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onChangeLang,
  onSelectTab,
  onPrintSheet,
  dict,
}) => {
  return (
    <header className="no-print sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#workspace"
          onClick={() => onSelectTab('listing')}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 font-display"
        >
          <BrandMarkSvg className="w-7 h-7 shrink-0" />
          <span>HostCue</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#workspace"
            onClick={() => onSelectTab('listing')}
            className="hover:text-[#1E40AF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {dict.nav.generators}
          </a>
          <a
            href="#workspace"
            onClick={() => onSelectTab('welcome')}
            className="hover:text-[#1E40AF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {dict.nav.welcomeGuide}
          </a>
          <a
            href="#playbook"
            className="hover:text-[#1E40AF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {dict.nav.playbook}
          </a>
          <a
            href="#faq"
            className="hover:text-[#1E40AF] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            {dict.nav.faq}
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <label className="relative flex items-center">
            <span className="sr-only">Language</span>
            <Globe className="w-4 h-4 text-slate-500 pointer-events-none absolute start-2.5" aria-hidden="true" />
            <select
              aria-label="Interface Language"
              value={lang}
              onChange={(e) => onChangeLang(e.target.value as LangCode)}
              className="h-9 ps-8 pe-3 text-xs sm:text-sm font-medium bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg text-slate-800 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] cursor-pointer"
            >
              {SUPPORTED_LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.nativeName}
                </option>
              ))}
            </select>
          </label>

          <button
            type="button"
            onClick={onPrintSheet}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1E40AF] hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] focus-visible:ring-offset-2"
          >
            <Printer className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{dict.nav.printSheet}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
