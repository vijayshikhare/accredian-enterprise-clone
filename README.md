# Accredian Enterprise - Partial Clone

A premium, industry-level enterprise landing page built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. This project is a functional clone of [Accredian Enterprise](https://enterprise.accredian.com/), optimized for performance, responsiveness, and professional aesthetics.

## 🚀 Live Demo
[Live Deployment Link - Vercel](https://accredian-enterprise-clone.vercel.app/)

## ✨ Key Features
- **Multi-Page Architecture**: Dedicated pages for Solutions, Curriculum, Impact, and About Us.
- **Premium UI/UX**: High-end typography, glassmorphism effects, smooth animations, and a modern enterprise color palette.
- **Lead Capture System**: Functional contact form integrated with a **Next.js API Route** for real-time data handling (Bonus requirement).
- **Interactive Elements**: Auto-scrolling partner marquee with original brand colors, interactive stats, and hover-responsive capability cards.
- **Mobile First**: Fully responsive design across all viewports (Mobile, Tablet, Laptop, Desktop).
- **Smooth Navigation**: Global scroll-smoothing and active-state tracking in the Navbar.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Deployment**: Vercel

## 🤖 AI Usage Explanation

### Where AI Helped:
- **Scaffolding**: Used AI to generate the initial boilerplate for Next.js components and Tailwind configurations.
- **Content Strategy**: AI assisted in drafting professional, enterprise-grade copy that aligns with the target audience (CIOs, HR Heads).
- **Complex Logic**: Used AI to refine the infinite marquee animation and the scroll-aware Navbar logic.
- **API Routing**: Scaffolded the structure for the Next.js API POST route for lead capture.

### Manual Improvements & Refinements:
- **Visual Calibration**: Manually adjusted every pixel of padding and margin to ensure a "perfect fit" on standard laptop screens.
- **Color Correction**: Fine-tuned HEX codes to match the authentic Accredian brand colors.
- **Layout Engineering**: Custom-built the 3-part vertical flex stack in the Hero section to prevent content clipping.
- **Z-Index Management**: Manually handled layering to ensure overlapping elements (like the "Future Ready" badge) render perfectly.
- **UX Refinement**: Added tactile feedback like `active:scale-95` on buttons for a more responsive app-like feel.

## 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/accredian-enterprise.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## 📈 Future Improvements (with more time)
- **CMS Integration**: Connect with Sanity.io or Contentful to allow marketing teams to update content dynamically.
- **Framer Motion**: Implement advanced scroll-reveal animations for an even more "premium" feel.
- **A/B Testing**: Integrate tracking to optimize the CTA button placements.
- **Auth Portal**: Create a separate dashboard for enterprise clients to monitor their team's learning progress.
