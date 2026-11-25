import type {
  GuestProfile,
  LangCode,
  PartyPolicy,
  PetPolicy,
  PropertyType,
  ReviewIssue,
  ReviewTone,
  SmokingPolicy,
  StayStage,
  StrengthKey,
  VisitorPolicy,
} from '../types/hostcue';

export interface EditorialSectionItem {
  title: string;
  body: string;
  bullets: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AffiliateItem {
  title: string;
  category: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export interface UiDictionary {
  nav: {
    generators: string;
    welcomeGuide: string;
    playbook: string;
    faq: string;
    printSheet: string;
  };
  hero: {
    kicker: string;
    ctaStart: string;
  };
  tabs: {
    listing: string;
    messages: string;
    welcome: string;
    reviews: string;
    rules: string;
  };
  workspace: {
    localSaved: string;
    exportJson: string;
    importJson: string;
    copyLink: string;
    linkCopied: string;
    resetDefaults: string;
    confirmReset: string;
    importSuccess: string;
    importError: string;
    copied: string;
    copyAll: string;
    copyTitle: string;
    copyPlainText: string;
    printPdf: string;
    resetEdits: string;
    chars: string;
    words: string;
    editableHint: string;
  };
  listing: {
    formTitle: string;
    propertyName: string;
    propertyType: string;
    guestProfile: string;
    strengths: string;
    customStrength: string;
    customStrengthPlaceholder: string;
    locationNotes: string;
    maxGuests: string;
    bedrooms: string;
    wifiMbps: string;
    outputTitle: string;
    headlineLabel: string;
    descriptionLabel: string;
    propertyTypes: Record<PropertyType, string>;
    guestProfiles: Record<GuestProfile, string>;
    strengthLabels: Record<StrengthKey, string>;
  };
  messages: {
    formTitle: string;
    stageLabel: string;
    guestLangLabel: string;
    guestName: string;
    propertyName: string;
    checkInTime: string;
    checkOutTime: string;
    accessCode: string;
    accessNote: string;
    outputTitle: string;
    copyMessage: string;
    stages: Record<StayStage, string>;
  };
  welcome: {
    formTitle: string;
    propertyName: string;
    hostName: string;
    welcomeSubtitle: string;
    wifiName: string;
    wifiPassword: string;
    wifiSpeed: string;
    checkInTime: string;
    checkOutTime: string;
    trashRules: string;
    trashSchedule: string;
    appliancesNotes: string;
    hostPhone: string;
    emergencyPhone: string;
    maintenancePhone: string;
    bakeryRec: string;
    supermarketRec: string;
    transitRec: string;
    restaurantRec: string;
    sheetHeader: string;
    sheetWifi: string;
    sheetSchedule: string;
    sheetTrash: string;
    sheetAppliances: string;
    sheetContacts: string;
    sheetLocal: string;
    networkLabel: string;
    passwordLabel: string;
    speedLabel: string;
    bakeryLabel: string;
    supermarketLabel: string;
    transitLabel: string;
    restaurantLabel: string;
    hostLabel: string;
    emergencyLabel: string;
    maintenanceLabel: string;
  };
  reviews: {
    formTitle: string;
    issueLabel: string;
    toneLabel: string;
    guestName: string;
    propertyName: string;
    reviewSummary: string;
    correctiveAction: string;
    shortVariant: string;
    detailedVariant: string;
    copyVariant: string;
    issues: Record<ReviewIssue, string>;
    tones: Record<ReviewTone, string>;
  };
  rules: {
    formTitle: string;
    propertyName: string;
    propertyType: string;
    partyPolicy: string;
    petPolicy: string;
    smokingPolicy: string;
    visitorPolicy: string;
    quietHours: string;
    depositAmount: string;
    currency: string;
    cleaningCondition: string;
    outputTitle: string;
    copyRules: string;
    printRules: string;
    parties: Record<PartyPolicy, string>;
    pets: Record<PetPolicy, string>;
    smoking: Record<SmokingPolicy, string>;
    visitors: Record<VisitorPolicy, string>;
  };
  monetization: {
    adLabel: string;
    essentialsHeading: string;
    essentialsSubheading: string;
    disclosure: string;
    items: AffiliateItem[];
  };
  editorial: {
    heading: string;
    subheading: string;
    transparencyNotice: string;
    sections: EditorialSectionItem[];
    faqHeading: string;
    faqs: FaqItem[];
  };
  footer: {
    tagline: string;
    canonicalNote: string;
  };
}

const EN_DICT: UiDictionary = {
  nav: {
    generators: 'Generators',
    welcomeGuide: 'Welcome Guide',
    playbook: 'Host Playbook',
    faq: 'FAQ',
    printSheet: 'Print PDF',
  },
  hero: {
    kicker: '100% Local Browser Operations · Zero AI API Calls · 10 Languages',
    ctaStart: 'Open Workspace',
  },
  tabs: {
    listing: 'Listing Descriptions',
    messages: 'Stage Messages',
    welcome: 'Welcome Guide / PDF',
    reviews: 'Difficult Review Replies',
    rules: 'House Rules & Deposits',
  },
  workspace: {
    localSaved: 'Saved locally',
    exportJson: 'Export JSON',
    importJson: 'Import JSON',
    copyLink: 'Copy Link',
    linkCopied: 'Canonical link copied',
    resetDefaults: 'Reset',
    confirmReset: 'Confirm Reset?',
    importSuccess: 'Workspace imported from JSON',
    importError: 'Invalid JSON file format',
    copied: 'Copied',
    copyAll: 'Copy All',
    copyTitle: 'Copy Title',
    copyPlainText: 'Copy Plain Text',
    printPdf: 'Print / Save as PDF',
    resetEdits: 'Regenerate from Inputs',
    chars: 'chars',
    words: 'words',
    editableHint: 'Direct edit enabled — your changes save automatically to localStorage.',
  },
  listing: {
    formTitle: 'Property & Audience Inputs',
    propertyName: 'Property Name',
    propertyType: 'Property Type',
    guestProfile: 'Ideal Guest Profile',
    strengths: 'Key Verified Strengths',
    customStrength: 'Additional Highlight',
    customStrengthPlaceholder: 'e.g., Step-free elevator access',
    locationNotes: 'Neighborhood & Transit Notes',
    maxGuests: 'Max Guests',
    bedrooms: 'Bedrooms',
    wifiMbps: 'WiFi Mbps',
    outputTitle: 'Conversion-Ready Listing Copy',
    headlineLabel: 'Listing Title (Target ≤ 50 chars for Airbnb)',
    descriptionLabel: 'Structured Description (Airbnb & Booking.com)',
    propertyTypes: {
      city_apartment: 'City Apartment',
      house_patio: 'House with Patio / Garden',
      studio_loft: 'Studio / Loft',
      family_home: 'Family Home',
    },
    guestProfiles: {
      remote_workers: 'Remote Workers',
      couples_explorers: 'Couples & City Explorers',
      families: 'Families',
      groups: 'Groups',
    },
    strengthLabels: {
      natural_light: 'Natural light',
      fast_fiber: 'Fast fiber WiFi',
      private_parking: 'Private parking',
      terrace_balcony: 'Terrace / balcony',
      air_conditioning: 'Air conditioning',
      workspace: 'Dedicated workspace',
      full_kitchen: 'Full kitchen',
      quiet_street: 'Quiet street',
      self_checkin: 'Self check-in',
      washer_dryer: 'Washer & dryer',
    },
  },
  messages: {
    formTitle: 'Stay Stage & Guest Variables',
    stageLabel: 'Stay Stage',
    guestLangLabel: 'Guest Message Language',
    guestName: 'Guest Name',
    propertyName: 'Property Name',
    checkInTime: 'Check-In Time',
    checkOutTime: 'Check-Out Time',
    accessCode: 'Access Code / Keybox PIN',
    accessNote: 'Arrival Link / Door Note',
    outputTitle: 'Ready-to-Send Guest Message',
    copyMessage: 'Copy Message',
    stages: {
      booking_confirmation: 'Booking Confirmation',
      checkin_instructions: 'Check-In Instructions',
      midstay_checkin: 'Mid-Stay Check-In',
      checkout_instructions: 'Check-Out Instructions',
      review_request: 'Review Request',
    },
  },
  welcome: {
    formTitle: 'Welcome Manual Details',
    propertyName: 'Property Title',
    hostName: 'Host / Manager Name',
    welcomeSubtitle: 'Welcome Header Note',
    wifiName: 'WiFi Network (SSID)',
    wifiPassword: 'WiFi Password',
    wifiSpeed: 'Connection Speed',
    checkInTime: 'Check-In',
    checkOutTime: 'Check-Out',
    trashRules: 'Waste & Recycling Rules',
    trashSchedule: 'Collection Hours',
    appliancesNotes: 'Appliances, Heating & AC Notes',
    hostPhone: 'Host Phone / WhatsApp',
    emergencyPhone: 'Local Emergency',
    maintenancePhone: '24/7 Maintenance / Locksmith',
    bakeryRec: 'Morning Bakery / Coffee',
    supermarketRec: 'Supermarket / Pharmacy',
    transitRec: 'Transit / Metro / Parking',
    restaurantRec: 'Recommended Local Dining',
    sheetHeader: 'Guest Welcome Guide & House Manual',
    sheetWifi: 'WiFi Access',
    sheetSchedule: 'Arrival & Departure',
    sheetTrash: 'Waste & Recycling',
    sheetAppliances: 'Climate & Appliances',
    sheetContacts: 'Assistance & Emergency Contacts',
    sheetLocal: 'Neighborhood Essentials',
    networkLabel: 'Network',
    passwordLabel: 'Password',
    speedLabel: 'Speed',
    bakeryLabel: 'Bakery & Coffee',
    supermarketLabel: 'Groceries',
    transitLabel: 'Transit',
    restaurantLabel: 'Dining',
    hostLabel: 'Host Support',
    emergencyLabel: 'Emergency',
    maintenanceLabel: 'Maintenance',
  },
  reviews: {
    formTitle: 'Review Context & Tone',
    issueLabel: 'Primary Issue Raised',
    toneLabel: 'Response Tone',
    guestName: 'Guest Name',
    propertyName: 'Property Name',
    reviewSummary: 'Specific Detail Mentioned in Review',
    correctiveAction: 'Action Taken / Verification',
    shortVariant: 'Concise Public Reply',
    detailedVariant: 'Detailed Reassurance Reply',
    copyVariant: 'Copy Reply',
    issues: {
      noise_neighbors: 'Noise / Neighbors',
      cleanliness: 'Cleanliness',
      unmet_expectations: 'Unmet Expectations',
      checkin_access: 'Check-In / Access',
    },
    tones: {
      calm_empathetic: 'Calm & Empathetic',
      firm_objective: 'Firm & Objective',
    },
  },
  rules: {
    formTitle: 'Rules & Security Deposit Parameters',
    propertyName: 'Property Name',
    propertyType: 'Property Type',
    partyPolicy: 'Parties & Events',
    petPolicy: 'Pets Policy',
    smokingPolicy: 'Smoking Policy',
    visitorPolicy: 'Additional Visitors',
    quietHours: 'Quiet Hours Window',
    depositAmount: 'Security Deposit Amount',
    currency: 'Currency',
    cleaningCondition: 'Checkout & Damage Condition',
    outputTitle: 'Structured House Rules & Deposit Terms',
    copyRules: 'Copy Rules',
    printRules: 'Print Rules Sheet',
    parties: {
      strictly_prohibited: 'Strictly prohibited (zero tolerance)',
      quiet_small_gatherings: 'Quiet small gatherings only (no loud audio)',
    },
    pets: {
      not_allowed: 'Pets not allowed',
      on_request: 'Small pets on prior written approval',
      allowed_with_fee: 'Pets allowed (extra cleaning fee applies)',
    },
    smoking: {
      strictly_no_smoking: 'Strictly non-smoking indoors & outdoors',
      terrace_only: 'Outdoors / terrace only (doors closed)',
    },
    visitors: {
      registered_only: 'Registered guests only overnight',
      daytime_until_22: 'Daytime visitors allowed until 22:00',
    },
  },
  monetization: {
    adLabel: 'Sponsored',
    essentialsHeading: 'Host Operations Hardware & Turnover Essentials',
    essentialsSubheading: 'Practical physical gear commonly paired with printable welcome sheets and self check-in workflows.',
    disclosure: 'Affiliate-ready links (rel="sponsored nofollow noopener").',
    items: [
      {
        title: 'Weatherproof Code Key Lockbox',
        category: 'Self Check-In',
        description: '4-digit mechanical resettable PIN box for backup keys and late-night arrivals.',
        ctaLabel: 'View Lockbox Gear',
        href: 'https://www.amazon.com/s?k=outdoor+key+lockbox+code',
      },
      {
        title: 'Acrylic Tabletop WiFi & QR Stand',
        category: 'Welcome Desk',
        description: 'A5/A6 clear counter frame for displaying your printed HostCue welcome sheet and WiFi details.',
        ctaLabel: 'View Counter Stands',
        href: 'https://www.amazon.com/s?k=acrylic+sign+holder+tabletop',
      },
      {
        title: 'Dual-Compartment Recycling Bins',
        category: 'Waste Sorting',
        description: 'Color-coded indoor waste and recycling bins that cut guest sorting errors.',
        ctaLabel: 'View Sorting Bins',
        href: 'https://www.amazon.com/s?k=dual+recycling+trash+bin+kitchen',
      },
      {
        title: 'Spare Hotel-Grade Linen & Towel Pack',
        category: 'Turnover Kit',
        description: 'High-durability cotton-blend sheet and towel sets labeled for rapid same-day turnovers.',
        ctaLabel: 'View Linen Sets',
        href: 'https://www.amazon.com/s?k=hotel+quality+white+towel+sheet+set',
      },
    ],
  },
  editorial: {
    heading: 'Airbnb & Booking Operations Playbook',
    subheading: 'Practical writing and guest-experience standards built to lift conversion while preventing avoidable 3-star complaints.',
    transparencyNotice:
      '100% client-side template and welcome-sheet generator for hosts. All text assembly runs locally in your browser without AI API calls; always verify local regulations, platform rules, and access codes before sharing.',
    sections: [
      {
        title: '01. Writing High-Converting Listings Without Creating Expectation Gaps',
        body: 'Overselling a small studio as "luxurious" or hiding stair climbs guarantees disappointed reviews. High-performing Airbnb and Booking.com hosts pair an exact 50-character headline with scannable facts: measured WiFi Mbps, exact walk times to transit, bed layout, and candid notes on neighborhood energy.',
        bullets: [
          'Keep Airbnb titles under 50 characters so key differentiators (parking, terrace, fiber) do not truncate on mobile.',
          'Lead with the primary guest benefit matched to your target traveler (ergonomic desk for remote workers vs. quiet street and crib for families).',
          'State practical constraints upfront (floor level, street noise on weekends, or paid street parking) to build immediate credibility.',
        ],
      },
      {
        title: '02. Sequencing Guest Messages Across Five Stay Touchpoints',
        body: 'Most guest support messages happen because arrival details arrive too late or checkout tasks feel ambiguous. A predictable five-stage message rhythm eliminates repetitive questions while keeping tone warm and concise.',
        bullets: [
          'Booking Confirmation: Thank the guest, confirm headcount, and state when check-in codes will be sent.',
          'Check-In Instructions (24h–48h prior): Share exact door/lockbox PIN, floor number, and WiFi name in one scannable block.',
          'Mid-Stay Check-In (Morning after night 1): Ask if heating, WiFi, and hot water are working properly so small issues are fixed before checkout.',
          'Check-Out & Review Request: Keep checkout requests under 4 steps and invite feedback politely without pressuring star ratings.',
        ],
      },
      {
        title: '03. Responding Calmly to Difficult Reviews (Noise, Cleanliness, Access)',
        body: 'Public review replies are written primarily for future bookers, not the past guest. Defensive arguments lower conversion; calm, factual responses showing concrete corrective action turn negative feedback into operational proof.',
        bullets: [
          'Acknowledge the specific friction point without admitting false claims or attacking the guest.',
          'State one verifiable action you completed (e.g., replaced keypad batteries, added acoustic seals, updated cleaner checklist).',
          'Keep concise replies under 60 words when the review is minor, and use a structured detailed reply for severe allegations.',
        ],
      },
      {
        title: '04. Printable Welcome Guides, House Rules & Security Deposits',
        body: 'Even tech-savvy guests appreciate a crisp one-page printed manual next to the kettle or router. Combining WiFi credentials, waste-sorting hours, appliance quirks, and emergency contacts on a single A4 sheet reduces late-night calls dramatically.',
        bullets: [
          'Place the printed Welcome Guide inside an acrylic counter frame near the entryway or dining table.',
          'Mirror your quiet hours and unregistered-visitor policy in both your pre-booking rules and the printed manual.',
          'Specify security deposit amounts and damage conditions clearly in numeric format prior to arrival.',
        ],
      },
    ],
    faqHeading: 'Frequently Asked Questions for Airbnb & Booking Hosts',
    faqs: [
      {
        question: 'Does HostCue send my property details, WiFi passwords, or access codes to any server?',
        answer:
          'No. HostCue runs 100% client-side in your browser using deterministic templates. Your property data, access PINs, and custom edits stay exclusively in your browser localStorage unless you export a JSON backup yourself.',
      },
      {
        question: 'How do I print the Welcome Guide or House Rules cleanly as a PDF?',
        answer:
          'Open the Welcome Guide / PDF or House Rules tab and click "Print / Save as PDF". HostCue uses dedicated @media print rules to hide all menus, forms, toolbars, and ad containers so only the formatted A4 hospitality sheet is printed or saved.',
      },
      {
        question: 'Can I generate guest messages in a different language than the app interface?',
        answer:
          'Yes. Inside the Stage Messages generator, you can keep your host workspace in English or Spanish while switching the Guest Message Language independently across all 10 supported languages.',
      },
      {
        question: 'What is the ideal length for an Airbnb listing title vs. Booking.com description?',
        answer:
          'Airbnb titles perform best at 40 to 50 characters so they display cleanly on mobile cards. Booking.com relies more on structured amenity sections and clear neighborhood proximity facts.',
      },
      {
        question: 'How can I transfer my property templates to another computer?',
        answer:
          'Click "Export JSON" in the workspace toolbar to download a portable backup of all 5 generators. On your other device, click "Import JSON" to restore your exact property configuration.',
      },
    ],
  },
  footer: {
    tagline: 'HostCue — Deterministic Operations Toolkit for Short-Term Rental Hosts',
    canonicalNote: 'Canonical edition:',
  },
};

const ES_DICT: UiDictionary = {
  nav: {
    generators: 'Generadores',
    welcomeGuide: 'Guía Bienvenida',
    playbook: 'Guía Práctica',
    faq: 'Preguntas',
    printSheet: 'Imprimir PDF',
  },
  hero: {
    kicker: '100 % local en tu navegador · Sin llamadas a APIs de IA · 10 idiomas',
    ctaStart: 'Abrir espacio de trabajo',
  },
  tabs: {
    listing: 'Descripciones de Anuncio',
    messages: 'Mensajes por Etapas',
    welcome: 'Guía de Bienvenida / PDF',
    reviews: 'Respuestas a Reseñas',
    rules: 'Normas y Fianzas',
  },
  workspace: {
    localSaved: 'Guardado local',
    exportJson: 'Exportar JSON',
    importJson: 'Importar JSON',
    copyLink: 'Copiar enlace',
    linkCopied: 'Enlace canónico copiado',
    resetDefaults: 'Restablecer',
    confirmReset: '¿Confirmar reinicio?',
    importSuccess: 'Espacio importado desde JSON',
    importError: 'Archivo JSON no válido',
    copied: 'Copiado',
    copyAll: 'Copiar todo',
    copyTitle: 'Copiar título',
    copyPlainText: 'Copiar texto plano',
    printPdf: 'Imprimir / Guardar PDF',
    resetEdits: 'Regenerar desde campos',
    chars: 'caracteres',
    words: 'palabras',
    editableHint: 'Edición directa activada: tus cambios se guardan automáticamente en localStorage.',
  },
  listing: {
    formTitle: 'Datos de la Propiedad y Huésped',
    propertyName: 'Nombre del alojamiento',
    propertyType: 'Tipo de alojamiento',
    guestProfile: 'Perfil de viajero ideal',
    strengths: 'Puntos fuertes verificados',
    customStrength: 'Punto fuerte adicional',
    customStrengthPlaceholder: 'Ej. Ascensor a cota cero',
    locationNotes: 'Entorno, barrio y transporte',
    maxGuests: 'Huéspedes máx.',
    bedrooms: 'Dormitorios',
    wifiMbps: 'Fibra Mbps',
    outputTitle: 'Texto Optimizado para Anuncio',
    headlineLabel: 'Título del anuncio (objetivo ≤ 50 caracteres en Airbnb)',
    descriptionLabel: 'Descripción estructurada (Airbnb y Booking.com)',
    propertyTypes: {
      city_apartment: 'Apartamento urbano',
      house_patio: 'Casa con patio / jardín',
      studio_loft: 'Estudio / Loft',
      family_home: 'Vivienda familiar',
    },
    guestProfiles: {
      remote_workers: 'Teletrabajadores',
      couples_explorers: 'Parejas y viajeros urbanos',
      families: 'Familias',
      groups: 'Grupos',
    },
    strengthLabels: {
      natural_light: 'Luz natural',
      fast_fiber: 'Fibra rápida',
      private_parking: 'Parking privado',
      terrace_balcony: 'Terraza / balcón',
      air_conditioning: 'Aire acondicionado',
      workspace: 'Zona de trabajo',
      full_kitchen: 'Cocina equipada',
      quiet_street: 'Calle tranquila',
      self_checkin: 'Llegada autónoma',
      washer_dryer: 'Lavadora y secadora',
    },
  },
  messages: {
    formTitle: 'Etapa de Estancia y Variables',
    stageLabel: 'Etapa del mensaje',
    guestLangLabel: 'Idioma del mensaje al huésped',
    guestName: 'Nombre del huésped',
    propertyName: 'Alojamiento',
    checkInTime: 'Hora de check-in',
    checkOutTime: 'Hora de check-out',
    accessCode: 'Código / PIN de acceso',
    accessNote: 'Enlace o nota de llegada',
    outputTitle: 'Mensaje Listo para Enviar',
    copyMessage: 'Copiar mensaje',
    stages: {
      booking_confirmation: 'Confirmación de reserva',
      checkin_instructions: 'Instrucciones de check-in',
      midstay_checkin: 'Seguimiento a mitad de estancia',
      checkout_instructions: 'Instrucciones de check-out',
      review_request: 'Solicitud de reseña',
    },
  },
  welcome: {
    formTitle: 'Contenido del Manual de Bienvenida',
    propertyName: 'Título del alojamiento',
    hostName: 'Anfitrión / Gestor',
    welcomeSubtitle: 'Subtítulo de bienvenida',
    wifiName: 'Red WiFi (SSID)',
    wifiPassword: 'Contraseña WiFi',
    wifiSpeed: 'Velocidad contratada',
    checkInTime: 'Check-in',
    checkOutTime: 'Check-out',
    trashRules: 'Normas de basura y reciclaje',
    trashSchedule: 'Horario de depósito',
    appliancesNotes: 'Uso de electrodomésticos, clima y caldera',
    hostPhone: 'Teléfono anfitrión / WhatsApp',
    emergencyPhone: 'Emergencias locales',
    maintenancePhone: 'Asistencia / Cerrajero 24h',
    bakeryRec: 'Panadería / Desayuno',
    supermarketRec: 'Supermercado / Farmacia',
    transitRec: 'Metro / Bus / Parking',
    restaurantRec: 'Restaurantes recomendados',
    sheetHeader: 'Guía de Bienvenida y Manual de la Casa',
    sheetWifi: 'Conexión WiFi',
    sheetSchedule: 'Horarios de Estancia',
    sheetTrash: 'Basura y Reciclaje',
    sheetAppliances: 'Climatización y Electrodomésticos',
    sheetContacts: 'Teléfonos de Urgencia y Asistencia',
    sheetLocal: 'Recomendaciones del Barrio',
    networkLabel: 'Red',
    passwordLabel: 'Clave',
    speedLabel: 'Velocidad',
    bakeryLabel: 'Panadería',
    supermarketLabel: 'Supermercado',
    transitLabel: 'Transporte',
    restaurantLabel: 'Restaurantes',
    hostLabel: 'Anfitrión',
    emergencyLabel: 'Urgencias',
    maintenanceLabel: 'Mantenimiento',
  },
  reviews: {
    formTitle: 'Motivo de la Reseña y Tono',
    issueLabel: 'Motivo principal',
    toneLabel: 'Tono de respuesta',
    guestName: 'Nombre del huésped',
    propertyName: 'Alojamiento',
    reviewSummary: 'Detalle concreto mencionado en la reseña',
    correctiveAction: 'Medida correctiva o verificación realizada',
    shortVariant: 'Variante corta y directa',
    detailedVariant: 'Variante detallada para futuros huéspedes',
    copyVariant: 'Copiar respuesta',
    issues: {
      noise_neighbors: 'Ruido / Vecinos',
      cleanliness: 'Limpieza',
      unmet_expectations: 'Expectativas no cumplidas',
      checkin_access: 'Check-in / Acceso',
    },
    tones: {
      calm_empathetic: 'Sereno y empático',
      firm_objective: 'Firme y objetivo',
    },
  },
  rules: {
    formTitle: 'Configuración de Normas y Fianza',
    propertyName: 'Alojamiento',
    propertyType: 'Tipo de propiedad',
    partyPolicy: 'Fiestas y eventos',
    petPolicy: 'Mascotas',
    smokingPolicy: 'Tabaco',
    visitorPolicy: 'Huéspedes adicionales',
    quietHours: 'Horario de silencio',
    depositAmount: 'Importe orientativo de fianza',
    currency: 'Moneda',
    cleaningCondition: 'Condiciones de limpieza y daños',
    outputTitle: 'Normas de la Casa y Fianza Estructuradas',
    copyRules: 'Copiar normas',
    printRules: 'Imprimir hoja de normas',
    parties: {
      strictly_prohibited: 'Estrictamente prohibidas (tolerancia cero)',
      quiet_small_gatherings: 'Solo reuniones tranquilas sin música alta',
    },
    pets: {
      not_allowed: 'No se admiten mascotas',
      on_request: 'Mascotas pequeñas bajo autorización previa',
      allowed_with_fee: 'Mascotas permitidas (suplemento de limpieza)',
    },
    smoking: {
      strictly_no_smoking: 'Prohibido fumar en todo el alojamiento',
      terrace_only: 'Solo permitido en terraza/exterior con puertas cerradas',
    },
    visitors: {
      registered_only: 'Solo personas registradas en la reserva',
      daytime_until_22: 'Visitas diurnas permitidas hasta las 22:00',
    },
  },
  monetization: {
    adLabel: 'Patrocinado',
    essentialsHeading: 'Equipamiento Operativo para Anfitriones',
    essentialsSubheading: 'Accesorios físicos habituales para acompañar entregas autónomas y hojas de bienvenida impresas.',
    disclosure: 'Enlaces preparados para afiliación (rel="sponsored nofollow noopener").',
    items: EN_DICT.monetization.items,
  },
  editorial: {
    heading: 'Guía Operativa para Anfitriones de Airbnb y Booking',
    subheading: 'Buenas prácticas de redacción, comunicación por etapas y gestión de incidencias para maximizar reservas sin generar falsas expectativas.',
    transparencyNotice:
      '100% client-side template and welcome-sheet generator for hosts. All text assembly runs locally in your browser without AI API calls; always verify local regulations, platform rules, and access codes before sharing.',
    sections: [
      {
        title: '01. Cómo estructurar un anuncio claro en Airbnb y Booking sin exageraciones',
        body: 'Prometer "lujo absoluto" en un piso sencillo genera reseñas de 3 estrellas. Los anuncios con mayor conversión combinan un título preciso de hasta 50 caracteres con datos verificables: velocidad de fibra real, minutos a pie al transporte, distribución de camas y notas honestas sobre el edificio.',
        bullets: [
          'Mantén el título de Airbnb por debajo de 50 caracteres para evitar cortes en el móvil.',
          'Adapta el primer párrafo al perfil real de viajero (escritorio ergonómico para teletrabajo o calle tranquila para familias).',
          'Indica de antemano escaleras, horarios de recogida de llaves o aparcamiento para evitar reclamaciones.',
        ],
      },
      {
        title: '02. Secuencia de mensajes por etapas: confirmación, check-in, estancia y check-out',
        body: 'El 80 % de las consultas repetitivas se resuelven enviando la información exacta en el momento adecuado. Escalonar cinco mensajes breves mejora la puntuación de comunicación sin resultar invasivo.',
        bullets: [
          'Confirmación: Agradece la reserva, confirma el número de huéspedes e indica cuándo recibirán los códigos.',
          'Check-in (24–48 h antes): Reúne dirección, PIN de caja de llaves, planta y nombre del WiFi en un solo bloque legible.',
          'Mitad de estancia: Pregunta a la mañana siguiente si climatización y agua caliente funcionan bien para corregir cualquier detalle a tiempo.',
          'Check-out y reseña: Limita las peticiones de salida a 3 o 4 puntos sencillos y pide valoración con naturalidad.',
        ],
      },
      {
        title: '03. Cómo responder con calma y profesionalidad a reseñas difíciles',
        body: 'Cuando respondes a una crítica por ruido, limpieza o acceso, tu lector real es el próximo huésped que evalúa reservar. Evita tonos defensivos y demuestra control operativo con hechos.',
        bullets: [
          'Reconoce el punto señalado sin discutir ni descalificar al huésped.',
          'Explica la acción concreta ejecutada (revisión de caldera, cambio de pilas en cerradura, refuerzo de limpieza).',
          'Usa respuestas breves para detalles menores y respuestas estructuradas cuando afecte a expectativas clave.',
        ],
      },
      {
        title: '04. Qué incluir en el manual de la casa y normas de fianza',
        body: 'Un manual de una página sobre la mesa ahorra llamadas nocturnas por la caldera, la contraseña WiFi o los cubos de reciclaje. Asegúrate de reflejar las mismas normas de silencio y fianza que figuran en el anuncio.',
        bullets: [
          'Coloca la guía impresa en un soporte acrílico visible junto a la entrada o el router.',
          'Destaca horarios de silencio, uso de climatización y normas de basura con números claros.',
          'Detalla el importe de fianza y criterios objetivos de limpieza o daños antes de la llegada.',
        ],
      },
    ],
    faqHeading: 'Preguntas Frecuentes para Gestores y Anfitriones',
    faqs: [
      {
        question: '¿HostCue envía mis códigos de acceso o claves WiFi a servidores externos?',
        answer:
          'No. Todo el ensamblaje de textos funciona de forma 100 % local y determinista en tu navegador sin llamadas a APIs externas. Tus datos se guardan solo en tu localStorage.',
      },
      {
        question: '¿Cómo imprimo únicamente la guía de bienvenida en PDF sin anuncios ni botones?',
        answer:
          'Desde la pestaña Guía de Bienvenida o Normas, pulsa «Imprimir / Guardar PDF». Las reglas @media print ocultan automáticamente menús, formularios, bloques editoriales y anuncios.',
      },
      {
        question: '¿Puedo generar mensajes para huéspedes extranjeros en otro idioma?',
        answer:
          'Sí. En Mensajes por Etapas puedes mantener la interfaz en español y cambiar el idioma del mensaje al huésped entre los 10 idiomas disponibles.',
      },
      {
        question: '¿Cómo guardo o traslado mis plantillas a otro ordenador?',
        answer:
          'Usa el botón «Exportar JSON» de la barra superior de herramientas para descargar tu configuración completa e impórtala en cualquier otro navegador.',
      },
    ],
  },
  footer: {
    tagline: 'HostCue — Herramienta operativa determinista para anfitriones de Airbnb y Booking',
    canonicalNote: 'Dominio canónico:',
  },
};

function makeCompactDict(
  base: UiDictionary,
  overrides: Partial<UiDictionary> & {
    tabs?: Partial<UiDictionary['tabs']>;
    nav?: Partial<UiDictionary['nav']>;
    hero?: Partial<UiDictionary['hero']>;
    workspace?: Partial<UiDictionary['workspace']>;
  }
): UiDictionary {
  return {
    ...base,
    ...overrides,
    nav: {...base.nav, ...(overrides.nav ?? {})},
    hero: {...base.hero, ...(overrides.hero ?? {})},
    tabs: {...base.tabs, ...(overrides.tabs ?? {})},
    workspace: {...base.workspace, ...(overrides.workspace ?? {})},
  };
}

const FR_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'Générateurs', welcomeGuide: 'Livret d’Accueil', playbook: 'Guide Hôte', faq: 'FAQ', printSheet: 'Imprimer PDF'},
  hero: {kicker: '100 % local dans votre navigateur · Zéro appel API IA · 10 langues', ctaStart: 'Ouvrir l’espace'},
  tabs: {listing: 'Descriptions d’Annonce', messages: 'Messages par Étape', welcome: 'Livret d’Accueil / PDF', reviews: 'Réponses aux Avis', rules: 'Règlement & Caution'},
  workspace: {
    localSaved: 'Enregistré localement',
    exportJson: 'Exporter JSON',
    importJson: 'Importer JSON',
    copyLink: 'Copier le lien',
    linkCopied: 'Lien canonique copié',
    resetDefaults: 'Réinitialiser',
    confirmReset: 'Confirmer ?',
    importSuccess: 'Espace importé depuis JSON',
    importError: 'Fichier JSON invalide',
    copied: 'Copié',
    copyAll: 'Tout copier',
    copyTitle: 'Copier le titre',
    copyPlainText: 'Copier texte brut',
    printPdf: 'Imprimer / Enregistrer PDF',
    resetEdits: 'Régénérer',
    chars: 'car.',
    words: 'mots',
    editableHint: 'Édition directe activée — sauvegarde automatique dans localStorage.',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Guide Opérationnel pour Hôtes Airbnb & Booking',
    subheading: 'Bonnes pratiques rédactionnelles pour convertir davantage tout en évitant les déceptions.',
    faqHeading: 'Questions Fréquentes des Hôtes',
  },
});

const DE_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'Generatoren', welcomeGuide: 'Gästemappe', playbook: 'Praxis-Leitfaden', faq: 'FAQ', printSheet: 'PDF drucken'},
  hero: {kicker: '100 % lokal im Browser · Keine KI-API-Aufrufe · 10 Sprachen', ctaStart: 'Arbeitsbereich öffnen'},
  tabs: {listing: 'Inseratstexte', messages: 'Phasen-Nachrichten', welcome: 'Gästemappe / PDF', reviews: 'Bewertungsantworten', rules: 'Hausregeln & Kaution'},
  workspace: {
    localSaved: 'Lokal gespeichert',
    exportJson: 'JSON exportieren',
    importJson: 'JSON importieren',
    copyLink: 'Link kopieren',
    linkCopied: 'Kanonischer Link kopiert',
    resetDefaults: 'Zurücksetzen',
    confirmReset: 'Bestätigen?',
    importSuccess: 'JSON erfolgreich importiert',
    importError: 'Ungültige JSON-Datei',
    copied: 'Kopiert',
    copyAll: 'Alles kopieren',
    copyTitle: 'Titel kopieren',
    copyPlainText: 'Klartext kopieren',
    printPdf: 'Drucken / Als PDF speichern',
    resetEdits: 'Neu generieren',
    chars: 'Zeichen',
    words: 'Wörter',
    editableHint: 'Direkte Bearbeitung aktiv — Änderungen werden automatisch im localStorage gespeichert.',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Praxis-Leitfaden für Airbnb- & Booking-Gastgeber',
    subheading: 'Klare Inseratstexte, strukturierte Kommunikation und souveränes Bewertungsmanagement ohne Übertreibung.',
    faqHeading: 'Häufige Fragen für Gastgeber',
  },
});

const PT_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'Geradores', welcomeGuide: 'Guia Boas-Vindas', playbook: 'Manual do Anfitrião', faq: 'FAQ', printSheet: 'Imprimir PDF'},
  hero: {kicker: '100% local no navegador · Sem chamadas de API de IA · 10 idiomas', ctaStart: 'Abrir painel'},
  tabs: {listing: 'Descrições de Anúncio', messages: 'Mensagens por Etapa', welcome: 'Manual da Casa / PDF', reviews: 'Respostas a Avaliações', rules: 'Regras e Caução'},
  workspace: {
    localSaved: 'Salvo localmente',
    exportJson: 'Exportar JSON',
    importJson: 'Importar JSON',
    copyLink: 'Copiar link',
    linkCopied: 'Link canônico copiado',
    resetDefaults: 'Restaurar',
    confirmReset: 'Confirmar?',
    importSuccess: 'Importado com sucesso',
    importError: 'Arquivo JSON inválido',
    copied: 'Copiado',
    copyAll: 'Copiar tudo',
    copyTitle: 'Copiar título',
    copyPlainText: 'Copiar texto',
    printPdf: 'Imprimir / Salvar PDF',
    resetEdits: 'Regenerar',
    chars: 'caract.',
    words: 'palavras',
    editableHint: 'Edição direta ativa — alterações salvas automaticamente no localStorage.',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Guia Prático de Operação para Airbnb e Booking',
    subheading: 'Estratégias claras de redação e atendimento para converter reservas sem gerar frustrações.',
    faqHeading: 'Perguntas Frequentes',
  },
});

const AR_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'الأدوات', welcomeGuide: 'دليل الترحيب', playbook: 'دليل المضيف', faq: 'الأسئلة', printSheet: 'طباعة PDF'},
  hero: {kicker: 'يعمل 100% محلياً في المتصفح · بدون واجهات ذكاء اصطناعي · 10 لغات', ctaStart: 'فتح مساحة العمل'},
  tabs: {listing: 'وصف الإعلان', messages: 'رسائل المراحل', welcome: 'دليل الترحيب / PDF', reviews: 'الرد على التقييمات', rules: 'القواعد والتأمين'},
  workspace: {
    localSaved: 'محفوظ محلياً',
    exportJson: 'تصدير JSON',
    importJson: 'استيراد JSON',
    copyLink: 'نسخ الرابط',
    linkCopied: 'تم نسخ الرابط الأساسي',
    resetDefaults: 'إعادة ضبط',
    confirmReset: 'تأكيد؟',
    importSuccess: 'تم استيراد الملف',
    importError: 'ملف JSON غير صالح',
    copied: 'تم النسخ',
    copyAll: 'نسخ الكل',
    copyTitle: 'نسخ العنوان',
    copyPlainText: 'نسخ النص',
    printPdf: 'طباعة / حفظ PDF',
    resetEdits: 'إعادة التوليد',
    chars: 'حرف',
    words: 'كلمة',
    editableHint: 'التعديل المباشر متاح — تُحفظ التغييرات تلقائياً في المتصفح.',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'دليل تشغيل مضيفي Airbnb وBooking',
    subheading: 'معايير عملية لكتابة الإعلانات ورسائل الضيوف والرد الدبلوماسي على التقييمات.',
    faqHeading: 'الأسئلة الشائعة للمضيفين',
  },
});

const HI_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'जेनरेटर', welcomeGuide: 'वेलकम गाइड', playbook: 'होस्ट गाइड', faq: 'FAQ', printSheet: 'PDF प्रिंट'},
  hero: {kicker: '100% ब्राउज़र में स्थानीय · कोई AI API कॉल नहीं · 10 भाषाएं', ctaStart: 'वर्कस्पेस खोलें'},
  tabs: {listing: 'लिस्टिंग विवरण', messages: 'स्टेज मैसेज', welcome: 'वेलकम गाइड / PDF', reviews: 'रिव्यू रिप्लाई', rules: 'नियम और डिपॉज़िट'},
  workspace: {
    localSaved: 'स्थानीय रूप से सहेजा गया',
    exportJson: 'JSON निर्यात',
    importJson: 'JSON आयात',
    copyLink: 'लिंक कॉपी करें',
    linkCopied: 'कैनोनिकल लिंक कॉपी हुआ',
    resetDefaults: 'रीसेट',
    confirmReset: 'पुष्टि करें?',
    importSuccess: 'JSON से आयात सफल',
    importError: 'अमान्य JSON फ़ाइल',
    copied: 'कॉपी किया गया',
    copyAll: 'सभी कॉपी करें',
    copyTitle: 'शीर्षक कॉपी करें',
    copyPlainText: 'टेक्स्ट कॉपी करें',
    printPdf: 'प्रिंट / PDF सहेजें',
    resetEdits: 'पुनः बनाएं',
    chars: 'अक्षर',
    words: 'शब्द',
    editableHint: 'सीधा संपादन सक्षम — बदलाव अपने आप localStorage में सहेजे जाते हैं।',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Airbnb और Booking होस्ट संचालन गाइड',
    subheading: 'अधिक बुकिंग और बेहतर गेस्ट अनुभव के लिए व्यावहारिक लेखन और नियम मानक।',
    faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  },
});

const RU_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'Генераторы', welcomeGuide: 'Гид гостя', playbook: 'Руководство', faq: 'Вопросы', printSheet: 'Печать PDF'},
  hero: {kicker: '100% локально в браузере · Без API ИИ · 10 языков', ctaStart: 'Открыть панель'},
  tabs: {listing: 'Описание объявления', messages: 'Сообщения по этапам', welcome: 'Гид гостя / PDF', reviews: 'Ответы на отзывы', rules: 'Правила и залог'},
  workspace: {
    localSaved: 'Сохранено локально',
    exportJson: 'Экспорт JSON',
    importJson: 'Импорт JSON',
    copyLink: 'Копировать ссылку',
    linkCopied: 'Каноническая ссылка скопирована',
    resetDefaults: 'Сбросить',
    confirmReset: 'Подтвердить?',
    importSuccess: 'Импортировано из JSON',
    importError: 'Неверный формат JSON',
    copied: 'Скопировано',
    copyAll: 'Копировать всё',
    copyTitle: 'Копировать заголовок',
    copyPlainText: 'Копировать текст',
    printPdf: 'Печать / Сохранить PDF',
    resetEdits: 'Пересоздать',
    chars: 'симв.',
    words: 'слов',
    editableHint: 'Прямое редактирование включено — изменения автоматически сохраняются в localStorage.',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Практическое руководство для хозяев Airbnb и Booking',
    subheading: 'Проверенные стандарты текстов, коммуникации с гостями и работы с отзывами.',
    faqHeading: 'Частые вопросы хозяев жилья',
  },
});

const ZH_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: '生成器', welcomeGuide: '欢迎手册', playbook: '运营指南', faq: '常见问题', printSheet: '打印 PDF'},
  hero: {kicker: '100% 浏览器本地运行 · 无需 AI API · 支持 10 种语言', ctaStart: '打开工作台'},
  tabs: {listing: '房源描述', messages: '分阶段消息', welcome: '欢迎指南 / PDF', reviews: '差评回复', rules: '房屋守则与押金'},
  workspace: {
    localSaved: '已本地保存',
    exportJson: '导出 JSON',
    importJson: '导入 JSON',
    copyLink: '复制链接',
    linkCopied: '已复制规范链接',
    resetDefaults: '重置',
    confirmReset: '确认重置？',
    importSuccess: '已从 JSON 导入',
    importError: 'JSON 格式无效',
    copied: '已复制',
    copyAll: '复制全部',
    copyTitle: '复制标题',
    copyPlainText: '复制纯文本',
    printPdf: '打印 / 另存为 PDF',
    resetEdits: '重新生成',
    chars: '字符',
    words: '词',
    editableHint: '支持直接编辑 — 更改会自动保存至 localStorage。',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Airbnb 与 Booking 房东运营写作指南',
    subheading: '用清晰克制的文案、按阶段沟通和可打印指南提升转化并降低投诉。',
    faqHeading: '房东常见问题',
  },
});

const JA_DICT: UiDictionary = makeCompactDict(EN_DICT, {
  nav: {generators: 'ジェネレーター', welcomeGuide: 'ウェルカムガイド', playbook: '運用ガイド', faq: 'FAQ', printSheet: 'PDF印刷'},
  hero: {kicker: '100% ブラウザ内動作 · AI API不要 · 10言語対応', ctaStart: 'ワークスペースへ'},
  tabs: {listing: '物件紹介文', messages: '段階別メッセージ', welcome: 'ウェルカムガイド / PDF', reviews: '口コミ返信', rules: 'ルール・保証金'},
  workspace: {
    localSaved: 'ローカル保存済み',
    exportJson: 'JSON出力',
    importJson: 'JSON読込',
    copyLink: 'リンクをコピー',
    linkCopied: '正規URLをコピーしました',
    resetDefaults: '初期化',
    confirmReset: '初期化しますか？',
    importSuccess: 'JSONを読み込みました',
    importError: '無効なJSON形式です',
    copied: 'コピー済み',
    copyAll: 'すべてコピー',
    copyTitle: 'タイトルをコピー',
    copyPlainText: 'テキストをコピー',
    printPdf: '印刷 / PDF保存',
    resetEdits: '入力から再生成',
    chars: '文字',
    words: '語',
    editableHint: '直接編集が可能で、変更は自動的に localStorage に保存されます。',
  },
  editorial: {
    ...EN_DICT.editorial,
    heading: 'Airbnb・Booking ホスト運用プレイブック',
    subheading: '期待ギャップを防ぎながら予約率を高める物件表現とゲスト対応の実務基準。',
    faqHeading: 'よくある質問',
  },
});

export const UI_TRANSLATIONS: Record<LangCode, UiDictionary> = {
  en: EN_DICT,
  es: ES_DICT,
  fr: FR_DICT,
  de: DE_DICT,
  pt: PT_DICT,
  ar: AR_DICT,
  hi: HI_DICT,
  ru: RU_DICT,
  zh: ZH_DICT,
  ja: JA_DICT,
};
