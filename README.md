# HealthTech

A mobile app for booking and reviewing medical consultations — browse practitioners, book an appointment, and keep the history on the device.

React Native with Expo Router, storing everything locally in SQLite.

---

## Screens

| Screen | Purpose |
|---|---|
| [`Login.js`](app/Login.js) | Sign in |
| [`Explore.js`](app/Explore.js) | Browse available practitioners and specialities |
| [`Consultation.js`](app/Consultation.js) | Book a consultation and review past ones |
| [`Profile.js`](app/Profile.js) | Patient profile |

## Data

SQLite on the device, wrapped in a React context so screens consume a hook rather than opening the database themselves:

```
app/database/
├─ DatabaseContext.js   provider — opens the database, exposes it
├─ useDatabase.js       hook — queries and mutations
└─ _layout.js           mounts the provider above the route tree
```

Keeping the database behind a context means the schema and the connection live in one place, and a screen that needs data asks for it instead of managing a handle.

## Stack

React Native · Expo · Expo Router · `expo-sqlite` · React Navigation (bottom tabs) · React Native Elements

## Running it

```bash
npm install
npx expo start
```

Open in Expo Go, an Android emulator, or an iOS simulator.

## Status

Built in 2024 as a study project in mobile development and local persistence. Not maintained.

## License

See [LICENSE](LICENSE).
