import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let target = new Date();
      target.setMonth(4);
      target.setDate(15);
      target.setHours(19, 0, 0, 0);
      if (now > target) {
        target.setFullYear(now.getFullYear() + 1);
      } else {
        target.setFullYear(now.getFullYear());
      }

      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number): string => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <section className="py-16 bg-gradient-to-b from-rose-100 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Celebrando nuestro día especial
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2">
            <span className="text-2xl md:text-4xl font-bold text-rose-500">
              {formatTime(timeLeft.days)}
            </span>
            <span className="text-gray-500 text-sm mt-1">Dias</span>
          </div>

          <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2">
            <span className="text-2xl md:text-4xl font-bold text-rose-500">
              {formatTime(timeLeft.hours)}
            </span>
            <span className="text-gray-500 text-sm mt-1">Horas</span>
          </div>

          <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2">
            <span className="text-2xl md:text-4xl font-bold text-rose-500">
              {formatTime(timeLeft.minutes)}
            </span>
            <span className="text-gray-500 text-sm mt-1">Minutos</span>
          </div>

          <div className="w-20 h-24 md:w-28 md:h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-2">
            <span className="text-2xl md:text-4xl font-bold text-rose-500">
              {formatTime(timeLeft.seconds)}
            </span>
            <span className="text-gray-500 text-sm mt-1">Segundos</span>
          </div>
        </div>

        <p className="mt-8 text-gray-600 max-w-md mx-auto">
          Contando los minutos para nuestra celebración de aniversario: cada
          segundo contigo es un regalo.
        </p>
      </div>
    </section>
  );
};

export default Countdown;
