import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-01T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        // Se a data já passou, deixa tudo zerado
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // Calcula imediatamente
    calculateTimeLeft();

    // Atualiza a cada segundo
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 bg-primary-50">
      <div data-aos="fade-up" className="max-w-[1200px] px-4  mx-auto text-center">
        <h2 className="font-cormorant text-5xl  mb-4 text-primary">Contagem Regressiva</h2>
        <p className="text-lg text-muted-foreground mb-20">Faltam apenas alguns momentos para o nosso grande dia!</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 relative">
          <div className="absolute h-[120px] -top-[100px] lg:h-[200px] lg:-top-[170px] right-0">
            <img src="/gatos.png" className="w-full h-full" alt="gatos" />
          </div>
          {timeUnits.map((unit) => (
            <div key={unit.label} className="bg-background rounded-2xl p-6 shadow-lg border border-primary-200">
              <div className="font-cormorant text-5xl md:text-6xl font-bold text-primary mb-2">{String(unit.value).padStart(2, "0")}</div>
              <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">{unit.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
