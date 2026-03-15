import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated, TouchableWithoutFeedback, Platform, useWindowDimensions, Modal } from 'react-native';
import { confirmDelete } from '../utils/confirmDelete';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRaceStore } from '../store/raceStore';
import { Race } from '../models/types';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { races, loadData, deleteRace } = useRaceStore();
  const { settings } = useSettings();
  const dark = settings.theme === 'dark';
  const bgColor = dark ? '#1a1a1a' : '#f5f5f5';
  const cardBg = dark ? '#2c2c2c' : '#fff';
  const textColor = dark ? '#fff' : '#000';
  const subTextColor = dark ? '#aaa' : '#666';
  const mainColor = settings.color || '#FF6B35';
  const t = useTranslation();

  const { width } = useWindowDimensions();
  const drawerWidth = Platform.OS === 'web' ? Math.min(400, width * 0.8) : width * 0.8;

  const drawerAnim = useRef(new Animated.Value(drawerWidth)).current;
  const overlayAnim = useRef(new Animated.Value(0)).current;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const drawerVisibleRef = useRef(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  const openDrawer = () => {
    drawerVisibleRef.current = true;
    setDrawerVisible(true);
    drawerAnim.setValue(drawerWidth);
    Animated.parallel([
      Animated.timing(drawerAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
    ]).start();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(drawerAnim, { toValue: drawerWidth, duration: 200, useNativeDriver: true }),
      Animated.timing(overlayAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
    ]).start(() => {
      drawerVisibleRef.current = false;
      setDrawerVisible(false);
    });
  };

  const toggleDrawerRef = useRef<() => void>(() => {});
  toggleDrawerRef.current = () => {
    if (drawerVisibleRef.current) closeDrawer();
    else openDrawer();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => toggleDrawerRef.current()} style={{ paddingHorizontal: 14, paddingVertical: 6 }}>
          <Text style={{ color: '#fff', fontSize: 20, lineHeight: 22 }}>☰</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    loadData();
  }, []);

  const renderRaceItem = ({ item }: { item: Race }) => (
    <View style={[styles.raceCard, { borderLeftColor: mainColor, backgroundColor: cardBg }]}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('RaceDetail', { raceId: item.id })}>
        <Text style={[styles.raceName, { color: textColor }]}>{item.name}</Text>
        <Text style={[styles.raceInfo, { color: subTextColor }]}>{item.circuit} • {item.date}</Text>
        <Text style={[styles.raceWeather, { color: subTextColor }]}>{t.weatherLabel}: {item.weather}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => confirmDelete(t.deleteRaceTitle, t.deleteRaceMsg(item.name), () => deleteRace(item.id), t.cancel, t.delete)}
        style={styles.deleteBtn}>
        <Text style={styles.deleteBtnText}>✕</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}> 
      <FlatList
        data={races}
        keyExtractor={(item) => item.id}
        renderItem={renderRaceItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: subTextColor }]}>{t.noRaces}</Text>
        }
      />

      <TouchableOpacity 
        style={[styles.addButton, { backgroundColor: mainColor }]}
        onPress={() => navigation.navigate('AddRace', {})}>
        <Text style={styles.addButtonText}>{t.newRaceBtn}</Text>
      </TouchableOpacity>

      {/* Overlay */}
      {drawerVisible && (
        <Animated.View
          pointerEvents="auto"
          style={[styles.overlay, { opacity: overlayAnim }]}>
          <TouchableWithoutFeedback onPress={closeDrawer}>
            <View style={StyleSheet.absoluteFill} />
          </TouchableWithoutFeedback>
        </Animated.View>
      )}

      {/* Drawer panel */}
      {drawerVisible && (
        <Animated.View style={[styles.drawer, { width: drawerWidth, backgroundColor: cardBg, transform: [{ translateX: drawerAnim }] }]}>
          <Text style={[styles.drawerTitle, { color: mainColor }]}>{t.menu}</Text>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => { closeDrawer(); navigation.navigate('Settings'); }}>
            <Text style={[styles.drawerItemIcon, { color: subTextColor }]}>⚙</Text>
            <Text style={[styles.drawerItemText, { color: textColor }]}>{t.settings}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => { closeDrawer(); setAboutVisible(true); }}>
            <Text style={[styles.drawerItemIcon, { color: subTextColor }]}>i</Text>
            <Text style={[styles.drawerItemText, { color: textColor }]}>{t.about}</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* About modal */}
      <Modal visible={aboutVisible} transparent animationType="fade" onRequestClose={() => setAboutVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setAboutVisible(false)}>
          <View style={styles.aboutOverlay}>
            <TouchableWithoutFeedback>
              <View style={[styles.aboutBox, { backgroundColor: cardBg }]}>
                <Text style={[styles.aboutAppName, { color: mainColor }]}>KartTrack</Text>
                <Text style={[styles.aboutVersion, { color: subTextColor }]}>{t.version} 1.0.0</Text>
                <View style={styles.aboutDivider} />
                <Text style={[styles.aboutDesc, { color: textColor }]}>{t.aboutDesc}</Text>
                <View style={styles.aboutDivider} />
                <Text style={[styles.aboutLabel, { color: subTextColor }]}>{t.developer}</Text>
                <Text style={[styles.aboutDev, { color: textColor }]}>Tharney Software Solutions</Text>
                <Text style={[styles.aboutLabel, { color: subTextColor }]}>{t.license}</Text>
                <Text style={[styles.aboutDev, { color: textColor }]}>MIT</Text>
                <TouchableOpacity
                  style={[styles.aboutCloseBtn, { backgroundColor: mainColor }]}
                  onPress={() => setAboutVisible(false)}>
                  <Text style={styles.aboutCloseBtnText}>{t.close}</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  listContent: {
    paddingBottom: 20,
  },
  raceCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  deleteBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  deleteBtnText: {
    fontSize: 16,
    color: '#e53935',
    fontWeight: 'bold',
  },
  raceName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  raceInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  raceWeather: {
    fontSize: 12,
    color: '#999',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 40,
  },
  addButton: {
    backgroundColor: '#FF6B35',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    zIndex: 10,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 20,
    paddingTop: 24,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: -3, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  drawerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  drawerItemIcon: {
    width: 28,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  drawerItemText: {
    fontSize: 16,
  },
  aboutOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  aboutBox: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 14,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  aboutAppName: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  aboutVersion: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
  },
  aboutDivider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    marginVertical: 14,
  },
  aboutDesc: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
  },
  aboutLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  aboutDev: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  aboutCloseBtn: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  aboutCloseBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
