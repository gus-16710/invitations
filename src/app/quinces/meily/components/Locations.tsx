import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { FaMapMarkedAlt } from "react-icons/fa";
import { cormorant, pinyon } from "./Fonts";
import ClinkingGlasses from "./ClinkingGlasses";

const MAPS_QUERY = "Quinta La Piedra, Banderilla, Veracruz";
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const grow: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Ornament = () => (
  <svg width="200" height="16" viewBox="0 0 220 16" aria-hidden="true">
    <line x1="0" y1="8" x2="92" y2="8" stroke="#f5ebe0" strokeWidth="1" />
    <circle cx="98" cy="8" r="1.8" fill="#f5ebe0" />
    <path d="M110 1 L117 8 L110 15 L103 8 Z" fill="#f5ebe0" />
    <circle cx="122" cy="8" r="1.8" fill="#f5ebe0" />
    <line x1="128" y1="8" x2="220" y2="8" stroke="#f5ebe0" strokeWidth="1" />
  </svg>
);

const ModalMap = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => (
  <Modal
    isOpen={isOpen}
    onOpenChange={onOpenChange}
    size="xs"
    placement="center"
    backdrop="blur"
  >
    <ModalContent style={{ backgroundColor: "#f5ebe0" }}>
      {() => (
        <>
          <ModalHeader className="flex flex-col items-center gap-0 pb-2">
            <span className={`${pinyon.className} text-4xl text-red-800`}>
              Recepción
            </span>
            <span
              className={`${cormorant.className} text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700`}
            >
              Salón Quinta La Piedra
            </span>
          </ModalHeader>
          <ModalBody>
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`}
              height="380"
              className="w-full rounded-lg border border-red-800/20"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ModalBody>
          <ModalFooter className="justify-center">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cormorant.className} flex items-center gap-2 rounded-full bg-red-800 px-5 py-2 text-base font-semibold tracking-wide text-[#f5ebe0] hover:bg-red-700`}
            >
              <FaMapMarkedAlt />
              Abrir en Google Maps
            </a>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
);

export default function Locations() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        data-bg="dark"
        className="min-h-screen pt-20 pb-36 px-6 flex flex-col justify-center items-center relative"
        style={{ backgroundColor: "#991b1b", marginTop: "-1px" }}
      >
        <motion.div
          className="relative z-20 w-full max-w-sm flex flex-col items-center text-center border border-[#f5ebe0]/40 px-6 py-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Marco interior */}
          <div className="absolute inset-2 border border-[#f5ebe0]/20 pointer-events-none" />

          <motion.div variants={grow}>
            <ClinkingGlasses />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className={`${cormorant.className} text-[#f5ebe0]/80 text-sm font-semibold uppercase tracking-[0.35em] mt-4`}
          >
            Te espero en la
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className={`${pinyon.className} text-[#f5ebe0] text-6xl leading-tight`}
          >
            Recepción
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-3">
            <Ornament />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className={`${cormorant.className} text-white text-2xl font-semibold uppercase tracking-[0.12em] leading-snug mt-4`}
          >
            Salón
            <br />
            Quinta La Piedra
          </motion.p>

          <motion.p
            variants={fadeUp}
            className={`${cormorant.className} italic text-[#f5ebe0]/90 text-lg mt-1`}
          >
            Banderilla, Veracruz
          </motion.p>

          <motion.div
            variants={fadeUp}
            className={`${cormorant.className} flex items-center gap-2 mt-4 text-[#f5ebe0] lining-nums`}
          >
            <IoMdTime className="text-2xl" />
            <span className="text-3xl font-semibold">4:00</span>
            <span className="text-sm font-semibold uppercase tracking-[0.2em]">
              p.m.
            </span>
          </motion.div>

          <motion.button
            type="button"
            variants={fadeUp}
            onClick={onOpen}
            className={`${cormorant.className} mt-6 flex items-center gap-2 rounded-full border border-[#f5ebe0] bg-[#f5ebe0] px-6 py-2 text-lg font-semibold tracking-wide text-red-900 shadow-md transition hover:bg-transparent hover:text-[#f5ebe0]`}
          >
            <LuMapPin />
            Ver ubicación
          </motion.button>
        </motion.div>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
