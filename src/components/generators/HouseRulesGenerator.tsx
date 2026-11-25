import React, {useState} from 'react';
import {Check, Copy, Printer, RotateCcw, ShieldCheck} from 'lucide-react';
import {generateHouseRulesText} from '../../generators/templates';
import type {UiDictionary} from '../../i18n/translations';
import type {
  HouseRulesFormState,
  LangCode,
  PartyPolicy,
  PetPolicy,
  PropertyType,
  SmokingPolicy,
  VisitorPolicy,
} from '../../types/hostcue';

interface HouseRulesGeneratorProps {
  state: HouseRulesFormState;
  onChange: (next: HouseRulesFormState) => void;
  lang: LangCode;
  dict: UiDictionary;
  onPrint: () => void;
}

const PROPERTY_TYPES: PropertyType[] = ['city_apartment', 'house_patio', 'studio_loft', 'family_home'];

export const HouseRulesGenerator: React.FC<HouseRulesGeneratorProps> = ({
  state,
  onChange,
  lang,
  dict,
  onPrint,
}) => {
  const [copied, setCopied] = useState(false);

  const generated = generateHouseRulesText(state, lang);
  const currentRules = state.editedRules ?? generated;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentRules);
    } catch {
      // ignore
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <section className="no-print lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-900 font-display">{dict.rules.formTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.propertyName}
            </label>
            <input
              type="text"
              value={state.propertyName}
              onChange={(e) => onChange({...state, propertyName: e.target.value})}
              className="w-full h-9 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.propertyType}
            </label>
            <select
              value={state.propertyType}
              onChange={(e) => onChange({...state, propertyType: e.target.value as PropertyType})}
              className="w-full h-9 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            >
              {PROPERTY_TYPES.map((pt) => (
                <option key={pt} value={pt}>
                  {dict.listing.propertyTypes[pt]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.partyPolicy}
            </label>
            <select
              value={state.partyPolicy}
              onChange={(e) => onChange({...state, partyPolicy: e.target.value as PartyPolicy})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            >
              <option value="strictly_prohibited">{dict.rules.parties.strictly_prohibited}</option>
              <option value="quiet_small_gatherings">{dict.rules.parties.quiet_small_gatherings}</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.petPolicy}
            </label>
            <select
              value={state.petPolicy}
              onChange={(e) => onChange({...state, petPolicy: e.target.value as PetPolicy})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            >
              <option value="not_allowed">{dict.rules.pets.not_allowed}</option>
              <option value="on_request">{dict.rules.pets.on_request}</option>
              <option value="allowed_with_fee">{dict.rules.pets.allowed_with_fee}</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.smokingPolicy}
            </label>
            <select
              value={state.smokingPolicy}
              onChange={(e) => onChange({...state, smokingPolicy: e.target.value as SmokingPolicy})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            >
              <option value="strictly_no_smoking">{dict.rules.smoking.strictly_no_smoking}</option>
              <option value="terrace_only">{dict.rules.smoking.terrace_only}</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.visitorPolicy}
            </label>
            <select
              value={state.visitorPolicy}
              onChange={(e) => onChange({...state, visitorPolicy: e.target.value as VisitorPolicy})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            >
              <option value="registered_only">{dict.rules.visitors.registered_only}</option>
              <option value="daytime_until_22">{dict.rules.visitors.daytime_until_22}</option>
            </select>
          </div>
        </div>

        <div>
          <span className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.rules.quietHours}
          </span>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="time"
              value={state.quietStart}
              onChange={(e) => onChange({...state, quietStart: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
            <input
              type="time"
              value={state.quietEnd}
              onChange={(e) => onChange({...state, quietEnd: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.currency}
            </label>
            <select
              value={state.currency}
              onChange={(e) => onChange({...state, currency: e.target.value})}
              className="w-full h-9 px-2.5 text-sm font-mono bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            >
              <option value="€">EUR (€)</option>
              <option value="$">USD ($)</option>
              <option value="£">GBP (£)</option>
              <option value="CHF ">CHF</option>
              <option value="¥">JPY (¥)</option>
              <option value="₹">INR (₹)</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.rules.depositAmount}
            </label>
            <input
              type="number"
              min={0}
              step={50}
              value={state.depositAmount}
              onChange={(e) => onChange({...state, depositAmount: Math.max(0, Number(e.target.value) || 0)})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.rules.cleaningCondition}
          </label>
          <textarea
            rows={3}
            value={state.cleaningCondition}
            onChange={(e) => onChange({...state, cleaningCondition: e.target.value})}
            className="w-full p-2.5 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
          />
        </div>
      </section>

      <section className="lg:col-span-7 space-y-4">
        <div className="no-print flex flex-wrap items-center justify-between gap-3 bg-white border border-[#E2E8F0] rounded-xl px-5 py-3.5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
            <h2 className="text-sm font-bold text-slate-900 font-display">{dict.rules.outputTitle}</h2>
          </div>

          <div className="flex items-center gap-2">
            {state.editedRules !== null && (
              <button
                type="button"
                onClick={() => onChange({...state, editedRules: null})}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D97706] bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{dict.workspace.resetEdits}</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                copied ? 'bg-[#059669]' : 'bg-[#1E40AF] hover:bg-blue-900'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? dict.workspace.copied : dict.rules.copyRules}</span>
            </button>
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] rounded-lg cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{dict.rules.printRules}</span>
            </button>
          </div>
        </div>

        <div className="no-print bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{dict.workspace.editableHint}</span>
            <span className="font-mono tabular-nums">
              {currentRules.length} {dict.workspace.chars}
            </span>
          </div>
          <textarea
            rows={14}
            value={currentRules}
            onChange={(e) => onChange({...state, editedRules: e.target.value})}
            className="w-full p-4 text-sm leading-relaxed text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white font-sans"
          />
        </div>

        {/* Clean Printable Rules Sheet */}
        <article className="hidden print:block print-only-sheet bg-white p-8 text-slate-900">
          <h2 className="text-xl font-bold border-b border-slate-300 pb-3 mb-4 font-display">
            {state.propertyName} — {dict.rules.outputTitle}
          </h2>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-800">
            {currentRules}
          </pre>
        </article>
      </section>
    </div>
  );
};
