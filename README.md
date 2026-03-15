# KartTrack

A React Native (Expo) app for tracking kart racing sessions, lap times, and performance data. All data is stored locally on the device — no account, no server, no internet connection required.

## Features

- Track multiple race sessions with date, circuit, and weather info
- Add karts to each race (number, brand, driver)
- Record lap times and positions for each kart
- View best time and average time per kart
- Rankings screen with podium visualization
- Dark/light theme support
- Multilingual UI (22 languages)
- Fully offline — all data stored locally via AsyncStorage

## Tech Stack

- **React Native** with **Expo** (SDK)
- **TypeScript**
- **AsyncStorage** (`@react-native-async-storage/async-storage`) for local persistence
- **React Navigation** for screen routing
- Custom i18n system (no external library)

## Project Structure

```
karttrack/
├── App.tsx                  # Root component
├── index.ts                 # Expo entry point
├── app.json                 # Expo configuration
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── DatePicker.tsx
│   │   ├── DatePicker.web.tsx
│   │   ├── LanguagePicker.tsx
│   │   ├── LanguagePicker.web.tsx
│   │   └── Rankings.tsx
│   ├── context/
│   │   └── SettingsContext.tsx  # Theme + language state
│   ├── i18n/
│   │   ├── translations.ts      # All 22 language strings
│   │   └── useTranslation.ts
│   ├── models/
│   │   └── types.ts             # TypeScript interfaces
│   ├── navigation/
│   │   └── RootNavigator.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── AddRaceScreen.tsx
│   │   ├── RaceDetailScreen.tsx
│   │   ├── KartDetailScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── store/
│   │   └── raceStore.ts         # AsyncStorage data layer
│   └── utils/
│       └── confirmDelete.ts
└── assets/                  # Icons and splash screen
```

## Getting Started

```bash
cd karttrack
npm install
npx expo start
```

## Privacy

KartTrack collects no personal data. All data entered by the user is stored exclusively on the device. See [privacy-policy.html](../privacy-policy.html) for the full privacy policy.

## License

MIT — © 2026 Tharney Software Solutions

