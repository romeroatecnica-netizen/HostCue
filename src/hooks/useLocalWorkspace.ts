import {useCallback, useEffect, useState} from 'react';
import type {GeneratorTab, HostCueWorkspace} from '../types/hostcue';

const STORAGE_KEY = 'hostcue_workspace_v1';

export function createDefaultWorkspace(): HostCueWorkspace {
  return {
    version: 1,
    activeTab: 'listing',
    listing: {
      propertyName: 'Casa Solis Central Loft',
      propertyType: 'city_apartment',
      guestProfile: 'remote_workers',
      strengths: ['natural_light', 'fast_fiber', 'workspace', 'self_checkin', 'quiet_street'],
      customStrength: 'Double-glazed windows overlooking courtyard',
      locationNotes: '4 min walk to Central Metro Station · bakery & market on the corner',
      maxGuests: 4,
      bedrooms: 2,
      wifiMbps: 600,
      editedTitle: null,
      editedBody: null,
    },
    messages: {
      stage: 'checkin_instructions',
      guestLang: 'en',
      guestName: 'Alex',
      propertyName: 'Casa Solis Central Loft',
      checkInTime: '15:00',
      checkOutTime: '11:00',
      accessCode: '4829#',
      accessNote: 'Smart lockbox on right courtyard gate · Apartment 2B',
      editedMessage: null,
    },
    welcome: {
      propertyName: 'Casa Solis Central Loft',
      hostName: 'Elena & Marco',
      welcomeSubtitle: 'Everything you need for a calm, seamless stay',
      wifiName: 'CasaSolis_Fiber5G',
      wifiPassword: 'SolisStay-8842',
      wifiSpeed: '600 Mbps',
      checkInTime: '15:00',
      checkOutTime: '11:00',
      trashRules: 'Blue bin: Paper · Yellow bin: Plastic & cans · Dark grey bin: General waste',
      trashSchedule: '20:00 – 23:00 (courtyard containers by main gate)',
      appliancesNotes:
        'AC / Heating: Wall thermostat set to 21 °C auto. Induction hob: hold power icon for 2 seconds. Hot water boiler runs continuously.',
      hostPhone: '+34 600 412 890',
      emergencyPhone: '112',
      maintenancePhone: '+34 600 998 310',
      bakeryRec: 'Horno San Mateo — 120 m left on Calle Mayor (opens 07:30)',
      supermarketRec: 'Mercado Fresco — 200 m across the plaza (08:30 – 21:30)',
      transitRec: 'Metro Solis Line 2 — 4 min walk · Airport Express bus 18 min',
      restaurantRec: 'Bistró Patio Verde (Mediterranean) & La Barra Central (tapas)',
      editedPlainText: null,
    },
    reviews: {
      issue: 'noise_neighbors',
      tone: 'calm_empathetic',
      guestName: 'Jordan',
      propertyName: 'Casa Solis Central Loft',
      reviewSummary: 'Street noise on Saturday evening and slight delay opening the courtyard lockbox.',
      correctiveAction: 'Replaced lockbox keypad battery and adjusted acoustic window seals.',
      editedShort: null,
      editedDetailed: null,
    },
    rules: {
      propertyName: 'Casa Solis Central Loft',
      propertyType: 'city_apartment',
      partyPolicy: 'strictly_prohibited',
      petPolicy: 'not_allowed',
      smokingPolicy: 'strictly_no_smoking',
      visitorPolicy: 'registered_only',
      quietStart: '22:00',
      quietEnd: '08:00',
      depositAmount: 250,
      currency: '€',
      cleaningCondition:
        'Please leave dishes rinsed, dispose of trash bags in the courtyard bins, and lock all balcony doors at check-out.',
      editedRules: null,
    },
  };
}

function loadFromStorage(): HostCueWorkspace {
  const defaults = createDefaultWorkspace();
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<HostCueWorkspace>;
    return {
      ...defaults,
      ...parsed,
      listing: {...defaults.listing, ...(parsed.listing ?? {})},
      messages: {...defaults.messages, ...(parsed.messages ?? {})},
      welcome: {...defaults.welcome, ...(parsed.welcome ?? {})},
      reviews: {...defaults.reviews, ...(parsed.reviews ?? {})},
      rules: {...defaults.rules, ...(parsed.rules ?? {})},
    };
  } catch {
    return defaults;
  }
}

export function useLocalWorkspace() {
  const [workspace, setWorkspace] = useState<HostCueWorkspace>(() => loadFromStorage());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(workspace));
    } catch {
      // ignore quota errors
    }
  }, [workspace]);

  const setActiveTab = useCallback((tab: GeneratorTab) => {
    setWorkspace((prev) => ({...prev, activeTab: tab}));
  }, []);

  const exportWorkspaceJson = useCallback(() => {
    const blob = new Blob([JSON.stringify(workspace, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hostcue-property-workspace.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [workspace]);

  const importWorkspaceJson = useCallback((jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString) as Partial<HostCueWorkspace>;
      if (!parsed || typeof parsed !== 'object' || (!parsed.listing && !parsed.welcome && !parsed.messages)) {
        return false;
      }
      const defaults = createDefaultWorkspace();
      setWorkspace({
        ...defaults,
        ...parsed,
        listing: {...defaults.listing, ...(parsed.listing ?? {})},
        messages: {...defaults.messages, ...(parsed.messages ?? {})},
        welcome: {...defaults.welcome, ...(parsed.welcome ?? {})},
        reviews: {...defaults.reviews, ...(parsed.reviews ?? {})},
        rules: {...defaults.rules, ...(parsed.rules ?? {})},
      });
      return true;
    } catch {
      return false;
    }
  }, []);

  const resetWorkspace = useCallback(() => {
    const fresh = createDefaultWorkspace();
    setWorkspace(fresh);
  }, []);

  return {
    workspace,
    setWorkspace,
    setActiveTab,
    exportWorkspaceJson,
    importWorkspaceJson,
    resetWorkspace,
  };
}
