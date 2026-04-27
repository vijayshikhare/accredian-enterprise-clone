import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    capabilities: [
      { name: 'Data Science', href: '/curriculum' },
      { name: 'Generative AI', href: '/curriculum' },
      { name: 'Strategic Hiring', href: '/solutions' },
      { name: 'Talent Assessment', href: '/solutions' },
      { name: 'Corporate Training', href: '/solutions' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Success Stories', href: '/impact' },
      { name: 'Our Mentors', href: '/about' },
      { name: 'Partner Program', href: '/solutions' },
      { name: 'Careers', href: '/about' }
    ],
    legal: [
      { name: 'PRIVACY POLICY', href: '/about' },
      { name: 'TERMS OF SERVICE', href: '/about' },
      { name: 'COOKIE POLICY', href: '/about' }
    ]
  };

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          <div className="space-y-8">
            <Link href="/" className="flex items-center group cursor-pointer no-underline">
              <span className="text-3xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">accredian</span>
              <div className="ml-3 pl-3 border-l-2 border-slate-700">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block">Enterprise</span>
              </div>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed">
              Global leader in AI and Data Science executive education. Building the future of technical workforces.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
                { Icon: Youtube, href: 'https://youtube.com' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:border-primary hover:-translate-y-1 transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-sm mb-10 text-primary">Capabilities</h4>
            <ul className="space-y-6">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-sm mb-10 text-primary">Company</h4>
            <ul className="space-y-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black uppercase tracking-[0.2em] text-sm mb-10 text-primary">Global Presence</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-400">
                <MapPin className="text-primary flex-shrink-0" size={20} />
                <p>Cyber City, Gurugram, <br/>Haryana, India - 122002</p>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <p>enterprise@accredian.com</p>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <p>+91 124 400 9000</p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm font-bold">
          <p>© {new Date().getFullYear()} ACCREDIAN ENTERPRISE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors uppercase tracking-widest">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
    </footer>
  );
};

export default Footer;
