import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import {
  animation01,
  animation03,
  animation04,
  animation06,
} from "./Animations";
import { aref, clicker, greatVibes,  yaseva } from "./Fonts";
import NumberFlow from "@number-flow/react";

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Presentation() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Apr 26, 2025 14:00:00");

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

  return (
    <section
      className="relative flex justify-center items-center flex-col px-7 py-10"
      style={{ height: "100svh" }}
    >
      <Card
        className="border-none bg-background/5 h-full w-full"
        shadow="sm"
        radius="lg"
        isBlurred
      >
        <CardBody className="flex items-center justify-center flex-col">
          <motion.h1
            className={`${greatVibes.className} text-5xl text-golden-2 mb-2 p-2 text-center`}
            variants={animation01}
            initial="hidden"
            whileInView="visible"
            custom={1}            
          >
            Sólo Faltan
          </motion.h1>
          <motion.div
            variants={animation06}
            initial="hidden"
            whileInView="visible"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              id="Capa_1"
              x="0px"
              y="0px"
              width={180}
              viewBox="0 0 400 84.1"
              xmlSpace="preserve"
              fill="rgb(220 140 8)"
            >
              <g>
                <g>
                  <g>
                    <path d="M392,14.6c3.7,0,5.7,1.6,6.7,2.9c1.5,2.1,1.6,4.8,1.1,6.5c-0.8,2.6-3.3,4.6-6.1,4.9c-1.8,0.1-3.4-0.4-4.6-1.6    c-1.3-1.3-1.8-3.3-1.3-5.1c0.5-1.5,1.6-2.6,3-2.9c0.9-0.2,1.8,0.1,2.5,0.6c0.7,0.5,1.1,1.2,1.1,2c0.1,0.6-0.4,1.2-1,1.2    c-0.6,0-1.2-0.4-1.2-1c0-0.2-0.2-0.3-0.2-0.4c-0.2-0.2-0.5-0.2-0.7-0.2c-0.5,0.1-1.1,0.6-1.3,1.3c-0.3,0.9,0,2.1,0.7,2.8    c0.7,0.7,1.7,1,2.8,0.9c1.8-0.1,3.5-1.5,4.1-3.3c0.3-1,0.4-3-0.8-4.5c-1-1.3-2.6-2-4.8-2c-0.6,0-1.1-0.5-1.1-1.1    S391.3,14.6,392,14.6z"></path>
                  </g>
                  <g>
                    <path d="M393.1,2.4c0.2,0,0.3,0,0.5,0c2.7,0.2,5.2,2.2,6.1,4.9c0.6,1.7,0.4,4.5-1.1,6.5c-1,1.3-2.9,2.9-6.7,2.9    c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c2.2,0,3.9-0.7,4.8-2c1.1-1.5,1.1-3.5,0.8-4.5c-0.6-1.8-2.3-3.1-4.1-3.3    c-1.1-0.1-2.1,0.3-2.8,0.9c-0.7,0.7-1,1.8-0.7,2.8c0.2,0.7,0.7,1.2,1.3,1.3c0.2,0,0.5,0,0.7-0.2c0.1-0.1,0.2-0.2,0.2-0.4    c0.1-0.6,0.6-1.1,1.2-1c0.6,0.1,1.1,0.6,1,1.2c-0.1,0.8-0.5,1.5-1.1,2c-0.7,0.6-1.7,0.8-2.5,0.6c-1.4-0.3-2.6-1.4-3-2.9    c-0.5-1.8,0-3.8,1.3-5.1C390.1,3,391.6,2.4,393.1,2.4z"></path>
                  </g>
                  <g>
                    <path d="M8,14.6c0.6,0,1.1,0.5,1.1,1.1S8.7,16.8,8,16.8c-2.2,0-3.9,0.7-4.8,2c-1.1,1.5-1.1,3.5-0.8,4.5c0.6,1.8,2.3,3.1,4.1,3.3    c1.1,0.1,2.1-0.3,2.8-0.9c0.7-0.7,1-1.8,0.7-2.8c-0.2-0.7-0.7-1.2-1.3-1.3c-0.2,0-0.5,0-0.7,0.2C8,21.9,7.8,22,7.8,22.2    c-0.1,0.6-0.6,1.1-1.2,1c-0.6-0.1-1.1-0.6-1-1.2c0.1-0.8,0.5-1.5,1.1-2c0.7-0.6,1.7-0.8,2.5-0.6c1.4,0.3,2.6,1.4,3,2.9    c0.5,1.8,0,3.8-1.3,5.1c-1.1,1.1-2.8,1.7-4.6,1.6c-2.7-0.2-5.2-2.2-6.1-4.9c-0.6-1.7-0.4-4.5,1.1-6.5C2.4,16.2,4.3,14.6,8,14.6z"></path>
                  </g>
                  <g>
                    <path d="M6.9,2.4C8.5,2.4,9.9,3,11,4c1.3,1.3,1.8,3.3,1.3,5.1c-0.5,1.5-1.6,2.6-3,2.9c-0.9,0.2-1.8-0.1-2.5-0.6    c-0.7-0.5-1.1-1.2-1.1-2C5.5,8.7,6,8.2,6.6,8.1c0.6-0.1,1.2,0.4,1.2,1c0,0.2,0.2,0.3,0.2,0.4c0.2,0.2,0.5,0.2,0.7,0.2    c0.5-0.1,1.1-0.6,1.3-1.3c0.3-0.9,0-2.1-0.7-2.8C8.7,5,7.7,4.6,6.6,4.7C4.8,4.8,3,6.2,2.5,8c-0.3,1-0.4,3,0.8,4.5    c1,1.3,2.6,2,4.8,2c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1c-3.7,0-5.7-1.6-6.7-2.9C-0.1,11.7-0.3,9,0.3,7.3    c0.9-2.6,3.4-4.6,6.1-4.9C6.6,2.4,6.7,2.4,6.9,2.4z"></path>
                  </g>
                </g>
                <g>
                  <path d="M304.1,5.9c0.1,0,0.2,0,0.2,0c3.9,0,7.9,0.3,11,2.7c1.9,1.5,3.1,4,3.1,6.4c0,1.9-0.7,3.6-2.1,4.7   c-2.1,1.7-5.3,1.7-7.4-0.1c-2-1.8-2.6-5-1.2-7.3c0.3-0.5,1-0.7,1.6-0.4c0.5,0.3,0.7,1,0.4,1.6c-0.8,1.3-0.5,3.4,0.7,4.4   c1.2,1,3.2,1,4.4,0c1-0.9,1.2-2.1,1.2-2.9c0-1.8-0.9-3.6-2.3-4.6c-2.5-2-6.1-2.2-9.6-2.2c-4.5,0-9.7,0.3-14.1,2.4   c-1.5,0.8-3.1,1.9-4.3,3.2c2,1.9,3.3,4.2,3.5,6.7c0.2,1.9-0.5,4-1.7,5.2c-0.9,0.9-1.9,1.3-3.1,1.2c-2.7-0.2-4.1-3.2-4.2-5.8   c0-2.4,0.8-4.8,2.2-7c-2.1-1.3-4.7-1.9-7.1-1.7c-2.6,0.3-5.2,1.4-7.5,3.3c0.9,2,1.4,4.3,1.6,6.7c0.2,2.7-0.2,4.7-1.1,6.2   c-1.2,2-3.9,3.4-6.3,2.4c-1.9-0.7-3.1-2.8-3.1-5c0-2,0.9-3.8,1.7-5.2c1.2-2.2,2.8-4.1,4.4-5.7c-0.8-1.3-1.7-2.5-2.8-3.4   c-3.2-2.7-7.7-3.3-10.9-1.3c-3.1,1.9-4.5,5.7-5.8,9.5c-0.3,0.9-0.6,1.8-1,2.7c-1.6,4.2-4.8,9.9-10.7,13.6   c-5.3,3.4-11.9,4.2-17.2,2.2c-5.8-2.2-11-9.7-10.9-15.8c0.1-6.1,4.6-12.3,13-12.3c2.6,0,4.9,1,6.7,3c2.5,2.7,3.8,6.8,3.5,11.4   c0,0.6-0.6,1.1-1.2,1.1c-0.6,0-1.1-0.6-1.1-1.2c0.3-3.9-0.8-7.4-2.9-9.7c-1.4-1.5-3.1-2.3-5-2.3c-7.2,0-10.6,5.2-10.7,10.1   c-0.1,5,4.6,11.8,9.5,13.6c4.7,1.8,10.5,1,15.2-2c5.4-3.4,8.3-8.7,9.8-12.6c0.3-0.9,0.7-1.7,1-2.6c1.5-4.1,3-8.3,6.7-10.6   c3.9-2.4,9.6-1.8,13.5,1.5c1.2,1,2.2,2.2,3.1,3.7c2.5-1.9,5.4-3.1,8.3-3.5c3-0.3,6.2,0.4,8.8,2.1c1.4-1.5,3.1-2.9,5.2-3.9   C293.9,6.3,299.4,5.9,304.1,5.9z M284.9,24.7c0.4,0,0.8-0.2,1.1-0.5c0.7-0.7,1.2-2.2,1.1-3.4c-0.2-1.9-1.1-3.7-2.7-5.2   c-1.1,1.6-1.8,3.5-1.7,5.6c0,1.6,0.8,3.4,2.1,3.5C284.8,24.7,284.9,24.7,284.9,24.7z M263.8,29.3c1.1,0,2.2-0.8,2.7-1.7   c0.7-1.2,1-2.7,0.8-4.9c-0.1-1.9-0.5-3.6-1.1-5.3c-1.3,1.3-2.5,2.9-3.5,4.6c-0.6,1.1-1.4,2.6-1.4,4.1c0,1.1,0.5,2.5,1.7,2.9   C263.3,29.2,263.5,29.3,263.8,29.3z"></path>
                </g>
                <g>
                  <path d="M200.2,14.5H392c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1H200.2c-0.6,0-1.1-0.5-1.1-1.1   C199.1,15,199.6,14.5,200.2,14.5z"></path>
                </g>
                <g>
                  <path d="M95.9,5.9c4.7,0,10.1,0.3,14.9,2.7c2,1,3.8,2.3,5.2,3.9c2.6-1.7,5.8-2.4,8.8-2.1c2.9,0.3,5.8,1.5,8.3,3.5   c0.8-1.4,1.9-2.7,3.1-3.7c3.9-3.3,9.6-4,13.5-1.5c3.8,2.3,5.3,6.5,6.7,10.6c0.3,0.9,0.6,1.8,1,2.6c1.5,3.8,4.5,9.1,9.8,12.6   c4.7,3,10.5,3.8,15.2,2c4.9-1.8,9.6-8.6,9.5-13.6c-0.1-4.9-3.5-10.1-10.7-10.1c-1.9,0-3.6,0.8-5,2.3c-2.1,2.2-3.2,5.8-2.9,9.7   c0,0.6-0.4,1.2-1.1,1.2c-0.6,0-1.2-0.4-1.2-1.1c-0.3-4.5,1-8.7,3.5-11.4c1.8-1.9,4.1-3,6.7-3c8.3,0,12.8,6.2,13,12.3   c0.1,6.1-5.1,13.6-10.9,15.8c-5.3,2-11.9,1.1-17.2-2.2c-5.9-3.7-9.1-9.5-10.7-13.6c-0.3-0.9-0.7-1.8-1-2.7   c-1.3-3.7-2.7-7.5-5.8-9.5c-3.1-1.9-7.7-1.4-10.9,1.3c-1.1,0.9-2,2.1-2.8,3.4c1.7,1.6,3.2,3.5,4.4,5.7c0.8,1.4,1.7,3.2,1.7,5.2   c0,2.3-1.2,4.3-3.1,5c-2.4,1-5.1-0.5-6.3-2.4c-1-1.6-1.3-3.6-1.1-6.2c0.2-2.4,0.7-4.7,1.6-6.7c-2.3-1.8-4.9-3-7.5-3.3   c-2.4-0.3-5,0.3-7.1,1.7c1.4,2.1,2.2,4.5,2.2,7c0,2.6-1.5,5.5-4.2,5.8c-1.1,0.1-2.2-0.3-3.1-1.2c-1.2-1.2-1.9-3.3-1.7-5.2   c0.3-2.5,1.5-4.9,3.5-6.7c-1.3-1.4-2.8-2.5-4.3-3.2c-4.4-2.2-9.6-2.4-14.1-2.4c-3.5,0-7.1,0.3-9.6,2.2c-1.4,1.1-2.2,2.9-2.3,4.6   c0,0.9,0.2,2.1,1.2,2.9c1.2,1,3.2,1,4.4,0c1.2-1,1.5-3,0.7-4.4C89.9,13,90,12.4,90.6,12c0.5-0.3,1.2-0.1,1.6,0.4   c1.4,2.3,0.9,5.5-1.2,7.3c-2,1.8-5.3,1.8-7.4,0.1c-1.4-1.1-2.1-2.8-2.1-4.7c0-2.4,1.3-4.9,3.1-6.4c3.1-2.4,7.1-2.7,11-2.7   C95.8,5.9,95.8,5.9,95.9,5.9z M115.1,24.7c0,0,0.1,0,0.1,0c1.3-0.1,2.1-1.9,2.1-3.5c0-2-0.7-3.9-1.7-5.6c-1.5,1.5-2.5,3.3-2.7,5.2   c-0.1,1.2,0.3,2.6,1.1,3.4C114.3,24.6,114.6,24.7,115.1,24.7z M136.2,29.3c0.3,0,0.5,0,0.8-0.1c1.1-0.5,1.7-1.8,1.7-2.9   c0-1.5-0.7-3-1.4-4.1c-1-1.8-2.2-3.3-3.5-4.6c-0.6,1.6-1,3.4-1.1,5.3c-0.2,2.2,0.1,3.7,0.8,4.9C134,28.5,135.1,29.3,136.2,29.3z"></path>
                </g>
                <g>
                  <path d="M8,14.5h191.7c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1L8,16.8c-0.6,0-1.1-0.5-1.1-1.1C6.9,15,7.4,14.5,8,14.5z"></path>
                </g>
                <g>
                  <g>
                    <path d="M200,14.5L200,14.5c0.6,0,1,0.4,1.1,1c0.2,1.6,5.7,38.2,5.7,47.7c0,9.2-2.4,18.5-6.9,18.5c-4.5,0-6.9-9.3-6.9-18.5    c0-9.5,5.5-46.2,5.7-47.7C199,14.9,199.4,14.5,200,14.5z M200,79.4c1.9,0,4.6-6.3,4.6-16.2c0-6.7-2.9-28.1-4.6-39.7    c-1.7,11.6-4.6,33-4.6,39.7C195.4,73.1,198.1,79.4,200,79.4z"></path>
                  </g>
                  <g>
                    <path d="M200.5,17.8c0.6,0,1,0.4,1.1,1c4.3,27.5,14.9,45.9,31.5,54.5c0.4,0.2,0.7,0.7,0.6,1.2c-0.1,0.5-0.5,0.9-1,0.9    c-14,1.4-27-9.1-29-23.4c-0.1-0.6,0.3-1.2,1-1.3c0.6-0.1,1.2,0.3,1.3,1c1.7,11.8,11.3,20.7,22.5,21.5    c-15.2-9.7-25-27.8-29.1-54.1c-0.1-0.6,0.3-1.2,0.9-1.3C200.4,17.8,200.4,17.8,200.5,17.8z"></path>
                  </g>
                  <g>
                    <path d="M200.7,19c0.5,0,0.9,0.3,1.1,0.8c9.7,27,27.6,37.3,54.7,31.3c0.5-0.1,1.1,0.2,1.3,0.7c0.2,0.5,0,1.1-0.4,1.4    c-9.2,6.1-20.5,8.3-30.3,5.9c-9.3-2.3-17-8.5-22.3-18c-0.3-0.5-0.1-1.2,0.4-1.5c0.5-0.3,1.2-0.1,1.5,0.4c5,9,12.3,14.8,20.9,16.9    c7.1,1.7,15.1,0.8,22.4-2.3c-24.6,3.1-41.1-8.1-50.4-34c-0.2-0.6,0.1-1.2,0.7-1.5C200.4,19,200.6,19,200.7,19z"></path>
                  </g>
                  <g>
                    <path d="M199.5,17.8c0.1,0,0.1,0,0.2,0c0.6,0.1,1,0.7,0.9,1.3c-4.1,26.3-13.8,44.4-29.1,54.1c11.1-0.8,20.8-9.8,22.5-21.5    c0.1-0.6,0.6-1.1,1.3-1c0.6,0.1,1.1,0.7,1,1.3c-2,14.4-15,24.9-29,23.4c-0.5-0.1-0.9-0.4-1-0.9c-0.1-0.5,0.1-1,0.6-1.2    c16.6-8.6,27.2-27,31.5-54.5C198.5,18.2,199,17.8,199.5,17.8z"></path>
                  </g>
                  <g>
                    <path d="M199.3,19c0.1,0,0.3,0,0.4,0.1c0.6,0.2,0.9,0.9,0.7,1.5c-9.3,25.9-25.9,37.1-50.4,34c7.3,3.2,15.3,4.1,22.4,2.3    c8.6-2.1,15.8-7.9,20.9-16.9c0.3-0.5,1-0.7,1.5-0.4c0.5,0.3,0.7,1,0.4,1.5c-5.4,9.5-13.1,15.7-22.3,18c-9.7,2.4-21,0.2-30.3-5.9    c-0.5-0.3-0.6-0.9-0.4-1.4c0.2-0.5,0.8-0.8,1.3-0.7c27.1,5.9,45-4.3,54.7-31.3C198.4,19.3,198.8,19,199.3,19z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </motion.div>

          <motion.div
            className={`${clicker.className} my-5 mt-10 flex justify-evenly w-full text-3xl max-w-md text-yellow-500`}
            variants={animation03}
            initial="hidden"
            whileInView="visible"
          >
            <label className="flex flex-col items-center">
              <span className={`${yaseva.className} mb-2 golden-button`}>
                <NumberFlow
                  value={days}
                  transformTiming={{
                    duration: 500,
                  }}
                  format={{ minimumIntegerDigits: 2 }}
                />
              </span>
              <span className="text-2xl">Días</span>
            </label>
            <label className="mt-2">:</label>
            <label className="flex flex-col items-center">
              <span className={`${yaseva.className} mb-2 golden-button`}>
                <NumberFlow
                  value={hours}
                  transformTiming={{
                    duration: 500,
                  }}
                  format={{ minimumIntegerDigits: 2 }}
                />
              </span>
              <span className="text-2xl">Horas</span>
            </label>
            <label className="mt-2">:</label>
            <label className="flex flex-col items-center">
              <span className={`${yaseva.className} mb-2 golden-button`}>
                <NumberFlow
                  value={minutes}
                  transformTiming={{
                    duration: 500,
                  }}
                  format={{ minimumIntegerDigits: 2 }}
                />
              </span>
              <span className="text-2xl">Min</span>
            </label>
            <label className="mt-2">:</label>
            <label className="flex flex-col items-center">
              <span className={`${yaseva.className} mb-2 golden-button`}>
                <NumberFlow
                  value={seconds}
                  transformTiming={{
                    duration: 500,
                  }}
                  format={{ minimumIntegerDigits: 2 }}
                />
              </span>
              <span className="text-2xl">Seg</span>
            </label>
          </motion.div>

          <motion.p
            className={`${aref.className} text-base px-5 text-center max-w-md`}
            variants={animation04}
            initial="hidden"
            whileInView="visible"
            style={{ color: "#513704" }}
          >
            Son mis quince años una ilusión sin igual. Fábrica de lindos
            momentos que nunca voy a olvidar, por eso los quiero celebrar con
            mis familiares y amigos en esta noche tan especial.
          </motion.p>

          {/* <motion.div
            className="flex justify-center mt-5"
            variants={animation04}
            initial="hidden"
            whileInView="visible"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75px"
              viewBox="0 0 512 512"
              fill="rgb(220 140 8)"
            >
              <path d="M243.695 17.3L230.82 120.304l-60.279-44.479 37.455 68.473-64.96-8.193 55.495 34.894-53.898-12.508-2.237 8.428-35.41 133.324-.03.137c-4.45 19.17.229 36.572 10.108 49.285 8.021 10.321 19.14 17.723 31.36 22.074l-20.965 90.332c-10.725-2.312-19.535-3.777-26.486-3.84-11.275-.102-17.749 3.446-19.938 12.88L182.69 494.7c3.539-15.248-9.791-21.619-37.697-28.56l20.963-90.333c12.886 1.474 26.13-.275 37.875-6.008 14.47-7.063 26.335-20.624 30.783-39.793l.032-.139 23.269-116.904 18.522 89.986.033.137c4.573 19.14 16.528 32.625 31.043 39.594 11.782 5.656 25.036 7.318 37.912 5.76l21.553 90.195c-27.86 7.122-41.148 13.58-37.51 28.804l101.498-24.253c-2.251-9.42-8.747-12.924-20.022-12.748-6.95.108-15.751 1.63-26.46 4.011l-21.553-90.193c12.19-4.43 23.26-11.905 31.213-22.277 9.796-12.778 14.362-30.21 9.789-49.35l-.034-.139-38.572-141.502-39.107 9.346 49.74-32.906-72.568 19.896 31.601-83.687-61.449 71.984zM352.55 152.548l15.435 56.629-94.435-9.526-5.537-26.904zm-194.996 27.418l84.666 19.648-2.375 11.928-93.373 10.15zm119.799 38.156l16.285 1.643c3.526 21.284 13.407 75.46 24.455 85.855 10.904 10.26 44.84 2.596 44.84 2.596-36.87 2.87-57.908-53.902-68.108-88.332l78.23 7.892 13.382 49.088c3.409 14.325.234 25.28-6.577 34.164-6.819 8.895-17.778 15.455-29.746 18.315-11.967 2.86-24.709 1.964-34.812-2.887-10.088-4.843-17.872-13.178-21.309-27.488zm-41.19 11.926l-19.098 95.947c-3.343 14.335-11.073 22.722-21.13 27.631-10.072 4.916-22.806 5.897-34.791 3.115-11.986-2.781-22.989-9.27-29.866-18.119-6.867-8.838-10.114-19.771-6.8-34.115l17.043-64.172 19.427-2.111c-7.946 22.99-22.686 68.977-18.386 82.308 4.595 14.25 38.013 23.924 38.013 23.924-35.245-20.62-26.243-72.809-18.168-106.39z" />
            </svg>
          </motion.div> */}
        </CardBody>
      </Card>
    </section>
  );
}
