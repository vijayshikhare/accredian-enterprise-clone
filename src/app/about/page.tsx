import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* Page Header for About - Reduced Padding */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-slate-100 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4">
            Our <span className="text-primary italic">Mission</span> & Vision
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Accredian is dedicated to bridging the global skills gap in Data Science and AI, empowering professionals and organizations to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* About Content Section - Reduced Top Padding */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-black text-slate-900">Who We Are</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded by industry veterans, Accredian is a leading executive education platform. We partner with top-tier universities and companies to provide industry-aligned learning experiences.
              </p>
            </div>
            <div className="flex-1">
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-xl" alt="Our Team" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-black text-slate-900">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To create a world where every professional has access to the highest quality education and every organization has a workforce ready to tackle the challenges of the future.
              </p>
            </div>
            <div className="flex-1">
               <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-xl" alt="Our Vision" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
