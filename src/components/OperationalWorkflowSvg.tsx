import React from 'react';

export const BrandMarkSvg: React.FC<{className?: string}> = ({className = 'w-6 h-6'}) => (
  <svg
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="2" width="24" height="24" rx="6" fill="#1E40AF" />
    <path
      d="M7.5 13.5L14 8L20.5 13.5V20C20.5 20.5523 20.0523 21 19.5 21H8.5C7.94772 21 7.5 20.5523 7.5 20V13.5Z"
      stroke="#FFFFFF"
      strokeWidth="1.75"
      strokeLinejoin="round"
    />
    <circle cx="14" cy="15.5" r="2" fill="#059669" />
  </svg>
);

export const OperationalWorkflowSvg: React.FC = () => (
  <svg
    viewBox="0 0 760 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto max-w-3xl"
    role="img"
    aria-label="HostCue five-step guest stay operations workflow"
  >
    <line x1="76" y1="32" x2="684" y2="32" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />

    <g>
      <circle cx="76" cy="32" r="18" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="1.75" />
      <rect x="69" y="25" width="14" height="14" rx="2" stroke="#1E40AF" strokeWidth="1.5" />
      <line x1="72" y1="29" x2="80" y2="29" stroke="#1E40AF" strokeWidth="1.5" />
      <line x1="72" y1="33" x2="78" y2="33" stroke="#1E40AF" strokeWidth="1.5" />
      <text x="76" y="70" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
        01 · Listing
      </text>
    </g>

    <g>
      <circle cx="228" cy="32" r="18" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="1.75" />
      <path d="M220 26H236V36H226L222 39V36H220V26Z" stroke="#1E40AF" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="228" y="70" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
        02 · Messages
      </text>
    </g>

    <g>
      <circle cx="380" cy="32" r="18" fill="#FFFFFF" stroke="#059669" strokeWidth="1.75" />
      <path d="M373 25H383L387 29V39H373V25Z" stroke="#059669" strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="376" y1="32" x2="384" y2="32" stroke="#059669" strokeWidth="1.5" />
      <line x1="376" y1="35" x2="382" y2="35" stroke="#059669" strokeWidth="1.5" />
      <text x="380" y="70" textAnchor="middle" fill="#0F172A" fontSize="11" fontWeight="600">
        03 · PDF Guide
      </text>
    </g>

    <g>
      <circle cx="532" cy="32" r="18" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.75" />
      <path d="M532 24L539 27V33C539 36.8 535.9 39.2 532 40.5C528.1 39.2 525 36.8 525 33V27L532 24Z" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="532" y="70" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
        04 · Rules
      </text>
    </g>

    <g>
      <circle cx="684" cy="32" r="18" fill="#FFFFFF" stroke="#1E40AF" strokeWidth="1.75" />
      <path d="M684 25L686.2 29.5L691 30.2L687.5 33.6L688.3 38.5L684 36.2L679.7 38.5L680.5 33.6L677 30.2L681.8 29.5L684 25Z" stroke="#1E40AF" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="684" y="70" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="600">
        05 · Reviews
      </text>
    </g>
  </svg>
);

export const WifiQrBadgeSvg: React.FC = () => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14 shrink-0"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="60" height="60" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
    <rect x="10" y="10" width="16" height="16" rx="2" stroke="#1E40AF" strokeWidth="2" />
    <rect x="15" y="15" width="6" height="6" fill="#1E40AF" />
    <rect x="38" y="10" width="16" height="16" rx="2" stroke="#1E40AF" strokeWidth="2" />
    <rect x="43" y="15" width="6" height="6" fill="#1E40AF" />
    <rect x="10" y="38" width="16" height="16" rx="2" stroke="#1E40AF" strokeWidth="2" />
    <rect x="15" y="43" width="6" height="6" fill="#1E40AF" />
    <path d="M38 38H44V44H38V38ZM48 38H54V44H48V38ZM43 44H49V50H43V44ZM38 49H43V54H38V49ZM49 49H54V54H49V49Z" fill="#0F172A" />
    <rect x="30" y="14" width="4" height="12" fill="#059669" />
    <rect x="30" y="30" width="4" height="10" fill="#1E40AF" />
    <rect x="14" y="30" width="12" height="4" fill="#1E40AF" />
  </svg>
);
