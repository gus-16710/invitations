"use client";

import React, { useEffect, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReactCanvasConfetti from "react-canvas-confetti";
import { Button } from "@nextui-org/react";
import {
  LuHeart,
  LuCalendar,
  LuUsers,
  LuImage,
  LuMusic,
  LuShare2,
  LuSparkles,
  LuGift,
  LuMapPin,
  LuClock,
  LuShoppingCart,
  LuCrown,
  LuCake,
  LuBaby,
  LuGraduationCap,
  LuBriefcase,
} from "react-icons/lu";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoIosArrowUp } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const ActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");

  const messages = [
    "🎉 ¡Fiesta para XV años! ¡Cotiza gratis!",
    "💍 ¿Boda? Invitación web exclusiva",
    "👶 Invitaciones digitales para bautizos",
    "🎂 Invitaciones web para cumpleaños",
    "✨ Invitaciones animadas - ¡Sorprende!",
    "💝 Primera comunión - 100% personalizada",
    "🚀 Tu evento merece invitaciones premium",
    "🎨 Diseños exclusivos para XV años",
    "💬 ¿Necesitas una invitación? ¡Escríbenos!",
    "📋 Cotización inmediata para tu evento",
    "💎 Invitaciones de lujo para bodas",
    "🖼️ Galería de fotos integrada",
    "📍 Mapa interactivo para tu evento",
    "🎵 Invitaciones con música incluida",
    "📅 Cuenta regresiva para tu evento",
    "👗 Código de vestimenta interactivo",
    "🛍️ Mesa de regalos virtual incluida",
    "📱 100% responsivos para móviles",
    "💖 Temas personalizados para XV años",
    "🎭 Invitaciones para eventos corporativos",
    "🎁 Presupuesto personalizado",
    "👰 Invitación de ensueño para novias",
    "⚡ Invitaciones web de carga rápida",
    "🌐 Dominio personalizado incluido",
  ];

  // Función para obtener un mensaje aleatorio
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Controlar la aparición intermitente de la burbuja
    const bubbleInterval = setInterval(() => {
      // Cambiar el mensaje cada vez que aparece la burbuja
      setCurrentMessage(getRandomMessage());
      setShowBubble(true);

      // Ocultar después de 3 segundos
      setTimeout(() => {
        setShowBubble(false);
      }, 5000);
    }, 15000); // Mostrar cada 15 segundos

    // Mostrar la burbuja inicialmente después de 2 segundos con mensaje aleatorio
    const initialBubble = setTimeout(() => {
      setCurrentMessage(getRandomMessage());
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3000);
    }, 10000);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(bubbleInterval);
      clearTimeout(initialBubble);
    };
  }, []);

  return (
    <>
      {/* Botón de WhatsApp con burbuja */}
      <motion.div
        className="fixed right-0 z-10"
        initial={{ bottom: "90px" }}
        animate={{
          bottom: isVisible ? "75px" : "20px",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ marginRight: "20px" }}
      >
        {/* Burbuja flotante */}
        <motion.div
          className="absolute  top-0.5 transform -translate-y-1/2 z-20"
          style={{ right: "50px" }}
          initial={{ opacity: 0, x: 10, scale: 0.8 }}
          animate={{
            opacity: showBubble ? 1 : 0,
            x: showBubble ? 0 : 10,
            scale: showBubble ? 1 : 0.8,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg border border-gray-200 relative whitespace-nowrap">
            <span className="text-sm font-medium">{currentMessage}</span>

            {/* Puntito de la burbuja */}
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2">
              <div className="w-2 h-2 bg-white rotate-45 border-r border-b border-gray-200 "></div>
            </div>
          </div>
        </motion.div>

        <Button
          color="success"
          className="rounded-full p-0 shadow-lg hover:shadow-xl transition-shadow relative z-10 h-11 w-11"
          isIconOnly
          onClick={() =>
            window.open(
              "https://wa.me/5212281700216?text=Hola! Quiero cotizar una invitación digital.",
              "_blank"
            )
          }
        >
          <FaWhatsapp size={28} color="white" />
        </Button>
      </motion.div>

      {/* Botón de scroll to top */}
      <motion.button
        type="button"
        className="bg-gray-800/50 p-3 rounded-full text-zinc-100 fixed bottom-0 right-0 font-medium shadow-md mb-5 mr-5 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg z-10 h-11 w-11 flex justify-center items-center"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <IoIosArrowUp size={24} />
      </motion.button>
    </>
  );
};

const invitations = [
  {
    key: "diana-ernesto",
    img: "/img/bodas/diana-ernesto/diana-ernesto-preview.jpg",
    url: "/bodas/diana-ernesto",
    title: "Diana & Ernesto",
    category: "Boda",
    description: "Invitación elegante con detalles dorados",
  },
  {
    key: "sayuri",
    img: "/img/quinces/sayuri/sayuri-preview.jpg",
    url: "/quinces/sayuri",
    title: "Sayuri",
    category: "XV Años",
    description: "Celebración rosa y dorada",
  },
  {
    key: "annette",
    img: "/img/bautizos/annette/annette-preview.jpg",
    url: "/bautizos/annette",
    title: "Annette",
    category: "Bautizo",
    description: "Invitación rosa con detalles dorados",
  },
  {
    key: "jannia",
    img: "/img/festejos/jannia/jannia-preview.jpg",
    url: "/festejos/jannia",
    title: "Jannia",
    category: "Cumpleaños",
    description: "Temática Fiesta Merlina",
  },
  {
    key: "daniela",
    img: "/img/quinces/daniela/daniela-preview.jpg",
    url: "/quinces/daniela",
    title: "Daniela",
    category: "XV Años",
    description: "Celebración en tonos claros y decoración floral",
  },
  {
    key: "mateo-bautizo",
    img: "/img/bautizos/mateo-mendoza/mateo-preview.jpg",
    url: "/bautizos/mateo-mendoza",
    title: "Mateo",
    category: "Bautizo",
    description: "Invitación celestial en azul",
  },
  {
    key: "maria-pedro",
    img: "/img/bodas/example/maria-pedro-preview.jpg",
    url: "/bodas/maria-pedro",
    title: "María & Pedro",
    category: "Boda",
    description: "Boda con temática de periódico",
  },
  {
    key: "camila",
    img: "/img/quinces/camila/camila-preview.jpg",
    url: "/quinces/camila",
    title: "Camila",
    category: "XV Años",
    description: "Invitación floral y elegante",
  },
  {
    key: "isabel-alan",
    img: "/img/bodas/isabel-alan/isabel-alan-preview.jpg",
    url: "/bodas/isabel-alan",
    title: "Isabel & Alan",
    category: "Boda",
    description: "Boda con detalles claros y elegantes",
  },
  {
    key: "cobaev-66",
    img: "/img/escolar/cobaev-66/cobaev-66-preview.jpg",
    url: "/escolar/cobaev-66",
    title: "COBAEV 66",
    category: "Graduación",
    description: "Graduación 2025 temática dorada-azul",
  },
  {
    key: "sarang",
    img: "/img/quinces/sarang/sarang-preview.jpg",
    url: "/quinces/sarang",
    title: "Sarang",
    category: "XV Años",
    description: "Invitación con tonos morados y detalles brillantes",
  },
  {
    key: "esperanza-osorio",
    img: "/img/escolar/jardin-esperanza-osorio/esperanza-osorio-preview.jpg",
    url: "/escolar/jardin-esperanza-osorio",
    title: "Esperanza Osorio",
    category: "Graduación",
    description: "Graduación 2025 Jardín de Niños",
  },
  {
    key: "alondra",
    img: "/img/quinces/alondra/alondra-preview.jpg",
    url: "/quinces/alondra-zuriel",
    title: "Alondra Zuriel",
    category: "XV Años",
    description: "Invitación con tonos claros y detalles florales en rojo",
  },
];

const CarouselInvitations = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <motion.div
        className="w-full flex flex-col items-center justify-center relative px-4 mt-14"
        id="slider-invitations"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Título */}
        <div className="flex items-center justify-between w-full max-w-4xl mb-6">
          <div className="w-full text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Nuestras Invitaciones
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Descubre ejemplos reales de invitaciones digitales que hemos
              creado
            </p>
          </div>

          {/* Controles de navegación - ocultos en móvil */}
          <div className="flex space-x-2">
            <button
              ref={prevRef}
              className="button-prev w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="button-next w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-4xl w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={800}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="w-full"
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {invitations.map((invitation) => (
              <SwiperSlide key={invitation.key}>
                <div className="w-full flex items-center justify-center py-4 sm:py-8 px-2">
                  <div
                    className="relative group cursor-pointer w-full max-w-full mx-auto"
                    onClick={() => {
                      window.open(
                        `https://invitaciones.unaideamas.com/${invitation.url}`,
                        "_blank"
                      );
                    }}
                  >
                    {/* Tarjeta con CSS Grid */}
                    <div className="relative transition-all duration-300 hover:scale-105 w-full grid grid-rows-[1fr_auto_auto] gap-3 min-h-[500px]">
                      {/* Imagen - ocupa el espacio disponible */}
                      <div className="relative w-full aspect-[8/16] rounded-3xl overflow-hidden group-hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                        <Image
                          src={invitation.img}
                          alt={invitation.title}
                          fill
                          className=""
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 200px, (max-width: 1024px) 220px, 240px"
                        />
                      </div>

                      {/* Información - altura automática pero consistente */}
                      <div className="text-center w-full px-1 min-h-[80px] flex flex-col justify-center">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 line-clamp-1">
                          {invitation.title}
                        </h3>

                        <div className="flex items-center justify-center mb-2">
                          <span className="text-xs sm:text-sm px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                            {invitation.category}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {invitation.description}
                        </p>
                      </div>

                      {/* Botón - posición fija en el grid */}
                      <div className="flex justify-center">
                        <button className="text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:transform sm:translate-y-2 sm:group-hover:translate-y-0 transition-all duration-300">
                          Ver Invitación
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginación - más visible en móvil */}
          <div className="custom-pagination mt-4 sm:mt-6 flex space-x-2 z-10 justify-center" />
        </div>

        <style jsx>{`
          .custom-bullet {
            width: 10px;
            height: 10px;
            background: rgba(107, 114, 128, 0.4);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .custom-bullet-active {
            width: 28px;
            background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%);
            border-radius: 14px;
          }

          @media (max-width: 640px) {
            .custom-bullet {
              width: 12px;
              height: 12px;
            }
            .custom-bullet-active {
              width: 32px;
            }
          }
        `}</style>
      </motion.div>
      <ActionButtons />
    </>
  );
};

export default function HomePage() {
  // Confetti Effect
  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
    const timer = setInterval(() => fire(), 10000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <LuHeart className="w-8 h-8" />,
      title: "Diseños Elegantes",
      description:
        "Plantillas únicas desarrolladas por nuestro equipo para cada ocasión especial",
    },
    {
      icon: <LuCalendar className="w-8 h-8" />,
      title: "Personalización Completa",
      description:
        "Nuestro equipo adapta fechas, lugares y todos los detalles por ti",
    },
    {
      icon: <LuUsers className="w-8 h-8" />,
      title: "Gestión de Invitados",
      description:
        "Sistema integrado para confirmaciones y lista de asistencia",
    },
    {
      icon: <LuMapPin className="w-8 h-8" />,
      title: "Ubicación con Maps",
      description:
        "Integración con Google Maps para fácil acceso de tus invitados",
    },
    {
      icon: <LuClock className="w-8 h-8" />,
      title: "Cuenta Regresiva",
      description: "Timer interactivo que genera expectativa para tu evento",
    },
    {
      icon: <LuShoppingCart className="w-8 h-8" />,
      title: "Mesa de Regalos",
      description: "Sección integrada para tus listas de regalos preferidas",
    },
    {
      icon: <LuImage className="w-8 h-8" />,
      title: "Galería Multimedia",
      description: "Comparte fotos y videos con tus invitados",
    },
    {
      icon: <LuMusic className="w-8 h-8" />,
      title: "Audio Integrado",
      description: "Añade música y efectos sonoros personalizados",
    },
    {
      icon: <LuShare2 className="w-8 h-8" />,
      title: "Compartir Fácil",
      description: "Envía por WhatsApp, redes sociales o enlace único",
    },
  ];

  const eventTypes = [
    {
      name: "Bodas",
      color: "from-pink-500 to-rose-500",
      image: "/img/events/wedding.jpg",
      route: "/bodas",
      icon: <LuHeart className="w-6 h-6" />,
    },
    {
      name: "XV Años",
      color: "from-purple-500 to-pink-500",
      image: "/img/events/quince.jpg",
      route: "/quinces",
      icon: <LuCrown className="w-6 h-6" />,
    },
    {
      name: "Cumpleaños",
      color: "from-blue-500 to-cyan-500",
      image: "/img/events/birthday.jpg",
      route: "/cumpleanos",
      icon: <LuCake className="w-6 h-6" />,
    },
    {
      name: "Bautizos",
      color: "from-green-500 to-emerald-500",
      image: "/img/events/baptism.jpg",
      route: "/bautizos",
      icon: <LuBaby className="w-6 h-6" />,
    },
    {
      name: "Graduaciones",
      color: "from-yellow-500 to-orange-500",
      image: "/img/events/graduation.jpg",
      route: "/graduaciones",
      icon: <LuGraduationCap className="w-6 h-6" />,
    },
    {
      name: "Eventos Corporativos",
      color: "from-indigo-500 to-purple-500",
      image: "/img/events/corporate.jpg",
      route: "/corporativos",
      icon: <LuBriefcase className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-60 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hidden md:flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <LuSparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">
                  Invitaciones Digitales Profesionales para Momentos
                  Inolvidables
                </span>
              </div>
            </div>

            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Invitaciones Digitales
                <br />
                <span className="text-2xl md:text-6xl">
                  Que Inspiran Emociones
                </span>
                {/* Badge de oferta */}
              </h1>
               <motion.span
                className="absolute -top-5 -right-2 md:-top-5 md:-right-14 bg-red-500 text-white px-2 py-1 rounded-full font-bold rotate-45 shadow-lg"
                animate={{
                  rotate: [20, 5, 20],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
               🔥 499 MXN
              </motion.span>
            </div>

            <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Invitaciones digitales únicas y personalizadas para cada ocasión
              especial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                onPress={() => {
                  const element = document.getElementById("slider-invitations");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <LuSparkles className="w-5 h-5 mr-2" />
                Ver Ejemplos
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-purple-600 text-purple-600 font-semibold px-8 py-6 text-lg rounded-2xl  hover:text-white transition-all duration-300 w-full"
                onPress={() => {
                  window.open(
                    "https://wa.me/5212281700216?text=Hola! Me interesa una invitación digital, me podria proporcionar más información.",
                    "_blank"
                  );
                }}
              >
                <LuGift className="w-5 h-5 mr-2" />
                Solicitar Cotización
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { number: "100%", label: "Personalizado" },
                { number: "3-5", label: "Días de Entrega" },
                { number: "24/7", label: "Soporte" },
                { number: "4.9★", label: "Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Event Types Section */}
      <section className="pt-20 pb-14 md:pb-0 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Para Cada{" "}
              <span className="text-purple-600">Ocasión Especial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diseños únicos desarrollados por nuestro equipo para todo tipo de
              celebraciones
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => {
              const icon = event.icon;

              const customizedIcon = React.cloneElement(icon, {
                className: "w-32 h-32 mb-2 opacity-10 absolute top-0 right-0", // Nuevas dimensiones y clases
                style: { filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }, // Estilos adicionales
              });

              return (
                <motion.div
                  key={event.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3, ease: "easeOut" }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div
                    className={`relative bg-gradient-to-br ${event.color} rounded-2xl p-6 text-center text-white shadow-lg transition-all duration-300 group-hover:shadow-xl h-32 flex flex-col items-center justify-center`}
                  >
                    <div className="mb-2 opacity-90">{event.icon}</div>
                    <div className="text-lg font-semibold mb-1">
                      {event.name}
                    </div>

                    {customizedIcon}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <CarouselInvitations />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Características <span className="text-purple-600">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnología avanzada y diseño profesional en cada invitación
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-purple-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ¿Listo para tu{" "}
              <span className="text-purple-600">evento perfecto?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de desarrolladores creará la invitación digital
              ideal para tu ocasión especial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                onPress={() => {
                  window.open(
                    "https://wa.me/5212281700216?text=Hola! Me interesa una invitación digital, me podria proporcionar más información.",
                    "_blank"
                  );
                }}
              >
                Solicitar Cotización
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-gray-800 text-gray-800 font-semibold px-8 py-6 text-lg rounded-2xl hover:bg-gray-800 hover:text-white transition-all duration-300"
                onPress={() => {
                  const element = document.getElementById("slider-invitations");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Ejemplos Completos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Confetti Canvas */}
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      />

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
