# 🍕 CHEESY MOMENTS KAITHAL
### Premium Restaurant Website & Smart QR Digital Ordering System

> **Official Web Platform for Cheesy Moments Kaithal**  
> *Authentic Neapolitan Style Pizza Dough • Personal Giant Slices • Whole Wheat Momos • Gourmet Burgers & Waffles*  
> **Location:** Booth No. 182, Sector 20 HUDA, Kaithal, Haryana – 136027, India  
> **Contact & WhatsApp:** [+91 8685000092](tel:+918685000092)  
> **Opening Hours:** 10:30 AM – 10:45 PM (Open All 7 Days)  
> **Instagram:** [@cheesymomentsktl](https://www.instagram.com/cheesymomentsktl/)  
> **Google Maps:** [Sector 20 HUDA, Kaithal](https://maps.google.com/?q=Cheesy+Moments+Booth+No+182+Sector+20+HUDA+Kaithal+Haryana+136027)

---

## 📖 Project Overview

**Cheesy Moments Kaithal** is a high-performance, modern web application and QR-driven digital ordering suite designed specifically for an authentic Neapolitan-style pizzeria and fast-casual dining restaurant in Kaithal, Haryana.

The platform bridges physical dine-in tables, takeaway customers, and delivery orders with a seamless, zero-friction experience:
- **Customer Homepage**: High-impact visual showcase with interactive food showcases, story, promotions, and location details.
- **Smart QR Digital Menu**: App-like mobile ordering interface with instant search, dietary tags, multi-variant sizing (slice, small, medium, platters), add-ons, and direct WhatsApp kitchen ordering.
- **Tabletop QR Code Poster**: Print-ready A4/A5 tabletop standees with offline QR generation, table number markers, and vector download options.
- **Staff Admin Dashboard**: A secure, hidden control panel allowing restaurant staff to manage 101+ dishes, update prices, toggle out-of-stock items, configure promotions, and back up data in real time.

---

## ✨ Features

### 1. 🍽️ Master Verified Digital Menu
- **101 authentic dishes across 23 distinct categories** verified against the restaurant's printed menu boards:
  - *Pizzas*: Classic Range, Premium Range, Ultimate Paneer Series, Create Your Own Pizza, and Blasting Flavours under ₹99.
  - *Momos*: Whole Wheat & Maida (Steamed, Fried, Kurkure, Gravy), plus 12-piece Celebration Platters.
  - *Burgers & Sandwiches*: Single and Combo Meal (with Fries & Drink) options.
  - *Specialties*: Bombay Chaska, Garlic Bread, Rolls, Tortillas, Pasta, Waffles, and Thick Shakes.
- Real-time dietary filters: **All**, **Bestsellers**, **Under ₹99**, **Pure Veg**, and **Spicy**.
- Live instant search filtering across dish titles and ingredients.
- Dynamic modal for selecting portion sizes, crust types, and add-on upgrades (Extra Cheese, Cheese Burst, etc.).

### 2. 📱 Smart QR Ordering & WhatsApp Kitchen Integration
- Mobile-first, responsive interface accessible by scanning table QR codes.
- Floating cart drawer displaying live item count, subtotal, and tax calculations.
- Table number input and custom cooking notes for the chef.
- **Instant WhatsApp Order Dispatch**: Generates a clean, formatted receipt sent directly to the restaurant's official WhatsApp number (`+91 8685000092`) for instantaneous kitchen dispatch without expensive SaaS commissions.

### 3. 🖨️ Tabletop QR Poster Generator
- Runs completely client-side without relying on external network QR APIs.
- Pre-styled print media queries (`@media print`) formatted for standard restaurant A4/A5 acrylic table tents.
- Built-in downloadable PNG and SVG vector formats for professional commercial printing.
- Editable target URL configuration in the admin dashboard.

### 4. 🔒 Hidden Staff Admin Dashboard
- **Completely invisible to public diners**: No visible admin links or buttons anywhere on public pages.
- **Three Secret Entry Methods**:
  1. **Direct Route**: Navigate directly to `/admin` or `/admin.html`.
  2. **Secret Logo Tap**: Double-click or tap the Cheesy Moments circular logo on any page.
  3. **Keyboard Shortcut**: Press `Ctrl + Shift + A` (or `Alt + A`).
- **PIN Protected**: Defaults to secure passcode `cheesy2024`.
- **Live Inventory & Pricing**: Toggle In-Stock / Sold-Out with one click; update base prices and meal options.
- **Promotions Manager**: Activate or deactivate homepage promo banners and discount codes.
- **Data Persistence**: LocalStorage caching with one-click full JSON database export, import, and factory reset.

---

## 🛠️ Technology Stack

| Layer | Technology / Tool | Purpose |
| :--- | :--- | :--- |
| **Frontend Core** | HTML5 Semantic Architecture | High-accessibility, SEO-optimized structure |
| **Styling** | Vanilla CSS3 (Custom Design System) | Zero-bloat, glassmorphism, fluid typography, mobile responsive |
| **Client Logic** | Modern JavaScript (ES6+ Vanilla) | Interactive UI, cart state management, search, modals |
| **QR Code Engine** | Offline `qrcode.min.js` | Zero external network dependency for tabletop code generation |
| **Local Runtime** | Node.js (Built-in HTTP / Express) | Static file serving and clean URL routing (`/menu`, `/admin`, `/qr`) |
| **SEO & Social** | JSON-LD Schema.org (`Restaurant`, `LocalBusiness`) | Rich Google search cards, opening hours, geolocation indexing |
| **Hosting Targets** | Vercel, Netlify, GitHub Pages, Render | Pre-configured `vercel.json` and `_redirects` for 1-click cloud deploy |

---

## 📥 Installation Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 16.x or newer recommended)
- [Git](https://git-scm.com/) installed on your machine
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Setup Steps
```bash
# 1. Clone the repository
git clone https://github.com/chhichholiyadigitalindustries/cheesymoments.git

# 2. Change into the project directory
cd cheesymoments

# 3. Install project dependencies (optional, for local node tools)
npm install
```

---

## 💻 Development Commands

| Command | Action |
| :--- | :--- |
| `npm start` | Launches the local Node.js server at `http://localhost:3000` |
| `npm run dev` | Runs the server in development mode |
| `npm test` | Runs static integrity tests on menu data and page assets |
| `node server.js` | Direct Node.js entry point |

### Local URLs Once Running:
- **Homepage:** `http://localhost:3000/`
- **Digital Menu:** `http://localhost:3000/menu`
- **Tabletop QR Poster:** `http://localhost:3000/qr`
- **Staff Admin:** `http://localhost:3000/admin` *(Passcode: `cheesy2024`)*

---

## 🏗️ Build Instructions

Because Cheesy Moments is engineered with ultra-fast Vanilla HTML5, CSS3, and ES6+ JavaScript, **no complex compilation or transpilation (Webpack/Vite/Babel) step is required**.

- All source files in the project root and `assets/` directory are production-ready.
- All styles and scripts are modularly organized:
  - `assets/css/style.css`: Homepage & shared tokens
  - `assets/css/menu.css`: Digital menu ordering interface
  - `assets/css/admin.css`: Staff dashboard
  - `assets/js/main.js`: Homepage animations and secret logo listener
  - `assets/js/menu.js`: Menu rendering, search, cart, and WhatsApp checkout
  - `assets/js/admin.js`: Administrative state management
  - `data/menu-data.js`: Menu items database

To verify code syntax integrity before deploying, run:
```bash
node -c server.js
node -c assets/js/main.js
node -c assets/js/menu.js
node -c assets/js/admin.js
node -c data/menu-data.js
```

---

## 🚀 Deployment Instructions

### 1. Vercel Deployment (Recommended)
This repository includes a production-ready `vercel.json` configuration file with clean URL rewrites.
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import `cheesymoments`.
4. Leave the build settings as default (Framework Preset: **Other**, Output Directory: `.`).
5. Click **Deploy**. Your site will be live with clean paths:
   - `/`
   - `/menu`
   - `/admin`
   - `/qr`

### 2. Netlify Deployment
This repository includes a `_redirects` file pre-configured for Netlify:
1. Log in to [Netlify](https://app.netlify.com/).
2. Select **"Import from Git"** and choose this repository, OR drag and drop the project folder directly into Netlify Drop.
3. Deploy site immediately.

### 3. GitHub Pages
1. Go to your GitHub repository **Settings** > **Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**.
3. Select `main` branch and `/ (root)` folder, then click **Save**.
4. Access via `https://<username>.github.io/cheesymoments/index.html`.

### 4. Custom VPS / Ubuntu Server (Nginx + Node)
```bash
# Clone to server
git clone https://github.com/chhichholiyadigitalindustries/cheesymoments.git /var/www/cheesymoments
cd /var/www/cheesymoments

# Run via PM2 process manager
pm2 start server.js --name "cheesy-moments"
pm2 startup
pm2 save
```

---

## ⚙️ Configuration & Environment Variables

Cheesy Moments is pre-configured to operate out of the box with zero required external API keys or paid backend services. If you wish to customize operational parameters, modify the following files:

### 1. Restaurant Contact & WhatsApp Ordering
Located in:
- `assets/js/menu.js` (line 12):
  ```javascript
  const WHATSAPP_NUMBER = "918685000092"; // WhatsApp international format without '+'
  ```
- `index.html` & `qr-poster.html`:
  Update phone links `tel:+918685000092` and displayed contact numbers.

### 2. Staff Admin Security Passcode
Located in:
- `assets/js/admin.js` (line 14):
  ```javascript
  const ADMIN_PIN = "cheesy2024"; // Change this to your preferred staff PIN
  ```

### 3. Local Server Port Configuration
By default, `server.js` listens on port `3000` or the environment variable `PORT`:
```bash
PORT=8080 node server.js
```

---

## 📂 Project Structure

```
cheesymoments/
├── index.html              # Customer Homepage (8 rich sections)
├── menu.html               # Smart QR Digital Menu & WhatsApp cart
├── qr-poster.html          # Print-Ready Table Tent / Poster with QR code
├── admin.html              # Secure Staff Admin Dashboard
├── server.js               # Clean-URL Node.js local server
├── package.json            # Node project configuration
├── package-lock.json       # Dependency lockfile
├── vercel.json             # Vercel deployment rewrites & cache headers
├── _redirects              # Netlify deployment routing
├── robots.txt              # Search engine crawler directives
├── sitemap.xml             # XML Sitemap for Google search indexing
├── favicon.png             # Official brand favicon
├── .gitignore              # Git ignore rules
├── data/
│   └── menu-data.js        # Master verified menu database (101 items, 23 categories)
├── assets/
│   ├── css/
│   │   ├── style.css       # Core design system & homepage styles
│   │   ├── menu.css        # Digital menu ordering app styles
│   │   └── admin.css       # Admin dashboard styles
│   ├── js/
│   │   ├── main.js         # Homepage interactions & floating parallax
│   │   ├── menu.js         # Digital menu engine, modal, cart, WhatsApp
│   │   ├── admin.js        # Admin CRUD, stock toggles, backup/restore
│   │   ├── qr-generator.js # Offline QR code renderer & downloader
│   │   └── vendor/
│   │       └── qrcode.min.js # Bundled standalone QR code library
│   └── images/
│       ├── logo.svg        # Scalable vector brand logo
│       ├── logo.png        # Official circular badge logo
│       ├── hero-pizza.jpg  # Neapolitan pizza hero visual
│       ├── paneer-pizza.jpg# Ultimate Paneer Series showcase
│       ├── cheesy-burger.jpg# Double decker cheesy burger showcase
│       ├── loaded-nachos.jpg# Overloaded nachos showcase
│       ├── waffle-dessert.jpg# Belgian waffle waffwich showcase
│       ├── floating-pizza-slice.png # Transparent floating 3D pizza slice
│       ├── floating-tomato.png      # Transparent floating tomato
│       ├── floating-basil.png       # Transparent floating basil
│       └── authentic/      # Extracted reference dishes from printed menus
└── images/
    ├── instagram.jpeg      # Reference Instagram screenshot
    ├── menu1.jpeg          # Reference Menu 1
    ├── menu2.jpeg          # Reference Menu 2
    └── menu3.jpeg          # Reference Menu 3
```

---

## 📄 License & Attribution

- **Brand & Copyright:** © 2026 Cheesy Moments Kaithal. All rights reserved.
- **Created for:** Cheesy Moments Kaithal (Booth No. 182, Sector 20 HUDA, Kaithal, Haryana).
