import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeTogether: React.FC = () => {
  const [time, setTime] = useState<TimeElapsed>({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2020-12-07T00:00:00');

    const calculateTime = () => {
      const now = new Date();
      
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        // Get days in the previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      setTime({ years, months, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center p-3 md:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl min-w-[70px] md:min-w-[90px]">
      <span className="text-2xl md:text-4xl font-bold font-mono text-rose-300 drop-shadow-md">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="mt-8 mb-12 w-full max-w-4xl mx-auto px-4"
    >
      <div className="text-center mb-4">
        <p className="text-sm md:text-base text-rose-200/80 uppercase tracking-widest mb-2">
            O DESTINO NOS JUNTOU DESDE 07 DE DEZEMBRO DE 2020
        </p>
      </div>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3 justify-center">
        <TimeUnit value={time.years} label="Anos" />
        <TimeUnit value={time.months} label="Meses" />
        <TimeUnit value={time.days} label="Dias" />
        <TimeUnit value={time.hours} label="Horas" />
        <TimeUnit value={time.minutes} label="Min" />
        <TimeUnit value={time.seconds} label="Seg" />
      </div>
    </motion.div>
  );
};

export default TimeTogether;