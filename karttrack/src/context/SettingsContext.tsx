import React, { createContext, useContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'app_settings';

function applyScrollbarTheme(dark: boolean, color: string) {
  if (Platform.OS !== 'web') return;
  const id = 'kart-scrollbar-style';
  let el = document.getElementById(id) as HTMLStyleElement | null;
  if (!el) {
    el = document.createElement('style');
    el.id = id;
    document.head.appendChild(el);
  }
  const track = dark ? '#1a1a1a' : '#f0f0f0';
  const thumb = dark ? '#555' : '#bbb';
  const thumbHover = color;
  el.textContent = `
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: ${track}; border-radius: 4px; }
    ::-webkit-scrollbar-thumb { background: ${thumb}; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: ${thumbHover}; }
    * { scrollbar-width: thin; scrollbar-color: ${thumb} ${track}; }
    html { accent-color: ${color}; }
  `;
}

export interface AppSettings {
  theme: 'light' | 'dark';
  color: string;
  showBest: boolean;
  showAvg: boolean;
  language: string;
}

const defaultSettings: AppSettings = {
  theme: 'light',
  color: '#FF6B35',
  showBest: true,
  showAvg: true,
  language: 'it',
};

interface SettingsContextType {
  settings: AppSettings;
  setSettings: (s: AppSettings) => void;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: defaultSettings,
  setSettings: () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettingsState] = useState<AppSettings>(defaultSettings);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(raw => {
      if (raw) {
        const loaded = { ...defaultSettings, ...JSON.parse(raw) };
        setSettingsState(loaded);
        applyScrollbarTheme(loaded.theme === 'dark', loaded.color);
      } else {
        applyScrollbarTheme(false, defaultSettings.color);
      }
    });
  }, []);

  const setSettings = (s: AppSettings) => {
    setSettingsState(s);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(s));
    applyScrollbarTheme(s.theme === 'dark', s.color);
  };

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
