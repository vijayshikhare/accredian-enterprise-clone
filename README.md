# Accredian Enterprise - Professional Clone

A premium, industry-level enterprise landing page built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. This project is a functional clone of [Accredian Enterprise](https://enterprise.accredian.com/), optimized for performance, responsiveness, and professional aesthetics.

## 🚀 Live Demo
[https://accredian-enterprise-clone.netlify.app/](https://accredian-enterprise-clone.netlify.app/)

## ✨ Key Features
- **Multi-Page Architecture**: Dedicated routes for Solutions, Curriculum, Impact, and About Us.
- **Premium UI/UX**: High-end typography, glassmorphism effects, smooth animations, and a modern enterprise color palette.
- **Lead Capture System**: Functional contact form integrated with a **Next.js API Route** for real-time data handling.
- **Responsive Navigation**: Advanced mobile drawer menu with right-side slide animation and background scroll locking.
- **Dynamic Content**: Auto-scrolling partner marquee with original brand colors, interactive stats, and hover-responsive capability cards.
- **Fully Responsive**: Meticulously calibrated for all screen sizes, from mobile phones to high-resolution laptops.

## 🛠 Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Netlify / Vercel

## 🤖 AI Usage Explanation

### Which AI tools did you use?
- **ChatGPT / Claude**: Used for architectural brainstorming, drafting enterprise-grade copy, and scaffolding initial component structures.
- **IDE AI Assistant**: Used for rapid Tailwind class suggestions and debugging logic for the infinite marquee and scroll-aware Navbar.

### Where did AI help you the most?
AI was most effective in **rapid scaffolding** and **content generation**. It helped quickly set up the Next.js App Router structure and provided professional, industry-aligned text that matches the "Accredian Enterprise" brand voice.

### What did you modify or improve manually (beyond AI output)?
- **Viewport Calibration**: Manually engineered the Hero section using a 3-part vertical flex stack to ensure the "first fold" fits laptop screens perfectly without clipping.
- **Mobile Navigation**: Custom-built the right-side drawer menu and implemented background scroll-locking logic.
- **Visual Polish**: Manually managed Z-index layering, refined HEX codes for brand accuracy, and added tactile feedback (active-scaling) to all interactive elements.

### Did you face any incorrect AI-generated code? How did you handle it?
Yes, the AI initially suggested a single-page scrolling logic that conflicted with the multi-page route structure. I refactored the Navbar to use `usePathname` and standard Next.js `Link` components to ensure persistent active states across pages.

## 🚀 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/accredian-enterprise-clone.git
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

## 📈 Future Improvements
- **CMS Integration**: Connect with Sanity.io for dynamic content updates.
- **Advanced Animations**: Integrate Framer Motion for scroll-triggered reveal effects.
- **Auth Portal**: Create a dashboard for enterprise clients to monitor learning progress.
