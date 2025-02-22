import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const stats = [
    { label: "Children Supported", value: 3200 },
    { label: "Educational Modules", value: 85 },
    { label: "Specialist Educators", value: 25 },
    { label: "Lessons Completed", value: 64000 },
  ];

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <div className="text-center w-full text-white">
      <h2 className="text-3xl font-bold mb-5 lg:mb-16">
        Empowering children with special needs through technology
      </h2>
      <br />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-4xl font-bold mb-2">
              {/* Conditionally render the CountUp component once */}
              {hasAnimated ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
              ) : (
                stat.value
              )}
              +
            </h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
