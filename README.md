# JC Beauty — Premium Lash & Brow Studio

JC Beauty is a high-end, dark luxury, mobile-first, and conversion-focused web application for a premium beauty studio based in Mechelen, Belgium.

## 💎 Design Aesthetics

- **Dark Luxury & Editorial Style**: Rich dark palette (`#050505`) with premium chrome, silver, and platinum gradients.
- **Sophisticated Typography**: Elegant Cormorant Garamond serif headings paired with clean, highly readable Inter body text.
- **Glassmorphism**: Frosted glass elements with subtle glow shadows (`--glow-soft`, `--glow-medium`, `--glow-silver`).
- **Diverse Model Imagery**: Custom assets celebrating diverse beauty including afro-descendant styles.

## ✨ Key Features

1. **Multilingual Engine**: Instantly translates between **Dutch** (default), **French**, and **English** without reloading the page, preserving SEO metadata for local visibility.
2. **Client-Side SPA Routing**: Instant page navigation between sections (Home, Services, Gallery, Aftercare, FAQ) with zero transition latency.
3. **Interactive Lash Style Finder**: A custom styling quiz recommending the perfect lash treatment based on client preferences (Natural, Glam, Volume, Lash Lift).
4. **Filterable Before & After Gallery**: Masonry-styled portfolio grid with categories (Lashes, Brows, Lash Lift, Before & After) and custom lightbox details.
5. **Anti Mascara Club Movement**: Focuses on lifestyle, time-saving, and lash health to boost bookings.
6. **Studio Care Essentials**: Highlights premium aftercare products available in the salon to maintain results and raise average order value (AOV).
7. **Local SEO Schema**: Embedded JSON-LD `LocalBusiness` / `BeautySalon` structured data for optimal Google visibility in the Mechelen region.
8. **Setmore Booking Integration**: Seamlessly directs clients to book appointments with a sticky mobile CTA bar and custom landing page links.

## 🛠️ Technology Stack

- **Markup**: Semantic HTML5
- **Styling**: Modern, responsive Vanilla CSS
- **Logic**: Vanilla ES6 JavaScript
- **Dev Server**: Vite (for rapid HMR development and optimized production bundling)

## 🚀 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Development Server**:
   ```bash
   npm run dev
   ```
3. **Build for Production**:
   ```bash
   npm run build
   ```
   *This compiles assets, minifies files, and generates a production-ready bundle in the `dist` directory.*
