import type {GeneratorTab, LangCode} from '../types/hostcue';

export const CANONICAL_ORIGIN = 'https://hostcue.bastelar.com';

export interface LanguageMeta {
  code: LangCode;
  nativeName: string;
  englishName: string;
  dir: 'ltr' | 'rtl';
  hreflang: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  {code: 'en', nativeName: 'English', englishName: 'English', dir: 'ltr', hreflang: 'en'},
  {code: 'es', nativeName: 'Español', englishName: 'Spanish', dir: 'ltr', hreflang: 'es'},
  {code: 'fr', nativeName: 'Français', englishName: 'French', dir: 'ltr', hreflang: 'fr'},
  {code: 'de', nativeName: 'Deutsch', englishName: 'German', dir: 'ltr', hreflang: 'de'},
  {code: 'pt', nativeName: 'Português', englishName: 'Portuguese', dir: 'ltr', hreflang: 'pt'},
  {code: 'ar', nativeName: 'العربية', englishName: 'Arabic', dir: 'rtl', hreflang: 'ar'},
  {code: 'hi', nativeName: 'हिन्दी', englishName: 'Hindi', dir: 'ltr', hreflang: 'hi'},
  {code: 'ru', nativeName: 'Русский', englishName: 'Russian', dir: 'ltr', hreflang: 'ru'},
  {code: 'zh', nativeName: '中文', englishName: 'Chinese', dir: 'ltr', hreflang: 'zh'},
  {code: 'ja', nativeName: '日本語', englishName: 'Japanese', dir: 'ltr', hreflang: 'ja'},
];

export function isSupportedLang(value: string | null | undefined): value is LangCode {
  if (!value) return false;
  return SUPPORTED_LANGUAGES.some((l) => l.code === value);
}

export function getCanonicalUrl(lang: LangCode): string {
  if (lang === 'en') {
    return `${CANONICAL_ORIGIN}/`;
  }
  return `${CANONICAL_ORIGIN}/?lang=${lang}`;
}

export function getLanguageMeta(lang: LangCode): LanguageMeta {
  return SUPPORTED_LANGUAGES.find((l) => l.code === lang) ?? SUPPORTED_LANGUAGES[0];
}

export function detectInitialLanguage(): LangCode {
  if (typeof window === 'undefined') return 'en';

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang')?.toLowerCase().split('-')[0];
  if (isSupportedLang(urlLang)) {
    return urlLang;
  }

  try {
    const saved = window.localStorage.getItem('hostcue_lang_v1');
    if (isSupportedLang(saved)) {
      return saved;
    }
  } catch {
    // ignore storage access issues
  }

  const navLangs = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const raw of navLangs) {
    const base = raw?.toLowerCase().split('-')[0];
    if (isSupportedLang(base)) {
      return base;
    }
  }

  return 'en';
}

export interface SeoLanguageCopy {
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  tabMeta: Record<GeneratorTab, {titleSuffix: string; description: string; howToName: string; howToSteps: string[]}>;
}

export const SEO_COPY: Record<LangCode, SeoLanguageCopy> = {
  en: {
    title: 'HostCue — Airbnb & Booking Listing Copy, Welcome Book & Guest Message Generator',
    description:
      'Free 100% client-side Airbnb & Booking host generator for listing descriptions, multi-language guest messages, printable PDF welcome guides, negative review replies, and house rules.',
    h1: 'Airbnb & Booking Host Copy, Welcome Manual & Templates',
    subtitle:
      'Generate honest listing descriptions, 10-language stay messages, printable PDF welcome books, diplomatic review replies, and tailored house rules directly in your browser.',
    tabMeta: {
      listing: {
        titleSuffix: 'Airbnb & Booking Listing Description Generator',
        description:
          'Generate clear, conversion-focused Airbnb and Booking.com listing titles and structured property descriptions locally in your browser.',
        howToName: 'How to generate an Airbnb or Booking listing description',
        howToSteps: [
          'Select your property type and ideal guest profile.',
          'Toggle verified property strengths and add neighborhood transit notes.',
          'Edit the generated headline and structured description, then copy in one click.',
        ],
      },
      messages: {
        titleSuffix: 'Automated Guest Message Templates (10 Languages)',
        description:
          'Create ready-to-send Airbnb and Booking guest messages for confirmation, check-in, mid-stay, check-out, and review requests in 10 languages.',
        howToName: 'How to prepare multi-language guest stay messages',
        howToSteps: [
          'Choose the stay stage and your guest message language.',
          'Enter guest name, check-in/out times, and access code details.',
          'Review, customize, and copy the message into Airbnb or Booking.',
        ],
      },
      welcome: {
        titleSuffix: 'Printable Airbnb Welcome Book & House Manual PDF Generator',
        description:
          'Build a clean, print-ready Welcome Guide and House Manual with WiFi credentials, trash schedules, appliance tips, emergency contacts, and local spots.',
        howToName: 'How to create a printable Airbnb welcome book PDF',
        howToSteps: [
          'Fill in WiFi network details, waste schedules, appliance instructions, and emergency numbers.',
          'Add curated local recommendations for bakery, groceries, transit, and dining.',
          'Click Print / Save as PDF to export a clean A4 welcome sheet without toolbars or ads.',
        ],
      },
      reviews: {
        titleSuffix: 'How to Reply to Negative Airbnb & Booking Reviews',
        description:
          'Draft calm, empathetic, or firm objective replies to difficult guest reviews about noise, cleanliness, check-in, or expectations.',
        howToName: 'How to write a professional reply to a difficult guest review',
        howToSteps: [
          'Select the primary issue raised in the review and choose your reply tone.',
          'Summarize the guest concern and note the concrete corrective action taken.',
          'Choose between the concise or detailed reply variant and copy.',
        ],
      },
      rules: {
        titleSuffix: 'Airbnb House Rules & Security Deposit Template Generator',
        description:
          'Generate clear house rules covering quiet hours, parties, pets, smoking, unregistered guests, and damage deposit conditions ready to copy or print.',
        howToName: 'How to generate tailored house rules and deposit terms',
        howToSteps: [
          'Set policies for parties, pets, smoking, and unregistered visitors.',
          'Specify quiet hours and security deposit currency and amount.',
          'Copy the structured terms into your listing or print them for guest arrival.',
        ],
      },
    },
  },
  es: {
    title: 'HostCue — Generador de Anuncios, Mensajes y Manual de Bienvenida Airbnb y Booking',
    description:
      'Generador gratuito 100 % local para anfitriones de Airbnb y Booking: descripciones de anuncios, mensajes por etapas en 10 idiomas, manual de bienvenida imprimible en PDF, respuestas a reseñas y normas.',
    h1: 'Textos, Manual de Bienvenida y Plantillas para Airbnb y Booking',
    subtitle:
      'Genera descripciones honestas para anuncios, mensajes automáticos en 10 idiomas, guía de bienvenida imprimible en PDF, respuestas diplomáticas a reseñas y normas de la casa en tu navegador.',
    tabMeta: {
      listing: {
        titleSuffix: 'Generador de Descripciones para Anuncios Airbnb y Booking',
        description: 'Crea títulos con gancho y descripciones claras orientadas a conversión para Airbnb y Booking sin exageraciones.',
        howToName: 'Cómo crear una descripción optimizada para Airbnb y Booking',
        howToSteps: [
          'Elige el tipo de alojamiento y el perfil de viajero ideal.',
          'Marca los puntos fuertes reales y añade notas del barrio y transporte.',
          'Edita el título y la descripción estructurada y cópialos en un clic.',
        ],
      },
      messages: {
        titleSuffix: 'Plantillas de Mensajes por Etapas para Airbnb y Booking',
        description: 'Prepara mensajes de confirmación, check-in, estancia media, check-out y solicitud de reseña en 10 idiomas.',
        howToName: 'Cómo generar mensajes por etapas para huéspedes',
        howToSteps: [
          'Selecciona la etapa de la estancia y el idioma del huésped.',
          'Introduce nombre, horarios de entrada/salida y código o enlace de acceso.',
          'Ajusta el texto si lo necesitas y cópialo en un clic.',
        ],
      },
      welcome: {
        titleSuffix: 'Manual de Bienvenida y Guía de la Casa Imprimible PDF',
        description: 'Crea una hoja de bienvenida imprimible en PDF con WiFi, reciclaje, electrodomésticos, urgencias y recomendaciones locales.',
        howToName: 'Cómo imprimir un manual de bienvenida turístico en PDF',
        howToSteps: [
          'Completa los datos de WiFi, horarios de basura, climatización y teléfonos de urgencia.',
          'Añade recomendaciones locales verificadas de panadería, supermercado y transporte.',
          'Pulsa Imprimir / Guardar PDF para obtener una hoja limpia sin menús ni anuncios.',
        ],
      },
      reviews: {
        titleSuffix: 'Respuestas Diplomáticas a Reseñas Difíciles en Airbnb y Booking',
        description: 'Redacta respuestas serenas o firmes ante quejas por ruido, limpieza, acceso o expectativas.',
        howToName: 'Cómo responder profesionalmente a una reseña negativa',
        howToSteps: [
          'Indica el motivo principal de la crítica y el tono de respuesta.',
          'Resume el punto mencionado y la medida correctiva aplicada.',
          'Elige la variante corta o detallada y cópiala en tu panel.',
        ],
      },
      rules: {
        titleSuffix: 'Generador de Normas de la Casa y Fianzas para Alojamientos',
        description: 'Genera normas claras sobre fiestas, mascotas, horarios de silencio, tabaco y condiciones de fianza listas para copiar o imprimir.',
        howToName: 'Cómo redactar normas de la casa y fianza claras',
        howToSteps: [
          'Configura reglas de fiestas, mascotas, tabaco y visitantes.',
          'Define horario de silencio e importe orientativo de fianza.',
          'Copia el texto en tu anuncio o imprímelo para la entrada.',
        ],
      },
    },
  },
  fr: {
    title: 'HostCue — Générateur d’Annonces, Messages et Livret d’Accueil Airbnb & Booking',
    description:
      'Outil gratuit 100 % local pour hôtes Airbnb et Booking : descriptions d’annonces, messages multi-étapes en 10 langues, livret d’accueil imprimable PDF, réponses aux avis et règlement intérieur.',
    h1: 'Textes, Livret d’Accueil et Modèles pour Airbnb & Booking',
    subtitle:
      'Générez des descriptions claires, des messages voyageurs en 10 langues, un livret d’accueil PDF imprimable, des réponses aux avis difficiles et votre règlement intérieur directement dans le navigateur.',
    tabMeta: {
      listing: {
        titleSuffix: 'Générateur de Description d’Annonce Airbnb & Booking',
        description: 'Rédigez des titres accrocheurs et des descriptions structurées sans promesses excessives.',
        howToName: 'Comment rédiger une annonce Airbnb ou Booking efficace',
        howToSteps: [
          'Sélectionnez le type de logement et le profil de voyageur ciblé.',
          'Cochez les atouts vérifiés et précisez l’environnement.',
          'Modifiez et copiez le titre ou la description complète en un clic.',
        ],
      },
      messages: {
        titleSuffix: 'Modèles de Messages Voyageurs par Étape (10 Langues)',
        description: 'Générez des messages de confirmation, arrivée, mi-séjour, départ et demande d’avis en 10 langues.',
        howToName: 'Comment préparer vos messages automatisés Airbnb et Booking',
        howToSteps: [
          'Choisissez l’étape du séjour et la langue du voyageur.',
          'Renseignez les horaires d’arrivée/départ et le code d’accès.',
          'Personnalisez et copiez le message prêt à envoyer.',
        ],
      },
      welcome: {
        titleSuffix: 'Livret d’Accueil Imprimable PDF pour Location Saisonnière',
        description: 'Créez un manuel de maison propre et imprimable avec WiFi, tri sélectif, appareils, urgences et bonnes adresses.',
        howToName: 'Comment créer un livret d’accueil imprimable en PDF',
        howToSteps: [
          'Indiquez le WiFi, les consignes de tri, le chauffage et les numéros d’urgence.',
          'Ajoutez vos adresses locales de boulangerie, supérette et transport.',
          'Cliquez sur Imprimer / PDF pour exporter une fiche A4 épurée.',
        ],
      },
      reviews: {
        titleSuffix: 'Répondre aux Avis Négatifs Airbnb & Booking avec Diplomatie',
        description: 'Générez des réponses calmes ou fermes sur le bruit, la propreté, l’accès ou les attentes.',
        howToName: 'Comment répondre à un commentaire difficile de voyageur',
        howToSteps: [
          'Choisissez le motif principal de l’avis et le ton souhaité.',
          'Précisez le détail mentionné et l’action corrective menée.',
          'Copiez la version courte ou détaillée.',
        ],
      },
      rules: {
        titleSuffix: 'Générateur de Règlement Intérieur et Caution Airbnb',
        description: 'Structurez vos règles de fêtes, animaux, horaires de calme et dépôt de garantie.',
        howToName: 'Comment rédiger un règlement intérieur clair',
        howToSteps: [
          'Réglez les autorisations pour fêtes, animaux, tabac et visiteurs.',
          'Indiquez les heures de calme et le montant de la caution.',
          'Copiez ou imprimez le règlement final.',
        ],
      },
    },
  },
  de: {
    title: 'HostCue — Airbnb & Booking Inserate, Gästemappe & Nachrichtengenerator',
    description:
      'Kostenloses 100 % lokales Tool für Airbnb- & Booking-Gastgeber: Inseratstexte, Nachrichten in 10 Sprachen, druckbare PDF-Gästemappe, Bewertungsantworten und Hausregeln.',
    h1: 'Inseratstexte, Gästemappe & Vorlagen für Airbnb und Booking',
    subtitle:
      'Erstellen Sie ehrliche Inseratsbeschreibungen, Nachrichten in 10 Sprachen, druckbare PDF-Gästemappen, sachliche Antworten auf kritische Bewertungen und klare Hausregeln direkt im Browser.',
    tabMeta: {
      listing: {
        titleSuffix: 'Airbnb & Booking Inserats-Generator',
        description: 'Strukturierte, conversion-starke Titel und Unterkunftsbeschreibungen ohne Übertreibung.',
        howToName: 'So erstellen Sie einen überzeugenden Inseratstext',
        howToSteps: [
          'Unterkunftstyp und Zielgruppe auswählen.',
          'Ausstattungsmerkmale und Lagehinweise ergänzen.',
          'Titel und Text prüfen und per Klick kopieren.',
        ],
      },
      messages: {
        titleSuffix: 'Gästenachrichten-Vorlagen nach Aufenthaltsphase',
        description: 'Buchungsbestätigung, Check-in, Zwischencheck, Check-out und Bewertungsbitte in 10 Sprachen.',
        howToName: 'So bereiten Sie mehrsprachige Gästenachrichten vor',
        howToSteps: [
          'Aufenthaltsphase und Sprache des Gastes wählen.',
          'Check-in/out-Zeiten und Zugangscode eintragen.',
          'Text anpassen und direkt kopieren.',
        ],
      },
      welcome: {
        titleSuffix: 'Druckbare Gästemappe & Hausordnung als PDF',
        description: 'Sauberes Infoblatt mit WLAN-Daten, Mülltrennung, Geräten, Notfallnummern und lokalen Tipps drucken.',
        howToName: 'So drucken Sie eine Gästemappe als PDF',
        howToSteps: [
          'WLAN, Müllzeiten, Heizungshinweise und Notrufnummern eingeben.',
          'Lokale Empfehlungen für Bäcker, Supermarkt und ÖPNV hinzufügen.',
          'Über Drucken / Als PDF speichern ohne Menüs oder Werbung exportieren.',
        ],
      },
      reviews: {
        titleSuffix: 'Professionelle Antworten auf schwierige Gästebewertungen',
        description: 'Ruhige oder sachlich-klare Antworten auf Kritik zu Lärm, Sauberkeit, Check-in oder Erwartungen.',
        howToName: 'So antworten Sie souverän auf negative Bewertungen',
        howToSteps: [
          'Hauptthema der Kritik und gewünschten Tonfall wählen.',
          'Detail aus der Bewertung und ergriffene Maßnahme notieren.',
          'Kurze oder ausführliche Antwortvariante kopieren.',
        ],
      },
      rules: {
        titleSuffix: 'Hausregeln & Kautions-Generator für Ferienwohnungen',
        description: 'Klare Regeln zu Ruhezeiten, Partys, Haustieren, Rauchen und Kaution zum Kopieren oder Drucken.',
        howToName: 'So erstellen Sie klare Hausregeln und Kautionsbedingungen',
        howToSteps: [
          'Richtlinien für Partys, Haustiere, Rauchen und Besucher festlegen.',
          'Ruhezeiten und Kautionsbetrag definieren.',
          'Regeln kopieren oder sauber ausdrucken.',
        ],
      },
    },
  },
  pt: {
    title: 'HostCue — Gerador de Anúncios, Mensagens e Manual de Boas-Vindas Airbnb e Booking',
    description:
      'Ferramenta gratuita 100% local para anfitriões de Airbnb e Booking: descrições de anúncios, mensagens por etapa em 10 idiomas, guia de boas-vindas imprimível em PDF, respostas a avaliações e regras da casa.',
    h1: 'Textos, Guia de Boas-Vindas e Modelos para Airbnb e Booking',
    subtitle:
      'Gere descrições honestas, mensagens em 10 idiomas, manual da casa imprimível em PDF, respostas diplomáticas a avaliações difíceis e regras da casa direto no navegador.',
    tabMeta: {
      listing: {
        titleSuffix: 'Gerador de Descrição de Anúncio Airbnb e Booking',
        description: 'Crie títulos atrativos e descrições claras sem exageros para Airbnb e Booking.',
        howToName: 'Como criar uma descrição clara para Airbnb e Booking',
        howToSteps: [
          'Selecione o tipo de alojamento e o perfil ideal de hóspede.',
          'Marque os diferenciais reais e informe dados do bairro.',
          'Edite e copie o título ou o texto completo em um clique.',
        ],
      },
      messages: {
        titleSuffix: 'Mensagens Automáticas por Etapa para Hóspedes',
        description: 'Confirmação, check-in, meio da estadia, check-out e pedido de avaliação em 10 idiomas.',
        howToName: 'Como gerar mensagens por etapa em vários idiomas',
        howToSteps: [
          'Escolha a etapa da estadia e o idioma do hóspede.',
          'Preencha horários de check-in/out e código de acesso.',
          'Revise e copie a mensagem pronta.',
        ],
      },
      welcome: {
        titleSuffix: 'Manual de Boas-Vindas e Guia da Casa Imprimível em PDF',
        description: 'Folha limpa para impressão com WiFi, lixo/reciclagem, equipamentos, emergência e dicas locais.',
        howToName: 'Como criar um guia de boas-vindas imprimível em PDF',
        howToSteps: [
          'Informe WiFi, regras de lixo, climatização e telefones de urgência.',
          'Adicione recomendações locais de padaria, mercado e transporte.',
          'Clique em Imprimir / Salvar PDF para gerar uma folha A4 limpa.',
        ],
      },
      reviews: {
        titleSuffix: 'Como Responder a Avaliações Negativas no Airbnb e Booking',
        description: 'Respostas calmas ou firmes para críticas sobre barulho, limpeza, check-in ou expectativas.',
        howToName: 'Como responder a avaliações difíceis de hóspedes',
        howToSteps: [
          'Escolha o motivo principal e o tom da resposta.',
          'Resuma o ponto citado e a melhoria implementada.',
          'Copie a versão curta ou detalhada.',
        ],
      },
      rules: {
        titleSuffix: 'Gerador de Regras da Casa e Caução para Hospedagem',
        description: 'Defina horários de silêncio, festas, animais, fumo e valor da caução prontos para copiar ou imprimir.',
        howToName: 'Como estruturar regras da casa e termos de caução',
        howToSteps: [
          'Configure permissões para festas, pets, fumo e visitantes.',
          'Defina horário de silêncio e valor da caução.',
          'Copie ou imprima as regras formatadas.',
        ],
      },
    },
  },
  ar: {
    title: 'HostCue — منشئ إعلانات Airbnb وBooking ودليل الترحيب ورسائل الضيوف',
    description:
      'أداة مجانية تعمل 100% محلياً في المتصفح لمضيفي Airbnb وBooking: وصف العقار، رسائل المراحل بـ 10 لغات، دليل ترحيب قابل للطباعة PDF، ردود التقييمات الصعبة، وقواعد المنزل.',
    h1: 'نصوص الإعلانات ودليل الترحيب وقوالب الرسائل لـ Airbnb وBooking',
    subtitle:
      'أنشئ وصفاً واضحاً لإعلانك، ورسائل الضيوف بـ 10 لغات، ودليل ترحيب جاهز للطباعة PDF، وردوداً دبلوماسية على التقييمات، وقواعد المنزل محلياً بالكامل.',
    tabMeta: {
      listing: {
        titleSuffix: 'منشئ وصف إعلان Airbnb وBooking',
        description: 'أنشئ عنواناً جذاباً ووصفاً منظماً وصادقاً لمسكنك بضغطة زر.',
        howToName: 'كيفية إنشاء وصف احترافي لإعلان Airbnb أو Booking',
        howToSteps: [
          'اختر نوع العقار وفئة الضيوف المناسبة.',
          'حدد المميزات الحقيقية وأضف تفاصيل الموقع.',
          'راجع النص وعدّله ثم انسخه بنقرة واحدة.',
        ],
      },
      messages: {
        titleSuffix: 'قوالب رسائل الضيوف حسب مراحل الإقامة (10 لغات)',
        description: 'رسائل تأكيد الحجز، تسجيل الوصول، منتصف الإقامة، المغادرة، وطلب التقييم بـ 10 لغات.',
        howToName: 'كيفية تجهيز رسائل الضيوف متعددة اللغات',
        howToSteps: [
          'اختر مرحلة الإقامة ولغة رسالة الضيف.',
          'أدخل أوقات الوصول والمغادرة ورمز الدخول.',
          'انسخ الرسالة الجاهزة وأرسلها.',
        ],
      },
      welcome: {
        titleSuffix: 'دليل الترحيب وكتيب المنزل القابل للطباعة PDF',
        description: 'صفحة ترحيب نظيفة للطباعة تتضمن الواي فاي، النفايات، الأجهزة، أرقام الطوارئ، وتوصيات الحي.',
        howToName: 'كيفية إنشاء دليل ترحيب قابل للطباعة PDF',
        howToSteps: [
          'أدخل بيانات الواي فاي ومواعيد النفايات وتعليمات الأجهزة والطوارئ.',
          'أضف توصيات محلية للمخبز والسوبرماركت والمواصلات.',
          'اضغط طباعة / حفظ PDF للحصول على صفحة نظيفة.',
        ],
      },
      reviews: {
        titleSuffix: 'الرد الدبلوماسي على التقييمات السلبية في Airbnb وBooking',
        description: 'صياغة ردود هادئة أو موضوعية حازمة حول الضوضاء، النظافة، الوصول، أو التوقعات.',
        howToName: 'كيفية الرد على تقييم صعب باحترافية',
        howToSteps: [
          'حدد سبب الملاحظة واختر نبرة الرد المناسبة.',
          'لخّص الملاحظة والإجراء التصحيحي المتخذ.',
          'اختر الرد المختصر أو المفصل وانسخه.',
        ],
      },
      rules: {
        titleSuffix: 'منشئ قواعد المنزل ومبلغ التأمين للعقارات',
        description: 'قواعد واضحة للحفلات، الحيوانات الأليفة، ساعات الهدوء، التدخين، ومبلغ التأمين.',
        howToName: 'كيفية إعداد قواعد المنزل وشروط التأمين',
        howToSteps: [
          'حدد سياسة الحفلات والحيوانات والتدخين والزوار.',
          'أدخل ساعات الهدوء ومبلغ التأمين.',
          'انسخ القواعد أو اطبعها للضيوف.',
        ],
      },
    },
  },
  hi: {
    title: 'HostCue — Airbnb और Booking लिस्टिंग कॉपी, वेलकम गाइड और मैसेज जेनरेटर',
    description:
      'Airbnb और Booking होस्ट्स के लिए 100% ब्राउज़र-आधारित निःशुल्क टूल: लिस्टिंग विवरण, 10 भाषाओं में गेस्ट मैसेज, प्रिंटेबल PDF वेलकम मैनुअल, रिव्यू रिप्लाई और हाउस रूल्स।',
    h1: 'Airbnb और Booking होस्ट कॉपी, वेलकम मैनुअल और टेम्पलेट्स',
    subtitle:
      'बिना किसी API कॉल के अपने ब्राउज़र में सटीक लिस्टिंग विवरण, 10-भाषा स्टेज मैसेज, प्रिंटेबल PDF वेलकम बुक, रिव्यू रिप्लाई और हाउस रूल्स तैयार करें।',
    tabMeta: {
      listing: {
        titleSuffix: 'Airbnb और Booking लिस्टिंग विवरण जेनरेटर',
        description: 'बिना बढ़ा-चढ़ाकर लिखे स्पष्ट शीर्षक और संरचित प्रॉपर्टी विवरण बनाएं।',
        howToName: 'Airbnb या Booking लिस्टिंग विवरण कैसे बनाएं',
        howToSteps: [
          'प्रॉपर्टी का प्रकार और आदर्श गेस्ट प्रोफ़ाइल चुनें।',
          'प्रॉपर्टी की मुख्य विशेषताएं और लोकेशन नोट्स जोड़ें।',
          'शीर्षक और विवरण संपादित करें और एक क्लिक में कॉपी करें।',
        ],
      },
      messages: {
        titleSuffix: '10 भाषाओं में गेस्ट स्टेज मैसेज टेम्पलेट्स',
        description: 'बुकिंग कन्फर्मेशन, चेक-इन, मिड-स्टे, चेक-आउट और रिव्यू अनुरोध के मैसेज तैयार करें।',
        howToName: 'बहुभाषी गेस्ट मैसेज कैसे तैयार करें',
        howToSteps: [
          'स्टे का चरण और गेस्ट की भाषा चुनें।',
          'चेक-इन/आउट समय और एक्सेस कोड दर्ज करें।',
          'संदेश की समीक्षा करें और कॉपी करें।',
        ],
      },
      welcome: {
        titleSuffix: 'प्रिंटेबल PDF एयरबीएनबी वेलकम बुक और हाउस मैनुअल',
        description: 'WiFi, कचरा नियम, उपकरण उपयोग, आपातकालीन नंबर और स्थानीय सुझावों के साथ प्रिंट-रेडी शीट।',
        howToName: 'प्रिंटेबल PDF वेलकम गाइड कैसे बनाएं',
        howToSteps: [
          'WiFi विवरण, कचरा समय, उपकरण नोट्स और आपातकालीन नंबर भरें।',
          'बेकरी, किराना, ट्रांजिट और रेस्तरां की सिफारिशें जोड़ें।',
          'साफ A4 पेज के लिए प्रिंट / PDF सेव पर क्लिक करें।',
        ],
      },
      reviews: {
        titleSuffix: 'कठिन गेस्ट रिव्यू का संतुलित और पेशेवर उत्तर',
        description: 'शोर, सफाई, चेक-इन या अपेक्षाओं पर नकारात्मक समीक्षाओं के लिए शांत या स्पष्ट उत्तर बनाएं।',
        howToName: 'नकारात्मक गेस्ट रिव्यू का उत्तर कैसे दें',
        howToSteps: [
          'समीक्षा का मुख्य मुद्दा और टोन चुनें।',
          'विवरण और किए गए सुधारात्मक कदम लिखें।',
          'संक्षिप्त या विस्तृत उत्तर कॉपी करें।',
        ],
      },
      rules: {
        titleSuffix: 'हाउस रूल्स और सिक्योरिटी डिपॉज़िट टेम्पलेट जेनरेटर',
        description: 'पार्टी, पालतू जानवर, शांत घंटे, धूम्रपान और डिपॉज़िट शर्तों के लिए स्पष्ट नियम।',
        howToName: 'हाउस रूल्स और डिपॉज़िट शर्तें कैसे बनाएं',
        howToSteps: [
          'पार्टी, पालतू जानवर, धूम्रपान और विज़िटर नीतियां सेट करें।',
          'शांत घंटे और सिक्योरिटी डिपॉज़िट राशि दर्ज करें।',
          'नियम कॉपी करें या प्रिंट करें।',
        ],
      },
    },
  },
  ru: {
    title: 'HostCue — Генератор описаний, сообщений и гида гостя для Airbnb и Booking',
    description:
      'Бесплатный локальный инструмент для хозяев Airbnb и Booking: описания объявлений, сообщения на 10 языках, печатный PDF-справочник гостя, ответы на сложные отзывы и правила дома.',
    h1: 'Описания, справочник гостя и шаблоны для Airbnb и Booking',
    subtitle:
      'Создавайте честные описания жилья, сообщения по этапам на 10 языках, печатный PDF-справочник дома, дипломатичные ответы на отзывы и правила проживания прямо в браузере.',
    tabMeta: {
      listing: {
        titleSuffix: 'Генератор описаний объявлений Airbnb и Booking',
        description: 'Заголовки и структурированные описания жилья без преувеличений.',
        howToName: 'Как создать описание для Airbnb и Booking',
        howToSteps: [
          'Выберите тип жилья и целевой профиль гостей.',
          'Отметьте реальные преимущества и добавьте детали района.',
          'Отредактируйте заголовок и текст и скопируйте в один клик.',
        ],
      },
      messages: {
        titleSuffix: 'Шаблоны сообщений гостям по этапам (10 языков)',
        description: 'Подтверждение, заезд, середина проживания, выезд и запрос отзыва на 10 языках.',
        howToName: 'Как подготовить сообщения гостям на разных языках',
        howToSteps: [
          'Выберите этап проживания и язык гостя.',
          'Укажите время заезда/выезда и код доступа.',
          'Проверьте и скопируйте готовое сообщение.',
        ],
      },
      welcome: {
        titleSuffix: 'Печатный PDF-справочник и инструкция для гостей',
        description: 'Чистый лист для печати: WiFi, сортировка мусора, техника, экстренные телефоны и места рядом.',
        howToName: 'Как сделать печатный PDF-справочник гостя',
        howToSteps: [
          'Укажите данные WiFi, график выноса мусора, инструкции и контакты.',
          'Добавьте местные рекомендации по пекарне, магазину и транспорту.',
          'Нажмите Печать / Сохранить PDF для чистого листа A4.',
        ],
      },
      reviews: {
        titleSuffix: 'Дипломатичные ответы на сложные отзывы Airbnb и Booking',
        description: 'Спокойные или сдержанно-фактические ответы на жалобы по шуму, уборке, заезду или ожиданиям.',
        howToName: 'Как ответить на негативный отзыв гостя',
        howToSteps: [
          'Выберите основную тему отзыва и тон ответа.',
          'Опишите замечание и принятые меры.',
          'Скопируйте краткий или подробный вариант.',
        ],
      },
      rules: {
        titleSuffix: 'Генератор правил дома и условий залога',
        description: 'Чёткие правила по вечеринкам, питомцам, тишине, курению и сумме депозита.',
        howToName: 'Как составить правила дома и условия залога',
        howToSteps: [
          'Настройте правила для вечеринок, животных, курения и гостей.',
          'Укажите часы тишины и размер залога.',
          'Скопируйте или распечатайте документ.',
        ],
      },
    },
  },
  zh: {
    title: 'HostCue — Airbnb 与 Booking 房源文案、入住指南与房客消息生成器',
    description:
      '100% 本地运行的 Airbnb 与 Booking 房东工具：高转化房源描述、10种语言分阶段房客消息、可打印 PDF 欢迎手册、差评回复模板与房屋守则。',
    h1: 'Airbnb 与 Booking 房源文案、欢迎手册与消息模板',
    subtitle:
      '无需联网 AI 接口，直接在浏览器本地生成真实清晰的房源描述、10种语言入住消息、可打印 PDF 欢迎手册、专业差评回复及房屋守则。',
    tabMeta: {
      listing: {
        titleSuffix: 'Airbnb 与 Booking 房源描述生成器',
        description: '生成真实、有吸引力、减少预期落差投诉的房源标题与结构化描述。',
        howToName: '如何生成高质量 Airbnb / Booking 房源描述',
        howToSteps: [
          '选择房源类型与目标房客群体。',
          '勾选真实核心优势并补充周边交通信息。',
          '微调标题与正文后一键复制。',
        ],
      },
      messages: {
        titleSuffix: '多语言房客分阶段消息模板（支持10种语言）',
        description: '预订确认、入住指引、住中关怀、退房提醒与评价邀请，支持10种语言即时切换。',
        howToName: '如何生成多语言房客自动消息',
        howToSteps: [
          '选择住宿阶段与房客使用的语言。',
          '填写房客姓名、入住/退房时间与密码锁信息。',
          '确认文本后一键复制到平台收件箱。',
        ],
      },
      welcome: {
        titleSuffix: '可打印 PDF 房客欢迎指南与房屋使用手册',
        description: '排版整洁的 A4 欢迎单：WiFi 密码、垃圾分类时间、家电说明、紧急电话与周边推荐。',
        howToName: '如何制作可打印的 PDF 欢迎手册',
        howToSteps: [
          '填写 WiFi、垃圾清运时间、空调/热水器说明及紧急电话。',
          '补充附近面包店、超市、交通与餐厅推荐。',
          '点击打印 / 保存 PDF，导出无广告与工具栏的整洁手册。',
        ],
      },
      reviews: {
        titleSuffix: 'Airbnb 与 Booking 差评及棘手评价回复模板',
        description: '针对噪音、清洁、入住或预期落差，生成温和同理或客观坚定的公开回复。',
        howToName: '如何专业回复棘手的房客评价',
        howToSteps: [
          '选择评价涉及的主要问题与回复语气。',
          '简述房客反馈细节及已采取的整改措施。',
          '选择简短版或详细版回复并一键复制。',
        ],
      },
      rules: {
        titleSuffix: '房屋守则与押金条款生成器',
        description: '涵盖静音时段、派对、宠物、吸烟、访客及押金说明，支持一键复制与打印。',
        howToName: '如何制定清晰的房屋守则与押金条款',
        howToSteps: [
          '设置派对、宠物、吸烟与未登记访客规则。',
          '填写安静时段及押金金额与货币单位。',
          '复制条款至房源页面或直接打印。',
        ],
      },
    },
  },
  ja: {
    title: 'HostCue — Airbnb・Booking 物件説明・ウェルカムガイド・メッセージ作成ツール',
    description:
      'Airbnb・Bookingホスト向けの完全ブラウザ完結型無料ツール：物件紹介文、10言語の段階別ゲストメッセージ、印刷・PDF対応ウェルカムブック、口コミ返信、ハウスルールを作成。',
    h1: 'Airbnb・Booking ホスト向け紹介文・ウェルカムガイド・テンプレート',
    subtitle:
      'AI API不要・完全ローカル動作で、誇張のない物件紹介文、10言語の連絡テンプレート、印刷対応PDFウェルカムガイド、クレーム口コミ返信、ハウスルールを生成します。',
    tabMeta: {
      listing: {
        titleSuffix: 'Airbnb・Booking 物件紹介文ジェネレーター',
        description: '予約率を高めつつ期待ギャップによる低評価を防ぐ、明確なタイトルと説明文を作成。',
        howToName: 'Airbnb・Bookingの物件紹介文を作成する方法',
        howToSteps: [
          '物件タイプと理想のゲスト層を選択します。',
          '設備の強みと周辺エリアの情報を入力します。',
          'タイトルと本文を調整し、ワンクリックでコピーします。',
        ],
      },
      messages: {
        titleSuffix: '滞在ステージ別ゲストメッセージ（10言語対応）',
        description: '予約確定、チェックイン案内、滞在中フォロー、チェックアウト、レビュー依頼を10言語で作成。',
        howToName: '多言語ゲストメッセージを作成する方法',
        howToSteps: [
          '滞在ステージとゲストの言語を選択します。',
          'チェックイン/アウト時刻や鍵の暗証番号を入力します。',
          '内容を微調整してコピーします。',
        ],
      },
      welcome: {
        titleSuffix: '印刷・PDF保存対応 ウェルカムガイド＆ハウスルール',
        description: 'Wi-Fi、ゴミ出しルール、家電の使い方、緊急連絡先、近隣おすすめをA4印刷用に整理。',
        howToName: '印刷用PDFウェルカムガイドを作成する方法',
        howToSteps: [
          'Wi-Fi情報、ゴミ出し曜日、空調操作、緊急連絡先を入力します。',
          'パン屋・スーパー・駅・飲食店のおすすめを記入します。',
          '「印刷 / PDF保存」を押すと余計なUIを除いたシートが出力されます。',
        ],
      },
      reviews: {
        titleSuffix: '厳しい口コミ・低評価レビューへの丁寧な返信テンプレート',
        description: '騒音、清掃、入室手順、期待とのギャップに関する口コミへ冷静・的確に返信。',
        howToName: '難しいゲスト口コミへ適切に返信する方法',
        howToSteps: [
          '指摘された主な問題と返信トーンを選択します。',
          '指摘内容と実施した改善策を入力します。',
          '簡潔版または詳細版をコピーして返信します。',
        ],
      },
      rules: {
        titleSuffix: 'ハウスルール＆デポジット規約ジェネレーター',
        description: 'パーティー禁止、ペット、喫煙、静粛時間、保証金条件を整理してコピー・印刷。',
        howToName: 'ハウスルールと保証金条件を作成する方法',
        howToSteps: [
          'パーティー、ペット、喫煙、来訪者のルールを設定します。',
          '静粛時間とデポジット金額を指定します。',
          '本文をコピーするか印刷して室内に掲示します。',
        ],
      },
    },
  },
};
