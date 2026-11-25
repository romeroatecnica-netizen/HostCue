import React, {useState} from 'react';
import {Check, Copy, RotateCcw} from 'lucide-react';
import {generateListingCopy} from '../../generators/templates';
import type {UiDictionary} from '../../i18n/translations';
import type {
  GuestProfile,
  LangCode,
  ListingFormState,
  PropertyType,
  StrengthKey,
} from '../../types/hostcue';

interface ListingGeneratorProps {
  state: ListingFormState;
  onChange: (next: ListingFormState) => void;
  lang: LangCode;
  dict: UiDictionary;
}

const PROPERTY_TYPES: PropertyType[] = ['city_apartment', 'house_patio', 'studio_loft', 'family_home'];
const GUEST_PROFILES: GuestProfile[] = ['remote_workers', 'couples_explorers', 'families', 'groups'];
const STRENGTH_KEYS: StrengthKey[] = [
  'natural_light',
  'fast_fiber',
  'private_parking',
  'terrace_balcony',
  'air_conditioning',
  'workspace',
  'full_kitchen',
  'quiet_street',
  'self_checkin',
  'washer_dryer',
];

export const ListingGenerator: React.FC<ListingGeneratorProps> = ({
  state,
  onChange,
  lang,
  dict,
}) => {
  const [copiedTitle, setCopiedTitle] = useState(false);
  const [copiedAll, setCopiedAll] = useState(false);

  const generated = generateListingCopy(state, lang);
  const currentTitle = state.editedTitle ?? generated.title;
  const currentBody = state.editedBody ?? generated.body;
  const hasManualEdits = state.editedTitle !== null || state.editedBody !== null;

  const toggleStrength = (key: StrengthKey) => {
    const exists = state.strengths.includes(key);
    const nextStrengths = exists
      ? state.strengths.filter((item) => item !== key)
      : [...state.strengths, key];
    onChange({...state, strengths: nextStrengths});
  };

  const copyText = async (text: string, which: 'title' | 'all') => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore clipboard fallback
    }
    if (which === 'title') {
      setCopiedTitle(true);
      window.setTimeout(() => setCopiedTitle(false), 1800);
    } else {
      setCopiedAll(true);
      window.setTimeout(() => setCopiedAll(false), 1800);
    }
  };

  const titleLen = currentTitle.length;
  const bodyWords = currentBody.trim() ? currentBody.trim().split(/\s+/).length : 0;

  return (
    <div className="no-print grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <section className="lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-5">
        <h2 className="text-base font-bold text-slate-900 font-display">{dict.listing.formTitle}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.listing.propertyName}
            </label>
            <input
              type="text"
              value={state.propertyName}
              onChange={(e) => onChange({...state, propertyName: e.target.value})}
              className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {dict.listing.propertyType}
              </label>
              <select
                value={state.propertyType}
                onChange={(e) => onChange({...state, propertyType: e.target.value as PropertyType})}
                className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt} value={pt}>
                    {dict.listing.propertyTypes[pt]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {dict.listing.guestProfile}
              </label>
              <select
                value={state.guestProfile}
                onChange={(e) => onChange({...state, guestProfile: e.target.value as GuestProfile})}
                className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              >
                {GUEST_PROFILES.map((gp) => (
                  <option key={gp} value={gp}>
                    {dict.listing.guestProfiles[gp]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {dict.listing.maxGuests}
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={state.maxGuests}
                onChange={(e) => onChange({...state, maxGuests: Math.max(1, Number(e.target.value) || 1)})}
                className="w-full h-10 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {dict.listing.bedrooms}
              </label>
              <input
                type="number"
                min={0}
                max={12}
                value={state.bedrooms}
                onChange={(e) => onChange({...state, bedrooms: Math.max(0, Number(e.target.value) || 0)})}
                className="w-full h-10 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {dict.listing.wifiMbps}
              </label>
              <input
                type="number"
                min={10}
                max={10000}
                step={10}
                value={state.wifiMbps}
                onChange={(e) => onChange({...state, wifiMbps: Math.max(10, Number(e.target.value) || 100)})}
                className="w-full h-10 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
              />
            </div>
          </div>

          <div>
            <span className="block text-xs font-semibold text-slate-700 mb-2">
              {dict.listing.strengths}
            </span>
            <div className="flex flex-wrap gap-2">
              {STRENGTH_KEYS.map((key) => {
                const active = state.strengths.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleStrength(key)}
                    aria-pressed={active}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#1E40AF]/10 text-[#1E40AF] border-[#1E40AF]/40'
                        : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-slate-100'
                    }`}
                  >
                    {dict.listing.strengthLabels[key]}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.listing.customStrength}
            </label>
            <input
              type="text"
              placeholder={dict.listing.customStrengthPlaceholder}
              value={state.customStrength}
              onChange={(e) => onChange({...state, customStrength: e.target.value})}
              className="w-full h-10 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {dict.listing.locationNotes}
            </label>
            <textarea
              rows={2}
              value={state.locationNotes}
              onChange={(e) => onChange({...state, locationNotes: e.target.value})}
              className="w-full p-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
            />
          </div>
        </div>
      </section>

      <section className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 font-display">{dict.listing.outputTitle}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{dict.workspace.editableHint}</p>
          </div>
          <div className="flex items-center gap-2">
            {hasManualEdits && (
              <button
                type="button"
                onClick={() => onChange({...state, editedTitle: null, editedBody: null})}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D97706] bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{dict.workspace.resetEdits}</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => copyText(`${currentTitle}\n\n${currentBody}`, 'all')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white rounded-lg transition-colors cursor-pointer ${
                copiedAll ? 'bg-[#059669]' : 'bg-[#1E40AF] hover:bg-blue-900'
              }`}
            >
              {copiedAll ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedAll ? dict.workspace.copied : dict.workspace.copyAll}</span>
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-700">{dict.listing.headlineLabel}</label>
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-mono tabular-nums ${
                  titleLen > 50 ? 'text-[#D97706] font-semibold' : 'text-slate-500'
                }`}
              >
                {titleLen} / 50 {dict.workspace.chars}
              </span>
              <button
                type="button"
                onClick={() => copyText(currentTitle, 'title')}
                className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-md border transition-colors cursor-pointer ${
                  copiedTitle
                    ? 'bg-emerald-50 text-[#059669] border-emerald-200'
                    : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-slate-100'
                }`}
              >
                {copiedTitle ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedTitle ? dict.workspace.copied : dict.workspace.copyTitle}</span>
              </button>
            </div>
          </div>
          <input
            type="text"
            value={currentTitle}
            onChange={(e) => onChange({...state, editedTitle: e.target.value})}
            className="w-full h-11 px-3.5 text-sm font-semibold text-slate-900 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-semibold text-slate-700">{dict.listing.descriptionLabel}</label>
            <span className="text-xs font-mono tabular-nums text-slate-500">
              {bodyWords} {dict.workspace.words} · {currentBody.length} {dict.workspace.chars}
            </span>
          </div>
          <textarea
            rows={14}
            value={currentBody}
            onChange={(e) => onChange({...state, editedBody: e.target.value})}
            className="w-full p-3.5 text-sm leading-relaxed text-slate-800 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:bg-white"
          />
        </div>
      </section>
    </div>
  );
};
