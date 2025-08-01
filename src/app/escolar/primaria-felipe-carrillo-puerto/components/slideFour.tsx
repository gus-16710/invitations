import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2, // Aumenté un poco el stagger para palabras
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 30 }, // Reduje la animación para hacerla más sutil
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function SlideFour() {
  const text =
    "Nunca pares, nunca te conformes, hasta que lo bueno sea lo mejor y lo mejor sea excelente. Porque cada paso que das con pasión y disciplina te acerca a tus sueños. Cree en ti, trabaja con constancia y recuerda siempre que el verdadero éxito está en nunca dejar de aprender.";

  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="120px"
        width="120px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 506 506"
        xmlSpace="preserve"
        initial={{ scale: 0, rotate: -45 }}
        whileInView={{ scale: 1, rotate: -12 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.6,
        }}
      >
        <circle style={{ fill: "#FD8469" }} cx="253" cy="253" r="253" />
        <g>
          <path
            style={{ fill: "#2B3B4E" }}
            d="M151.7,272.1v4.3v33.7l2.7-1c1-0.4,99.7-35.2,197.1,0l2.7,1v-33.7v-4.3   C258.1,237.7,160.8,269,151.7,272.1z"
          />
          <polygon
            style={{ fill: "#2B3B4E" }}
            points="253,98.9 94.9,153.5 253,208.1 411.1,153.5  "
          />
        </g>
        <path
          style={{ fill: "#435E70" }}
          d="M253,208.1l-101.3-35v99c9.1-3.1,106.4-34.4,202.6,0v-99L253,208.1z"
        />
        <circle style={{ fill: "#FFD05B" }} cx="253.1" cy="344.5" r="25" />
        <path
          style={{ fill: "#F1543F" }}
          d="M253.1,319.5c8.9,0,16.7,4.7,21.2,11.7v-15.1c0-2-1.6-3.7-3.7-3.7h-35.2c-2,0-3.7,1.6-3.7,3.7v15.4  C236.1,324.3,244,319.5,253.1,319.5z"
        />
        <g>
          <path
            style={{ fill: "#E6E9EE" }}
            d="M235.7,326.6l-0.1,0.1C235.6,326.7,235.6,326.7,235.7,326.6z"
          />
          <path
            style={{ fill: "#E6E9EE" }}
            d="M233.3,329.3c0.1-0.1,0.2-0.3,0.3-0.4C233.6,329,233.5,329.1,233.3,329.3z"
          />
        </g>
        <g>
          <path
            style={{ fill: "#FFFFFF" }}
            d="M231.9,331.4c0,0.1-0.1,0.1-0.1,0.2v-10.9H99.1v32.2h130.5c-0.9-2.6-1.4-5.4-1.4-8.3   C228.1,339.7,229.5,335.2,231.9,331.4z"
          />
          <path
            style={{ fill: "#FFFFFF" }}
            d="M274.3,320.6v10.6c-0.1-0.1-0.2-0.2-0.2-0.3c2.6,3.9,4.1,8.6,4.1,13.6c0,2.9-0.5,5.7-1.4,8.3h130.3   v-32.2H274.3z"
          />
        </g>
        <g>
          <path
            style={{ fill: "#E6E9EE" }}
            d="M270.3,326.4c0.2,0.1,0.3,0.3,0.4,0.5C270.6,326.7,270.4,326.5,270.3,326.4z"
          />
          <path
            style={{ fill: "#E6E9EE" }}
            d="M272.8,329.2c-0.2-0.2-0.3-0.4-0.5-0.7C272.4,328.7,272.6,328.9,272.8,329.2z"
          />
        </g>
        <circle style={{ fill: "#F9B54C" }} cx="253.1" cy="344.5" r="16.5" />
        <polygon
          style={{ fill: "#1C2A38" }}
          points="253,157.6 253,149.5 107.4,149.5 107.4,247.5 98.9,275.8 124.1,275.8 115.5,247.7   115.5,157.6 "
        />
        <path
          style={{ fill: "#F1543F" }}
          d="M253.1,369.5c-9.1,0-17-4.8-21.4-12.1v51.8l21.3-18.4l21.3,18.4v-51.5  C269.8,364.8,262,369.5,253.1,369.5z"
        />
        <g>
          <path
            style={{ fill: "#ACB3BA" }}
            d="M235.7,362.4c-0.1-0.1-0.2-0.2-0.3-0.3C235.5,362.2,235.6,362.3,235.7,362.4z"
          />
          <path
            style={{ fill: "#ACB3BA" }}
            d="M233.2,359.5c0.2,0.2,0.3,0.4,0.5,0.6C233.5,360,233.3,359.7,233.2,359.5z"
          />
        </g>
        <path
          style={{ fill: "#CED5E0" }}
          d="M231.7,357.5c0,0.1,0.1,0.2,0.2,0.2c-0.9-1.5-1.8-3.1-2.4-4.9H99.1v4.1v20.4h132.7v-19.8H231.7z"
        />
        <path
          style={{ fill: "#ACB3BA" }}
          d="M270.3,362.7c0.3-0.3,0.6-0.6,0.9-0.9C270.8,362,270.6,362.4,270.3,362.7z"
        />
        <path
          style={{ fill: "#CED5E0" }}
          d="M276.7,352.8c-0.6,1.8-1.5,3.5-2.5,5.1c0-0.1,0.1-0.1,0.1-0.2v19.5H407v-20.4v-4.1H276.7V352.8z"
        />
        <path
          style={{ fill: "#ACB3BA" }}
          d="M273.1,359.4c-0.2,0.3-0.5,0.7-0.7,1C272.6,360.1,272.8,359.8,273.1,359.4z"
        />
      </motion.svg>     

      <motion.div
        className={`text-lg mt-5 text-center z-10 max-w-xl mx-10`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={item}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
