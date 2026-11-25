import type {
  GuestProfile,
  HouseRulesFormState,
  LangCode,
  ListingFormState,
  MessagesFormState,
  PartyPolicy,
  PetPolicy,
  PropertyType,
  ReviewIssue,
  ReviewReplyFormState,
  ReviewTone,
  SmokingPolicy,
  StrengthKey,
  VisitorPolicy,
  WelcomeGuideFormState,
} from '../types/hostcue';

const PROPERTY_TYPE_LABELS: Record<LangCode, Record<PropertyType, string>> = {
  en: {city_apartment: 'City Apartment', house_patio: 'House with Patio', studio_loft: 'Studio Loft', family_home: 'Family Home'},
  es: {city_apartment: 'Apartamento urbano', house_patio: 'Casa con patio', studio_loft: 'Estudio loft', family_home: 'Casa familiar'},
  fr: {city_apartment: 'Appartement en ville', house_patio: 'Maison avec patio', studio_loft: 'Studio loft', family_home: 'Maison familiale'},
  de: {city_apartment: 'Stadtwohnung', house_patio: 'Haus mit Terrasse', studio_loft: 'Studio-Loft', family_home: 'Familienhaus'},
  pt: {city_apartment: 'Apartamento urbano', house_patio: 'Casa com pátio', studio_loft: 'Estúdio loft', family_home: 'Casa familiar'},
  ar: {city_apartment: 'شقة مركزية', house_patio: 'منزل بفناء', studio_loft: 'استوديو لوفت', family_home: 'منزل عائلي'},
  hi: {city_apartment: 'सिटी अपार्टमेंट', house_patio: 'आंगन वाला घर', studio_loft: 'स्टूडियो लॉफ्ट', family_home: 'पारिवारिक घर'},
  ru: {city_apartment: 'Городская квартира', house_patio: 'Дом с патио', studio_loft: 'Студия-лофт', family_home: 'Семейный дом'},
  zh: {city_apartment: '城市公寓', house_patio: '带庭院住宅', studio_loft: 'Loft 工作室', family_home: '家庭住宅'},
  ja: {city_apartment: 'シティ・アパートメント', house_patio: 'パティオ付き一軒家', studio_loft: 'スタジオロフト', family_home: 'ファミリーホーム'},
};

const PROFILE_LABELS: Record<LangCode, Record<GuestProfile, string>> = {
  en: {remote_workers: 'remote workers', couples_explorers: 'couples and city explorers', families: 'families', groups: 'small groups'},
  es: {remote_workers: 'teletrabajadores', couples_explorers: 'parejas y viajeros urbanos', families: 'familias', groups: 'grupos'},
  fr: {remote_workers: 'télétravailleurs', couples_explorers: 'couples et voyageurs urbains', families: 'familles', groups: 'groupes'},
  de: {remote_workers: 'Remote-Worker', couples_explorers: 'Paare und Städtereisende', families: 'Familien', groups: 'Gruppen'},
  pt: {remote_workers: 'trabalhadores remotos', couples_explorers: 'casais e exploradores', families: 'famílias', groups: 'grupos'},
  ar: {remote_workers: 'العاملين عن بُعد', couples_explorers: 'الأزواج ومحبي الاستكشاف', families: 'العائلات', groups: 'المجموعات'},
  hi: {remote_workers: 'रिमोट वर्कर्स', couples_explorers: 'कपल्स और शहर यात्रियों', families: 'परिवारों', groups: 'समूहों'},
  ru: {remote_workers: 'удалённых специалистов', couples_explorers: 'пар и городских путешественников', families: 'семей', groups: 'небольших групп'},
  zh: {remote_workers: '远程办公者', couples_explorers: '情侣及城市探索者', families: '家庭旅客', groups: '结伴同行团队'},
  ja: {remote_workers: 'リモートワーカー', couples_explorers: 'カップル・街歩き旅行者', families: 'ご家族', groups: 'グループ'},
};

const STRENGTH_PHRASES: Record<LangCode, Record<StrengthKey, string>> = {
  en: {
    natural_light: 'Abundant natural daylight',
    fast_fiber: 'High-speed fiber WiFi',
    private_parking: 'Dedicated private parking',
    terrace_balcony: 'Private terrace / balcony',
    air_conditioning: 'Quiet climate-controlled AC',
    workspace: 'Ergonomic dedicated workspace',
    full_kitchen: 'Fully equipped kitchen',
    quiet_street: 'Calm, low-traffic street',
    self_checkin: 'Flexible self check-in',
    washer_dryer: 'In-unit washer & dryer',
  },
  es: {
    natural_light: 'Abundante luz natural',
    fast_fiber: 'Fibra óptica de alta velocidad',
    private_parking: 'Plaza de parking privada',
    terrace_balcony: 'Terraza o balcón privado',
    air_conditioning: 'Aire acondicionado silencioso',
    workspace: 'Zona de trabajo dedicada',
    full_kitchen: 'Cocina totalmente equipada',
    quiet_street: 'Calle tranquila sin tráfico intenso',
    self_checkin: 'Llegada autónoma flexible',
    washer_dryer: 'Lavadora y secadora en la vivienda',
  },
  fr: {
    natural_light: 'Lumière naturelle généreuse',
    fast_fiber: 'Fibre optique haut débit',
    private_parking: 'Parking privé dédié',
    terrace_balcony: 'Terrasse ou balcon privé',
    air_conditioning: 'Climatisation silencieuse',
    workspace: 'Espace bureau dédié',
    full_kitchen: 'Cuisine entièrement équipée',
    quiet_street: 'Rue calme et peu passante',
    self_checkin: 'Arrivée autonome flexible',
    washer_dryer: 'Lave-linge et sèche-linge sur place',
  },
  de: {
    natural_light: 'Viel natürliches Tageslicht',
    fast_fiber: 'Schnelles Glasfaser-WLAN',
    private_parking: 'Privater Stellplatz',
    terrace_balcony: 'Private Terrasse / Balkon',
    air_conditioning: 'Leise Klimaanlage',
    workspace: 'Eigener Arbeitsbereich',
    full_kitchen: 'Voll ausgestattete Küche',
    quiet_street: 'Ruhige Seitenstraße',
    self_checkin: 'Flexibler Self-Check-in',
    washer_dryer: 'Waschmaschine & Trockner',
  },
  pt: {
    natural_light: 'Luz natural abundante',
    fast_fiber: 'Fibra ótica de alta velocidade',
    private_parking: 'Estacionamento privativo',
    terrace_balcony: 'Terraço ou varanda privativa',
    air_conditioning: 'Ar-condicionado silencioso',
    workspace: 'Espaço de trabalho dedicado',
    full_kitchen: 'Cozinha completa equipada',
    quiet_street: 'Rua tranquila e silenciosa',
    self_checkin: 'Check-in autónomo flexível',
    washer_dryer: 'Máquina de lavar e secar',
  },
  ar: {
    natural_light: 'إضاءة طبيعية ممتازة',
    fast_fiber: 'إنترنت ألياف بصرية سريع',
    private_parking: 'موقف سيارات خاص',
    terrace_balcony: 'شرفة أو تراس خاص',
    air_conditioning: 'تكييف هواء هادئ',
    workspace: 'مساحة عمل مخصصة',
    full_kitchen: 'مطبخ متكامل التجهيز',
    quiet_street: 'شارع هادئ قليل الحركة',
    self_checkin: 'دخول ذاتي مرن',
    washer_dryer: 'غسالة ومجفف داخل المسكن',
  },
  hi: {
    natural_light: 'भरपूर प्राकृतिक रोशनी',
    fast_fiber: 'हाई-स्पीड फाइबर WiFi',
    private_parking: 'निजी पार्किंग',
    terrace_balcony: 'निजी बालकनी / छत',
    air_conditioning: 'शांत एयर कंडीशनिंग',
    workspace: 'समर्पित वर्कस्पेस',
    full_kitchen: 'पूरी तरह सुसज्जित रसोई',
    quiet_street: 'शांत और कम ट्रैफिक वाली गली',
    self_checkin: 'सुविधाजनक सेल्फ चेक-इन',
    washer_dryer: 'वॉशर और ड्रायर उपलब्ध',
  },
  ru: {
    natural_light: 'Много естественного света',
    fast_fiber: 'Быстрый оптоволоконный WiFi',
    private_parking: 'Собственное парковочное место',
    terrace_balcony: 'Частная терраса или балкон',
    air_conditioning: 'Тихий кондиционер',
    workspace: 'Удобное рабочее место',
    full_kitchen: 'Полностью оборудованная кухня',
    quiet_street: 'Тихая улица',
    self_checkin: 'Самостоятельное заселение',
    washer_dryer: 'Стиральная и сушильная машины',
  },
  zh: {
    natural_light: '充足自然采光',
    fast_fiber: '高速光纤 WiFi',
    private_parking: '专属私人停车位',
    terrace_balcony: '独立露台/阳台',
    air_conditioning: '静音冷暖空调',
    workspace: '独立办公区',
    full_kitchen: '设施齐全的厨房',
    quiet_street: '安静低噪音街道',
    self_checkin: '灵活自助入住',
    washer_dryer: '室内洗烘一体机',
  },
  ja: {
    natural_light: '豊かな自然光',
    fast_fiber: '高速光回線 Wi-Fi',
    private_parking: '専用駐車場あり',
    terrace_balcony: '専用テラス・バルコニー',
    air_conditioning: '静音エアコン完備',
    workspace: '専用ワークスペース',
    full_kitchen: '調理器具完備のフルキッチン',
    quiet_street: '落ち着いた静かな通り',
    self_checkin: '柔軟なセルフチェックイン',
    washer_dryer: '室内に洗濯乾燥機あり',
  },
};

export function generateListingCopy(
  state: ListingFormState,
  lang: LangCode
): {title: string; body: string} {
  const name = state.propertyName.trim() || 'Central Stay';
  const typeLabel = PROPERTY_TYPE_LABELS[lang][state.propertyType];
  const profileLabel = PROFILE_LABELS[lang][state.guestProfile];
  const highlights = state.strengths.map((k) => STRENGTH_PHRASES[lang][k]);
  if (state.customStrength.trim()) {
    highlights.push(state.customStrength.trim());
  }
  const location = state.locationNotes.trim() || 'Walking distance to transit and daily essentials';
  const topTwo = highlights.slice(0, 2).join(' + ') || `${state.wifiMbps} Mbps WiFi`;

  const bulletList = highlights.map((h) => `• ${h}`).join('\n');

  if (lang === 'es') {
    const rawTitle = `${typeLabel}: ${topTwo}`;
    const title = rawTitle.length <= 50 ? rawTitle : `${name} · ${typeLabel} (${state.bedrooms} hab.)`.slice(0, 50);
    const body = [
      `${name} — ${typeLabel} pensado para ${profileLabel} (hasta ${state.maxGuests} huéspedes · ${state.bedrooms} dormitorios · WiFi ${state.wifiMbps} Mbps).`,
      '',
      'LO MÁS DESTACADO',
      bulletList,
      '',
      'EL ESPACIO Y CAPACIDAD',
      `Alojamiento distribuido de forma práctica para ofrecer descanso real y comodidad diaria. Cuenta con conexión de ${state.wifiMbps} Mbps verificada, espacio cómodo para ${state.maxGuests} personas y equipamiento pensado para estancias cortas o medias.`,
      '',
      'ENTORNO Y UBICACIÓN',
      location,
      '',
      'TRANSPARENCIA PARA TU RESERVA',
      'Descripción fiel a la realidad del inmueble: los códigos de acceso, instrucciones de climatización y recomendaciones del barrio se envían antes de tu llegada para una entrada sin esperas.',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'fr') {
    const title = `${typeLabel} · ${topTwo}`.slice(0, 50);
    const body = [
      `${name} — ${typeLabel} adapté aux ${profileLabel} (jusqu’à ${state.maxGuests} voyageurs · ${state.bedrooms} chambres · WiFi ${state.wifiMbps} Mbps).`,
      '',
      'POINTS FORTS VÉRIFIÉS',
      bulletList,
      '',
      'LE LOGEMENT',
      `Pensé pour un séjour fluide et sans surprise : connexion fiable à ${state.wifiMbps} Mbps, literie confortable pour ${state.maxGuests} personnes et équipements complets.`,
      '',
      'QUARTIER & ACCÈS',
      location,
      '',
      'INFOS PRATIQUES',
      'Annonce factuelle sans promesse exagérée. Les codes d’accès et le livret d’accueil sont transmis avant l’arrivée.',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'de') {
    const title = `${typeLabel}: ${topTwo}`.slice(0, 50);
    const body = [
      `${name} — ${typeLabel} ideal für ${profileLabel} (bis ${state.maxGuests} Gäste · ${state.bedrooms} Schlafzimmer · ${state.wifiMbps} Mbps WLAN).`,
      '',
      'GEPRÜFTE HIGHLIGHTS',
      bulletList,
      '',
      'DIE UNTERKUNFT',
      `Klar geschnittene Räume für bis zu ${state.maxGuests} Personen mit verifiziertem ${state.wifiMbps}-Mbps-Anschluss und durchdachter Alltagsausstattung.`,
      '',
      'LAGE & ANBINDUNG',
      location,
      '',
      'TRANSPARENTE HINWEISE',
      'Alle Angaben entsprechen exakt dem Zustand vor Ort. Zugangsdaten und Gästemappe erhalten Sie rechtzeitig vor Anreise.',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'pt') {
    const title = `${typeLabel} · ${topTwo}`.slice(0, 50);
    const body = [
      `${name} — ${typeLabel} preparado para ${profileLabel} (até ${state.maxGuests} hóspedes · ${state.bedrooms} quartos · WiFi ${state.wifiMbps} Mbps).`,
      '',
      'DESTAQUES VERIFICADOS',
      bulletList,
      '',
      'O ESPAÇO',
      `Ambiente prático e bem distribuído para até ${state.maxGuests} pessoas, com internet estável de ${state.wifiMbps} Mbps e estrutura completa para estadias curtas ou médias.`,
      '',
      'LOCALIZAÇÃO E ENTORNO',
      location,
      '',
      'INFORMAÇÕES CLARAS',
      'Descrição fiel ao imóvel real. Os códigos de acesso e o manual da casa são enviados antes do check-in.',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'ar') {
    const title = `${typeLabel} · ${name}`.slice(0, 50);
    const body = [
      `${name} — ${typeLabel} مهيأ لاستقبال ${profileLabel} (حتى ${state.maxGuests} ضيوف · ${state.bedrooms} غرف نوم · إنترنت ${state.wifiMbps} Mbps).`,
      '',
      'المميزات المؤكدة',
      bulletList,
      '',
      'تفاصيل المسكن',
      `مساحة عملية ومريحة تتسع لـ ${state.maxGuests} ضيوف مع سرعة إنترنت حقيقية ${state.wifiMbps} Mbps وتجهيزات يومية متكاملة.`,
      '',
      'الموقع والحي',
      location,
      '',
      'ملاحظات واضحة للحجز',
      'وصف دقيق يطابق الواقع تماماً، وتُرسل رموز الدخول ودليل الترحيب قبل الوصول.',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'hi') {
    const title = `${typeLabel} · ${name}`.slice(0, 50);
    const body = [
      `${name} — ${profileLabel} के लिए उपयुक्त ${typeLabel} (अधिकतम ${state.maxGuests} मेहमान · ${state.bedrooms} बेडरूम · ${state.wifiMbps} Mbps WiFi)।`,
      '',
      'मुख्य विशेषताएं',
      bulletList,
      '',
      'प्रॉपर्टी विवरण',
      `${state.maxGuests} मेहमानों के आरामदायक ठहराव के लिए व्यवस्थित स्थान, विश्वसनीय ${state.wifiMbps} Mbps इंटरनेट और आवश्यक दैनिक सुविधाओं के साथ।`,
      '',
      'आसपास और परिवहन',
      location,
      '',
      'स्पष्ट बुकिंग जानकारी',
      'बिना किसी अतिशयोक्ति के सटीक विवरण; चेक-इन से पहले एक्सेस कोड और वेलकम गाइड साझा किए जाते हैं।',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'ru') {
    const title = `${typeLabel} · ${topTwo}`.slice(0, 50);
    const body = [
      `${name} — ${typeLabel} для ${profileLabel} (до ${state.maxGuests} гостей · ${state.bedrooms} спальни · WiFi ${state.wifiMbps} Мбит/с).`,
      '',
      'КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА',
      bulletList,
      '',
      'О ЖИЛЬЕ',
      `Продуманная планировка для комфортного размещения до ${state.maxGuests} гостей, стабильный интернет ${state.wifiMbps} Мбит/с и всё необходимое для спокойного проживания.`,
      '',
      'РАЙОН И ТРАНСПОРТ',
      location,
      '',
      'ЧЕСТНЫЕ ДЕТАЛИ',
      'Описание полностью соответствует реальности. Код доступа и гид гостя отправляются заранее до заезда.',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'zh') {
    const title = `${typeLabel} · ${topTwo}`.slice(0, 50);
    const body = [
      `${name} — 专为${profileLabel}打造的${typeLabel}（最多可住 ${state.maxGuests} 人 · ${state.bedrooms} 间卧室 · ${state.wifiMbps} Mbps 光纤）。`,
      '',
      '核心亮点',
      bulletList,
      '',
      '房源空间',
      `空间布局实用舒适，可容纳 ${state.maxGuests} 位房客，配备实测 ${state.wifiMbps} Mbps 稳定网络与完善日常设施，适合短住或中长住。`,
      '',
      '周边与交通',
      location,
      '',
      '透明入住说明',
      '房源描述如实反映实际情况；入住密码及电子欢迎指南将在抵达前准时发送。',
    ].join('\n');
    return {title, body};
  }

  if (lang === 'ja') {
    const title = `${typeLabel}｜${topTwo}`.slice(0, 50);
    const body = [
      `${name} — ${profileLabel}に最適な${typeLabel}（最大${state.maxGuests}名・${state.bedrooms}寝室・Wi-Fi ${state.wifiMbps} Mbps）。`,
      '',
      '主な設備・強み',
      bulletList,
      '',
      'お部屋について',
      `最大${state.maxGuests}名が快適に過ごせる機能的な空間です。実測${state.wifiMbps} Mbpsの安定した回線と生活必需設備を備えています。`,
      '',
      '周辺環境・アクセス',
      location,
      '',
      'ご予約前のご案内',
      '誇張のない正確な記載を心がけています。入室暗証番号とハウスガイドはチェックイン前にお送りします。',
    ].join('\n');
    return {title, body};
  }

  // English default
  const rawEnTitle = `${typeLabel}: ${topTwo}`;
  const title = rawEnTitle.length <= 50 ? rawEnTitle : `${name} · ${typeLabel} (${state.bedrooms}BR)`.slice(0, 50);
  const body = [
    `${name} — A practical, well-kept ${typeLabel.toLowerCase()} tailored for ${profileLabel} (up to ${state.maxGuests} guests · ${state.bedrooms} bedrooms · ${state.wifiMbps} Mbps WiFi).`,
    '',
    'VERIFIED HIGHLIGHTS',
    bulletList,
    '',
    'THE SPACE',
    `Designed for smooth, predictable stays with reliable ${state.wifiMbps} Mbps connectivity, comfortable sleeping arrangements for ${state.maxGuests} guests, and everyday essentials stocked prior to arrival.`,
    '',
    'NEIGHBORHOOD & TRANSIT',
    location,
    '',
    'CLEAR EXPECTATIONS',
    'Listed accurately with zero exaggeration: exact access codes, climate instructions, and local tips are delivered ahead of check-in for a frictionless arrival.',
  ].join('\n');

  return {title, body};
}

export function generateStageMessage(state: MessagesFormState): string {
  const guest = state.guestName.trim() || 'Guest';
  const prop = state.propertyName.trim() || 'our property';
  const ci = state.checkInTime || '15:00';
  const co = state.checkOutTime || '11:00';
  const code = state.accessCode.trim() || '4829#';
  const note = state.accessNote.trim() || 'Keybox at main entrance';
  const lang = state.guestLang;

  const templates: Record<LangCode, Record<MessagesFormState['stage'], string>> = {
    en: {
      booking_confirmation: `Hi ${guest},\n\nThank you for booking ${prop}. Your reservation is confirmed!\n\n• Check-in: from ${ci}\n• Check-out: by ${co}\n\nWe will send your exact arrival details and access code (${note}) 24–48 hours before arrival. Feel free to share your estimated arrival time whenever convenient.`,
      checkin_instructions: `Hi ${guest},\n\nEverything is ready for your arrival at ${prop} today from ${ci}.\n\n• Access code / PIN: ${code}\n• Entry instructions: ${note}\n\nOnce inside, you will find our printed Welcome Guide with WiFi credentials and climate tips on the table. Message us anytime if you need anything!`,
      midstay_checkin: `Hi ${guest},\n\nHope your first night at ${prop} went smoothly! Just checking in quickly to make sure the WiFi, heating/AC, and hot water are all working as expected.\n\nLet us know if we can top up anything for the rest of your stay.`,
      checkout_instructions: `Hi ${guest},\n\nWe hope you enjoyed your stay at ${prop}. As a gentle reminder, check-out tomorrow is by ${co}.\n\nBefore heading out, please:\n1. Leave used towels in the bathroom\n2. Rinse dishes / run the dishwasher\n3. Place trash bags in the designated bins\n4. Close windows and lock the main door (${note})\n\nSafe travels ahead!`,
      review_request: `Hi ${guest},\n\nThank you again for staying at ${prop} and for leaving the place in great shape.\n\nIf you have 60 seconds, we would truly appreciate a short review of your stay—it helps future guests know what to expect and helps us keep improving. Wishing you safe travels!`,
    },
    es: {
      booking_confirmation: `Hola ${guest},\n\n¡Muchas gracias por reservar en ${prop}! Tu estancia está confirmada.\n\n• Check-in: a partir de las ${ci}\n• Check-out: hasta las ${co}\n\nTe enviaremos las instrucciones exactas de acceso (${note}) entre 24 y 48 horas antes de tu llegada. Si ya conoces tu hora aproximada de llegada, compártela cuando quieras.`,
      checkin_instructions: `Hola ${guest},\n\nYa está todo preparado para recibirte en ${prop} a partir de las ${ci}.\n\n• Código de acceso / PIN: ${code}\n• Indicaciones de entrada: ${note}\n\nDentro encontrarás la guía impresa de bienvenida con la clave WiFi y recomendaciones del barrio. Escríbenos ante cualquier duda.`,
      midstay_checkin: `Hola ${guest},\n\n¿Qué tal la primera noche en ${prop}? Te escribimos brevemente para confirmar que el WiFi, la climatización y el agua caliente funcionan correctamente.\n\nAvísanos si necesitas cualquier detalle adicional durante tu estancia.`,
      checkout_instructions: `Hola ${guest},\n\nEsperamos que estés disfrutando de ${prop}. Te recordamos que la salida es hasta las ${co}.\n\nAntes de salir, te agradecemos:\n1. Dejar las toallas usadas en el baño\n2. Aclarar los platos o poner el lavavajillas\n3. Depositar la basura en los contenedores indicados\n4. Cerrar ventanas y comprobar la puerta (${note})\n\n¡Buen viaje de regreso!`,
      review_request: `Hola ${guest},\n\nGracias de nuevo por alojarte en ${prop} y cuidar tan bien el apartamento.\n\nSi tienes un minuto para dejar una valoración sobre tu estancia, nos ayudará muchísimo a seguir mejorando y orientar a futuros viajeros. ¡Hasta pronto!`,
    },
    fr: {
      booking_confirmation: `Bonjour ${guest},\n\nMerci pour votre réservation à ${prop}. Votre séjour est confirmé !\n\n• Arrivée : à partir de ${ci}\n• Départ : avant ${co}\n\nNous vous enverrons les instructions exactes d’accès (${note}) 24 à 48h avant votre arrivée.`,
      checkin_instructions: `Bonjour ${guest},\n\nTout est prêt pour votre arrivée à ${prop} dès ${ci}.\n\n• Code d’accès : ${code}\n• Accès : ${note}\n\nLe livret d’accueil imprimé avec le WiFi vous attend sur la table. Bon séjour !`,
      midstay_checkin: `Bonjour ${guest},\n\nNous espérons que votre première nuit à ${prop} s’est bien passée. Tout fonctionne-t-il bien (WiFi, chauffage/clim, eau chaude) ? N’hésitez pas à nous écrire si besoin.`,
      checkout_instructions: `Bonjour ${guest},\n\nPour rappel, votre départ de ${prop} est prévu avant ${co}.\n\nMerci simplement de :\n1. Laisser les serviettes dans la salle de bain\n2. Ranger la vaisselle et sortir les poubelles\n3. Fermer les fenêtres et verrouiller la porte (${note})\n\nBon retour !`,
      review_request: `Bonjour ${guest},\n\nMerci encore pour votre séjour à ${prop} et pour le soin apporté au logement.\n\nSi vous avez un instant pour laisser un avis, cela nous aide beaucoup. Au plaisir de vous accueillir à nouveau !`,
    },
    de: {
      booking_confirmation: `Hallo ${guest},\n\nvielen Dank für Ihre Buchung in ${prop}. Ihre Reservierung ist bestätigt!\n\n• Check-in: ab ${ci} Uhr\n• Check-out: bis ${co} Uhr\n\nDie genauen Zugangsdaten (${note}) senden wir Ihnen 24–48 Stunden vor Anreise.`,
      checkin_instructions: `Hallo ${guest},\n\nalles ist für Ihre Ankunft in ${prop} ab ${ci} Uhr vorbereitet.\n\n• Zugangscode / PIN: ${code}\n• Hinweis zum Eingang: ${note}\n\nAuf dem Tisch liegt unsere gedruckte Gästemappe mit den WLAN-Daten. Gute Anreise!`,
      midstay_checkin: `Hallo ${guest},\n\nwir hoffen, Sie hatten eine angenehme erste Nacht in ${prop}. Funktioniert alles mit WLAN, Heizung/Klima und Warmwasser zu Ihrer Zufriedenheit? Geben Sie uns gerne kurz Bescheid.`,
      checkout_instructions: `Hallo ${guest},\n\nals kurze Erinnerung: Der Check-out in ${prop} ist morgen bis ${co} Uhr.\n\nBitte vor der Abreise kurz:\n1. Benutzte Handtücher im Bad lassen\n2. Geschirr abspülen und Müll entsorgen\n3. Fenster schließen und Eingangstür abschließen (${note})\n\nGute Weiterreise!`,
      review_request: `Hallo ${guest},\n\nherzlichen Dank für Ihren Aufenthalt in ${prop} und den sorgsamen Umgang mit der Unterkunft.\n\nÜber eine kurze Bewertung würden wir uns sehr freuen – sie hilft künftigen Gästen und unserem Team enorm.`,
    },
    pt: {
      booking_confirmation: `Olá ${guest},\n\nObrigado por reservar ${prop}! A sua reserva está confirmada.\n\n• Check-in: a partir das ${ci}\n• Check-out: até às ${co}\n\nEnviaremos os detalhes exatos de acesso (${note}) 24–48h antes da chegada.`,
      checkin_instructions: `Olá ${guest},\n\nEstá tudo pronto para a sua chegada a ${prop} a partir das ${ci}.\n\n• Código de acesso: ${code}\n• Instruções: ${note}\n\nNo interior encontrará o guia impresso com o WiFi e dicas locais. Boa estadia!`,
      midstay_checkin: `Olá ${guest},\n\nEsperamos que a primeira noite em ${prop} tenha corrido bem! O WiFi, a climatização e a água quente estão a funcionar perfeitamente? Avise-nos se precisar de algo.`,
      checkout_instructions: `Olá ${guest},\n\nLembramos que o check-out em ${prop} é até às ${co}.\n\nAntes de sair, pedimos apenas que:\n1. Deixe as toalhas usadas na casa de banho\n2. Lave a loiça e retire o lixo\n3. Feche janelas e tranque a porta (${note})\n\nBoa viagem!`,
      review_request: `Olá ${guest},\n\nMais uma vez obrigado pela estadia em ${prop} e por deixar tudo tão organizado.\n\nSe puder deixar uma breve avaliação sobre a sua experiência, ficaremos muito gratos!`,
    },
    ar: {
      booking_confirmation: `مرحباً ${guest}،\n\nشكراً لحجزك في ${prop}. تم تأكيد حجزك بنجاح!\n\n• تسجيل الوصول: من الساعة ${ci}\n• تسجيل المغادرة: حتى الساعة ${co}\n\nسنرسل لك تفاصيل الدخول الدقيقة (${note}) قبل الوصول بـ 24 إلى 48 ساعة.`,
      checkin_instructions: `مرحباً ${guest}،\n\nكل شيء جاهز لاستقبالك اليوم في ${prop} اعتباراً من الساعة ${ci}.\n\n• رمز الدخول: ${code}\n• ملاحظات الدخول: ${note}\n\nستجد بالداخل دليل الترحيب المطبوع مع بيانات الواي فاي. إقامة سعيدة!`,
      midstay_checkin: `مرحباً ${guest}،\n\nنتمنى أن تكون ليلتك الأولى في ${prop} مريحة. نود فقط التأكد من أن الواي فاي والتكييف والمياه الساخنة تعمل بشكل ممتاز. أخبرنا إذا احتجت أي مساعدة.`,
      checkout_instructions: `مرحباً ${guest}،\n\nنذكّرك بأن موعد المغادرة من ${prop} هو الساعة ${co}.\n\nنرجو قبل المغادرة:\n1. ترك المناشف المستخدمة في الحمام\n2. وضع الأواني في مكانها وإخراج القمامة\n3. إغلاق النوافذ وقفل الباب (${note})\n\nرحلة آمنة وسعيدة!`,
      review_request: `مرحباً ${guest}،\n\nشكراً لإقامتك في ${prop} واهتمامك بالمكان. إذا أتيحت لك دقيقة لكتابة تقييمك عن الإقامة، فسنكون ممتنين جداً لذلك.`,
    },
    hi: {
      booking_confirmation: `नमस्ते ${guest},\n\n${prop} में बुकिंग के लिए धन्यवाद। आपकी बुकिंग कन्फर्म हो गई है!\n\n• चेक-इन: ${ci} बजे से\n• चेक-आउट: ${co} बजे तक\n\nचेक-इन से 24–48 घंटे पहले हम आपको सटीक प्रवेश विवरण (${note}) भेजेंगे।`,
      checkin_instructions: `नमस्ते ${guest},\n\nआज ${ci} बजे से ${prop} में आपके स्वागत के लिए सब कुछ तैयार है।\n\n• एक्सेस कोड / PIN: ${code}\n• प्रवेश निर्देश: ${note}\n\nअंदर टेबल पर WiFi पासवर्ड और स्थानीय सुझावों के साथ प्रिंटेड वेलकम गाइड रखी है।`,
      midstay_checkin: `नमस्ते ${guest},\n\nउम्मीद है ${prop} में आपकी पहली रात आरामदायक रही। बस यह सुनिश्चित कर रहे हैं कि WiFi, AC/हीटर और गर्म पानी ठीक से काम कर रहे हैं। किसी भी मदद के लिए हमें संदेश भेजें।`,
      checkout_instructions: `नमस्ते ${guest},\n\nयाद दिला दें कि कल ${prop} से चेक-आउट ${co} बजे तक है।\n\nजाने से पहले कृपया:\n1. उपयोग किए गए तौलिए बाथरूम में रखें\n2. बर्तन साफ करें और कचरा तय डिब्बों में डालें\n3. खिड़कियां बंद करें और मुख्य दरवाजा लॉक करें (${note})\n\nशुभ यात्रा!`,
      review_request: `नमस्ते ${guest},\n\n${prop} में ठहरने और घर को साफ रखने के लिए फिर से धन्यवाद। यदि आपके पास एक मिनट हो, तो कृपया अपने अनुभव का संक्षिप्त रिव्यू साझा करें।`,
    },
    ru: {
      booking_confirmation: `Здравствуйте, ${guest}!\n\nСпасибо за бронирование ${prop}. Ваша бронь подтверждена!\n\n• Заезд: с ${ci}\n• Выезд: до ${co}\n\nТочную инструкцию и код доступа (${note}) мы отправим за 24–48 часов до заезда.`,
      checkin_instructions: `Здравствуйте, ${guest}!\n\nВсё готово к вашему заезду в ${prop} сегодня с ${ci}.\n\n• Код доступа: ${code}\n• Как войти: ${note}\n\nНа столе внутри лежит печатная памятка гостя с паролем от WiFi. Приятного отдыха!`,
      midstay_checkin: `Здравствуйте, ${guest}!\n\nНадеемся, первая ночь в ${prop} прошла комфортно. Подскажите, всё ли в порядке с WiFi, климатом и горячей водой? Пишите в любое время.`,
      checkout_instructions: `Здравствуйте, ${guest}!\n\nНапоминаем, что выезд из ${prop} завтра до ${co}.\n\nПеред уходом, пожалуйста:\n1. Оставьте полотенца в ванной\n2. Сполосните посуду и вынесите мусор\n3. Закройте окна и заприте дверь (${note})\n\nСчастливого пути!`,
      review_request: `Здравствуйте, ${guest}!\n\nБлагодарим за проживание в ${prop} и бережное отношение к квартире. Будем очень признательны за короткий отзыв о вашем пребывании.`,
    },
    zh: {
      booking_confirmation: `${guest} 您好，\n\n感谢预订 ${prop}，您的预订已确认！\n\n• 入住时间：${ci} 起\n• 退房时间：${co} 前\n\n我们将在您抵达前 24–48 小时发送详细门锁密码与入户指引（${note}）。`,
      checkin_instructions: `${guest} 您好，\n\n${prop} 已为您准备就绪，今天 ${ci} 起即可办理入住。\n\n• 入户密码：${code}\n• 指引备注：${note}\n\n屋内桌上放有打印版欢迎指南（含 WiFi 密码与周边推荐）。祝入住愉快！`,
      midstay_checkin: `${guest} 您好，\n\n希望您在 ${prop} 的第一晚休息得舒适！特此简短确认 WiFi、空调/暖气及热水是否都正常使用，如有任何需要请随时联系我们。`,
      checkout_instructions: `${guest} 您好，\n\n温馨提醒您明天退房时间为 ${co} 前。\n\n离开前请协助：\n1. 将使用过的毛巾留在浴室\n2. 冲洗餐具并将垃圾投入指定分类桶\n3. 关好门窗并确认落锁（${note}）\n\n祝您旅途平安！`,
      review_request: `${guest} 您好，\n\n再次感谢入住 ${prop} 并悉心爱护房屋。如果方便，欢迎花一分钟留下真实评价，这对我们和后续房客都非常有帮助！`,
    },
    ja: {
      booking_confirmation: `${guest}様\n\n${prop}をご予約いただきありがとうございます。ご予約が確定いたしました。\n\n・チェックイン：${ci}〜\n・チェックアウト：〜${co}\n\n鍵の暗証番号および入室案内（${note}）は、ご到着の24〜48時間前にお送りいたします。`,
      checkin_instructions: `${guest}様\n\n本日${ci}より${prop}へご入室いただけます。\n\n・入室コード / PIN：${code}\n・入室方法：${note}\n\n室内のテーブルにWi-Fi情報や家電の使い方をまとめたウェルカムガイドをご用意しています。どうぞ快適にお過ごしください。`,
      midstay_checkin: `${guest}様\n\n${prop}での初日は快適にお過ごしいただけましたでしょうか。Wi-Fi、空調、お湯などに問題がないか確認のためご連絡いたしました。何かございましたらお気軽にお知らせください。`,
      checkout_instructions: `${guest}様\n\n明日のチェックアウト時刻は${co}までとなっております。\n\nご出発前に下記のご協力をお願いいたします：\n1. 使用済みタオルは浴室へお戻しください\n2. 食器を軽く洗い、ゴミは所定の分別ボックスへお出しください\n3. 窓を閉め、玄関の施錠をご確認ください（${note}）\n\nお気をつけてお帰りください！`,
      review_request: `${guest}様\n\nこの度は${prop}をご利用いただき、また綺麗にお使いいただき誠にありがとうございました。よろしければ滞在のご感想をレビューにてお聞かせいただけますと幸いです。`,
    },
  };

  return templates[lang][state.stage];
}

export function generateWelcomeGuidePlainText(state: WelcomeGuideFormState, lang: LangCode): string {
  const prop = state.propertyName.trim() || 'Property';
  if (lang === 'es') {
    return [
      `GUÍA DE BIENVENIDA — ${prop}`,
      `${state.welcomeSubtitle}`,
      `Anfitrión: ${state.hostName} | Check-in: ${state.checkInTime} · Check-out: ${state.checkOutTime}`,
      '',
      `WIFI: Red "${state.wifiName}" | Clave: ${state.wifiPassword} (${state.wifiSpeed})`,
      '',
      `BASURA Y RECICLAJE (${state.trashSchedule}):`,
      state.trashRules,
      '',
      'CLIMA Y ELECTRODOMÉSTICOS:',
      state.appliancesNotes,
      '',
      'TELÉFONOS DE URGENCIA Y ASISTENCIA:',
      `• Anfitrión: ${state.hostPhone}`,
      `• Emergencias: ${state.emergencyPhone}`,
      `• Mantenimiento / Cerrajero: ${state.maintenancePhone}`,
      '',
      'RECOMENDACIONES LOCALES:',
      `• Panadería: ${state.bakeryRec}`,
      `• Supermercado: ${state.supermarketRec}`,
      `• Transporte: ${state.transitRec}`,
      `• Restaurantes: ${state.restaurantRec}`,
    ].join('\n');
  }

  return [
    `WELCOME GUIDE & HOUSE MANUAL — ${prop}`,
    `${state.welcomeSubtitle}`,
    `Host: ${state.hostName} | Check-In: ${state.checkInTime} · Check-Out: ${state.checkOutTime}`,
    '',
    `WIFI ACCESS: Network "${state.wifiName}" | Password: ${state.wifiPassword} (${state.wifiSpeed})`,
    '',
    `WASTE & RECYCLING (${state.trashSchedule}):`,
    state.trashRules,
    '',
    'APPLIANCES & CLIMATE:',
    state.appliancesNotes,
    '',
    'ASSISTANCE & EMERGENCY CONTACTS:',
    `• Host Support: ${state.hostPhone}`,
    `• Local Emergency: ${state.emergencyPhone}`,
    `• Maintenance / Locksmith: ${state.maintenancePhone}`,
    '',
    'NEIGHBORHOOD ESSENTIALS:',
    `• Bakery & Coffee: ${state.bakeryRec}`,
    `• Supermarket: ${state.supermarketRec}`,
    `• Transit: ${state.transitRec}`,
    `• Dining: ${state.restaurantRec}`,
  ].join('\n');
}

export function generateReviewReplies(
  state: ReviewReplyFormState,
  lang: LangCode
): {short: string; detailed: string} {
  const guest = state.guestName.trim() || 'Guest';
  const prop = state.propertyName.trim() || 'our property';
  const summary = state.reviewSummary.trim() || 'your feedback during your stay';
  const action = state.correctiveAction.trim() || 'completed a full operational inspection with our local team';

  const issueFocus: Record<LangCode, Record<ReviewIssue, string>> = {
    en: {
      noise_neighbors: 'ambient noise levels',
      cleanliness: 'housekeeping standards',
      unmet_expectations: 'alignment with the listing details',
      checkin_access: 'the arrival and lockbox access experience',
    },
    es: {
      noise_neighbors: 'el nivel de ruido exterior o vecinal',
      cleanliness: 'la limpieza y preparación',
      unmet_expectations: 'las expectativas respecto al anuncio',
      checkin_access: 'el proceso de llegada y acceso',
    },
    fr: {
      noise_neighbors: 'le calme environnant',
      cleanliness: 'la propreté du logement',
      unmet_expectations: 'la conformité aux attentes',
      checkin_access: 'l’accès et l’arrivée',
    },
    de: {
      noise_neighbors: 'die Geräuschkulisse',
      cleanliness: 'die Reinigung',
      unmet_expectations: 'die Erwartungen laut Inserat',
      checkin_access: 'den Check-in-Ablauf',
    },
    pt: {
      noise_neighbors: 'o ruído na envolvente',
      cleanliness: 'a limpeza da unidade',
      unmet_expectations: 'o alinhamento com o anúncio',
      checkin_access: 'o processo de check-in',
    },
    ar: {
      noise_neighbors: 'مستوى الهدوء المحيط',
      cleanliness: 'معايير النظافة',
      unmet_expectations: 'تطابق التوقعات مع الوصف',
      checkin_access: 'إجراءات الوصول والدخول',
    },
    hi: {
      noise_neighbors: 'शोर के स्तर',
      cleanliness: 'सफाई मानकों',
      unmet_expectations: 'लिस्टिंग अपेक्षाओं',
      checkin_access: 'चेक-इन प्रक्रिया',
    },
    ru: {
      noise_neighbors: 'уровень шума',
      cleanliness: 'качество уборки',
      unmet_expectations: 'соответствие ожиданиям',
      checkin_access: 'процесс заселения',
    },
    zh: {
      noise_neighbors: '周边安静度',
      cleanliness: '卫生清洁标准',
      unmet_expectations: '房源预期一致性',
      checkin_access: '自助入住体验',
    },
    ja: {
      noise_neighbors: '周辺の静粛性',
      cleanliness: '清掃状況',
      unmet_expectations: '掲載内容との期待ギャップ',
      checkin_access: 'チェックイン手順',
    },
  };

  const focus = issueFocus[lang][state.issue];
  const isCalm = state.tone === 'calm_empathetic';

  if (lang === 'es') {
    const short = isCalm
      ? `Gracias por tu reseña, ${guest}. Lamentamos las molestias con ${focus} en ${prop}. Tomamos muy en serio tu comentario y ya hemos aplicado mejoras (${action}) para ofrecer una estancia más cómoda a futuros huéspedes.`
      : `Gracias por compartir tu comentario, ${guest}. Revisamos inmediatamente lo indicado sobre ${focus} en ${prop}. Aunque nuestra descripción detalla las características reales del edificio, ya verificamos el punto señalado (${action}).`;

    const detailed = isCalm
      ? `Hola ${guest}, gracias por dedicar tiempo a valorar tu estancia en ${prop}. Sentimos sinceramente que ${summary} haya afectado tu descanso respecto a ${focus}.\n\nEn cuanto recibimos tu comentario, nuestro equipo actuó directamente: ${action}. Agradecemos también que compartieras estos detalles, ya que nos permiten mantener estándares claros y transparentes para quienes reserven próximamente.`
      : `Hola ${guest}, agradecemos tu reseña sobre ${prop} y tomamos nota de tu observación acerca de ${focus} (${summary}).\n\nPara tranquilidad de futuros huéspedes, confirmamos que ${action}. Mantenemos todas las características de la propiedad descritas de forma transparente en el anuncio y seguimos supervisando cada entrega para garantizar coherencia operativa.`;

    return {short, detailed};
  }

  if (lang === 'fr') {
    const short = isCalm
      ? `Merci pour votre retour, ${guest}. Nous sommes désolés que ${focus} ait perturbé votre séjour à ${prop}. Nous avons déjà agi concrètement (${action}) pour les prochains voyageurs.`
      : `Merci pour votre avis, ${guest}. Concernant ${focus} à ${prop}, nous avons immédiatement effectué une vérification complète (${action}) tout en veillant à la précision factuelle de notre annonce.`;
    const detailed = isCalm
      ? `Bonjour ${guest}, merci d’avoir pris le temps d’évaluer ${prop}. Nous regrettons sincèrement que ${summary} ait nui à votre confort sur ${focus}.\n\nDès votre remarque reçue, nous avons mis en place une action ciblée : ${action}. Nous espérons avoir le plaisir de vous accueillir dans de meilleures conditions.`
      : `Bonjour ${guest}, merci pour votre commentaire sur ${prop} concernant ${focus} (${summary}).\n\nPar souci de transparence envers les futurs voyageurs, nous confirmons que ${action}. Nos informations d’annonce restent factuelles afin d’éviter tout malentendu.`;
    return {short, detailed};
  }

  if (lang === 'de') {
    const short = isCalm
      ? `Vielen Dank für Ihr Feedback, ${guest}. Es tut uns leid, dass ${focus} in ${prop} beeinträchtigt war. Wir haben bereits reagiert (${action}), um künftigen Gästen einen ruhigeren Aufenthalt zu sichern.`
      : `Danke für Ihre Rückmeldung, ${guest}. Ihren Hinweis zu ${focus} in ${prop} haben wir direkt geprüft und dokumentiert (${action}).`;
    const detailed = isCalm
      ? `Hallo ${guest}, danke für Ihre Bewertung zu ${prop}. Wir bedauern aufrichtig, dass ${summary} Ihren Aufenthalt im Hinblick auf ${focus} gestört hat.\n\nWir haben umgehend gehandelt: ${action}. Solches Feedback hilft uns, unsere Abläufe kontinuierlich nachzuschärfen.`
      : `Hallo ${guest}, vielen Dank für Ihre Rückmeldung zu ${prop} bezüglich ${focus} (${summary}).\n\nZur transparenten Einordnung für künftige Gäste bestätigen wir: ${action}. Alle Angaben im Inserat entsprechen den realen Gegebenheiten vor Ort.`;
    return {short, detailed};
  }

  if (lang === 'pt') {
    const short = isCalm
      ? `Obrigado pela avaliação, ${guest}. Lamentamos o inconveniente com ${focus} em ${prop}. Já implementamos melhorias (${action}) para garantir uma experiência mais tranquila.`
      : `Obrigado pelo comentário, ${guest}. Analisamos o ponto mencionado sobre ${focus} em ${prop} e já confirmamos a verificação necessária (${action}).`;
    const detailed = isCalm
      ? `Olá ${guest}, agradecemos por partilhar a sua experiência em ${prop}. Sentimos que ${summary} tenha afetado o seu conforto quanto a ${focus}.\n\nAssim que recebemos o retorno, atuamos de imediato: ${action}. Seguimos atentos para oferecer estadias cada vez mais consistentes.`
      : `Olá ${guest}, agradecemos o seu feedback sobre ${prop} relativo a ${focus} (${summary}).\n\nPara transparência dos próximos hóspedes, confirmamos que ${action}. Mantemos a descrição do anúncio fiel às condições reais do espaço.`;
    return {short, detailed};
  }

  // Fallback structured templates for ar/hi/ru/zh/ja & en
  if (lang === 'ar') {
    return {
      short: `شكراً لملاحظاتك يا ${guest}. نأسف لأي إزعاج بخصوص ${focus} في ${prop}. لقد اتخذنا إجراءً فورياً (${action}) لضمان تجربة أفضل للضيوف القادمين.`,
      detailed: `مرحباً ${guest}، نشكرك على وقتك في تقييم الإقامة في ${prop}. نقدر ملاحظتك حول ${focus} (${summary}).\n\nنود طمأنة الضيوف المستقبليين بأننا قمنا بـ: ${action}. نلتزم دائماً بالشفافية التامة وجودة التشغيل.`,
    };
  }
  if (lang === 'hi') {
    return {
      short: `आपकी समीक्षा के लिए धन्यवाद, ${guest}। ${prop} में ${focus} को लेकर हुई असुविधा के लिए खेद है। हमने तुरंत सुधारात्मक कदम (${action}) उठाए हैं।`,
      detailed: `नमस्ते ${guest}, ${prop} में अपने अनुभव साझा करने के लिए धन्यवाद। ${focus} (${summary}) से जुड़ी आपकी टिप्पणी पर हमने तुरंत कार्रवाई की: ${action}। भविष्य के मेहमानों के लिए स्पष्ट और बेहतर सेवा हमारी प्राथमिकता है।`,
    };
  }
  if (lang === 'ru') {
    return {
      short: `Спасибо за отзыв, ${guest}. Нам жаль, что возникли замечания по поводу ${focus} в ${prop}. Мы уже приняли меры (${action}) для будущих гостей.`,
      detailed: `Здравствуйте, ${guest}! Благодарим за подробную оценку проживания в ${prop}. Мы внимательно рассмотрели ваш комментарий про ${focus} (${summary}).\n\nСразу после выезда мы выполнили проверку и исправление: ${action}. Для нас важно сохранять честность описания и стабильный сервис.`,
    };
  }
  if (lang === 'zh') {
    return {
      short: `感谢您的反馈，${guest}。对于 ${prop} 在${focus}方面带来的不便我们深表歉意，目前已落实改进措施（${action}），为后续房客提供更稳妥的体验。`,
      detailed: `${guest} 您好，感谢您抽空对 ${prop} 做出评价。针对您提到的${focus}问题（${summary}），我们高度重视。\n\n收到反馈后，团队已第一时间完成整改：${action}。我们将继续保持信息透明与稳定的接待标准。`,
    };
  }
  if (lang === 'ja') {
    return {
      short: `${guest}様、ご評価ありがとうございます。${prop}での${focus}につきましてご不便をおかけし申し訳ございません。すでに改善対応（${action}）を完了しております。`,
      detailed: `${guest}様、${prop}へのご宿泊と貴重なご意見に感謝いたします。${focus}に関するご指摘（${summary}）を真摯に受け止めております。\n\nご指摘を受け、ただちに「${action}」を実施いたしました。今後も事実に即したご案内と品質維持に努めてまいります。`,
    };
  }

  // English default
  const short = isCalm
    ? `Thank you for your feedback, ${guest}. We sincerely apologize for the friction regarding ${focus} during your stay at ${prop}. We took immediate action (${action}) so future guests enjoy a seamless stay.`
    : `Thank you for sharing your review, ${guest}. We immediately inspected the point raised regarding ${focus} at ${prop} and verified the setup (${action}). Our listing remains transparent so guests know exact property conditions before booking.`;

  const detailed = isCalm
    ? `Hi ${guest}, thank you for taking the time to review your stay at ${prop}. We are genuinely sorry that ${summary} impacted your comfort regarding ${focus}.\n\nAs soon as we saw your note, our team addressed it directly: ${action}. Feedback like yours helps us keep our operations sharp, and we appreciate you bringing this to our attention.`
    : `Hi ${guest}, thank you for reviewing ${prop} and sharing your perspective on ${focus} (${summary}).\n\nFor clarity for future guests, we verified all operational points immediately after checkout: ${action}. We describe our property factually in the listing and continue routine inspections between every turnover to maintain consistent standards.`;

  return {short, detailed};
}

export function generateHouseRulesText(state: HouseRulesFormState, lang: LangCode): string {
  const prop = state.propertyName.trim() || 'Property';
  const typeLabel = PROPERTY_TYPE_LABELS[lang][state.propertyType];

  const partyLabels: Record<LangCode, Record<PartyPolicy, string>> = {
    en: {strictly_prohibited: 'Strictly prohibited (zero tolerance)', quiet_small_gatherings: 'Quiet small gatherings only (no amplified sound)'},
    es: {strictly_prohibited: 'Estrictamente prohibidas (tolerancia cero)', quiet_small_gatherings: 'Solo reuniones tranquilas sin música alta'},
    fr: {strictly_prohibited: 'Strictement interdites (tolérance zéro)', quiet_small_gatherings: 'Petits rassemblements calmes uniquement'},
    de: {strictly_prohibited: 'Strikt untersagt (Null-Toleranz)', quiet_small_gatherings: 'Nur ruhige Treffen ohne laute Musik'},
    pt: {strictly_prohibited: 'Estritamente proibidas (tolerância zero)', quiet_small_gatherings: 'Apenas pequenas reuniões silenciosas'},
    ar: {strictly_prohibited: 'ممنوعة تماماً', quiet_small_gatherings: 'تجمعات هادئة صغيرة فقط بدون موسيقى صاخبة'},
    hi: {strictly_prohibited: 'पूरी तरह प्रतिबंधित', quiet_small_gatherings: 'केवल शांत छोटे मिलन की अनुमति'},
    ru: {strictly_prohibited: 'Строго запрещены', quiet_small_gatherings: 'Только тихие встречи без громкой музыки'},
    zh: {strictly_prohibited: '严禁举办派对或聚会（零容忍）', quiet_small_gatherings: '仅限安静的小型聚会（禁止外放高音）'},
    ja: {strictly_prohibited: 'パーティー・イベント厳禁', quiet_small_gatherings: '大音量を伴わない静かな小規模会合のみ可'},
  };

  const petLabels: Record<LangCode, Record<PetPolicy, string>> = {
    en: {not_allowed: 'Not allowed', on_request: 'Small pets on prior written approval', allowed_with_fee: 'Allowed with supplemental cleaning fee'},
    es: {not_allowed: 'No se admiten mascotas', on_request: 'Mascotas pequeñas bajo autorización previa', allowed_with_fee: 'Permitidas con suplemento de limpieza'},
    fr: {not_allowed: 'Animaux non admis', on_request: 'Petits animaux sur accord préalable', allowed_with_fee: 'Admis avec frais de ménage'},
    de: {not_allowed: 'Haustiere nicht gestattet', on_request: 'Kleine Haustiere nach vorheriger Absprache', allowed_with_fee: 'Mit Reinigungszuschlag gestattet'},
    pt: {not_allowed: 'Não permitidos', on_request: 'Pequenos animais mediante autorização prévia', allowed_with_fee: 'Permitidos com taxa de limpeza'},
    ar: {not_allowed: 'الحيوانات الأليفة غير مسموحة', on_request: 'مسموحة بموافقة خطية مسبقة', allowed_with_fee: 'مسموحة مع رسوم تنظيف إضافية'},
    hi: {not_allowed: 'पालतू जानवर अनुमत नहीं', on_request: 'पूर्व लिखित अनुमति पर छोटे पालतू जानवर', allowed_with_fee: 'अतिरिक्त सफाई शुल्क के साथ अनुमत'},
    ru: {not_allowed: 'Без животных', on_request: 'Мелкие питомцы по предварительному согласованию', allowed_with_fee: 'Разрешено с доплатой за уборку'},
    zh: {not_allowed: '禁止携带宠物', on_request: '小型宠物需提前书面确认', allowed_with_fee: '允许携宠（需额外清洁费）'},
    ja: {not_allowed: 'ペット不可', on_request: '事前書面承認のうえ小型ペット可', allowed_with_fee: 'ペット可（追加清掃費あり）'},
  };

  const smokeLabels: Record<LangCode, Record<SmokingPolicy, string>> = {
    en: {strictly_no_smoking: '100% non-smoking property (including vaping indoors & balconies)', terrace_only: 'Outdoors / terrace only with doors closed'},
    es: {strictly_no_smoking: 'Prohibido fumar en todo el alojamiento (incluido vapeo)', terrace_only: 'Solo en terraza o exterior con puertas cerradas'},
    fr: {strictly_no_smoking: 'Logement 100 % non-fumeur (vapotage inclus)', terrace_only: 'Extérieur / terrasse uniquement, portes fermées'},
    de: {strictly_no_smoking: 'Striktes Rauchverbot (inkl. E-Zigaretten)', terrace_only: 'Nur im Außenbereich bei geschlossenen Türen'},
    pt: {strictly_no_smoking: 'Estritamente proibido fumar em todo o espaço', terrace_only: 'Apenas na varanda/exterior com portas fechadas'},
    ar: {strictly_no_smoking: 'ممنوع التدخين تماماً في كامل العقار', terrace_only: 'في الشرفة الخارجية فقط مع إغلاق الأبواب'},
    hi: {strictly_no_smoking: 'पूरे परिसर में धूम्रपान सख्त वर्जित', terrace_only: 'केवल बालकनी/बाहरी क्षेत्र में (दरवाज़े बंद रखकर)'},
    ru: {strictly_no_smoking: 'Курение строго запрещено везде', terrace_only: 'Только на балконе/террасе при закрытых дверях'},
    zh: {strictly_no_smoking: '全屋严禁吸烟（含电子烟）', terrace_only: '仅限室外露台吸烟（须关闭门窗）'},
    ja: {strictly_no_smoking: '敷地内完全禁煙（電子タバコ含む）', terrace_only: '屋外テラスのみ可（ドアを閉めた状態）'},
  };

  const visitorLabels: Record<LangCode, Record<VisitorPolicy, string>> = {
    en: {registered_only: 'Registered booking guests only overnight', daytime_until_22: 'Daytime visitors permitted until 22:00 (no overnight unregistered guests)'},
    es: {registered_only: 'Solo huéspedes registrados en la reserva para pernoctar', daytime_until_22: 'Visitas diurnas permitidas hasta las 22:00 (sin pernoctas no registradas)'},
    fr: {registered_only: 'Voyageurs enregistrés uniquement pour la nuit', daytime_until_22: 'Visiteurs en journée jusqu’à 22h00'},
    de: {registered_only: 'Übernachtung nur für registrierte Buchungsgäste', daytime_until_22: 'Tagesbesucher bis 22:00 Uhr gestattet'},
    pt: {registered_only: 'Apenas hóspedes registados na reserva', daytime_until_22: 'Visitantes diurnos permitidos até às 22:00'},
    ar: {registered_only: 'المبيت للضيوف المسجلين في الحجز فقط', daytime_until_22: 'الزيارات النهارية مسموحة حتى 22:00'},
    hi: {registered_only: 'रात में केवल पंजीकृत मेहमानों की अनुमति', daytime_until_22: 'दिन के आगंतुक 22:00 बजे तक अनुमत'},
    ru: {registered_only: 'Ночлег только для зарегистрированных гостей', daytime_until_22: 'Дневные гости разрешены до 22:00'},
    zh: {registered_only: '夜间仅限预订登记房客入住', daytime_until_22: '日间访客允许至 22:00（严禁未登记留宿）'},
    ja: {registered_only: '宿泊は予約登録済みゲストのみ', daytime_until_22: '日中の来訪は22:00まで（未登録者の宿泊不可）'},
  };

  if (lang === 'es') {
    return [
      `NORMAS DE LA CASA Y FIANZA — ${prop} (${typeLabel})`,
      '',
      `1. Horario de silencio: ${state.quietStart} – ${state.quietEnd} (respeto estricto al vecindario)`,
      `2. Fiestas y eventos: ${partyLabels.es[state.partyPolicy]}`,
      `3. Tabaco: ${smokeLabels.es[state.smokingPolicy]}`,
      `4. Mascotas: ${petLabels.es[state.petPolicy]}`,
      `5. Visitantes: ${visitorLabels.es[state.visitorPolicy]}`,
      '',
      'FIANZA Y CONDICIONES DE ENTREGA',
      `• Depósito / fianza orientativa: ${state.currency}${state.depositAmount} (gestionado según plataforma o acuerdo de reserva).`,
      `• Condiciones de salida y conservación: ${state.cleaningCondition}`,
    ].join('\n');
  }

  return [
    `HOUSE RULES & SECURITY DEPOSIT TERMS — ${prop} (${typeLabel})`,
    '',
    `1. Quiet Hours: ${state.quietStart} – ${state.quietEnd} (strictly observed out of respect for neighbors)`,
    `2. Parties & Events: ${partyLabels[lang][state.partyPolicy]}`,
    `3. Smoking Policy: ${smokeLabels[lang][state.smokingPolicy]}`,
    `4. Pets Policy: ${petLabels[lang][state.petPolicy]}`,
    `5. Visitors & Occupancy: ${visitorLabels[lang][state.visitorPolicy]}`,
    '',
    'SECURITY DEPOSIT & CARE TERMS',
    `• Reference Security Deposit: ${state.currency}${state.depositAmount} (handled in accordance with booking platform rules).`,
    `• Checkout & Damage Standard: ${state.cleaningCondition}`,
  ].join('\n');
}
