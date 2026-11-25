import React, {useRef, useState} from 'react';
import {
  BookOpen,
  Check,
  Download,
  FileText,
  Link2,
  MessageSquare,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  Upload,
} from 'lucide-react';
import {getCanonicalUrl} from '../constants/seo';
import type {UiDictionary} from '../i18n/translations';
import type {GeneratorTab, LangCode} from '../types/hostcue';

interface WorkspaceToolbarProps {
  activeTab: GeneratorTab;
  onSelectTab: (tab: GeneratorTab) => void;
  lang: LangCode;
  dict: UiDictionary;
  onExportJson: () => void;
  onImportJson: (jsonText: string) => boolean;
  onResetDefaults: () => void;
}

const TAB_ICONS: Record<GeneratorTab, React.ComponentType<{className?: string}>> = {
  listing: FileText,
  messages: MessageSquare,
  welcome: BookOpen,
  reviews: ShieldAlert,
  rules: ShieldCheck,
};

const TAB_ORDER: GeneratorTab[] = ['listing', 'messages', 'welcome', 'reviews', 'rules'];

export const WorkspaceToolbar: React.FC<WorkspaceToolbarProps> = ({
  activeTab,
  onSelectTab,
  lang,
  dict,
  onExportJson,
  onImportJson,
  onResetDefaults,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [confirmingReset, setConfirmingReset] = useState(false);

  const showTempMessage = (msg: string) => {
    setStatusMessage(msg);
    window.setTimeout(() => {
      setStatusMessage((curr) => (curr === msg ? null : curr));
    }, 2600);
  };

  const handleCopyCanonicalLink = async () => {
    const url = getCanonicalUrl(lang);
    try {
      await navigator.clipboard.writeText(url);
      showTempMessage(dict.workspace.linkCopied);
    } catch {
      showTempMessage(url);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = onImportJson(String(reader.result ?? ''));
      showTempMessage(ok ? dict.workspace.importSuccess : dict.workspace.importError);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const handleResetClick = () => {
    if (!confirmingReset) {
      setConfirmingReset(true);
      window.setTimeout(() => setConfirmingReset(false), 3200);
      return;
    }
    onResetDefaults();
    setConfirmingReset(false);
  };

  return (
    <div className="no-print bg-white border border-[#E2E8F0] rounded-xl p-3 sm:p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div
          role="tablist"
          aria-label="HostCue Generators"
          className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0"
        >
          {TAB_ORDER.map((tab) => {
            const Icon = TAB_ICONS[tab];
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectTab(tab)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF] ${
                  isActive
                    ? 'bg-[#1E40AF] text-white'
                    : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-[#E2E8F0]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{dict.tabs[tab]}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {statusMessage ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#059669] px-2">
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              {statusMessage}
            </span>
          ) : (
            <span className="text-xs text-slate-500 px-1.5 hidden sm:inline">
              {dict.workspace.localSaved}
            </span>
          )}

          <button
            type="button"
            onClick={onExportJson}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{dict.workspace.exportJson}</span>
          </button>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{dict.workspace.importJson}</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={handleCopyCanonicalLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-[#F8FAFC] hover:bg-slate-100 border border-[#E2E8F0] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Link2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{dict.workspace.copyLink}</span>
          </button>

          <button
            type="button"
            onClick={handleResetClick}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer border ${
              confirmingReset
                ? 'bg-amber-50 text-[#D97706] border-amber-300'
                : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-100 border-[#E2E8F0]'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{confirmingReset ? dict.workspace.confirmReset : dict.workspace.resetDefaults}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
