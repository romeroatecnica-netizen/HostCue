import React from 'react';
import {CANONICAL_ORIGIN, SUPPORTED_LANGUAGES, getCanonicalUrl} from '../constants/seo';
import type {UiDictionary} from '../i18n/translations';
import type {LangCode} from '../types/hostcue';

interface FooterProps {
  lang: LangCode;
  onChangeLang: (lang: LangCode) => void;
  dict: UiDictionary;
}

export const Footer: React.FC<FooterProps> = ({lang, onChangeLang, dict}) => {
  return (
    <footer className="no-print border-t border-[#E2E8F0] bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm font-medium text-slate-700">{dict.footer.tagline}</p>
          <p className="text-xs text-slate-500">
            {dict.footer.canonicalNote}{' '}
            <a
              href={`${CANONICAL_ORIGIN}/`}
              className="font-mono text-[#1E40AF] hover:underline underline-offset-4"
            >
              {CANONICAL_ORIGIN}
            </a>
          </p>
        </div>

        <nav aria-label="Language versions" className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-[#E2E8F0]">
          {SUPPORTED_LANGUAGES.map((item) => {
            const active = item.code === lang;
            return (
              <a
                key={item.code}
                href={getCanonicalUrl(item.code)}
                hrefLang={item.hreflang}
                onClick={(e) => {
                  e.preventDefault();
                  onChangeLang(item.code);
                }}
                className={`text-xs transition-colors whitespace-nowrap ${
                  active
                    ? 'font-bold text-[#1E40AF] underline underline-offset-4'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.nativeName}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
};
