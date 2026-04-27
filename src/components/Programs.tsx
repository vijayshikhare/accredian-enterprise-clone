import React from 'react';
import { Database, BrainCircuit, LineChart, Globe } from 'lucide-react';

const programs = [
  {
    title: "Data Science & AI",
    icon: <Database className="text-white" />,
    color: "bg-blue-600",
    desc: "Master the art of data-driven decision making with industry-led curricula."
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="text-white" />,
    color: "bg-purple-600",
    desc: "Build and deploy scalable ML models for complex business problems."
  },
  {
    title: "Business Analytics",
    icon: <LineChart className="text-white" />,
    color: "bg-emerald-600",
    desc: "Transform raw data into actionable insights for strategic growth."
  },
  {
    title: "Product Management",
    icon: <Globe className="text-white" />,
    color: "bg-orange-600",
    desc: "Lead the future of innovation with data-centric product leadership."
  }
];

const Programs = () => {
  return (
    <section id="curriculum" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Curriculum</h2>
            <h3 className="text-4xl font-bold text-slate-900">Industry-led programs for high-performing teams</h3>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            View All Programs <span className="text-xl">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300">
              <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">{item.desc}</p>
              <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
