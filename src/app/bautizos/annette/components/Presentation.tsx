import { useEffect, useState } from "react";
import { anton, habibi, playFair, rivage, whisper } from "./Fonts";
import { presentation } from "./Animations";
import { motion, useAnimate } from "framer-motion";

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Presentation() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Nov 2, 2024 13:29:00");

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
        console.log("EXPIRED");
      }

      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);
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
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [seconds, animateSeconds]);

  useEffect(() => {
    animateMinutes(
      scopeMinutes.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [minutes, animateSeconds]);

  useEffect(() => {
    animateHours(
      scopeHours.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [hours, animateHours]);

  useEffect(() => {
    animateDays(
      scopeDays.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [days, animateDays]);

  return (
    <section
      className="relative h-screen flex justify-center items-center flex-col"
      style={{ backgroundColor: "#e9d4cf" }}
    >
      <motion.h1
        className={`${rivage.className} text-5xl text-orange-900`}
        variants={presentation.animationText01}
        initial="hidden"
        whileInView="visible"
      >
        Sólo Faltan
      </motion.h1>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width={250}
        viewBox="0 0 2641.465 318.75"
        enableBackground="new 0 0 2641.465 318.75"
        xmlSpace="preserve"
        style={{ fill: "#b8965e" }}
        variants={presentation.animationDivider}
        initial="hidden"
        whileInView="visible"
      >
        <g>
          <path d="M1742.073,193.971c-8.155,0.553-8.818,14.018-1.059,15.756   c7.902,1.975,16.151,0.774,24.195,1.027c268.657-0.016,537.314-0.016,805.971,0c7.68-0.19,15.487,0.758,23.057-0.759   c3.856-0.743,6.542-4.551,6.495-8.344c-0.095-5.547-5.452-8.613-10.541-8.107c-272.876,0.047-545.769,0-818.661,0.031   C1761.732,193.829,1751.855,192.849,1742.073,193.971z" />
          <path d="M899.392,193.971c8.155,0.553,8.818,14.018,1.059,15.756   c-7.902,1.975-16.151,0.774-24.195,1.027c-268.657-0.016-537.314-0.016-805.971,0c-7.68-0.19-15.487,0.758-23.057-0.759   c-3.856-0.743-6.542-4.551-6.495-8.344c0.095-5.547,5.452-8.613,10.541-8.107c272.877,0.047,545.769,0,818.661,0.031   C879.733,193.829,889.61,192.849,899.392,193.971z" />
          <path d="M1686.018,201.383c-0.743,12.169,12.943,22.757,24.448,17.969   c9.166-2.845,14.35-13.117,11.805-22.251c-1.849-7.017-8.233-12.88-15.614-13.275   C1696.274,182.008,1685.939,190.874,1686.018,201.383z M1713.753,198.997c2.781,6.4-4.488,14.176-11.141,12.564   c-4.488-0.996-8.076-5.373-7.933-10.003c0.458-4.757,4.536-8.676,9.071-9.592C1708.079,191.996,1712.331,194.856,1713.753,198.997z   " />
          <path d="M955.447,201.383c0.743,12.169-12.943,22.757-24.448,17.969   c-9.166-2.845-14.35-13.117-11.805-22.251c1.849-7.017,8.233-12.88,15.614-13.275C945.191,182.008,955.526,190.874,955.447,201.383   z M927.712,198.997c-2.781,6.4,4.488,14.176,11.141,12.564c4.488-0.996,8.076-5.373,7.933-10.003   c-0.458-4.757-4.536-8.676-9.071-9.592C933.386,191.996,929.134,194.856,927.712,198.997z" />
          <path d="M1320.732,237.401c4.371-0.255,8.733-0.635,13.076-1.14   c48.453-4.931,94.441-23.974,135.798-49.085c20.544-12.248,38.845-27.845,59.326-40.204c20.323-12.406,43.127-22.077,67.212-22.82   c26.044,0.49,51.298,16.056,63.213,39.255c9.071,17.463,9.925,38.371,4.804,57.161c-3.003,11.695-8.36,23.184-17.399,31.433   c-8.518,7.743-20.228,11.426-31.654,11.015c-15.456,0.442-32.223-5.705-40.694-19.264c-9.751-15.092-5.784-38.276,10.193-47.489   c11.22-6.653,25.349-4.757,36.632,0.695c5.484,2.544,6.795,9.055,10.857,13.085c1.264-4.156,2.876-8.55,1.596-12.864   c-1.849-6.827-7.286-12.137-13.417-15.361c-9.466-5.184-20.876-5.816-31.259-3.414c-14.681,3.572-26.455,16.325-29.236,31.117   c-1.896,10.92-0.616,22.709,5.294,32.27c7.886,13.702,23.531,21.461,38.908,22.773c11.173,0.268,22.725,1.011,33.408-2.971   c16.246-5.373,29.015-19.027,34.578-35.052c6.306-18.3,6.59-38.702,0.379-57.066c-7.791-23.231-27.214-41.673-50.223-49.686   c-12.089-4.788-25.396-4.425-38.133-3.366c-30.643,4.694-57.619,21.477-82.019,39.73c-15.329,11.726-30.991,23.073-47.694,32.823   c-40.599,23.794-86.317,41.083-133.545,43.728c-47.228-2.644-92.947-19.933-133.545-43.728   c-16.704-9.751-32.365-21.098-47.694-32.823c-24.4-18.253-51.376-35.036-82.019-39.73c-12.738-1.059-26.044-1.422-38.134,3.366   c-23.01,8.012-42.432,26.455-50.223,49.686c-6.211,18.364-5.926,38.766,0.379,57.066c5.563,16.025,18.332,29.679,34.578,35.052   c10.683,3.983,22.235,3.24,33.408,2.971c15.377-1.312,31.022-9.071,38.908-22.773c5.91-9.561,7.191-21.35,5.294-32.27   c-2.781-14.792-14.555-27.545-29.236-31.117c-10.383-2.402-21.793-1.77-31.259,3.414c-6.132,3.224-11.568,8.534-13.417,15.361   c-1.28,4.314,0.332,8.708,1.596,12.864c4.062-4.03,5.373-10.541,10.857-13.085c11.284-5.452,25.412-7.348,36.632-0.695   c15.977,9.213,19.944,32.397,10.193,47.489c-8.471,13.559-25.238,19.706-40.694,19.264c-11.426,0.411-23.136-3.272-31.654-11.015   c-9.039-8.249-14.397-19.738-17.399-31.433c-5.12-18.79-4.267-39.698,4.804-57.161c11.916-23.199,37.169-38.766,63.213-39.255   c24.084,0.743,46.889,10.414,67.212,22.82c20.481,12.358,38.782,27.956,59.326,40.204c41.357,25.111,87.345,44.154,135.798,49.085   C1312,236.766,1316.361,237.146,1320.732,237.401z M1320.732,221.02c23.825-0.755,48.012-9.056,64.959-26.211   c14.539-15.14,24.495-34.23,40.441-48.09c8.076-7.601,17.716-13.101,26.834-19.264c-9.751-0.901-19.296-3.461-29.094-3.998   c-14.871-0.158-30.295,0.427-44.012,6.827c-20.339,9.15-34.847,27.419-55.201,36.506c-1.296,0.53-2.605,1.027-3.926,1.493   c-1.321-0.466-2.63-0.964-3.926-1.493c-20.355-9.087-34.862-27.355-55.201-36.506c-13.717-6.401-29.141-6.985-44.012-6.827   c-9.798,0.537-19.343,3.097-29.094,3.998c9.119,6.163,18.758,11.663,26.834,19.264c15.945,13.859,25.901,32.95,40.441,48.09   C1272.72,211.964,1296.907,220.264,1320.732,221.02z M1320.732,178.946c6.04-1.938,11.825-4.583,17.09-8.174   c18.158-11.6,31.038-30.516,51.361-38.813c18.174-6.716,38.228-7.933,56.987-2.908c-13.259,8.455-26.186,17.668-36.996,29.189   c-14.745,15.772-28.035,34.372-48.564,43.112c-12.601,5.464-26.157,8.587-39.879,9.44c-13.721-0.853-27.278-3.975-39.879-9.44   c-20.529-8.739-33.819-27.34-48.564-43.112c-10.81-11.521-23.737-20.734-36.996-29.189c18.759-5.025,38.813-3.809,56.987,2.908   c20.323,8.297,33.203,27.213,51.361,38.813C1308.907,174.364,1314.693,177.009,1320.732,178.946z M1320.732,161.979   c11.662-8.17,20.736-20.059,25.671-33.433c7.286-19.659,6.416-43.839-7.269-60.558c-4.911-6.165-11.296-10.88-18.402-14.036   c-7.106,3.156-13.491,7.87-18.402,14.036c-13.686,16.72-14.555,40.899-7.269,60.558   C1299.997,141.919,1309.07,153.809,1320.732,161.979z M1320.732,57.922c8.436,4.271,15.62,10.925,19.982,19.437   c6.084,10.73,6.701,23.5,5.405,35.51c-2.426,16.99-11.841,32.882-25.387,43.352c-13.546-10.47-22.961-26.362-25.387-43.352   c-1.296-12.01-0.679-24.78,5.405-35.51C1305.112,68.847,1312.296,62.193,1320.732,57.922z" />
          <path d="M1529.28,230.477c-3.145-7.617-10.588-12.152-17.304-16.277   c-21.745-12.437-48.532-12.011-71.921-4.789c-12.532,4.03-25.175,8.803-35.684,16.957c31.212-0.806,59.263,14.681,89.178,20.892   c9.166,1.691,18.948,1.422,27.624-2.149C1526.752,242.914,1531.682,236.609,1529.28,230.477z M1495.698,238.047   c-26.692-4.804-52.531-15.74-80.044-14.95c17.225-6.543,35.605-10.841,54.095-10.636c18.648,0.727,38.671,6.669,50.792,21.682   C1513.161,238.695,1504.121,239.359,1495.698,238.047z" />
          <path d="M1112.185,230.477c3.145-7.617,10.588-12.152,17.304-16.277   c21.745-12.437,48.532-12.011,71.921-4.789c12.532,4.03,25.175,8.803,35.684,16.957c-31.212-0.806-59.263,14.681-89.178,20.892   c-9.166,1.691-18.948,1.422-27.624-2.149C1114.713,242.914,1109.782,236.609,1112.185,230.477z M1145.767,238.047   c26.692-4.804,52.531-15.74,80.044-14.95c-17.225-6.543-35.605-10.841-54.095-10.636c-18.648,0.727-38.671,6.669-50.792,21.682   C1128.304,238.695,1137.343,239.359,1145.767,238.047z" />
        </g>
      </motion.svg>

      <div className="flex gap-16 text-zinc-600 mt-10">
        <motion.div
          className="flex flex-col"
          variants={presentation.animationTimer01}
          initial="hidden"
          whileInView="visible"
        >
          <p className="flex flex-col items-center">
            <span className={`${anton.className} text-5xl`} ref={scopeDays}>
              {formatNumber(days)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Días</span>
          </p>
          <p className="flex flex-col items-center mt-5">
            <span className={`${anton.className} text-5xl`} ref={scopeMinutes}>
              {formatNumber(minutes)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Minutos</span>
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col"
          variants={presentation.animationTimer02}
          initial="hidden"
          whileInView="visible"
        >
          <p className="flex flex-col items-center">
            <span className={`${anton.className} text-5xl`} ref={scopeHours}>
              {formatNumber(hours)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Horas</span>
          </p>
          <p className="flex flex-col items-center mt-5">
            <span className={`${anton.className} text-5xl`} ref={scopeSeconds}>
              {formatNumber(seconds)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Segundos</span>
          </p>
        </motion.div>
      </div>

      <motion.p
        className={`${habibi.className} px-5 mt-10 text-center text-orange-900`}
        variants={presentation.animationText02}
        initial="hidden"
        whileInView="visible"
      >
        Mientras pasan los días y creces, más seguros estamos que el día en que
        Dios te diseño, quiso bendecirnos. Preciosa e inocente pedimos a nuestro
        señor que acompañe eternamente tus pasitos.
      </motion.p>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="60px"
        width="60px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className="mt-10"
        variants={presentation.animationIcon}
        initial="hidden"
        whileInView="visible"
      >
        <path
          style={{ fill: "#F95428" }}
          d="M212.942,441.444c-3.129,0-6.12-1.791-7.501-4.825c-0.445-0.976-11.001-24.28-20.607-56.767  c-12.999-43.963-17.672-81.839-13.889-112.573c0.556-4.515,4.666-7.723,9.182-7.17c4.515,0.556,7.726,4.667,7.17,9.182  c-8.405,68.294,32.721,159.584,33.136,160.499c1.886,4.141,0.058,9.025-4.081,10.911  C215.245,441.205,214.084,441.444,212.942,441.444z"
        />
        <path
          style={{ fill: "#E2C7A3" }}
          d="M285.025,145.988c-18.375-18.375-30.424-27.531-12.05-45.906l59.705,27.015  c26.975,26.975,43.449,62.67,46.481,100.693l1.197,14.992c1.219,15.332,7.864,29.731,18.748,40.616l-90.249,90.248l-15.816-15.816  c-11.049-11.06-25.58-17.979-41.132-19.605c-7.776-0.813-15.289-2.954-22.252-6.26c-6.952-3.317-13.355-7.809-18.88-13.345  l-38.166-38.166l-84.043-84.043c-8.523-8.523-8.523-22.34,0-30.863c4.261-4.261,9.841-6.392,15.431-6.392  c5.579,0,11.17,2.131,15.42,6.392l-31.247-31.247c-8.523-8.523-8.523-22.34,0-30.863c4.261-4.261,9.841-6.392,15.431-6.392  c5.59,0,11.17,2.131,15.431,6.392L94.972,79.375c-8.523-8.523-8.523-22.34,0-30.863c4.261-4.25,9.852-6.381,15.431-6.381  s11.17,2.131,15.431,6.381l19.264,19.264c-8.347-8.534-8.292-22.219,0.165-30.687c4.261-4.261,9.841-6.392,15.431-6.392  c5.59,0,11.17,2.131,15.431,6.392L285.025,145.988z"
        />
        <path
          style={{ fill: "#FCE2B9" }}
          d="M430.218,252.7l-90.248,90.248l-15.816-15.816c-9.039-9.05-20.418-15.332-32.774-18.199  c-2.746-0.637-5.536-1.109-8.358-1.406c-2.834-0.297-5.634-0.769-8.391-1.406c-4.789-1.12-9.435-2.757-13.861-4.855  c-6.952-3.317-13.355-7.809-18.88-13.345L119.681,165.714c-8.523-8.523-8.523-22.34,0-30.863c4.261-4.261,9.841-6.392,15.431-6.392  c5.579,0,11.17,2.131,15.42,6.392l-31.247-31.247c-8.523-8.523-8.523-22.34,0-30.863c2.79-2.79,6.14-4.668,9.687-5.623  c1.878-0.516,3.811-0.769,5.744-0.769c5.59,0,11.17,2.131,15.431,6.392l-24.064-24.064c-8.523-8.523-8.523-22.34,0-30.863  c4.261-4.25,9.852-6.381,15.431-6.381s11.17,2.131,15.431,6.381l19.264,19.264c-6.601-6.744-7.941-16.705-4.042-24.767  c1.032-2.142,2.427-4.141,4.207-5.92C180.638,2.131,186.217,0,191.807,0c5.59,0,11.17,2.131,15.431,6.392L316.137,115.29  c-4.734-4.734-8.248-10.225-10.533-16.079c-2.197-5.579-3.273-11.488-3.251-17.408c0-0.977,0.033-1.955,0.11-2.922  c0.725-10.983,5.283-21.747,13.674-30.138l47.656,47.656c26.975,26.975,43.449,62.67,46.481,100.693l1.197,14.992  C412.689,227.417,419.334,241.816,430.218,252.7z"
        />
        <path
          style={{ fill: "#F95428" }}
          d="M291.381,308.934c-0.264,0.648-0.538,1.285-0.824,1.922  c-38.946,88.118-69.974,126.032-71.281,127.602c-1.626,1.966-3.976,2.987-6.337,2.987c-1.856,0-3.723-0.626-5.261-1.9  c-3.504-2.9-3.987-8.095-1.087-11.598c10.478-12.686,38.057-54.367,68.041-121.825c0.286-0.637,0.571-1.274,0.857-1.922  c22.054-49.907,22.999-110.446,19.89-152.446c-2.087-28.337-6.227-52.192-9.105-66.327l0,0c6.669-0.024,12.739,3.842,15.539,9.895  l4.857,10.501c1.977,12.664,3.899,27.875,5.14,44.723C315.005,193.885,314.017,256.314,291.381,308.934z"
        />
        <g>
          <path
            style={{ fill: "#EDD2AB" }}
            d="M246.042,106.91l-69.831-69.831c-6.601-6.744-7.941-16.705-4.042-24.767L246.042,106.91z"
          />
          <path
            style={{ fill: "#EDD2AB" }}
            d="M215.729,138.322l-86.756-71.204c1.878-0.516,3.811-0.769,5.744-0.769   c5.59,0,11.17,2.131,15.431,6.392L215.729,138.322z"
          />
          <path
            style={{ fill: "#EDD2AB" }}
            d="M216.113,200.431l-86.756-71.204c1.878-0.516,3.811-0.769,5.744-0.769   c5.59,0,11.17,2.131,15.431,6.392L216.113,200.431z"
          />
        </g>
        <polygon
          style={{ fill: "#E09B2D" }}
          points="237.101,459.281 221.175,459.281 221.175,438.879 204.7,438.879 204.7,459.281   188.775,459.281 188.775,475.756 204.7,475.756 204.7,512 221.175,512 221.175,475.756 237.101,475.756 "
        />
        <path
          style={{ fill: "#EDD2AB" }}
          d="M338.96,138.102l-22.823-22.812c-4.734-4.734-8.248-10.225-10.533-16.079  c-2.197-5.579-3.273-11.488-3.251-17.408c0-0.977,0.033-1.955,0.11-2.922L338.96,138.102z"
        />
      </motion.svg>
    </section>
  );
}
