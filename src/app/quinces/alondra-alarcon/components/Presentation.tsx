import { useEffect, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { anton, dancing, quickSand, whisper } from "./Fonts";
import { presentation } from "./Animations";

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

// Componente para partículas flotantes
const FloatingHeart = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute text-pink-300 text-xl"
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [-20, -100],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 3,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 2
    }}
  >
    💗
  </motion.div>
);

// Componente para una tarjeta de tiempo - Responsive
const TimeCard = ({ value, label, scopeRef, icon }: any) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    
    {/* Tarjeta principal - Responsive */}
    <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg border-2 border-yellow-300 min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
      {/* Decoración superior */}
      <div className={`${whisper.className} absolute -bottom-2  left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white flex items-center justify-center shadow-md px-1 sm rounded text-xl`}>
        {label}
      </div>
      
      {/* Número */}
      <div className="flex flex-col items-center py-4">
        <div className="relative overflow-hidden h-10 sm:h-12 md:h-16 w-16 lg:w-24 flex items-center justify-center">
          <span 
            className={`${anton.className} text-4xl md:text-5xl lg:text-6xl text-yellow-700 font-bold`}
            ref={scopeRef}
            style={{
              textShadow: '0 2px 8px rgba(217, 119, 6, 0.2)',
              letterSpacing: '-1px'
            }}
          >
            {value}
          </span>
        </div>
        
        {/* Separador decorativo */}
        <div className="w-10 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-1 sm:my-2" />
               
      </div>
      
      {/* Esquinas decorativas */}
      <div className="absolute top-0.5 left-0.5 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-yellow-400 rounded-tl-lg" />
      <div className="absolute top-0.5 right-0.5 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-yellow-400 rounded-tr-lg" />
      <div className="absolute bottom-0.5 left-0.5 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-yellow-400 rounded-bl-lg" />
      <div className="absolute bottom-0.5 right-0.5 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-yellow-400 rounded-br-lg" />
    </div>
  </motion.div>
);

// Separador decorativo entre tarjetas - Responsive
const TimeSeparator = () => (
  <div className="flex sm:flex-col items-center justify-center mx-1 sm:mx-2 gap-2 sm:gap-3 text-yellow-600">
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="text-xl sm:text-2xl md:text-3xl"
    >
      ✦
    </motion.div>
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 1, 0.5]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.75
      }}
      className="text-xl sm:text-2xl md:text-3xl hidden sm:block"
    >
      ✦
    </motion.div>
  </div>
);

export default function Presentation() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Jan 10, 2026 12:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
      } else {
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    countDownClock();
  }, []);

  const [scopeSeconds, animateSeconds] = useAnimate();
  const [scopeMinutes, animateMinutes] = useAnimate();
  const [scopeHours, animateHours] = useAnimate();
  const [scopeDays, animateDays] = useAnimate();

  useEffect(() => {
    animateSeconds(
      scopeSeconds.current,
      { 
        y: [20, 0], 
        opacity: [0, 1],
        scale: [0.8, 1.1, 1]
      },
      { duration: 0.5, ease: "easeOut" }
    );
  }, [seconds]);

  useEffect(() => {
    animateMinutes(
      scopeMinutes.current,
      { y: [20, 0], opacity: [0, 1] },
      { duration: 0.5, ease: "easeOut" }
    );
  }, [minutes]);

  useEffect(() => {
    animateHours(
      scopeHours.current,
      { y: [20, 0], opacity: [0, 1] },
      { duration: 0.5, ease: "easeOut" }
    );
  }, [hours]);

  useEffect(() => {
    animateDays(
      scopeDays.current,
      { y: [20, 0], opacity: [0, 1] },
      { duration: 0.5, ease: "easeOut" }
    );
  }, [days]);

  return (
    <section
      className="flex flex-col items-center justify-center relative overflow-hidden px-4 z-10 min-h-screen"      
    >     
      {/* Corazones flotantes - Solo en pantallas medianas y grandes */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}          
          style={{
            position: 'absolute',
            left: `${10 + i * 12}%`,
            bottom: '10%'
          }}
        >
          <FloatingHeart delay={i * 0.8} />
        </div>
      ))}

      {/* Título - Responsive */}
      <motion.div
        className="relative mb-6 sm:mb-8 md:mb-12"
        variants={presentation.text01}
        initial="hidden"
        whileInView="visible"
      >        
        <h1 
          className={`${dancing.className} text-yellow-600 text-6xl relative z-10 text-center`}
          style={{
            textShadow: '0 2px 12px rgba(217, 119, 6, 0.3)'
          }}
        >
          Sólo Faltan
        </h1>
      </motion.div>

      {/* Contador principal - Diseño responsivo en grid */}
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-10 sm:gap-3 md:gap-4 ">
        <motion.div
          className="flex justify-center"
          variants={presentation.timer01}
          initial="hidden"
          whileInView="visible"
        >
          <TimeCard 
            value={formatNumber(days)} 
            label="Días" 
            scopeRef={scopeDays}
            
          />
        </motion.div>

        <div className="hidden sm:flex">
          <TimeSeparator />
        </div>

        <motion.div
          className="flex justify-center"
          variants={presentation.timer02}
          initial="hidden"
          whileInView="visible"
        >
          <TimeCard 
            value={formatNumber(hours)} 
            label="Horas" 
            scopeRef={scopeHours}            
          />
        </motion.div>

       
      </div>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-10 sm:gap-3 md:gap-4 mt-10">
                
        <motion.div
          className="flex justify-center"
          variants={presentation.timer01}
          initial="hidden"
          whileInView="visible"
        >
          <TimeCard 
            value={formatNumber(minutes)} 
            label="Min" 
            scopeRef={scopeMinutes}            
          />
        </motion.div>

        <div className="hidden sm:flex">
          <TimeSeparator />
        </div>

        <motion.div
          className="flex justify-center"
          variants={presentation.timer02}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <TimeCard 
              value={formatNumber(seconds)} 
              label="Seg" 
              scopeRef={scopeSeconds}              
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Texto descriptivo mejorado - Responsive */}
      <motion.div
        className="relative mt-8 sm:mt-12 md:mt-16 px-4 w-full max-w-2xl"
        variants={presentation.text02}
        initial="hidden"
        whileInView="visible"
      >
        {/* Líneas decorativas */}
        <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-yellow-200">
          <p className={`${quickSand.className} text-yellow-900 text-sm sm:text-base leading-relaxed text-center`}>
            <span className="text-yellow-700 font-semibold">Quince flores nuevas</span> que te harán feliz, 
            <span className="text-yellow-700 font-semibold"> quince primaveras</span> y una vida entera por vivir. 
            El comienzo de una nueva etapa, y por más que las primaveras sigan llegando, 
            ninguna será tan especial como esta.
          </p>
          
          <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-yellow-200">
            <p className={`${quickSand.className} text-yellow-800 text-xs sm:text-sm md:text-base text-center`}>
              Acompáñanos a celebrar los <span className="font-bold text-yellow-700">15 años</span> de nuestra princesa
            </p>
            <p className={`${dancing.className} text-yellow-600 text-2xl sm:text-3xl md:text-4xl text-center mt-2 sm:mt-3`}>
              Alondra Alarcón Clemente
            </p>           
          </div>
        </div>
        
      </motion.div>

      {/* Flores decorativas en las esquinas - Solo en pantallas grandes */}
      <motion.div
        className="absolute top-10 left-10 text-4xl sm:text-5xl md:text-6xl opacity-50 "
        animate={{
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute top-10 right-10 text-4xl sm:text-5xl md:text-6xl opacity-50"
        animate={{
          rotate: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🌸
      </motion.div>
    </section>
  );
}