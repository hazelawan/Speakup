# SpeakUp — Multi-file Structure

## 📁 Folder Structure

```
speakup/
├── index.html              ← Main file (CSS + JS + screen loader)
├── screens/                ← Har page/screen alag file
│   ├── 01-topbar.html      ← Top navigation bar
│   ├── 02-auth.html        ← Login / Guest / Email verify
│   ├── 03-profile-select.html  ← Profile select + new profile
│   ├── 04-splash.html      ← Splash/loading screen
│   ├── 05-welcome.html     ← Welcome screen
│   ├── 06-lang-select.html ← Language selection
│   ├── 07-course-select.html   ← Course selection
│   ├── 08-dashboard.html   ← Main dashboard (652 lines)
│   ├── 09-lesson.html      ← Lesson + Past Papers screens
│   ├── 10-profile.html     ← User profile
│   ├── 11-certificate.html ← Certificate v1 + v2
│   ├── 12-streak-popup.html ← Streak fire popup
│   ├── 13-leaderboard.html ← Leaderboard
│   ├── 14-pro.html         ← Pro subscription screen
│   ├── 15-settings.html    ← Settings
│   ├── 16-modals.html      ← Section info + lang stats modals
│   ├── 17-onboarding.html  ← Onboarding flow (1094 lines)
│   ├── 18-notifications.html   ← Notification inbox
│   ├── 19-goal-modal.html  ← Goal setting modal
│   ├── 20-share-card.html  ← Share card overlay
│   └── 21-overlays.html    ← Pause + Heart + XP + Streak overlays
└── README.md
```

## ⚠️ GitHub Pages pe kaise kaam karta hai

Screen loader `fetch()` use karta hai — yeh sirf **HTTPS server** pe kaam karta hai.

- ✅ GitHub Pages → kaam karega
- ✅ Any web hosting → kaam karega  
- ❌ Double-click karke local file:// → nahi karega (CORS block)

## 🔧 Koi screen edit karna ho toh

Bas `screens/` folder mein us screen ki file kholo aur edit karo.
Baaki kuch chhedne ki zaroorat nahi.

## 🚀 GitHub Deploy Steps

1. Ye poora folder GitHub repo mein daalo
2. Settings → Pages → main branch → / (root)
3. Ho gaya!
