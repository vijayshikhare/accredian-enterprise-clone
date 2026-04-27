"use client";
import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-bold">
              Connect With Us
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Ready to <span className="text-primary italic">Empower</span> Your Team?
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Join the ranks of world-class organizations using our platform to build future-ready data and AI capabilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                { title: 'Customized Roadmap', desc: 'Tailored learning paths for your specific business goals.' },
                { title: 'ROI Focused', desc: 'Clear tracking of skill development and business impact.' },
                { title: 'Expert Guidance', desc: 'Direct access to world-class mentors from top firms.' },
                { title: 'Global Scale', desc: 'Built for enterprise teams across multiple regions.' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={18} />
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl animate-bounce">
                  ✓
                </div>
                <h3 className="text-3xl font-black text-slate-900">Success!</h3>
                <p className="text-slate-600 font-medium">Your request has been captured. Our enterprise consultant will contact you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium"
                    placeholder="Enter your organization"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium resize-none"
                    placeholder="Tell us about your team's needs..."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={18} /> Something went wrong. Please try again.
                  </div>
                )}

                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-50 hover:-translate-y-1 active:scale-95"
                >
                  {status === 'submitting' ? (
                    <> <Loader2 className="animate-spin" /> Processing...</>
                  ) : (
                    <> <Send size={20} /> Request a Demo</>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
