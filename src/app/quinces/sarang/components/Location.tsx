import { motion, useMotionValue } from "framer-motion";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import {
  animation01,
  animation03,
  animation04,
  animation06,
} from "./Animations";
import { playFair, rouge } from "./Fonts";
import { LuMapPin } from "react-icons/lu";
import { useEffect, useState } from "react";

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3583.6877322020628!2d-97.20980696694363!3d26.076459866477084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866fae473b8e3689%3A0xb23503267a69f424!2sPort%20Isabel%20Event%20%26%20Cultural%20Center!5e0!3m2!1ses!2smx!4v1729105546129!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

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
              className={`${rouge.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Location
            </ModalHeader>
            <ModalBody>
              <MapCeremony />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const animationVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

const FlipAvatar: React.FC = () => {
  const [flipped, setFlipped] = useState(false); // Estado para alternar entre avatares
  const [rotation, setRotation] = useState(0); // Estado para controlar el valor de rotación
  const rotateY = useMotionValue(0); // Para controlar la rotación suavemente

  // Función para manejar el click
  const handleClick = () => {
    setRotation((prev) => (prev === 0 ? 180 : 0)); // Alterna entre 0 y 180 grados
  };

  // Temporizador para que el componente gire automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev === 0 ? 180 : 0)); // Alterna la rotación cada 5 segundos
    }, 5000);

    return () => clearInterval(interval); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <motion.div
      style={{ perspective: 1000 }} // Añade perspectiva para un mejor efecto 3D
      animate={{ rotateY: rotation }} // Controla la rotación según el estado
      transition={{ duration: 0.8 }}
      onClick={handleClick} // Ejecuta el giro al hacer click
      onUpdate={(latest: { rotateY: number }) => {
        const currentRotateY = latest.rotateY;
        // Cambia la imagen cuando la rotación alcanza 90 grados
        if (currentRotateY >= 90 && currentRotateY < 180 && !flipped) {
          setFlipped(true); // Cambia el estado para mostrar el segundo Avatar
        } else if (currentRotateY < 90 && flipped) {
          setFlipped(false); // Regresa al primer Avatar si el giro vuelve a ser menor a 90 grados
        }
      }}
    >
      <motion.div
        initial="hidden" // Comienza en estado oculto
        whileInView="visible" // Aparece al entrar en pantalla
        variants={animationVariants} // Variantes de animación
        style={{ display: "flex", justifyContent: "center" }} // Estilo para centrar el contenido
      >
        {!flipped ? (
          <Avatar
            isBordered
            color="secondary"
            src="/img/quinces/sarang/church.jpg"
            className="h-36 w-36 my-5 shadow-lg"
          />
        ) : (
          <Avatar
            isBordered
            color="secondary"
            src="/img/quinces/sarang/map-por-isabel.jpg"
            className="h-36 w-36 my-5 shadow-lg"
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default function Location() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        className="flex justify-center items-center flex-col px-7 py-10"
        style={{ height: "100svh" }}
      >
        <Card
          className="border-none bg-background/5 h-full w-full"
          shadow="sm"
          radius="lg"
          isBlurred
        >
          <CardBody className="flex items-center justify-center flex-col">
            <motion.div
              variants={animation06}
              initial="hidden"
              whileInView="visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 2588.233 499.412"
                enableBackground="new 0 0 2588.233 499.412"
                xmlSpace="preserve"
                width="220"
                fill="rgb(99, 17, 125)"
              >
                <g>
                  <path d="M2159.697,423.532c-28.752,26.217-57.105,30.613-74.174,33.505c-0.275,2.366-0.508,4.732-0.718,7.098   c60.061-3.57,104.258-41.387,113.786-84.779c-4.626-0.043-9.189-0.083-13.775-0.126   C2180.168,395.667,2172.248,411.659,2159.697,423.532z" />
                  <path d="M428.536,423.532c-12.551-11.874-20.471-27.865-25.12-44.302c-4.585,0.043-9.148,0.083-13.775,0.126   c9.528,43.392,53.725,81.209,113.786,84.779c-0.21-2.366-0.443-4.732-0.718-7.098C485.641,454.145,457.288,449.749,428.536,423.532   z" />
                  <path d="M2056.929,441.326c-9.337-1.121-19.098,4.324-23.049,12.858c-3.953,8.537-1.794,19.497,5.105,25.896   c6.899,6.399,17.991,7.727,26.207,3.144c8.213-4.582,12.908-14.724,11.089-23.951   C2074.462,450.052,2066.272,442.446,2056.929,441.326z" />
                  <path d="M530.485,441.441c-8.994,1.453-16.766,8.876-18.532,17.832c-1.82,9.227,2.876,19.369,11.089,23.951   c8.215,4.583,19.308,3.255,26.206-3.144c6.899-6.398,9.058-17.359,5.105-25.896C550.303,445.437,540.117,439.888,530.485,441.441z" />
                  <path d="M2496.577,342.131c-53.936-9.993-76.54-1.034-112.075,9.74c-27.167,8.198-25.203,6.295-52.563,6.59   c-0.844-8.218-3.633-16.437-10.986-21.042c-3.676,0.296-7.311,0.379-10.901,0.528c-0.2,19.579-0.23,17.975-1.077,20.345   c-22.843,0.538-446.787-0.312-480.072,0.612c13.808,8.279,15.785,11.41,30.253,11.41c5.507,0,446.471-0.198,450.263-0.379   c0.379,6.696,0.402,4.204,0.634,21.697c5.197-0.845,11.156-0.845,15.233-4.732c4.437-4.416,5.534-10.923,7.457-16.646   c8.557,0.169,17.197-0.571,25.731,0.675c56.109,11.884,67.262,36.376,191.109,2.892c2.356-0.637,19.353-5.311,24.532-8.045   C2569.131,357.913,2503.576,343.391,2496.577,342.131z" />
                  <path d="M759.33,358.904c-33.285-0.924-457.229-0.074-480.072-0.612c-0.851-2.379-0.878-0.818-1.077-20.345   c-3.59-0.149-7.225-0.233-10.9-0.528c-7.353,4.606-10.142,12.824-10.986,21.042c-27.359-0.296-25.395,1.607-52.563-6.59   c-35.534-10.774-58.139-19.733-112.075-9.74c-6.036,1.087-72.475,15.657-77.54,23.644c4.793,2.53,20.379,6.922,24.532,8.045   c123.834,33.481,134.963,9.001,191.109-2.892c8.534-1.246,17.175-0.506,25.732-0.675c1.923,5.723,3.021,12.23,7.457,16.646   c4.078,3.888,10.036,3.888,15.233,4.732c0.233-17.493,0.255-15,0.634-21.697c3.792,0.182,444.756,0.379,450.263,0.379   C743.545,370.315,745.521,367.184,759.33,358.904z" />
                  <path d="M2107.053,332.985c3.613-7.902-2.429-14.725-6.168-21.105c-4.204-5.873,2.091-22.857,25.984-26.239   c12.126-0.571,24.549,1.585,35.153,7.753c17.852,12.21,25.901,34.119,25.689,55.139c4.775-0.422,9.571-0.781,14.409-0.908   c-0.233-1.436-0.718-4.31-0.971-5.766c-8.853-88.583-138.208-74.427-126.335-11.408   C2078.254,344.33,2102.753,347.965,2107.053,332.985z" />
                  <path d="M426.211,293.393c10.605-6.168,23.027-8.324,35.153-7.753c23.894,3.382,30.189,20.367,25.985,26.239   c-3.739,6.38-9.781,13.203-6.168,21.105c4.3,14.98,28.799,11.345,32.239-2.536c11.873-63.018-117.482-77.175-126.335,11.408   c-0.253,1.456-0.738,4.33-0.971,5.766c4.838,0.126,9.634,0.486,14.409,0.908C400.31,327.512,408.359,305.603,426.211,293.393z" />
                  <path d="M1726.821,326.903c-91.73-54.042-233.445-126.524-327.69-75.506c-37.009,20.132-59.255,60.715-61.77,100.307   c3.021,0.084,6.085,0.19,9.169,0.275c2.323-13.562,5.599-27.231,12.569-39.253c11.302-19.457,28.626-35.217,51.696-40.985   c18.633-4.457,55.371-0.93,70.286,2.578c64.603,14.894,96.905,29.366,158.636,61.033   c125.704,64.463,250.377,138.643,383.357,134.194c-0.125-2.04-0.212-5.485-0.212-6.909   C1932.349,452.941,1879.485,410.227,1726.821,326.903z" />
                  <path d="M1107.152,274.32c14.915-3.508,51.653-7.035,70.286-2.578c23.07,5.768,40.393,21.528,51.696,40.985   c6.97,12.022,10.246,25.691,12.569,39.253c3.084-0.086,6.148-0.192,9.169-0.275c-2.515-39.592-24.761-80.175-61.77-100.307   c-94.245-51.018-235.959,21.464-327.69,75.506c-152.664,83.324-205.528,126.039-296.041,135.736c0,1.424-0.088,4.869-0.212,6.909   c132.98,4.449,257.653-69.731,383.357-134.194C1010.247,303.686,1042.549,289.214,1107.152,274.32z" />
                  <path d="M1599.389,240.029c68.661-30.38,108.632,3.4,215.656,74.3c16.922,10.731,34.668,21.126,54.547,25.077   c17.324,3.211,35.767,5.218,52.669-1.014c20.598-7.521,38.237-22.203,50.596-40.224c-1.12-0.95-3.317-2.874-4.394-3.825   c-8.047,5.685-16.115,10.768-25.723,13.22c-11.572,2.954-28.735,6.096-39.789,0.049c-2.113-0.993-146.679-68.703-157.284-72.442   c-47.555-18.274-114.651-30.211-154.475,1.373C1593.052,239.354,1595.82,242.797,1599.389,240.029z" />
                  <path d="M665.972,338.393c16.901,6.232,35.345,4.224,52.669,1.014c19.879-3.951,37.625-14.346,54.547-25.077   c107.024-70.9,146.995-104.681,215.656-74.3c3.57,2.768,6.338-0.675,8.196-3.486c-39.824-31.584-106.92-19.647-154.475-1.373   c-10.605,3.739-155.171,71.449-157.284,72.442c-11.053,6.048-28.216,2.905-39.788-0.049c-9.608-2.452-17.676-7.535-25.723-13.22   c-1.077,0.951-3.274,2.874-4.394,3.825C627.735,316.19,645.375,330.872,665.972,338.393z" />
                  <path d="M1625.649,358.421c-36.759,0.339-84.42-0.675-100.603,0.824c0,3.149-0.018,4.014,0.19,10.986   c8.239,0.339,110.871,0.443,140.552-0.084C1648.615,362.494,1636.631,358.015,1625.649,358.421z" />
                  <path d="M962.584,358.421c-10.982-0.406-22.966,4.074-40.138,11.727c29.681,0.526,132.313,0.422,140.552,0.084   c0.208-6.972,0.19-7.837,0.19-10.986C1047.004,357.746,999.343,358.76,962.584,358.421z" />
                  <path d="M1479.01,350.612c-4.641,2.925-4.75,25.768-7.182,36.417c-14.958,65.491-109.201,57.125-124.899-7.69   c-3.17-0.043-6.317-0.063-9.464-0.063c4.035,16.141,8.43,25.944,20.451,39.041c28.732,25.625,85.582,26.745,115.75,2.937   c15.535-12.43,26.673-28.647,28.341-48.789c0.169-2.041,0.734-11.15-0.157-13.698   C1498.913,350.369,1483.683,347.667,1479.01,350.612z" />
                  <path d="M1116.405,387.029c-2.402-10.516-2.563-33.506-7.182-36.417c-4.662-2.938-19.899-0.253-22.84,8.154   c-0.891,2.546-0.326,11.658-0.157,13.698c1.668,20.142,12.807,36.359,28.341,48.789c30.168,23.808,87.018,22.688,115.75-2.937   c12.02-13.097,16.416-22.901,20.451-39.041c-3.147,0-6.295,0.02-9.465,0.063C1225.605,444.154,1131.362,452.519,1116.405,387.029z" />
                  <path d="M1454.613,370.315c0.02-3.888,0.02-7.796,0.106-11.682c-33.032-0.233-146.775,0.02-152.637,0.02   c-0.443-43.414-0.443-86.912,0.149-130.349c20.451,0.951,37.858,23.788,65.048-20.428c15.845-27.211,24.169-67.096,48.336-86.406   c2.24-2.197,5.514-4.057,5.703-7.543c-13.14-4.563-27.527-6.613-41.323-4.5c-17.852,3.825-29.069,19.245-40.477,32.092   c-12.233-69.336-7.119-82.541-45.401-128.046c-38.282,45.505-33.169,58.71-45.401,128.046   c-11.408-12.846-22.625-28.267-40.477-32.092c-13.797-2.113-28.183-0.063-41.323,4.5c0.19,3.486,3.464,5.346,5.703,7.543   c24.167,19.311,32.491,59.196,48.336,86.406c27.19,44.216,44.597,21.379,65.048,20.428c0.591,43.437,0.591,86.935,0.149,130.349   c-5.862,0-119.605-0.253-152.637-0.02c0.086,3.886,0.086,7.794,0.106,11.682C1176.612,370.092,1406.85,370.067,1454.613,370.315z" />
                </g>
              </svg>
            </motion.div>
            <motion.h1
              className={`${rouge.className} text-6xl custom-text-purple mt-5 text-center z-50`}
              variants={animation01}
              initial="hidden"
              whileInView="visible"
            >
              Location
            </motion.h1>
           
            <FlipAvatar />
            <motion.div
              variants={animation03}
              initial="hidden"
              whileInView="visible"
            >
              <Button
                className="mb-4 text-tiny"
                variant="bordered"
                color="secondary"
                radius="lg"
                size="sm"
                onClick={() => {
                  onOpen();
                }}
              >
                <LuMapPin />
                CHECK MAP
              </Button>
            </motion.div>

            <motion.p
              className={`${playFair.className} mx-10 mt-1 text-center text-base z-20 custom-text-purple`}
              style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
              variants={animation04}
              initial="hidden"
              whileInView="visible"
            >
              Port Isabel Event & Cultural Center 309 E. Railroad Ave
            </motion.p>
            <motion.div
              className={`mt-5 p-1 text-center custom-text-purple`}
              style={{
                fontFamily: "adelia",
              }}
              variants={animation04}
              initial="hidden"
              whileInView="visible"
            >
              <p>Hosted By Gómez Family</p>
              <p className="mt-5 text-xs">Dinner: 6:00 - 8:00 pm</p>
            </motion.div>
          </CardBody>
        </Card>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
