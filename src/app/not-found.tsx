import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <h1 className="text-9xl font-black text-slate-100 absolute z-0">404</h1>
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-black text-slate-900">Page Not Found</h2>
          <p className="text-slate-600 max-w-md mx-auto">
            The enterprise resource you are looking for has been moved or doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:-translate-y-1 transition-all"
          >
            RETURN HOME
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
