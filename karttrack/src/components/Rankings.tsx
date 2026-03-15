import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Kart, Performance } from '../models/types';
import { useSettings } from '../context/SettingsContext';
import { useTranslation } from '../i18n/useTranslation';

interface RankingsProps {
  karts: Kart[];
  performances: Performance[];
}

const formatLapTime = (ms: number): string => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const milliseconds = ms % 1000;
  // Mostra solo 2 decimali di secondo
  const centiseconds = Math.round(milliseconds / 10);
  return `${minutes}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
};

export default function Rankings({ karts, performances }: RankingsProps) {
  const { settings } = useSettings();
  const dark = settings.theme === 'dark';
  const bgColor = dark ? '#1a1a1a' : '#f5f5f5';
  const cardBg = dark ? '#2c2c2c' : '#fff';
  const textColor = dark ? '#fff' : '#000';
  const subTextColor = dark ? '#aaa' : '#666';
  const mainColor = settings.color || '#FF6B35';
  const t = useTranslation();

  // Calcola metriche per ogni kart
  const kartStats = useMemo(() => {
    return karts.map((kart) => {
      const kartPerfs = performances.filter((p) => p.kartId === kart.id);
      
      if (kartPerfs.length === 0) {
        return {
          kart,
          avgTime: Infinity,
          lastLapTime: Infinity,
          lapCount: 0,
        };
      }

      const avgTime = kartPerfs.reduce((sum, p) => sum + p.lapTime, 0) / kartPerfs.length;
      const sortedPerfs = [...kartPerfs].sort((a, b) => b.lapNumber - a.lapNumber);
      const lastLapTime = sortedPerfs[0]?.lapTime || Infinity;

      return {
        kart,
        avgTime,
        lastLapTime,
        lapCount: kartPerfs.length,
      };
    });
  }, [karts, performances]);

  // Classifica per tempo medio
  const avgTimeRanking = useMemo(
    () => [...kartStats].filter((s) => s.avgTime !== Infinity).sort((a, b) => a.avgTime - b.avgTime),
    [kartStats]
  );

  // Classifica per ultimo giro
  const lastLapRanking = useMemo(
    () => [...kartStats].filter((s) => s.lastLapTime !== Infinity).sort((a, b) => a.lastLapTime - b.lastLapTime),
    [kartStats]
  );

  const RankingItem = ({ stat, position, time }: { stat: typeof kartStats[0] | null; position: number; time: string }) => {
    const podiumOverride = position === 1 ? styles.goldPodium : position === 2 ? styles.silverPodium : position === 3 ? styles.bronzePodium : undefined;
    const textOverride = position === 1 ? styles.goldText : position === 2 ? styles.silverText : position === 3 ? styles.bronzeText : undefined;
    const itemBg = position === 1
      ? (dark ? '#3a3520' : '#fffbe6')
      : position === 2
      ? (dark ? '#2a2a30' : '#f4f4f7')
      : position === 3
      ? (dark ? '#3a2e1a' : '#fff6e0')
      : cardBg;
    return (
      <View style={[styles.podiumItem, podiumOverride, { backgroundColor: itemBg }]}>
        <View style={styles.podiumHeader}>
          <Text style={[styles.podiumPosition, textOverride, !textOverride && { color: mainColor }]}>{position}</Text>
          <Text style={[styles.podiumTime, { color: mainColor }]}>{time}</Text>
        </View>
        {stat ? (
          <>
            <Text style={[styles.podiumName, { color: textColor }]} numberOfLines={1}>#{stat.kart.number} {stat.kart.driver}</Text>
            <Text style={[styles.podiumBrand, { color: subTextColor }]} numberOfLines={1}>{stat.kart.brand}</Text>
          </>
        ) : (
          <Text style={[styles.podiumName, { color: subTextColor }]}>-</Text>
        )}
      </View>
    );
  };

  if (!settings.showBest && !settings.showAvg) return null;

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {settings.showBest && (
        <View style={styles.section}>
          <Text style={[styles.title, { color: textColor }]}>{t.bestTime}</Text>
          <View style={styles.podiumRow}>
            {[0,1,2].map((i) => {
              const stat = lastLapRanking[i] || null;
              const time = stat && stat.lastLapTime !== Infinity ? formatLapTime(stat.lastLapTime) : '-';
              return <RankingItem key={i} stat={stat} position={i+1} time={time} />;
            })}
          </View>
        </View>
      )}
      {settings.showAvg && (
        <View style={styles.section}>
          <Text style={[styles.title, { color: textColor }]}>{t.avgTime}</Text>
          <View style={styles.podiumRow}>
            {[0,1,2].map((i) => {
              const stat = avgTimeRanking[i] || null;
              const time = stat && stat.avgTime !== Infinity ? formatLapTime(stat.avgTime) : '-';
              return <RankingItem key={i} stat={stat} position={i+1} time={time} />;
            })}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  section: {
    marginBottom: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  podiumRow: {
    flexDirection: 'row',
    gap: 6,
  },
  podiumItem: {
    flex: 1,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  podiumHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  podiumPosition: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B35',
  },
  podiumTime: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FF6B35',
  },
  goldPodium: {
    borderColor: '#FFD700',
  },
  silverPodium: {
    borderColor: '#C0C0C0',
  },
  bronzePodium: {
    borderColor: '#CD7F32',
  },
  goldText: { color: '#FFD700' },
  silverText: { color: '#C0C0C0' },
  bronzeText: { color: '#CD7F32' },
  podiumInfo: {
    alignItems: 'center',
  },
  podiumName: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  podiumBrand: {
    fontSize: 11,
    color: '#666',
  },
  podiumCol: {
    flex: 1,
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#999',
    paddingVertical: 8,
  },
});
