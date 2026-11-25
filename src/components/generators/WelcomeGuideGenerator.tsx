import React, {useState} from 'react';
import {
  Check,
  Clock,
  Copy,
  MapPin,
  Phone,
  Printer,
  Recycle,
  Thermometer,
  Wifi,
} from 'lucide-react';
import {generateWelcomeGuidePlainText} from '../../generators/templates';
import type {UiDictionary} from '../../i18n/translations';
import type {LangCode, WelcomeGuideFormState} from '../../types/hostcue';
import {WifiQrBadgeSvg} from '../OperationalWorkflowSvg';

interface WelcomeGuideGeneratorProps {
  state: WelcomeGuideFormState;
  onChange: (next: WelcomeGuideFormState) => void;
  lang: LangCode;
  dict: UiDictionary;
  onPrint: () => void;
}

export const WelcomeGuideGenerator: React.FC<WelcomeGuideGeneratorProps> = ({
  state,
  onChange,
  lang,
  dict,
  onPrint,
}) => {
  const [copied, setCopied] = useState(false);

  const plainText = generateWelcomeGuidePlainText(state, lang);

  const handleCopyPlain = async () => {
    try {
      await navigator.clipboard.writeText(plainText);
    } catch {
      // ignore clipboard fallback
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      <section className="no-print lg:col-span-5 bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 space-y-4">
        <h2 className="text-base font-bold text-slate-900 font-display">{dict.welcome.formTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.propertyName}
            </label>
            <input
              type="text"
              value={state.propertyName}
              onChange={(e) => onChange({...state, propertyName: e.target.value})}
              className="w-full h-9 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.hostName}
            </label>
            <input
              type="text"
              value={state.hostName}
              onChange={(e) => onChange({...state, hostName: e.target.value})}
              className="w-full h-9 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.welcome.welcomeSubtitle}
          </label>
          <input
            type="text"
            value={state.welcomeSubtitle}
            onChange={(e) => onChange({...state, welcomeSubtitle: e.target.value})}
            className="w-full h-9 px-3 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.wifiName}
            </label>
            <input
              type="text"
              value={state.wifiName}
              onChange={(e) => onChange({...state, wifiName: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.wifiPassword}
            </label>
            <input
              type="text"
              value={state.wifiPassword}
              onChange={(e) => onChange({...state, wifiPassword: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.wifiSpeed}
            </label>
            <input
              type="text"
              value={state.wifiSpeed}
              onChange={(e) => onChange({...state, wifiSpeed: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.checkInTime}
            </label>
            <input
              type="time"
              value={state.checkInTime}
              onChange={(e) => onChange({...state, checkInTime: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.checkOutTime}
            </label>
            <input
              type="time"
              value={state.checkOutTime}
              onChange={(e) => onChange({...state, checkOutTime: e.target.value})}
              className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.welcome.trashSchedule}
          </label>
          <input
            type="text"
            value={state.trashSchedule}
            onChange={(e) => onChange({...state, trashSchedule: e.target.value})}
            className="w-full h-9 px-3 text-sm font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.welcome.trashRules}
          </label>
          <textarea
            rows={2}
            value={state.trashRules}
            onChange={(e) => onChange({...state, trashRules: e.target.value})}
            className="w-full p-2.5 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            {dict.welcome.appliancesNotes}
          </label>
          <textarea
            rows={3}
            value={state.appliancesNotes}
            onChange={(e) => onChange({...state, appliancesNotes: e.target.value})}
            className="w-full p-2.5 text-sm bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.hostPhone}
            </label>
            <input
              type="text"
              value={state.hostPhone}
              onChange={(e) => onChange({...state, hostPhone: e.target.value})}
              className="w-full h-9 px-2.5 text-xs font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.emergencyPhone}
            </label>
            <input
              type="text"
              value={state.emergencyPhone}
              onChange={(e) => onChange({...state, emergencyPhone: e.target.value})}
              className="w-full h-9 px-2.5 text-xs font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.maintenancePhone}
            </label>
            <input
              type="text"
              value={state.maintenancePhone}
              onChange={(e) => onChange({...state, maintenancePhone: e.target.value})}
              className="w-full h-9 px-2.5 text-xs font-mono tabular-nums bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.bakeryRec}
            </label>
            <input
              type="text"
              value={state.bakeryRec}
              onChange={(e) => onChange({...state, bakeryRec: e.target.value})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.supermarketRec}
            </label>
            <input
              type="text"
              value={state.supermarketRec}
              onChange={(e) => onChange({...state, supermarketRec: e.target.value})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.transitRec}
            </label>
            <input
              type="text"
              value={state.transitRec}
              onChange={(e) => onChange({...state, transitRec: e.target.value})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {dict.welcome.restaurantRec}
            </label>
            <input
              type="text"
              value={state.restaurantRec}
              onChange={(e) => onChange({...state, restaurantRec: e.target.value})}
              className="w-full h-9 px-3 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"
            />
          </div>
        </div>
      </section>

      <div className="lg:col-span-7 space-y-4">
        <div className="no-print flex flex-wrap items-center justify-between gap-3 bg-white border border-[#E2E8F0] rounded-xl px-5 py-3.5">
          <span className="text-xs font-medium text-slate-600">{dict.welcome.sheetHeader}</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyPlain}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                copied
                  ? 'bg-emerald-50 text-[#059669] border-emerald-200'
                  : 'bg-[#F8FAFC] text-slate-700 border-[#E2E8F0] hover:bg-slate-100'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? dict.workspace.copied : dict.workspace.copyPlainText}</span>
            </button>
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#059669] hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{dict.workspace.printPdf}</span>
            </button>
          </div>
        </div>

        {/* Printable A4 Hospitality Sheet */}
        <article className="print-only-sheet bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 space-y-6 text-slate-900">
          <header className="border-b border-[#E2E8F0] pb-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-[#1E40AF] tracking-wide">
                {dict.welcome.sheetHeader}
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-display">
                {state.propertyName}
              </h3>
              <p className="text-sm text-slate-600 mt-1">{state.welcomeSubtitle}</p>
            </div>
            <div className="text-xs text-slate-600 sm:text-end space-y-1 shrink-0">
              <div className="font-semibold text-slate-900">{state.hostName}</div>
              <div className="inline-flex items-center gap-1.5 font-mono tabular-nums">
                <Clock className="w-3.5 h-3.5 text-[#1E40AF]" aria-hidden="true" />
                <span>
                  {dict.welcome.checkInTime} {state.checkInTime} · {dict.welcome.checkOutTime}{' '}
                  {state.checkOutTime}
                </span>
              </div>
            </div>
          </header>

          {/* WiFi Highlight Row */}
          <div className="print-break-inside-avoid bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-4 flex items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1E40AF]">
                <Wifi className="w-4 h-4" aria-hidden="true" />
                <span>{dict.welcome.sheetWifi}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 text-sm">
                <div>
                  <span className="text-slate-500 text-xs block">{dict.welcome.networkLabel}</span>
                  <span className="font-mono font-semibold text-slate-900">{state.wifiName}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">{dict.welcome.passwordLabel}</span>
                  <span className="font-mono font-semibold tabular-nums text-slate-900">
                    {state.wifiPassword}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">{dict.welcome.speedLabel}</span>
                  <span className="font-mono font-medium tabular-nums text-[#059669]">
                    {state.wifiSpeed}
                  </span>
                </div>
              </div>
            </div>
            <WifiQrBadgeSvg />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Waste & Recycling */}
            <div className="print-break-inside-avoid space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#059669]">
                <Recycle className="w-4 h-4" aria-hidden="true" />
                <span>{dict.welcome.sheetTrash}</span>
              </div>
              <p className="text-xs font-mono tabular-nums font-semibold text-slate-700">
                {state.trashSchedule}
              </p>
              <p className="text-sm leading-relaxed text-slate-700">{state.trashRules}</p>
            </div>

            {/* Appliances & Climate */}
            <div className="print-break-inside-avoid space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D97706]">
                <Thermometer className="w-4 h-4" aria-hidden="true" />
                <span>{dict.welcome.sheetAppliances}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700">{state.appliancesNotes}</p>
            </div>
          </div>

          {/* Local Recommendations */}
          <div className="print-break-inside-avoid border-t border-[#E2E8F0] pt-5 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E40AF]">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              <span>{dict.welcome.sheetLocal}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-[#F8FAFC] rounded-lg px-3.5 py-2.5 border border-[#E2E8F0]">
                <span className="text-xs font-semibold text-slate-500 block">
                  {dict.welcome.bakeryLabel}
                </span>
                <span className="text-slate-800">{state.bakeryRec}</span>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg px-3.5 py-2.5 border border-[#E2E8F0]">
                <span className="text-xs font-semibold text-slate-500 block">
                  {dict.welcome.supermarketLabel}
                </span>
                <span className="text-slate-800">{state.supermarketRec}</span>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg px-3.5 py-2.5 border border-[#E2E8F0]">
                <span className="text-xs font-semibold text-slate-500 block">
                  {dict.welcome.transitLabel}
                </span>
                <span className="text-slate-800">{state.transitRec}</span>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg px-3.5 py-2.5 border border-[#E2E8F0]">
                <span className="text-xs font-semibold text-slate-500 block">
                  {dict.welcome.restaurantLabel}
                </span>
                <span className="text-slate-800">{state.restaurantRec}</span>
              </div>
            </div>
          </div>

          {/* Emergency & Assistance Contacts */}
          <div className="print-break-inside-avoid border-t border-[#E2E8F0] pt-5 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Phone className="w-4 h-4 text-[#1E40AF]" aria-hidden="true" />
              <span>{dict.welcome.sheetContacts}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">{dict.welcome.hostLabel}</span>
                <span className="font-mono tabular-nums font-semibold text-slate-900">
                  {state.hostPhone}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{dict.welcome.emergencyLabel}</span>
                <span className="font-mono tabular-nums font-bold text-[#D97706]">
                  {state.emergencyPhone}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">{dict.welcome.maintenanceLabel}</span>
                <span className="font-mono tabular-nums font-semibold text-slate-900">
                  {state.maintenancePhone}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
