import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Accredian has been instrumental in transforming our engineering team's approach to data. Their curriculum is unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, CloudTech",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    text: "The ROI we've seen from upskilling our analysts through Accredian's AI programs has been significant. Highly recommended for any enterprise.",
    author: "Michael Chen",
    role: "Chief Data Officer, Global Finance",
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    text: "Professional, structured, and deep. Their mentors really know the real-world applications of AI, not just the theory.",
    author: "Elena Rodriguez",
    role: "HR Director, Innovate Corp",
    image: "https://i.pravatar.cc/150?u=elena"
  }
];

const Testimonials = () => {
  return (
    <section id="impact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Voices of Transformation</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500">
              <Quote className="text-blue-100 mb-6" size={48} />
              <p className="text-slate-600 text-lg italic leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.author}</h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
