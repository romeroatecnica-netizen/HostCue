import {useEffect} from 'react';
import {
  CANONICAL_ORIGIN,
  SEO_COPY,
  SUPPORTED_LANGUAGES,
  getCanonicalUrl,
  getLanguageMeta,
} from '../constants/seo';
import {UI_TRANSLATIONS} from '../i18n/translations';
import type {GeneratorTab, LangCode} from '../types/hostcue';

function upsertMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    if (hreflang) {
      el.setAttribute('hreflang', hreflang);
    }
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeoHead(lang: LangCode, activeTab: GeneratorTab) {
  useEffect(() => {
    const langMeta = getLanguageMeta(lang);
    const seo = SEO_COPY[lang];
    const tabSeo = seo.tabMeta[activeTab];
    const dict = UI_TRANSLATIONS[lang];
    const canonicalUrl = getCanonicalUrl(lang);

    document.documentElement.lang = langMeta.code;
    document.documentElement.dir = langMeta.dir;

    const fullTitle = `${tabSeo.titleSuffix} | HostCue`;
    document.title = fullTitle;

    upsertMeta('name', 'description', tabSeo.description || seo.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', tabSeo.description || seo.description);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', tabSeo.description || seo.description);

    upsertLink('canonical', canonicalUrl);
    upsertLink('alternate', `${CANONICAL_ORIGIN}/`, 'x-default');
    for (const item of SUPPORTED_LANGUAGES) {
      upsertLink('alternate', getCanonicalUrl(item.code), item.hreflang);
    }

    const jsonLdPayload = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          '@id': `${CANONICAL_ORIGIN}/#webapp`,
          name: 'HostCue',
          url: canonicalUrl,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'All',
          inLanguage: langMeta.code,
          description: seo.description,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'HowTo',
          '@id': `${canonicalUrl}#howto-${activeTab}`,
          name: tabSeo.howToName,
          description: tabSeo.description,
          inLanguage: langMeta.code,
          step: tabSeo.howToSteps.map((stepText, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: stepText,
            text: stepText,
          })),
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          inLanguage: langMeta.code,
          mainEntity: dict.editorial.faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };

    let ldScript = document.getElementById('hostcue-jsonld') as HTMLScriptElement | null;
    if (!ldScript) {
      ldScript = document.createElement('script');
      ldScript.id = 'hostcue-jsonld';
      ldScript.type = 'application/ld+json';
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(jsonLdPayload);
  }, [lang, activeTab]);
}
