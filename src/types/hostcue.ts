export type LangCode =
  | 'en'
  | 'es'
  | 'fr'
  | 'de'
  | 'pt'
  | 'ar'
  | 'hi'
  | 'ru'
  | 'zh'
  | 'ja';

export type GeneratorTab =
  | 'listing'
  | 'messages'
  | 'welcome'
  | 'reviews'
  | 'rules';

export type PropertyType =
  | 'city_apartment'
  | 'house_patio'
  | 'studio_loft'
  | 'family_home';

export type GuestProfile =
  | 'remote_workers'
  | 'couples_explorers'
  | 'families'
  | 'groups';

export type StrengthKey =
  | 'natural_light'
  | 'fast_fiber'
  | 'private_parking'
  | 'terrace_balcony'
  | 'air_conditioning'
  | 'workspace'
  | 'full_kitchen'
  | 'quiet_street'
  | 'self_checkin'
  | 'washer_dryer';

export type StayStage =
  | 'booking_confirmation'
  | 'checkin_instructions'
  | 'midstay_checkin'
  | 'checkout_instructions'
  | 'review_request';

export type ReviewIssue =
  | 'noise_neighbors'
  | 'cleanliness'
  | 'unmet_expectations'
  | 'checkin_access';

export type ReviewTone = 'calm_empathetic' | 'firm_objective';

export type PartyPolicy = 'strictly_prohibited' | 'quiet_small_gatherings';
export type PetPolicy = 'not_allowed' | 'on_request' | 'allowed_with_fee';
export type SmokingPolicy = 'strictly_no_smoking' | 'terrace_only';
export type VisitorPolicy = 'registered_only' | 'daytime_until_22';

export interface ListingFormState {
  propertyName: string;
  propertyType: PropertyType;
  guestProfile: GuestProfile;
  strengths: StrengthKey[];
  customStrength: string;
  locationNotes: string;
  maxGuests: number;
  bedrooms: number;
  wifiMbps: number;
  editedTitle: string | null;
  editedBody: string | null;
}

export interface MessagesFormState {
  stage: StayStage;
  guestLang: LangCode;
  guestName: string;
  propertyName: string;
  checkInTime: string;
  checkOutTime: string;
  accessCode: string;
  accessNote: string;
  editedMessage: string | null;
}

export interface WelcomeGuideFormState {
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
  editedPlainText: string | null;
}

export interface ReviewReplyFormState {
  issue: ReviewIssue;
  tone: ReviewTone;
  guestName: string;
  propertyName: string;
  reviewSummary: string;
  correctiveAction: string;
  editedShort: string | null;
  editedDetailed: string | null;
}

export interface HouseRulesFormState {
  propertyName: string;
  propertyType: PropertyType;
  partyPolicy: PartyPolicy;
  petPolicy: PetPolicy;
  smokingPolicy: SmokingPolicy;
  visitorPolicy: VisitorPolicy;
  quietStart: string;
  quietEnd: string;
  depositAmount: number;
  currency: string;
  cleaningCondition: string;
  editedRules: string | null;
}

export interface HostCueWorkspace {
  version: number;
  activeTab: GeneratorTab;
  listing: ListingFormState;
  messages: MessagesFormState;
  welcome: WelcomeGuideFormState;
  reviews: ReviewReplyFormState;
  rules: HouseRulesFormState;
}
