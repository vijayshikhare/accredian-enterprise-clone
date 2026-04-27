import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Features from '@/components/Features';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* Page Header for Solutions - Reduced Padding */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4">
            Our <span className="text-primary italic">Solutions</span> for Enterprise
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Empower your organization with cutting-edge Data & AI capabilities. We tailor programs to meet your strategic objectives.
          </p>
        </div>
      </section>

      {/* Solutions content with tighter spacing */}
      <div className="-mt-12">
        <Features />
      </div>

      <Footer />
    </main>
  );
}
