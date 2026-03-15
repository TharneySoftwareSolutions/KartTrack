import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { confirmDelete } from '../utils/confirmDelete';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRaceStore } from '../store/raceStore';
import { Performance } from '../models/types';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

type KartDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'KartDetail'>;

interface KartDetailScreenProps {
  route: { params: { kartId: string } };
}

const formatLapTime = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;
  return `${minutes}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
};

export default function KartDetailScreen({ route }: KartDetailScreenProps) {
  const { settings } = useSettings();
  const dark = settings.theme === 'dark';
  const bgColor = dark ? '#1a1a1a' : '#f5f5f5';
  const cardBg = dark ? '#2c2c2c' : '#fff';
  const textColor = dark ? '#fff' : '#000';
  const subTextColor = dark ? '#aaa' : '#666';
  const borderColor = dark ? '#444' : '#ddd';
  const mainColor = settings.color || '#FF6B35';
  const t = useTranslation();
  const navigation = useNavigation<KartDetailScreenNavigationProp>();
  const { kartId } = route.params;
  const { karts, performances, addPerformance, getKartPerformances, deletePerformance } = useRaceStore();

  const [lapNumber, setLapNumber] = useState('');
  const [lapTimeMin, setLapTimeMin] = useState('');
  const [lapTimeSec, setLapTimeSec] = useState('');
  const [lapTimeMs, setLapTimeMs] = useState('');
  const [position, setPosition] = useState('');
  const [notes, setNotes] = useState('');

  const kart = karts.find((k) => k.id === kartId);
  const kartPerformances = getKartPerformances(kartId);

  const handleAddPerformance = async () => {
    if (!lapNumber || !lapTimeMin || !lapTimeSec) {
      Alert.alert(t.error, t.errorFillLap);
      return;
    }

    const totalMs =
      parseInt(lapTimeMin) * 60000 +
      parseInt(lapTimeSec) * 1000 +
      (lapTimeMs ? parseInt(lapTimeMs) : 0);

    const newPerformance: Performance = {
      id: Date.now().toString(),
      kartId,
      lapNumber: parseInt(lapNumber),
      lapTime: totalMs,
      position: position ? parseInt(position) : 0,
      notes,
      timestamp: new Date().toISOString(),
    };

    await addPerformance(newPerformance);
    Alert.alert(t.success, t.successPerfAdded);
    
    setLapNumber('');
    setLapTimeMin('');
    setLapTimeSec('');
    setLapTimeMs('');
    setPosition('');
    setNotes('');
  };

  const renderPerformanceItem = ({ item }: { item: Performance }) => (
    <View style={[styles.performanceCard, { backgroundColor: cardBg, borderLeftColor: mainColor }]}>
      <View style={styles.perfHeader}>
        <Text style={[styles.lapNumber, { color: textColor }]}>{t.lap} {item.lapNumber}</Text>
        <Text style={[styles.lapTime, { color: mainColor }]}>{formatLapTime(item.lapTime)}</Text>
        <TouchableOpacity
          onPress={() => confirmDelete(t.deleteLapSimpleTitle, t.deleteLapSimpleMsg(item.lapNumber), () => deletePerformance(item.id), t.cancel, t.delete)}
          style={{ paddingHorizontal: 8, paddingVertical: 2 }}>
          <Text style={{ fontSize: 14, color: '#e53935', fontWeight: 'bold' }}>✕</Text>
        </TouchableOpacity>
      </View>
      {item.position > 0 && <Text style={[styles.perfInfo, { color: subTextColor }]}>{t.positionLabel}: {item.position}</Text>}
      {item.notes && <Text style={[styles.perfNotes, { color: subTextColor }]}>{item.notes}</Text>}
    </View>
  );

  if (!kart) {
    return (
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.errorText}>{t.kartNotFound}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={[styles.kartHeader, { backgroundColor: mainColor }]}>
        <Text style={styles.kartNumber}>#{kart.number}</Text>
        <View style={styles.kartInfo}>
          <Text style={styles.kartBrand}>{kart.brand}</Text>
          <Text style={styles.kartDriver}>{kart.driver}</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: textColor }]}>{t.performance} ({kartPerformances.length})</Text>

      <FlatList
        data={kartPerformances.sort((a, b) => a.lapNumber - b.lapNumber)}
        keyExtractor={(item) => item.id}
        renderItem={renderPerformanceItem}
        scrollEnabled={false}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: subTextColor }]}>{t.noPerformanceYet}</Text>
        }
      />

      <Text style={[styles.sectionTitle, { color: textColor }]}>{t.recordPerformance}</Text>

      <TextInput
        style={[styles.input, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
        placeholder={t.lapNumberPlaceholder}
        value={lapNumber}
        onChangeText={setLapNumber}
        keyboardType="numeric"
        placeholderTextColor={dark ? '#666' : '#999'}
      />

      <View style={styles.timeRow}>
        <TextInput
          style={[styles.input, styles.timeInput, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
          placeholder="min"
          value={lapTimeMin}
          onChangeText={setLapTimeMin}
          keyboardType="numeric"
          placeholderTextColor={dark ? '#666' : '#999'}
        />
        <TextInput
          style={[styles.input, styles.timeInput, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
          placeholder="sec"
          value={lapTimeSec}
          onChangeText={setLapTimeSec}
          keyboardType="numeric"
          placeholderTextColor={dark ? '#666' : '#999'}
        />
        <TextInput
          style={[styles.input, styles.timeInput, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
          placeholder="ms"
          value={lapTimeMs}
          onChangeText={setLapTimeMs}
          keyboardType="numeric"
          placeholderTextColor={dark ? '#666' : '#999'}
        />
      </View>

      <TextInput
        style={[styles.input, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
        placeholder={t.positionOptPlaceholder}
        value={position}
        onChangeText={setPosition}
        keyboardType="numeric"
        placeholderTextColor={dark ? '#666' : '#999'}
      />

      <TextInput
        style={[styles.input, styles.notesInput, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
        placeholder={t.notesPlaceholder}
        value={notes}
        onChangeText={setNotes}
        multiline
        placeholderTextColor={dark ? '#666' : '#999'}
      />

      <TouchableOpacity style={[styles.addButton, { backgroundColor: mainColor }]} onPress={handleAddPerformance}>
        <Text style={styles.addButtonText}>{t.registerBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  kartHeader: {
    flexDirection: 'row',
    backgroundColor: '#FF6B35',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  kartNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 16,
    minWidth: 50,
  },
  kartInfo: {
    flex: 1,
  },
  kartBrand: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  kartDriver: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  performanceCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  perfHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  lapNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  lapTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B35',
  },
  perfInfo: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  perfNotes: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
    fontStyle: 'italic',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#000',
    minWidth: 10,
  },
  timeRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  timeInput: {
    flex: 1,
    marginBottom: 0,
  },
  notesInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 16,
    color: '#d9534f',
    textAlign: 'center',
    marginTop: 20,
  },
});
