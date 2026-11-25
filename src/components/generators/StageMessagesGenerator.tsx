import React, {useState} from 'react';
import {Check, Copy, RotateCcw} from 'lucide-react';
import {SUPPORTED_LANGUAGES} from '../../constants/seo';
import {generateStageMessage} from '../../generators/templates';
import type {UiDictionary} from '../../i18n/translations';
import type {LangCode, MessagesFormState, StayStage} from '../../types/hostcue';

interface StageMessagesGeneratorProps {
  state: MessagesFormState;
  onChange: (next: MessagesFormState) => void;
  dict: UiDictionary;
}

const STAGES: StayStage[] = [
  'booking_confirmation',
  'checkin_instructions',
  'midstay_checkin',
  'checkout_instructions',
  'review_request',
];

export const StageMessagesGenerator: React.FC<StageMessagesGeneratorProps> = ({
  state,
  onChange,
  dict,
}) => {
  const [copied, setCopied] = useState(false);

  const generated = generateStageMessage(state);
  const currentMessage = state.editedMessage ?? generated;
  const wordCount = currentMessage.trim() ? currentMessage.trim().split(/\s+/).length : 0;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentMessage);
    } catch {
      // ignore clipboard fallback
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="no-print grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <section className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-900 font-display">{dict.messages.formTitle}</h2>

        <div>
          <span className="block text-xs font-semibold text-slate-700 mb-2">
            {dict.messages.stageLabel}
          </span>
          <div className="grid grid-cols-1 gap-1.5">
            {STAGES.map((stage, idx) => {
              const active = state.stage === stage;
              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => onChange({...state, stage, editedMessage: null})}
                  className={`flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg border text-start transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#1E40AF] text-white border-[#1E40AF]'
                      : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-slate-100'
                  }`}
                >
                  <span>{dict.messages.stages[stage]}</span>
                  <span className={`font-mono tabular-nums text-xs ${active ? 'text-blue-200' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {dict.messages.guestLangLabel}
          </label>
          <select
            value={state.guestLang}
            onChange={(e) =>
              onChange({...state, guestLang: e.target.value as LangCode, editedMessage: null})
            }
            className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          >
            {SUPPORTED_LANGUAGES.map((l) => (
              <option key={l.code} value={l.code}>
                {l.nativeName} ({l.englishName})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.messages.guestName}
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
              {dict.messages.propertyName}
            </label>
            <input
              type="text"
              value={state.propertyName}
              onChange={(e) => onChange({...state, propertyName: e.target.value})}
              className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.messages.checkInTime}
            </label>
            <input
              type="time"
              value={state.checkInTime}
              onChange={(e) => onChange({...state, checkInTime: e.target.value})}
              className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.messages.checkOutTime}
            </label>
            <input
              type="time"
              value={state.checkOutTime}
              onChange={(e) => onChange({...state, checkOutTime: e.target.value})}
              className="w-full h-10 px-2.5 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.messages.accessCode}
            </label>
            <input
              type="text"
              value={state.accessCode}
              onChange={(e) => onChange({...state, accessCode: e.target.value})}
              className="w-full h-10 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            {dict.messages.accessNote}
          </label>
          <input
            type="text"
            value={state.accessNote}
            onChange={(e) => onChange({...state, accessNote: e.target.value})}
            className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>
      </section>

      <section className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 font-display">{dict.messages.outputTitle}</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {dict.messages.stages[state.stage]} · {wordCount} {dict.workspace.words} ·{' '}
              <span className="font-mono tabular-nums">{currentMessage.length}</span> {dict.workspace.chars}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {state.editedMessage !== null && (
              <button
                type="button"
                onClick={() => onChange({...state, editedMessage: null})}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D97706] bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{dict.workspace.resetEdits}</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                copied ? 'bg-[#059669]' : 'bg-[#1E40AF] hover:bg-blue-900'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? dict.workspace.copied : dict.messages.copyMessage}</span>
            </button>
          </div>
        </div>

        <textarea
          rows={15}
          dir={state.guestLang === 'ar' ? 'rtl' : 'ltr'}
          value={currentMessage}
          onChange={(e) => onChange({...state, editedMessage: e.target.value})}
          className="w-full p-4 text-sm leading-relaxed text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
        />
      </section>
    </div>
  );
};
