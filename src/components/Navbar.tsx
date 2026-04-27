"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ArrowRight, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Curriculum', href: '/curriculum' },
    { name: 'Impact', href: '/impact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 h-20 lg:h-24 flex items-center ${
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-slate-100"
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <Link href="/" className="flex items-center group cursor-pointer no-underline relative z-[110]">
              <span className={`text-2xl lg:text-3xl font-black tracking-tighter transition-colors duration-300 ${scrolled || isOpen ? 'text-primary' : 'text-slate-900'}`}>
                accredian
              </span>
              <div className={`ml-2 lg:ml-3 pl-2 lg:pl-3 border-l-2 transition-colors duration-300 ${scrolled || isOpen ? 'border-primary/20' : 'border-slate-900/20'}`}>
                <span className={`text-[8px] lg:text-[10px] font-black uppercase tracking-[0.2em] block leading-none ${scrolled || isOpen ? 'text-slate-600' : 'text-slate-900'}`}>
                  Enterprise
                </span>
                <span className="text-[7px] lg:text-[9px] text-primary font-black uppercase leading-none mt-1 block">Data & AI</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-12">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-bold uppercase tracking-widest relative group transition-all duration-500 ${
                      isActive ? 'text-primary' : scrolled ? 'text-slate-600 hover:text-primary' : 'text-slate-900 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1.5 left-0 h-[3px] bg-primary transition-all duration-500 ease-in-out ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></span>
                  </Link>
                );
              })}
              <Link
                href="/#contact"
                className="group bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:bg-primary transition-all duration-300 shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 active:scale-95"
              >
                BOOK A DEMO <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden relative z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-all duration-300 flex items-center justify-center ${
                  isOpen ? 'bg-primary text-white' : scrolled ? 'bg-slate-50 text-primary' : 'bg-slate-900/5 text-slate-900'
                }`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER - Separated from Nav for fixed positioning fix */}
      <div
        className={`lg:hidden fixed inset-0 z-[105] bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`lg:hidden fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white z-[120] shadow-2xl transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <div className="flex-grow space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Navigation</p>
            {navLinks.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between py-5 border-b border-slate-50 text-xl font-black transition-all ${
                    isActive ? 'text-primary' : 'text-slate-900'
                  }`}
                >
                  {item.name}
                  <ChevronRight size={18} className={isActive ? 'text-primary' : 'text-slate-300'} />
                </Link>
              );
            })}
          </div>

          <div className="mt-8 space-y-4">
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-3 w-full bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 active:scale-95 transition-all"
            >
              BOOK A DEMO <ArrowRight size={20} />
            </Link>
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg shadow-lg active:scale-95">
              GET STARTED
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-100">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Support Email</p>
                  <p className="text-sm font-bold text-slate-900">admissions@accredian.com</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
