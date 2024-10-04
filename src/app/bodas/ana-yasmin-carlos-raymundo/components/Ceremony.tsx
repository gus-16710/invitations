import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdTime } from "react-icons/io";
import { greatVibes, love, markazi, notoSans } from "./Fonts";
import { ceremony } from "./Animations";
import { LuMapPin } from "react-icons/lu";

const ModalMap = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className={`${greatVibes.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Ceremonia Religiosa
            </ModalHeader>
            <ModalBody>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6327.554617439235!2d-96.92458595016261!3d19.438896684206902!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2ddb91b5855f%3A0xcffe961b167f34a8!2sTemplo%20de%20la%20Virgen%20de%20Lourdes!5e0!3m2!1ses!2smx!4v1727913980360!5m2!1ses!2smx"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Ceremony() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        className="flex justify-center items-center flex-col pt-20 pb-20 bg-[url('/img/bodas/ana-carlos/church.jpg')] bg-cover bg-center custom-shadow"
        style={{ height: "100svh" }}
      >
        <motion.h1
          className={`${greatVibes.className} text-5xl p-5 text-center text-zinc-50 `}
          variants={ceremony.text01}
          initial="hidden"
          whileInView="visible"
        >
          Ceremonia Religiosa
        </motion.h1>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="100px"
          fill="rgb(255 255 255)"
          variants={ceremony.svg}
          initial="hidden"
          whileInView="visible"
        >
          <g id="outline">
            <path d="M136,240a24,24,0,1,0,24,24A24.028,24.028,0,0,0,136,240Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,136,272Z"></path>
            <path d="M488,480H464V416a8,8,0,0,0,0-16V344a8,8,0,0,0-3.2-6.4L432,316V216a8,8,0,0,0-8-8h-1.919L384,70.91V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8V70.91L329.919,208H328a8,8,0,0,0-8,8v20.686l-56.033-56.033c.017-.216.033-.433.033-.653V160h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v20c0,.22.016.437.033.653L192,236.686V216a8,8,0,0,0-8-8h-1.919L144,70.91V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8V70.91L89.919,208H88a8,8,0,0,0-8,8V316L51.2,337.6A8,8,0,0,0,48,344v56a8,8,0,0,0,0,16v64H24a8,8,0,0,0,0,16H488a8,8,0,0,0,0-16ZM448,348v52H432V336Zm-64,28H368V350.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14Zm-2.343-69.657a8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,352,350.627V376H336V224h80V376H400V350.627A62.219,62.219,0,0,0,381.657,306.343ZM144,376H128V350.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14Zm-2.343-69.657a8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,112,350.627V376H96V224h80V376H160V350.627A62.219,62.219,0,0,0,141.657,306.343ZM192,299.314l8-8v25.372l-8,8Zm24-24,8-8v25.372l-8,8Zm24-24,8-8v25.373l-8,8Zm24-8,8,8v25.372l-8-8Zm24,24,8,8v25.372l-8-8Zm24,24,8,8v25.372l-8-8Zm64-189.423L405.475,208h-58.95ZM256,195.313l64,64v17.374l-58.343-58.344a8,8,0,0,0-11.314,0L192,276.687V259.313ZM136,101.891,165.475,208h-58.95ZM64,348l16-12v64H64Zm0,68H80v64H64Zm32-24h80v88H160V454.627a62.219,62.219,0,0,0-18.343-44.284,8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,112,454.627V480H96Zm32,88V454.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14V480Zm64-132.686,64-64,64,64V480H304V440a8,8,0,0,0,8-8V400a8,8,0,0,0-8-8h-4.161a180.919,180.919,0,0,0-37.693-77.121,8,8,0,0,0-12.292,0A181.073,181.073,0,0,0,212.165,392H208a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8v40H192ZM216,424V408h80v16Zm12.579-32A165.15,165.15,0,0,1,256,332.972,164.962,164.962,0,0,1,283.434,392ZM224,440h24v40H224Zm40,40V440h24v40Zm72-88h80v88H400V454.627a62.219,62.219,0,0,0-18.343-44.284,8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,352,454.627V480H336Zm32,88V454.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14V480Zm64,0V416h16v64Z"></path>
            <path d="M376,240a24,24,0,1,0,24,24A24.028,24.028,0,0,0,376,240Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,376,272Z"></path>
          </g>
        </motion.svg>
        <motion.div
          className={`${greatVibes.className} mt-5 text-center text-zinc-50 text-6xl`}
          variants={ceremony.date}
          initial="hidden"
          whileInView="visible"
        >
          <p className="flex items-center justify-center gap-1 ">
            ~ 13:00 hrs ~
          </p>
          <p className="text-base " >26/Octubre/2024</p>
        </motion.div>
        <motion.p
          className={`${markazi.className} text-center mx-5 mt-5 text-2xl text-zinc-50 max-w-md `}
          variants={ceremony.text02}
          initial="hidden"
          whileInView="visible"
        >
          Templo de la Virgen de Lourdes
        </motion.p>
        <motion.p
          className={`${notoSans.className} text-center mx-5 mt-3 text-sm max-w-md text-zinc-50 `}
          variants={ceremony.text03}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          Av Construcción s/n, 91607. Localidad El Grande, Coatepec, Ver.
        </motion.p>
        <motion.div
          variants={ceremony.button}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-5"
        >
          <button
            type="button"
            className="mt-10 text-zinc-50 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
            onClick={() => {
              onOpen();
            }}
          >
            <LuMapPin className="mr-1" />
            Ver Ubicación
          </button>
        </motion.div>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
