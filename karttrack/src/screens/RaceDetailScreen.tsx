import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert, ScrollView, Modal, Animated, Easing, TouchableWithoutFeedback } from 'react-native';
import { confirmDelete } from '../utils/confirmDelete';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRaceStore } from '../store/raceStore';
import { Kart, Performance } from '../models/types';
import { RootStackParamList } from '../navigation/RootNavigator';
import Rankings from '../components/Rankings';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

type RaceDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RaceDetail'>;

const formatLapTime = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;
  // Mostra solo 2 decimali di secondo
  const centiseconds = Math.round(milliseconds / 10);
  return `${minutes}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
};

interface RaceDetailScreenProps {
  route: { params: { raceId: string } };
}

export default function RaceDetailScreen({ route }: RaceDetailScreenProps) {
  const { settings } = useSettings();
  const dark = settings.theme === 'dark';
  const bgColor = dark ? '#1a1a1a' : '#f5f5f5';
  const cardBg = dark ? '#2c2c2c' : '#fff';
  const textColor = dark ? '#fff' : '#000';
  const subTextColor = dark ? '#aaa' : '#666';
  const expandedBg = dark ? '#222' : '#f9f9f9';
  const mainColor = settings.color || '#FF6B35';
  const t = useTranslation();
  const navigation = useNavigation<RaceDetailScreenNavigationProp>();
  const { raceId } = route.params;
  const { races, karts, performances, addKart, deleteKart, deletePerformance } = useRaceStore();
  
  const [kartNumber, setKartNumber] = useState('');
  const [kartBrand, setKartBrand] = useState('');
  const [kartDriver, setKartDriver] = useState('');
  const [expandedKartId, setExpandedKartId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [overlayOpacity] = useState(new Animated.Value(0));
  const [panelTranslateY] = useState(new Animated.Value(80));

  const race = races.find((r) => r.id === raceId);
  const raceKarts = karts.filter((k) => k.raceId === raceId);

  const getKartPerformances = (kartId: string): Performance[] => {
    return performances.filter((p) => p.kartId === kartId);
  };

  const handleAddKart = async () => {
    if (!kartNumber || !kartBrand || !kartDriver) {
      Alert.alert(t.error, t.errorFillAll);
      return;
    }

    const newKart: Kart = {
      id: Date.now().toString(),
      raceId,
      number: parseInt(kartNumber),
      brand: kartBrand,
      driver: kartDriver,
    };

    await addKart(newKart);
    Alert.alert(t.success, t.successKartAdded);
    setKartNumber('');
    setKartBrand('');
    setKartDriver('');
  };

  const renderKartItem = ({ item }: { item: Kart }) => {
    const isExpanded = expandedKartId === item.id;
    const kartPerfs = getKartPerformances(item.id);

    return (
      <View style={styles.kartCardContainer}>
        <TouchableOpacity 
          style={styles.kartCard}
          onPress={() => setExpandedKartId(isExpanded ? null : item.id)}>
          <Text style={styles.kartNumber}>#{item.number}</Text>
          <View style={styles.kartDetails}>
            <Text style={styles.kartBrand}>{item.brand}</Text>
            <Text style={styles.kartDriver}>{item.driver}</Text>
          </View>
          <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.perfTitle}>Performance ({kartPerfs.length})</Text>
            {kartPerfs.length === 0 ? (
              <Text style={styles.emptyText}>Nessun giro ancora</Text>
            ) : (
              kartPerfs.sort((a, b) => a.lapNumber - b.lapNumber).map((perf) => (
                <View key={perf.id} style={styles.perfCard}>
                  <View style={styles.perfHeader}>
                    <Text style={styles.perfLapNum}>Giro {perf.lapNumber}</Text>
                    <Text style={styles.perfTime}>{formatLapTime(perf.lapTime)}</Text>
                  </View>
                  {perf.position > 0 && <Text style={styles.perfPos}>Pos: {perf.position}</Text>}
                  {perf.notes && <Text style={styles.perfNotes}>{perf.notes}</Text>}
                </View>
              ))
            )}

            <TouchableOpacity 
              style={styles.addLapButton}
              onPress={() => navigation.navigate('KartDetail', { kartId: item.id })}>
              <Text style={styles.addLapButtonText}>+ Aggiungi Giro</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  if (!race) {
    return (
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.errorText}>{t.raceNotFound}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <ScrollView style={[styles.container, { backgroundColor: bgColor }]}>
        <View style={[styles.raceHeader, { backgroundColor: mainColor }]}>
          <Text style={styles.raceName}>{race.name}</Text>
          <View style={{ flexDirection: 'row', gap: 12, marginBottom: 4 }}>
            <Text style={styles.raceInfo}><Text style={{ fontWeight: 'bold' }}>{t.circuitLabel}:</Text> {race.circuit}</Text>
            <Text style={styles.raceInfo}><Text style={{ fontWeight: 'bold' }}>{t.dateLabel}:</Text> {race.date}</Text>
            <Text style={styles.raceInfo}><Text style={{ fontWeight: 'bold' }}>{t.weatherLabel}:</Text> {race.weather}</Text>
          </View>
        </View>

        <Rankings karts={raceKarts} performances={performances.filter(p => raceKarts.some(k => k.id === p.kartId))} />

        <Text style={[styles.sectionTitle, { color: textColor }]}>{t.kartsInRace} ({raceKarts.length})</Text>

        <View style={styles.kartsList}>
          {raceKarts.map((kart) => {
            const isExpanded = expandedKartId === kart.id;
            const kartPerfs = getKartPerformances(kart.id);
            return (
              <View key={kart.id} style={[styles.kartCardContainer, { backgroundColor: cardBg }]}>
                <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
                  <TouchableOpacity
                    style={[styles.kartCard, { flex: 1, backgroundColor: cardBg, borderLeftColor: mainColor }]}
                    onPress={() => setExpandedKartId(isExpanded ? null : kart.id)}>
                    <Text style={[styles.kartNumber, { color: mainColor }]}>#{kart.number}</Text>
                    <View style={styles.kartDetails}>
                      <Text style={[styles.kartBrand, { color: textColor }]}>{kart.brand}</Text>
                      <Text style={[styles.kartDriver, { color: subTextColor }]}>{kart.driver}</Text>
                    </View>
                    <Text style={[styles.expandIcon, { color: subTextColor }]}>{isExpanded ? '▼' : '▶'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => confirmDelete(t.deleteKartTitle, t.deleteKartMsg(kart.number), () => deleteKart(kart.id), t.cancel, t.delete)}
                    style={{ paddingHorizontal: 16, justifyContent: 'center', borderLeftWidth: 1, borderLeftColor: dark ? '#3a3a3a' : '#eee' }}>
                    <Text style={{ fontSize: 14, color: '#e53935', fontWeight: 'bold' }}>✕</Text>
                  </TouchableOpacity>
                </View>
                {isExpanded && (
                  <View style={[styles.expandedContent, { backgroundColor: expandedBg, borderLeftColor: mainColor }]}>
                    <Text style={[styles.perfTitle, { color: textColor }]}>{t.performance} ({kartPerfs.length})</Text>
                    {kartPerfs.length === 0 ? (
                      <Text style={[styles.emptyText, { color: subTextColor }]}>{t.noLapsYet}</Text>
                    ) : (
                      kartPerfs.sort((a, b) => a.lapNumber - b.lapNumber).map((perf) => (
                        <View key={perf.id} style={[styles.perfCard, { backgroundColor: cardBg, borderLeftColor: mainColor }]}>
                          <View style={styles.perfHeader}>
                            <Text style={[styles.perfLapNum, { color: textColor }]}>{t.lap} {perf.lapNumber}</Text>
                            <Text style={[styles.perfTime, { color: mainColor }]}>{formatLapTime(perf.lapTime)}</Text>
                            <TouchableOpacity
                              onPress={() => confirmDelete(t.deleteLapTitle, t.deleteLapMsg(perf.lapNumber, kart.number), () => deletePerformance(perf.id), t.cancel, t.delete)}
                              style={{ paddingLeft: 10, paddingVertical: 2 }}>
                              <Text style={{ fontSize: 12, color: '#e53935', fontWeight: 'bold' }}>✕</Text>
                            </TouchableOpacity>
                          </View>
                          {perf.position > 0 && <Text style={[styles.perfPos, { color: subTextColor }]}>{t.pos}: {perf.position}</Text>}
                          {perf.notes && <Text style={styles.perfNotes}>{perf.notes}</Text>}
                        </View>
                      ))
                    )}
                    <TouchableOpacity 
                      style={[styles.addLapButton, { backgroundColor: mainColor }]}
                      onPress={() => navigation.navigate('KartDetail', { kartId: kart.id })}>
                      <Text style={styles.addLapButtonText}>{t.addLapBtn}</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={[styles.dockToggleContainer, { backgroundColor: bgColor }]}>
        <TouchableOpacity
          style={[styles.dockToggleButton, { backgroundColor: mainColor }]}
          onPress={() => {
            setShowModal(true);
            overlayOpacity.setValue(0);
            panelTranslateY.setValue(80);
            Animated.parallel([
              Animated.timing(overlayOpacity, {
                toValue: 1,
                duration: 250,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
              }),
              Animated.timing(panelTranslateY, {
                toValue: 0,
                duration: 250,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
              }),
            ]).start();
          }}
        >
          <Text style={styles.dockToggleButtonText}>{t.addKartBtn}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showModal}
        animationType="none"
        transparent={true}
        onRequestClose={() => {
          Animated.parallel([
            Animated.timing(overlayOpacity, {
              toValue: 0,
              duration: 200,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }),
            Animated.timing(panelTranslateY, {
              toValue: 80,
              duration: 200,
              easing: Easing.in(Easing.ease),
              useNativeDriver: true,
            }),
          ]).start(() => setShowModal(false));
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Animated.parallel([
              Animated.timing(overlayOpacity, {
                toValue: 0,
                duration: 200,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
              }),
              Animated.timing(panelTranslateY, {
                toValue: 80,
                duration: 200,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
              }),
            ]).start(() => setShowModal(false));
          }}
        >
          <Animated.View style={[styles.modalOverlay, { opacity: overlayOpacity }]}> 
            <Animated.View style={[styles.modalContent, { transform: [{ translateY: panelTranslateY }], backgroundColor: cardBg }]}> 
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  Animated.parallel([
                    Animated.timing(overlayOpacity, {
                      toValue: 0,
                      duration: 200,
                      easing: Easing.in(Easing.ease),
                      useNativeDriver: true,
                    }),
                    Animated.timing(panelTranslateY, {
                      toValue: 80,
                      duration: 200,
                      easing: Easing.in(Easing.ease),
                      useNativeDriver: true,
                    }),
                  ]).start(() => setShowModal(false));
                }}
              >
                <Text style={[styles.closeButtonText, { color: mainColor }]}>×</Text>
              </TouchableOpacity>
              <Text style={[styles.sectionTitle, { color: textColor }]}>{t.addKartTitle}</Text>
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor: dark ? '#444' : '#ddd', color: textColor }]}
                placeholder={t.kartNumberPlaceholder}
                value={kartNumber}
                onChangeText={setKartNumber}
                keyboardType="numeric"
                placeholderTextColor={dark ? '#666' : '#999'}
              />
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor: dark ? '#444' : '#ddd', color: textColor }]}
                placeholder={t.kartBrandPlaceholder}
                value={kartBrand}
                onChangeText={setKartBrand}
                placeholderTextColor={dark ? '#666' : '#999'}
              />
              <TextInput
                style={[styles.input, { backgroundColor: cardBg, borderColor: dark ? '#444' : '#ddd', color: textColor }]}
                placeholder={t.driverPlaceholder}
                value={kartDriver}
                onChangeText={setKartDriver}
                placeholderTextColor={dark ? '#666' : '#999'}
              />
              <TouchableOpacity style={[styles.addButton, { backgroundColor: mainColor }]} onPress={handleAddKart}>
                <Text style={styles.addButtonText}>{t.addKartBtn}</Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 20,
    },
    kartsList: {
      gap: 8,
    },
  raceHeader: {
    backgroundColor: '#FF6B35',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  raceName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  raceInfo: {
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
  kartCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  kartNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
    marginRight: 12,
  },
  kartDetails: {
    flex: 1,
  },
  kartBrand: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  kartDriver: {
    fontSize: 12,
    color: '#666',
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
  kartCardContainer: {
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden' as const,
    backgroundColor: '#fff',
  },
  expandIcon: {
    fontSize: 12,
    color: '#666',
  },
  expandedContent: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  perfTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    marginBottom: 6,
  },
  perfCard: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 8,
    marginBottom: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#FF6B35',
  },
  perfHeader: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between',
  },
  perfLapNum: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  perfTime: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF6B35',
  },
  perfPos: {
    fontSize: 11,
    color: '#666',
    marginTop: 2,
  },
  perfNotes: {
    fontSize: 10,
    color: '#999',
    marginTop: 2,
    fontStyle: 'italic' as const,
  },
  addLapButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  addLapButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  errorText: {
    fontSize: 16,
    color: '#d9534f',
    textAlign: 'center',
    marginTop: 20,
  },
  dockToggleContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  dockToggleButton: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    elevation: 3,
  },
  dockToggleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
    minHeight: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 16,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
  closeButtonText: {
    fontSize: 28,
    color: '#FF6B35',
    fontWeight: 'bold',
  },
});
