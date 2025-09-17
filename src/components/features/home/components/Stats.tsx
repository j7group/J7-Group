import React, { useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface StatItem {
  number: string;
  label: string;
  description: string;
}

interface StatsProps {
  stats: StatItem[];
}

const CounterStat: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // Extract numeric value from stat.number (handles numbers with + or other suffixes)
  const getNumericValue = (value: string): number => {
    const match = value.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };
  
  const targetNumber = getNumericValue(stat.number);
  const suffix = stat.number.replace(/\d+/, '');
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100
  });
  
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="text-left"
    >
      <div className="mb-3 sm:mb-4 md:mb-6">
        <motion.div 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#51301F] mb-2 sm:mb-3 md:mb-4 leading-none"
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        >
          {displayValue}{suffix}
        </motion.div>
        <motion.h3 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#51301F] mb-2 sm:mb-3 md:mb-4 tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.2 + 0.4,
            ease: "easeOut"
          }}
        >
          {stat.label}
        </motion.h3>
        <motion.p 
          className="text-[#51301F] text-xs sm:text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2 + 0.6,
            ease: "easeOut"
          }}
        >
          {stat.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC<StatsProps> = ({ stats }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  
  return (
    <motion.div 
      ref={containerRef}
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16"
          initial={{ y: 40 }}
          animate={isInView ? { y: 0 } : { y: 40 }}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1]
          }}
        >
          {stats.map((stat, index) => (
            <CounterStat
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;