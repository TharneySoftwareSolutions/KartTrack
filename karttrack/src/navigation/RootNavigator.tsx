import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

import HomeScreen from '../screens/HomeScreen';
import AddRaceScreen from '../screens/AddRaceScreen';
import RaceDetailScreen from '../screens/RaceDetailScreen';
import KartDetailScreen from '../screens/KartDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type RootStackParamList = {
  Home: undefined;
  AddRace: { onRaceAdded?: () => void };
  RaceDetail: { raceId: string };
  KartDetail: { kartId: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  const { settings } = useSettings();
  const t = useTranslation();
  const headerBg = settings.color || '#FF6B35';

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: headerBg },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" options={{ title: t.navHome }} component={HomeScreen} />
      <Stack.Screen name="AddRace" options={{ title: t.navNewRace }} component={AddRaceScreen} />
      <Stack.Screen name="RaceDetail" options={{ title: t.navRaceDetail }} component={RaceDetailScreen} />
      <Stack.Screen name="KartDetail" options={{ title: t.navKartDetail }} component={KartDetailScreen} />
      <Stack.Screen name="Settings" options={{ title: t.navSettings }} component={SettingsScreen} />
    </Stack.Navigator>
  );
}

