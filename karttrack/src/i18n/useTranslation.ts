import { useSettings } from '../context/SettingsContext';
import { getTranslations } from './translations';

export function useTranslation() {
  const { settings } = useSettings();
  return getTranslations((settings.language ?? 'it') as 'it' | 'en');
}
