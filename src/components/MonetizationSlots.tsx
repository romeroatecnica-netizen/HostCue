import React from 'react';
import {ExternalLink, KeyRound, PackageCheck, QrCode, Trash2} from 'lucide-react';
import type {UiDictionary} from '../i18n/translations';

interface MediaNetAdSlotProps {
  slotId: string;
  placement: 'mid-page' | 'footer';
  adLabel: string;
}

export const MediaNetAdSlot: React.FC<MediaNetAdSlotProps> = ({slotId, placement, adLabel}) => {
  return (
    <aside
      aria-label={`${adLabel} (${placement})`}
      className="no-print my-8"
    >
      {/*
        Media.net Ad Unit Container — Replace inner placeholder with live Media.net <script> / window._mNHandle tag.
        Reserved min-height prevents Cumulative Layout Shift (CLS) and never overlaps generated copy or printable sheets.
      */}
      <div
        id={slotId}
        data-ad-provider="media-net"
        data-ad-placement={placement}
        className="w-full min-h-[100px] sm:min-h-[110px] bg-white border border-dashed border-[#CBD5E1] rounded-xl flex flex-col items-center justify-center px-4 py-4 text-center"
      >
        <span className="text-[11px] font-medium text-slate-400 tracking-wide">
          {adLabel} · Media.net Responsive Container ({placement})
        </span>
        <span className="text-xs text-slate-400 font-mono mt-1">
          Slot #{slotId} · Reserved 100px min-height (CLS-safe)
        </span>
      </div>
    </aside>
  );
};

interface HostEssentialsAffiliateBlockProps {
  dict: UiDictionary;
}

const ITEM_ICONS = [KeyRound, QrCode, Trash2, PackageCheck];

export const HostEssentialsAffiliateBlock: React.FC<HostEssentialsAffiliateBlockProps> = ({dict}) => {
  return (
    <section
      aria-labelledby="host-essentials-heading"
      className="no-print bg-white border border-[#E2E8F0] rounded-xl p-6 sm:p-7 my-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-5 border-b border-[#E2E8F0]">
        <div>
          <h2 id="host-essentials-heading" className="text-lg font-bold text-slate-900 font-display">
            {dict.monetization.essentialsHeading}
          </h2>
          <p className="text-sm text-slate-600 mt-1">{dict.monetization.essentialsSubheading}</p>
        </div>
        <span className="text-xs text-slate-500 shrink-0">{dict.monetization.disclosure}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
        {dict.monetization.items.map((item, idx) => {
          const Icon = ITEM_ICONS[idx % ITEM_ICONS.length];
          return (
            <div key={item.title} className="flex flex-col justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1E40AF]">
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{item.category}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-display">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-600">{item.description}</p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E40AF] hover:underline underline-offset-4 w-fit"
              >
                <span>{item.ctaLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
