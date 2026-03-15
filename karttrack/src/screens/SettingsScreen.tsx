import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import LanguagePicker from '../components/LanguagePicker';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

const COLORS = [
  { name: 'Arancione', value: '#FF6B35' },
  { name: 'Blu', value: '#007AFF' },
  { name: 'Verde', value: '#34C759' },
  { name: 'Rosso', value: '#FF3B30' },
  { name: 'Viola', value: '#AF52DE' },
];

export default function SettingsScreen() {
  const { settings, setSettings } = useSettings();
  const t = useTranslation();
  const colorInputRef = useRef<any>(null);
  const dark = settings.theme === 'dark';
  const bgColor = dark ? '#1a1a1a' : '#f5f5f5';
  const cardBg = dark ? '#2c2c2c' : '#fff';
  const textColor = dark ? '#fff' : '#000';
  const subTextColor = dark ? '#aaa' : '#666';
  const separatorColor = dark ? '#3a3a3a' : '#ebebeb';
  const mainColor = settings.color || '#FF6B35';

  const renderRow = (label: string, control: React.ReactNode, last = false) => (
    <View style={[styles.settingRow, !last && { borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: separatorColor }]}>
      <Text style={[styles.settingLabel, { color: subTextColor }]}>{label}</Text>
      <View style={styles.settingControl}>{control}</View>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={[styles.card, { backgroundColor: cardBg }]}>
        {renderRow(t.themeLabel,
          <View style={styles.inlineRow}>
            <Text style={[styles.toggleLabel, { color: textColor }]}>{t.day}</Text>
            <TouchableOpacity
              onPress={() => setSettings({ ...settings, theme: dark ? 'light' : 'dark' })}
              style={[styles.toggleTrack, { backgroundColor: dark ? mainColor : '#ccc' }]}
              activeOpacity={0.8}
            >
              <View style={[styles.toggleThumb, { transform: [{ translateX: dark ? 22 : 2 }] }]} />
            </TouchableOpacity>
            <Text style={[styles.toggleLabel, { color: textColor }]}>{t.night}</Text>
          </View>
        )}
        {renderRow(t.mainColorLabel,
          <View style={styles.inlineRow}>
            {COLORS.map(c => (
              <TouchableOpacity
                key={c.value}
                style={[styles.colorCircle, { backgroundColor: c.value, borderWidth: settings.color === c.value ? 3 : 0, borderColor: dark ? '#fff' : '#000' }]}
                onPress={() => setSettings({ ...settings, color: c.value })}
              />
            ))}
            <TouchableOpacity
              style={[styles.colorCircle, { backgroundColor: mainColor, borderWidth: 2, borderColor: dark ? '#fff' : '#000', overflow: 'hidden' }]}
              onPress={() => colorInputRef.current?.click()}
            >
              <Text style={{ fontSize: 13, textAlign: 'center', lineHeight: 30 }}>ðŸŽ¨</Text>
            </TouchableOpacity>
            {Platform.OS === 'web' && (
              <input
                ref={colorInputRef}
                type="color"
                value={settings.color || '#FF6B35'}
                onChange={(e: any) => setSettings({ ...settings, color: e.target.value })}
                style={{ position: 'absolute', opacity: 0, width: 0, height: 0, pointerEvents: 'none' }}
              />
            )}
          </View>
        )}
        {renderRow(t.podiumLabel,
          <View style={styles.inlineRow}>
            <TouchableOpacity
              style={[styles.chip, settings.showBest && { backgroundColor: mainColor }]}
              onPress={() => setSettings({ ...settings, showBest: !settings.showBest })}
            >
              <Text style={[styles.chipText, { color: settings.showBest ? '#fff' : (dark ? '#ccc' : '#555') }]}>{t.bestTime}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.chip, settings.showAvg && { backgroundColor: mainColor }]}
              onPress={() => setSettings({ ...settings, showAvg: !settings.showAvg })}
            >
              <Text style={[styles.chipText, { color: settings.showAvg ? '#fff' : (dark ? '#ccc' : '#555') }]}>{t.avgTime}</Text>
            </TouchableOpacity>
          </View>
        )}
        {renderRow(t.languageLabel,
          <View style={[styles.pickerWrapper, { borderColor: mainColor, backgroundColor: dark ? '#3a3a3a' : '#f0f0f0' }]}>
            <LanguagePicker
              value={settings.language}
              onChange={(lang) => setSettings({ ...settings, language: lang })}
              textColor={textColor}
              bgColor={dark ? '#3a3a3a' : '#f0f0f0'}
            />
          </View>,
          true
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  settingLabel: {
    width: 130,
    fontSize: 14,
    fontWeight: '500',
  },
  settingControl: {
    flex: 1,
    alignItems: 'flex-end',
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  toggleLabel: {
    fontSize: 13,
  },
  toggleTrack: {
    width: 44,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
  },
  toggleThumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  chip: {
    backgroundColor: '#ddd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  pickerWrapper: {
    borderWidth: 1.5,
    borderRadius: 8,
    overflow: 'hidden',
    minWidth: 180,
  },
  picker: {
    height: 40,
    width: '100%',
  },
});
