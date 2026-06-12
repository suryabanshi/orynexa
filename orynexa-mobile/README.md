# ORYNEXA Mobile

The official ORYNEXA mobile app (iOS & Android), built with [Expo](https://expo.dev) /
React Native. It mirrors the ORYNEXA brand from `orynexa-webapp` and adds:

- **Home** — the ORYNEXA story, what we build, and our subsystems.
- **Dashboard** — ORYNEXA OS system control center preview.
- **Connect** — link ORYNEXA to the apps you already use (Google Workspace,
  Microsoft 365, Slack, Notion, GitHub, Figma, Shopify, Zapier, Dropbox, Zoom).

## Run locally

```bash
npm install
npm run start      # opens Expo dev tools — scan the QR code with Expo Go
npm run android     # run on a connected device/emulator
npm run ios         # run on an iOS simulator (macOS only)
```

## Build a downloadable app (EAS Build)

This project is configured for [EAS Build](https://docs.expo.dev/build/introduction/)
via `eas.json`.

1. Install the EAS CLI and log in:
   ```bash
   npm install -g eas-cli
   eas login
   ```
2. Build an installable Android APK (great for sharing a direct download link):
   ```bash
   eas build --platform android --profile preview
   ```
   When the build finishes, EAS gives you a URL — open it on an Android phone
   to download and install the `.apk` directly, or share the link with others.
3. Build for iOS (requires an Apple Developer account for device installs):
   ```bash
   eas build --platform ios --profile preview
   ```
4. Production builds (Play Store `.aab` / App Store):
   ```bash
   eas build --platform android --profile production
   eas build --platform ios --profile production
   ```

## Branding

App icons and splash screens are generated from the ORYNEXA mark via
`scripts/generate-icons.js`:

```bash
npm install --no-save sharp
node scripts/generate-icons.js
```

This regenerates `assets/icon.png`, `assets/android-icon-*.png`,
`assets/splash-icon.png`, and `assets/favicon.png` using the ORYNEXA color
palette (gold, cyan, emerald on near-black).

## Project structure

```
App.tsx                 # root component + tab navigation
src/
  theme.ts              # ORYNEXA color palette
  navigation.ts         # tab key types
  components/           # Logo, Card, ScreenContainer, BottomTabBar
  data/                  # content + integrations data
  screens/
    HomeScreen.tsx
    DashboardScreen.tsx
    ConnectScreen.tsx    # "Connect Your Apps" integrations hub
```
