import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Race, Kart, Performance } from '../models/types';

interface RaceStore {
  races: Race[];
  karts: Kart[];
  performances: Performance[];
  
  addRace: (race: Race) => Promise<void>;
  deleteRace: (raceId: string) => Promise<void>;
  updateRace: (raceId: string, race: Partial<Race>) => Promise<void>;
  
  addKart: (kart: Kart) => Promise<void>;
  deleteKart: (kartId: string) => Promise<void>;
  
  addPerformance: (performance: Performance) => Promise<void>;
  deletePerformance: (performanceId: string) => Promise<void>;
  getKartPerformances: (kartId: string) => Performance[];
  
  loadData: () => Promise<void>;
}

const STORAGE_KEYS = {
  RACES: '@races',
  KARTS: '@karts',
  PERFORMANCES: '@performances',
};

export const useRaceStore = create<RaceStore>((set, get) => ({
  races: [],
  karts: [],
  performances: [],

  addRace: async (race: Race) => {
    set((state) => ({ races: [...state.races, race] }));
    await AsyncStorage.setItem(STORAGE_KEYS.RACES, JSON.stringify(get().races));
  },

  deleteRace: async (raceId: string) => {
    set((state) => ({ races: state.races.filter((r) => r.id !== raceId) }));
    await AsyncStorage.setItem(STORAGE_KEYS.RACES, JSON.stringify(get().races));
  },

  updateRace: async (raceId: string, updates: Partial<Race>) => {
    set((state) => ({
      races: state.races.map((r) => (r.id === raceId ? { ...r, ...updates } : r)),
    }));
    await AsyncStorage.setItem(STORAGE_KEYS.RACES, JSON.stringify(get().races));
  },

  addKart: async (kart: Kart) => {
    set((state) => ({ karts: [...state.karts, kart] }));
    await AsyncStorage.setItem(STORAGE_KEYS.KARTS, JSON.stringify(get().karts));
  },

  deleteKart: async (kartId: string) => {
    set((state) => ({ karts: state.karts.filter((k) => k.id !== kartId) }));
    await AsyncStorage.setItem(STORAGE_KEYS.KARTS, JSON.stringify(get().karts));
  },

  addPerformance: async (performance: Performance) => {
    set((state) => ({ performances: [...state.performances, performance] }));
    await AsyncStorage.setItem(STORAGE_KEYS.PERFORMANCES, JSON.stringify(get().performances));
  },

  deletePerformance: async (performanceId: string) => {
    set((state) => ({ performances: state.performances.filter((p) => p.id !== performanceId) }));
    await AsyncStorage.setItem(STORAGE_KEYS.PERFORMANCES, JSON.stringify(get().performances));
  },

  getKartPerformances: (kartId: string) => {
    return get().performances.filter((p) => p.kartId === kartId);
  },

  loadData: async () => {
    const [racesData, kartsData, performancesData] = await Promise.all([
      AsyncStorage.getItem(STORAGE_KEYS.RACES),
      AsyncStorage.getItem(STORAGE_KEYS.KARTS),
      AsyncStorage.getItem(STORAGE_KEYS.PERFORMANCES),
    ]);

    set({
      races: racesData ? JSON.parse(racesData) : [],
      karts: kartsData ? JSON.parse(kartsData) : [],
      performances: performancesData ? JSON.parse(performancesData) : [],
    });
  },
}));
