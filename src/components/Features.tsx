import React from 'react';
import { Target, Users, BarChart3, Award, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Target className="text-primary group-hover:text-white transition-colors duration-500" size={28} />,
    title: "Precision Learning",
    description: "Tailored learning paths designed to fill specific skill gaps in your unique business environment."
  },
  {
    icon: <Zap className="text-primary group-hover:text-white transition-colors duration-500" size={28} />,
    title: "Accelerated Upskilling",
    description: "Industry-standard methodologies that reduce time-to-competency for your engineering teams."
  },
  {
    icon: <BarChart3 className="text-primary group-hover:text-white transition-colors duration-500" size={28} />,
    title: "ROI Dashboards",
    description: "Track progress and ROI with advanced analytics and employee performance metrics."
  },
  {
    icon: <ShieldCheck className="text-primary group-hover:text-white transition-colors duration-500" size={28} />,
    title: "Enterprise Grade",
    description: "Robust platform security and single sign-on (SSO) integration for global scale."
  }
];

const Features = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1 sticky top-32">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 leading-tight">
              Designed for the modern <span className="text-primary">Enterprise</span>.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              We go beyond traditional training. We build technical excellence that translates directly into business value.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-700">Join 500+ CIOs who trust us</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <div className="group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
