import React from 'react';
import { StyleSheet } from 'react-native';

const LANGS = [
  { code: 'it', label: '🇮🇹 Italiano' },
  { code: 'en', label: '🇬🇧 English' },
  { code: 'es', label: '🇪🇸 Español' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'de', label: '🇩🇪 Deutsch' },
  { code: 'pt', label: '🇵🇹 Português' },
  { code: 'nl', label: '🇳🇱 Nederlands' },
  { code: 'pl', label: '🇵🇱 Polski' },
  { code: 'ro', label: '🇷🇴 Română' },
  { code: 'cs', label: '🇨🇿 Čeština' },
  { code: 'hu', label: '🇭🇺 Magyar' },
  { code: 'sv', label: '🇸🇪 Svenska' },
  { code: 'no', label: '🇳🇴 Norsk' },
  { code: 'da', label: '🇩🇰 Dansk' },
  { code: 'fi', label: '🇫🇮 Suomi' },
  { code: 'el', label: '🇬🇷 Ελληνικά' },
  { code: 'sk', label: '🇸🇰 Slovenčina' },
  { code: 'hr', label: '🇭🇷 Hrvatski' },
  { code: 'bg', label: '🇧🇬 Български' },
  { code: 'lt', label: '🇱🇹 Lietuvių' },
  { code: 'lv', label: '🇱🇻 Latviešu' },
  { code: 'et', label: '🇪🇪 Eesti' },
] as const;

type Props = {
  value: string;
  onChange: (lang: string) => void;
  textColor: string;
  bgColor: string;
};

export default function LanguagePicker({ value, onChange, textColor, bgColor }: Props) {
  return (
    <select
      value={value}
      onChange={(e: any) => onChange(e.target.value)}
      style={{
        width: '100%',
        height: 44,
        backgroundColor: bgColor,
        color: textColor,
        border: 'none',
        outline: 'none',
        fontSize: 15,
        paddingLeft: 10,
        cursor: 'pointer',
      } as any}
    >
      {LANGS.map(({ code, label }) => (
        <option key={code} value={code}>{label}</option>
      ))}
    </select>
  );
}
