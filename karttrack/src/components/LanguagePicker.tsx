import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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

export default function LanguagePicker({ value, onChange, textColor }: Props) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(v) => onChange(v as string)}
      style={{ height: 44, color: textColor }}
      dropdownIconColor={textColor}
    >
      {LANGS.map(({ code, label }) => (
        <Picker.Item key={code} label={label} value={code} color={textColor} />
      ))}
    </Picker>
  );
}
