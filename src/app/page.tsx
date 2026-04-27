import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Stats />

      {/* Featured Preview Sections on Home */}
      <Features />
      <Testimonials />

      {/* Dynamic CTA Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-30 mix-blend-screen"
            alt="Global Network"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            Global Enterprise Partners
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tight leading-tight">
            The future of your workforce <br/>
            starts with <span className="text-primary italic underline decoration-blue-500/30">Intelligence.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-2xl shadow-blue-500/20 hover:-translate-y-1 active:scale-95">
              REQUEST ENTERPRISE ACCESS
            </button>
            <button className="bg-white/5 border border-white/10 backdrop-blur-md text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </section>

      {/* Reusable Contact form anchored at bottom of home */}
      <div id="contact">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
