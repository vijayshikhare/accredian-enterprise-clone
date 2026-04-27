import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Programs from '@/components/Programs';

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* Page Header for Curriculum - Reduced Padding */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4">
            Future-Ready <span className="text-primary italic">Curriculum</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed by industry experts to transform your workforce into a data-driven powerhouse.
          </p>
        </div>
      </section>

      {/* Curriculum content with tighter spacing */}
      <div className="-mt-12">
        <Programs />
      </div>

      <Footer />
    </main>
  );
}
