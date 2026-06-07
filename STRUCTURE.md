# SpeakUp v8 — File Structure

## 📁 Main Files
- `index.html` — Main entry point (20KB, links all files)

## 🎨 CSS
- `css/style.css` — All styles (168KB)

## 📱 Screens (HTML — loaded dynamically)
- `screens/01-topbar.html` — Top navigation bar
- `screens/02-auth.html` — Login / Sign up screen
- `screens/03-profile-select.html` — Profile selection
- `screens/04-splash.html` — Splash / intro screen
- `screens/05-welcome.html` — Welcome screen
- `screens/06-lang-select.html` — Language selection
- `screens/07-course-select.html` — Course selection (30/60/90 day)
- `screens/08-dashboard.html` — Main dashboard
- `screens/09-lesson.html` — Lesson screen
- `screens/10-profile.html` — User profile screen
- `screens/11-certificate.html` — Certificate screens
- `screens/12-streak-popup.html` — Streak celebration popup
- `screens/13-leaderboard.html` — League leaderboard
- `screens/14-pro.html` — Pro upgrade screen
- `screens/15-settings.html` — App settings
- `screens/16-modals.html` — Shared modals
- `screens/17-onboarding.html` — Onboarding flow
- `screens/18-notifications.html` — Notifications screen
- `screens/19-goal-modal.html` — Daily goal modal
- `screens/20-share-card.html` — Share progress card
- `screens/21-overlays.html` — Overlays & popups

## ⚙️ JavaScript Files (loaded in order)
- `js/00-pwa-sw.js` — PWA Service Worker registration
- `js/01-firebase-config.js` — Firebase setup (inline in index.html)
- `js/02-theme-init.js` — App theme initialization
- `js/03-screen-loader.js` — Dynamic screen loader
- `js/04-pro-screen-ui.js` — Pro screen UI & payment plans
- `js/05-state-profiles.js` — Profile state (PROFILES, S, saveAll, loadAll)
- `js/06-day-data.js` — ALL_DAYS lesson content (vocab, quizzes)
- `js/07-sections-data.js` — ALL_SECTIONS + Chess + Python data
- `js/08-pro-system.js` — isPro(), checkProFromFirebase, expiry watcher
- `js/09-lesson-engine.js` — Lesson builder, finishLesson, speaking system
- `js/10-preclass-engine.js` — Pre-class alphabet/phonics engine
- `js/11-ui-render.js` — Dashboard, path, achievements, flashcards
- `js/12-admin-auth.js` — Admin panel + Firebase auth (login/logout)
- `js/13-animation-engine.js` — XP pop, confetti, animations
- `js/14-theme-toggle.js` — Dark/light theme toggle
- `js/15-toast-helpers.js` — Toast notifications
- `js/16-onboarding.js` — First-time user onboarding
- `js/17-notifications.js` — Push notification system
- `js/18-goal-modal.js` — Daily goal tracking
- `js/19-skeleton.js` — Skeleton loading screens
- `js/20-sound-system.js` — Audio feedback system
- `js/21-xp-boost.js` — XP Double Power-Up system
- `js/22-share-card.js` — Canvas-based progress sharing
- `js/23-heart-screen.js` — Heart screen for free users
- `js/24-streak-screen.js` — Streak display and freezes
- `js/25-heart-system.js` — Heart logic (free users)
- `js/26-app-language.js` — UI language switcher

## 🐛 Bugs Fixed vs Original
1. Pro status reset on app restart — fixed localStorage save
2. Race condition clearing Pro — fixed with 1.5s delay
3. JS SyntaxError "doesn't" apostrophe — fixed
