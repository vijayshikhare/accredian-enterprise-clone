import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* Page Header for Impact - Reduced Padding */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4">
            Real-World <span className="text-primary italic">Impact</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Discover the tangible outcomes and success stories of organizations that have transformed their workforce through our programs.
          </p>
        </div>
      </section>

      {/* Impact content with tighter spacing */}
      <div className="-mt-8">
        <Stats />
        <Testimonials />
      </div>

      <Footer />
    </main>
  );
}
