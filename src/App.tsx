import {useCallback, useState} from 'react';
import {EditorialSeoSection} from './components/EditorialSeoSection';
import {Footer} from './components/Footer';
import {Header} from './components/Header';
import {HostEssentialsAffiliateBlock, MediaNetAdSlot} from './components/MonetizationSlots';
import {OperationalWorkflowSvg} from './components/OperationalWorkflowSvg';
import {WorkspaceToolbar} from './components/WorkspaceToolbar';
import {HouseRulesGenerator} from './components/generators/HouseRulesGenerator';
import {ListingGenerator} from './components/generators/ListingGenerator';
import {ReviewRepliesGenerator} from './components/generators/ReviewRepliesGenerator';
import {StageMessagesGenerator} from './components/generators/StageMessagesGenerator';
import {WelcomeGuideGenerator} from './components/generators/WelcomeGuideGenerator';
import {SEO_COPY, detectInitialLanguage, getLanguageMeta} from './constants/seo';
import {useLocalWorkspace} from './hooks/useLocalWorkspace';
import {useSeoHead} from './hooks/useSeoHead';
import {UI_TRANSLATIONS} from './i18n/translations';
import type {LangCode} from './types/hostcue';

export default function App() {
  const [lang, setLang] = useState<LangCode>(() => detectInitialLanguage());
  const {
    workspace,
    setWorkspace,
    setActiveTab,
    exportWorkspaceJson,
    importWorkspaceJson,
    resetWorkspace,
  } = useLocalWorkspace();

  useSeoHead(lang, workspace.activeTab);

  const handleChangeLang = useCallback((nextLang: LangCode) => {
    setLang(nextLang);
    try {
      window.localStorage.setItem('hostcue_lang_v1', nextLang);
    } catch {
      // ignore storage errors
    }
    try {
      const url = new URL(window.location.href);
      if (nextLang === 'en') {
        url.searchParams.delete('lang');
      } else {
        url.searchParams.set('lang', nextLang);
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore history errors in sandboxed frames
    }
  }, []);

  const handlePrintSheet = useCallback(() => {
    if (workspace.activeTab !== 'welcome' && workspace.activeTab !== 'rules') {
      setActiveTab('welcome');
      window.setTimeout(() => {
        window.print();
      }, 120);
      return;
    }
    window.print();
  }, [workspace.activeTab, setActiveTab]);

  const dict = UI_TRANSLATIONS[lang];
  const seo = SEO_COPY[lang];
  const dir = getLanguageMeta(lang).dir;

  return (
    <div dir={dir} className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      <Header
        lang={lang}
        onChangeLang={handleChangeLang}
        onSelectTab={setActiveTab}
        onPrintSheet={handlePrintSheet}
        dict={dict}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <section className="no-print bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-8 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-semibold text-[#1E40AF]">{dict.hero.kicker}</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 text-balance font-display">
                {seo.h1}
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {seo.subtitle}
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <OperationalWorkflowSvg />
            </div>
          </div>
        </section>

        <section id="workspace" aria-label="HostCue Generator Workspace">
          <WorkspaceToolbar
            activeTab={workspace.activeTab}
            onSelectTab={setActiveTab}
            lang={lang}
            dict={dict}
            onExportJson={exportWorkspaceJson}
            onImportJson={importWorkspaceJson}
            onResetDefaults={resetWorkspace}
          />

          {workspace.activeTab === 'listing' && (
            <ListingGenerator
              state={workspace.listing}
              onChange={(listing) => setWorkspace((prev) => ({...prev, listing}))}
              lang={lang}
              dict={dict}
            />
          )}

          {workspace.activeTab === 'messages' && (
            <StageMessagesGenerator
              state={workspace.messages}
              onChange={(messages) => setWorkspace((prev) => ({...prev, messages}))}
              dict={dict}
            />
          )}

          {workspace.activeTab === 'welcome' && (
            <WelcomeGuideGenerator
              state={workspace.welcome}
              onChange={(welcome) => setWorkspace((prev) => ({...prev, welcome}))}
              lang={lang}
              dict={dict}
              onPrint={handlePrintSheet}
            />
          )}

          {workspace.activeTab === 'reviews' && (
            <ReviewRepliesGenerator
              state={workspace.reviews}
              onChange={(reviews) => setWorkspace((prev) => ({...prev, reviews}))}
              lang={lang}
              dict={dict}
            />
          )}

          {workspace.activeTab === 'rules' && (
            <HouseRulesGenerator
              state={workspace.rules}
              onChange={(rules) => setWorkspace((prev) => ({...prev, rules}))}
              lang={lang}
              dict={dict}
              onPrint={handlePrintSheet}
            />
          )}
        </section>

        <MediaNetAdSlot
          slotId="hostcue-medianet-midpage"
          placement="mid-page"
          adLabel={dict.monetization.adLabel}
        />

        <HostEssentialsAffiliateBlock dict={dict} />

        <EditorialSeoSection dict={dict} />

        <MediaNetAdSlot
          slotId="hostcue-medianet-footer"
          placement="footer"
          adLabel={dict.monetization.adLabel}
        />
      </main>

      <Footer lang={lang} onChangeLang={handleChangeLang} dict={dict} />
    </div>
  );
}
