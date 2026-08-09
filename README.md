# SchoolCraft — Premium School Website Template Platform

A modern, responsive **school website template marketplace** built with React + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

## 📦 Build

```bash
npm run build
```

## 🌐 Routes

| URL | Page |
|---|---|
| `/` | Template Marketplace Homepage |
| `/templates` | All Templates Gallery |
| `/category/play-school` | Play School Category |
| `/category/secondary-school` | Secondary School Category |
| `/preview/play-school/happy-kids` | Happy Kids Template Preview |
| `/preview/secondary-school/modern-academy` | Modern Academy Template Preview |

## 🏗️ Adding a New Template

1. Create `src/templates/<category>/<Name>/config.js`
2. Create `src/templates/<category>/<Name>/index.jsx`
3. Add entry to `src/data/templates.js`
4. Add route to `src/router.jsx`

## 📁 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS v3** — custom design systems per template
- **Framer Motion 11** — scroll reveal, counters, carousels
- **React Router DOM v6** — multi-page routing
- **Lucide React** — icons
- **Google Fonts** — Inter, Nunito, Playfair Display, Outfit

## 📋 Templates

| Template | Category | Status |
|---|---|---|
| Happy Kids | Play School | ✅ Live |
| Modern Academy | Secondary School | ✅ Live |
| Little Stars | Play School | 🔜 Coming Soon |
| Future Scholars | Secondary School | 🔜 Coming Soon |
| Global Academy | International | 🔜 Coming Soon |

---

Built with ❤️ for modern Indian education