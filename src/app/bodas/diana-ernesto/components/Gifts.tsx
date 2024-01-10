import { motion } from "framer-motion";
import { Great_Vibes, Titillium_Web } from "next/font/google";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Code,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });

const ModalCCard = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const [openCount, setOpenCount] = useState(false);
  const [openCL, setOpenCL] = useState(false);

  const clipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setOpenCount(false);
      setOpenCL(false);
    }, 1000);
  };

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
            <ModalHeader className="flex flex-col gap-1">
              Datos Bancarios
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col ">
                <label className={`${notoSans.className} ml-1`}>
                  Beneficiario:
                </label>
                <Code>Ernesto Robles Lara</Code>{" "}
                <label className={`${notoSans.className} ml-1 mt-2`}>
                  Banco:
                </label>
                <Code>BBVA Bancomer</Code>{" "}
                <label className={`${notoSans.className} ml-1 mt-2`}>
                  Cuenta:
                </label>
                <div className="flex justify-between items-center">
                  <Code className="w-full">655030651102</Code>
                  <Popover
                    placement="top"
                    color="foreground"
                    isOpen={openCount}
                    onOpenChange={(open) => setOpenCount(open)}
                  >
                    <PopoverTrigger>
                      <Button
                        size="sm"
                        className="ml-1"
                        variant="faded"
                        onClick={() => clipBoard("655030651102")}
                      >
                        Copiar
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-tiny">Cuenta copiada</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
                <label className={`${notoSans.className} ml-1 mt-2`}>
                  CLABE:
                </label>
                <div className="flex justify-between items-center">
                  <Code className="w-full">0145806550365110265</Code>
                  <Popover
                    placement="top"
                    color="foreground"
                    isOpen={openCL}
                    onOpenChange={(open) => setOpenCL(open)}
                  >
                    <PopoverTrigger>
                      <Button
                        size="sm"
                        className="ml-1"
                        variant="faded"
                        onClick={() => clipBoard("0145806550365110265")}
                      >
                        Copiar
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-tiny">CLABE copiada</div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Gifts() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        className="bg-[url('/img/bodas/diana-ernesto/background-gifts2.jpg')] bg-center bg-cover bg-fixed flex items-center justify-center flex-col text-zinc-900"
        style={{ height: "100svh" }}
      >
        <motion.h1
          className={`${greatVibes.className} text-5xl drop-shadow text-center`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Mesa de Regalos
        </motion.h1>
        <motion.p
          className={`${notoSans.className} text-center p-5 max-w-md`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Nuestro mayor regalo será tu presencia, pero si deseas obsequiarnos un
          detalle te dejamos las siguientes opciones:
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-52 my-3"
            shadow="sm"
            isPressable
            onClick={() =>
              window.open("https://mesaderegalos.liverpool.com.mx/", "_blank")
            }
          >
            <CardBody>
              <div className="flex items-start justify-start">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  shadow="md"
                  src="/img/bodas/diana-ernesto/liverpool-logo.png"
                  width="40px"
                />
                <div className="flex items-center justify-center h-full ml-5 mt-2">
                  <h3 className="font-semibold text-foreground/90">
                    Liverpool
                  </h3>{" "}
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-52 mb-3"
            shadow="sm"
            isPressable
            onClick={() =>
              window.open("https://www.amazon.com.mx/registries", "_blank")
            }
          >
            <CardBody>
              <div className="flex items-start justify-start">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  shadow="md"
                  src="/img/bodas/diana-ernesto/amazon-logo.png"
                  width="40px"
                />
                <div className="flex items-center justify-center h-full ml-5 mt-2">
                  <h3 className="font-semibold text-foreground/90">Amazon</h3>{" "}
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-52 mb-3"
            shadow="sm"
            isPressable
            onClick={() =>
              window.open("https://www.sears.com.mx/Mesa-de-Regalos/", "_blank")
            }
          >
            <CardBody>
              <div className="flex items-start justify-start">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  shadow="md"
                  src="/img/bodas/diana-ernesto/sears-logo.png"
                  width="40px"
                />
                <div className="flex items-center justify-center h-full ml-5 mt-2">
                  <h3 className="font-semibold text-foreground/90">Sears</h3>{" "}
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 w-52"
            shadow="sm"
            isPressable
            onClick={() => onOpen()}
          >
            <CardBody>
              <div className="flex items-start justify-start">
                <Image
                  alt="Album cover"
                  className="object-cover"
                  shadow="md"
                  src="/img/bodas/diana-ernesto/credit-logo.png"
                  width="40px"
                />
                <div className="flex items-center justify-center h-full ml-5 mt-2">
                  <h3 className="font-semibold text-foreground/90">
                    Transferencia
                  </h3>{" "}
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </section>
      <ModalCCard isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
