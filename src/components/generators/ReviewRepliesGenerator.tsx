import React, {useState} from 'react';
import {Check, Copy, RotateCcw} from 'lucide-react';
import {generateReviewReplies} from '../../generators/templates';
import type {UiDictionary} from '../../i18n/translations';
import type {LangCode, ReviewIssue, ReviewReplyFormState, ReviewTone} from '../../types/hostcue';

interface ReviewRepliesGeneratorProps {
  state: ReviewReplyFormState;
  onChange: (next: ReviewReplyFormState) => void;
  lang: LangCode;
  dict: UiDictionary;
}

const ISSUES: ReviewIssue[] = ['noise_neighbors', 'cleanliness', 'unmet_expectations', 'checkin_access'];
const TONES: ReviewTone[] = ['calm_empathetic', 'firm_objective'];

export const ReviewRepliesGenerator: React.FC<ReviewRepliesGeneratorProps> = ({
  state,
  onChange,
  lang,
  dict,
}) => {
  const [copiedVariant, setCopiedVariant] = useState<'short' | 'detailed' | null>(null);

  const generated = generateReviewReplies(state, lang);
  const shortText = state.editedShort ?? generated.short;
  const detailedText = state.editedDetailed ?? generated.detailed;
  const hasEdits = state.editedShort !== null || state.editedDetailed !== null;

  const handleCopy = async (text: string, which: 'short' | 'detailed') => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
    setCopiedVariant(which);
    window.setTimeout(() => setCopiedVariant((curr) => (curr === which ? null : curr)), 1800);
  };

  return (
    <div className="no-print grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <section className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-900 font-display">{dict.reviews.formTitle}</h2>

        <div>
          <span className="block text-xs font-semibold text-slate-700 mb-2">
            {dict.reviews.issueLabel}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ISSUES.map((issue) => {
              const active = state.issue === issue;
              return (
                <button
                  key={issue}
                  type="button"
                  onClick={() => onChange({...state, issue, editedShort: null, editedDetailed: null})}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border text-start transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#1E40AF] text-white border-[#1E40AF]'
                      : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-slate-100'
                  }`}
                >
                  {dict.reviews.issues[issue]}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="block text-xs font-semibold text-slate-700 mb-2">
            {dict.reviews.toneLabel}
          </span>
          <div className="grid grid-cols-2 gap-2">
            {TONES.map((tone) => {
              const active = state.tone === tone;
              return (
                <button
                  key={tone}
                  type="button"
                  onClick={() => onChange({...state, tone, editedShort: null, editedDetailed: null})}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#059669] text-white border-[#059669]'
                      : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-slate-100'
                  }`}
                >
                  {dict.reviews.tones[tone]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.reviews.guestName}
            </label>
            <input
              type="text"
              value={state.guestName}
              onChange={(e) => onChange({...state, guestName: e.target.value})}
              className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.reviews.propertyName}
            </label>
            <input
              type="text"
              value={state.propertyName}
              onChange={(e) => onChange({...state, propertyName: e.target.value})}
              className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {dict.reviews.reviewSummary}
          </label>
          <textarea
            rows={3}
            value={state.reviewSummary}
            onChange={(e) => onChange({...state, reviewSummary: e.target.value})}
            className="w-full p-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {dict.reviews.correctiveAction}
          </label>
          <textarea
            rows={2}
            value={state.correctiveAction}
            onChange={(e) => onChange({...state, correctiveAction: e.target.value})}
            className="w-full p-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>
      </section>

      <section className="lg:col-span-7 space-y-5">
        {hasEdits && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => onChange({...state, editedShort: null, editedDetailed: null})}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D97706] bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{dict.workspace.resetEdits}</span>
            </button>
          </div>
        )}

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-display">
                01. {dict.reviews.shortVariant}
              </h3>
              <span className="text-xs font-mono tabular-nums text-slate-500">
                {shortText.length} {dict.workspace.chars}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(shortText, 'short')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                copiedVariant === 'short' ? 'bg-[#059669]' : 'bg-[#1E40AF] hover:bg-blue-900'
              }`}
            >
              {copiedVariant === 'short' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedVariant === 'short' ? dict.workspace.copied : dict.reviews.copyVariant}</span>
            </button>
          </div>
          <textarea
            rows={4}
            value={shortText}
            onChange={(e) => onChange({...state, editedShort: e.target.value})}
            className="w-full p-3.5 text-sm leading-relaxed text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
          />
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900 font-display">
                02. {dict.reviews.detailedVariant}
              </h3>
              <span className="text-xs font-mono tabular-nums text-slate-500">
                {detailedText.length} {dict.workspace.chars}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleCopy(detailedText, 'detailed')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                copiedVariant === 'detailed' ? 'bg-[#059669]' : 'bg-[#1E40AF] hover:bg-blue-900'
              }`}
            >
              {copiedVariant === 'detailed' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedVariant === 'detailed' ? dict.workspace.copied : dict.reviews.copyVariant}</span>
            </button>
          </div>
          <textarea
            rows={7}
            value={detailedText}
            onChange={(e) => onChange({...state, editedDetailed: e.target.value})}
            className="w-full p-3.5 text-sm leading-relaxed text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
          />
        </div>
      </section>
    </div>
  );
};
