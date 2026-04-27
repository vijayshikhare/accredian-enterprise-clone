import React from 'react';

const stats = [
  { label: "Active Learners", value: "50,000+" },
  { label: "Corporate Partners", value: "200+" },
  { label: "Expert Mentors", value: "500+" },
  { label: "Success Stories", value: "10,000+" },
];

const Stats = () => {
  return (
    <section className="relative py-20 bg-[#0F172A] z-20 overflow-hidden mt-16 rounded-t-[3rem] lg:rounded-t-[5rem]">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#0F172A]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-2">
              <div className="h-14 lg:h-20 flex items-center justify-center mb-1">
                <p
                  className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter"
                  style={{ color: '#ffffff', WebkitTextFillColor: '#ffffff', lineHeight: '1' }}
                >
                  {stat.value}
                </p>
              </div>

              <div className="flex flex-col items-center space-y-3">
                <p
                  className="font-bold tracking-[0.15em] uppercase text-[10px] lg:text-xs max-w-[140px] leading-tight"
                  style={{ color: '#60A5FA' }}
                >
                  {stat.label}
                </p>
                <div className="h-1 w-10 bg-[#1A73E8] rounded-full shadow-[0_0_15px_rgba(26,115,232,0.4)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
