import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import DatePicker from '../components/DatePicker';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRaceStore } from '../store/raceStore';
import { Race } from '../models/types';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

type AddRaceScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddRace'>;

export default function AddRaceScreen() {
  const navigation = useNavigation<AddRaceScreenNavigationProp>();
  const { settings } = useSettings();
  const dark = settings.theme === 'dark';
  const bgColor = dark ? '#1a1a1a' : '#f5f5f5';
  const cardBg = dark ? '#2c2c2c' : '#fff';
  const textColor = dark ? '#fff' : '#000';
  const borderColor = dark ? '#444' : '#ddd';
  const mainColor = settings.color || '#FF6B35';
  const t = useTranslation();
  const [name, setName] = useState('');
  const [circuit, setCircuit] = useState('');
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const { addRace } = useRaceStore();

  const handleAddRace = async () => {
    if (!name || !circuit || !date || !weather) {
      Alert.alert(t.error, t.errorFillAll);
      return;
    }

    const newRace: Race = {
      id: Date.now().toString(),
      name,
      circuit,
      date,
      weather,
      createdAt: new Date().toISOString(),
    };

    await addRace(newRace);
    Alert.alert(t.success, t.successRaceAdded);
    
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{t.newRaceScreenTitle}</Text>

      <TextInput
        style={[styles.input, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
        placeholder={t.raceNamePlaceholder}
        value={name}
        onChangeText={setName}
        placeholderTextColor={dark ? '#666' : '#999'}
      />

      <TextInput
        style={[styles.input, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
        placeholder={t.circuitPlaceholder}
        value={circuit}
        onChangeText={setCircuit}
        placeholderTextColor={dark ? '#666' : '#999'}
      />

      <DatePicker
        value={date}
        onChange={setDate}
        textColor={textColor}
        bgColor={cardBg}
        borderColor={borderColor}
        placeholder={t.datePlaceholder}
        mainColor={mainColor}
      />

      <TextInput
        style={[styles.input, { backgroundColor: cardBg, borderColor: borderColor, color: textColor }]}
        placeholder={t.weatherPlaceholder}
        value={weather}
        onChangeText={setWeather}
        placeholderTextColor={dark ? '#666' : '#999'}
      />

      <TouchableOpacity style={[styles.submitButton, { backgroundColor: mainColor }]} onPress={handleAddRace}>
        <Text style={styles.submitButtonText}>{t.addRaceBtn}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
