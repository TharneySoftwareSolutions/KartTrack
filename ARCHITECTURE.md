# KartTrack — Architecture

## Overview

KartTrack is a fully **offline, client-only** React Native application. There is no backend server, no database, no API, and no network communication. All data is persisted locally on the device using AsyncStorage.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                  React Native (Expo)                    │
│                                                         │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ HomeScreen  │  │ RaceDetail   │  │  KartDetail   │  │
│  └──────┬──────┘  └──────┬───────┘  └───────┬───────┘  │
│         │                │                  │          │
│         └────────────────┴──────────────────┘          │
│                          │                             │
│              ┌───────────┴──────────┐                  │
│              │      raceStore.ts    │                  │
│              │  (state + actions)   │                  │
│              └───────────┬──────────┘                  │
│                          │                             │
│              ┌───────────┴──────────┐                  │
│              │    AsyncStorage      │                  │
│              │  (local device only) │                  │
│              └──────────────────────┘                  │
│                                                         │
│  ┌──────────────────────────────────────────────────┐  │
│  │              SettingsContext                      │  │
│  │        (theme + language — also AsyncStorage)     │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Data Model

Defined in `src/models/types.ts`:

```
Race
  id: string
  name: string
  circuit: string
  date: string
  weather: string

Kart
  id: string
  raceId: string
  number: string
  brand: string
  driver: string

Performance
  id: string
  kartId: string
  lapNumber: number
  lapTime: string       # formatted string e.g. "1:23.456"
  position?: number
  notes?: string
```

## State Management

`src/store/raceStore.ts` is a simple module (no external state library) that:
- Holds `races`, `karts`, and `performances` arrays in memory
- Persists every change to AsyncStorage under three separate keys
- Loads all data from AsyncStorage on app startup
- Exports typed add/delete functions used directly by screens

## Settings & Localisation

`src/context/SettingsContext.tsx` persists:
- **Theme** — `light` or `dark`
- **Main colour** — accent hex string
- **Language** — one of 22 supported `Lang` codes
- **Podium size** — number of positions shown in Rankings

All UI strings are in `src/i18n/translations.ts`. The `useTranslation` hook returns the correct `Translations` object for the active language.

## Supported Languages

Italian, English, Spanish, French, German, Portuguese, Dutch, Polish, Romanian, Czech, Hungarian, Swedish, Norwegian, Danish, Finnish, Greek, Slovak, Croatian, Bulgarian, Lithuanian, Latvian, Estonian.

## Navigation

Stack navigator (`src/navigation/RootNavigator.tsx`) with five screens:

| Screen | Route |
|---|---|
| HomeScreen | `/` |
| AddRaceScreen | `/AddRace` |
| RaceDetailScreen | `/RaceDetail` |
| KartDetailScreen | `/KartDetail` |
| SettingsScreen | `/Settings` |

## Build & Distribution

- Built with **Expo EAS Build** (`eas.json`)
- Android package: `com.tharneysoftware.karttrack`
- iOS bundle: `com.tharneysoftware.karttrack`
- No special Android permissions required

## Privacy & Security

- Zero network requests
- No analytics or crash-reporting SDKs
- No user accounts or authentication
- Data never leaves the device
- Full privacy policy: [`privacy-policy.html`](../privacy-policy.html)

