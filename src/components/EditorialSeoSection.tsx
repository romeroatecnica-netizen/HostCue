import React, {useState} from 'react';
import {ChevronDown, Info} from 'lucide-react';
import type {UiDictionary} from '../i18n/translations';

interface EditorialSeoSectionProps {
  dict: UiDictionary;
}

export const EditorialSeoSection: React.FC<EditorialSeoSectionProps> = ({dict}) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="no-print space-y-8">
      <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 sm:p-5 flex items-start gap-3">
        <Info className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-xs sm:text-sm leading-relaxed text-slate-800">
          {dict.editorial.transparencyNotice}
        </p>
      </div>

      <section
        id="playbook"
        aria-labelledby="playbook-heading"
        className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6"
      >
        <div className="border-b border-[#E2E8F0] pb-5">
          <h2 id="playbook-heading" className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
            {dict.editorial.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-3xl">
            {dict.editorial.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.editorial.sections.map((sec) => (
            <article key={sec.title} className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 font-display">{sec.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{sec.body}</p>
              <ul className="space-y-1.5 text-sm text-slate-600 list-disc ps-5">
                {sec.bullets.map((bullet) => (
                  <li key={bullet} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-4"
      >
        <h2 id="faq-heading" className="text-xl font-bold text-slate-900 font-display">
          {dict.editorial.faqHeading}
        </h2>

        <div className="divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {dict.editorial.faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={faq.question} className="py-3.5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-start font-semibold text-sm sm:text-base text-slate-900 hover:text-[#1E40AF] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600 max-w-4xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
