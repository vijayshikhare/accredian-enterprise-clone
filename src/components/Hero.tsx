import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const partners = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#F8FAFC] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[80px] opacity-40 pointer-events-none" />

      {/* 1. Navbar Spacer */}
      <div className="h-20 lg:h-24 flex-shrink-0" />

      {/* 2. Main Content - Optimized for all screens */}
      <div className="flex-grow flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 py-10 lg:py-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4 w-full">

          {/* Left Text Column */}
          <div className="flex-1 text-center lg:text-left space-y-4 lg:space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-blue-50 text-primary text-[10px] lg:text-xs font-bold mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Empowering Fortune 500 Workforce
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[4.5rem] font-black text-slate-900 leading-[1.1] tracking-tight">
              Re-engineering <br className="hidden sm:block"/>
              <span className="text-primary italic">Workforce</span> <br className="hidden sm:block"/>
              Performance.
            </h1>

            <p className="text-sm lg:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              The world's leading Data & AI platform for enterprise scale. Join 500+ global brands transforming their future with Accredian.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-black text-sm lg:text-base flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-0.5 active:scale-95">
                Book a Free Demo <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-sm lg:text-base text-slate-700 bg-white hover:bg-slate-50 transition-all border border-slate-200 shadow-sm active:scale-95">
                <PlayCircle className="text-primary" size={20} /> Watch Story
              </button>
            </div>
          </div>

          {/* Right Image Column - Now visible on mobile! */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[450px] lg:max-w-none transform lg:scale-110 lg:translate-x-8">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] border-[8px] lg:border-[12px] border-white aspect-square sm:aspect-video lg:aspect-[4/3] xl:aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  alt="Accredian Team Training"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Premium Floating Badge - Responsive scaling */}
              <div className="absolute -bottom-4 lg:-bottom-6 -left-4 lg:-left-10 z-20 bg-white/95 backdrop-blur-md p-4 lg:p-6 rounded-2xl lg:rounded-[2.5rem] shadow-2xl border border-white/20 animate-bounce-slow">
                <div className="flex items-center gap-3 lg:gap-5">
                  <div className="w-10 lg:w-14 h-10 lg:h-14 bg-primary rounded-xl lg:rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <span className="text-lg lg:text-2xl font-black italic">AI</span>
                  </div>
                  <div className="pr-2 lg:pr-4">
                    <p className="text-[10px] lg:text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Future Ready</p>
                    <p className="text-[8px] lg:text-xs text-slate-500 font-bold mt-1.5 lg:mt-2 whitespace-nowrap">Strategic Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Fold: Trusted by Titans */}
      <div className="w-full bg-white border-t border-slate-100 py-6 lg:py-8 flex-shrink-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <div className="flex items-center gap-3">
            <p className="text-[8px] lg:text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] whitespace-nowrap">Trusted by Industry Titans</p>
            <div className="h-px w-full bg-slate-100 opacity-40" />
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 lg:gap-24 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={partner.logo} alt={partner.name} className="h-5 lg:h-7 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
