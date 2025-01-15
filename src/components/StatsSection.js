import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const statsData = [
    { value: 2600, label: 'Associates' },
    { value: 40, label: 'Locations Worldwide', suffix: '+' },
    { value: 30, label: 'Years In Business', suffix: '+' },
    { value: 1, label: 'Annual Revenue', suffix: 'B+' },
    { value: 70, label: 'Fortune 100 Clients' },
    { value: 3000, label: 'Projects A Year', suffix: '+' },
    { value: 94, label: 'Client Satisfaction (2024)', suffix: '%' },
    { value: 100, label: 'SMPTE ST 2110/ST 2022 Projects Delivered', suffix: '+' },
  ];

  return (
    <div className="bg-[#d8def8] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-axioforma leading-relaxed tracking-tight text-[#00abfa] sm:text-4xl">
            GLOBAL PERFORMANCE, <br /> LOCAL PRESENCE
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center relative">
              {/* staright line btn */}
              {index !== 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#080e2b] mx-auto hidden md:block"></div>
              )}
              {/* Countup animation */}
              <div className="text-4xl font-bold text-blue-600">
                <CountUp start={0} end={stat.value} suffix={stat.suffix || ''} duration={2} />
              </div>
              <div className="mt-2 text-lg text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
