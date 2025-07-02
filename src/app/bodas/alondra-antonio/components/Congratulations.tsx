import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from "next/font/google";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  ScrollShadow,
  Spinner,
} from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { LuBadgeInfo } from "react-icons/lu";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const ModalMessages = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://apirest.unaideamas.com/api/congratulations?event=boda-alondra-antonio"
      );
      if (!response.ok) {
        throw new Error("Error al obtener los mensajes");
      }
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="blur"
    >
      <ModalContent className="">
        {(onClose) => (
          <>
            <ModalHeader
              className={`${greatVibes.className} flex flex-col gap-1 items-center text-3xl text-zinc-800`}
            >
              Mensajes
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <ScrollShadow
                hideScrollBar
                className="h-[400px] z-30 mx-auto w-full pb-10"
              >
                {loading ? (
                  <div className="flex justify-center items-center h-full">
                    <Spinner color="danger" />
                  </div>
                ) : messages.length > 0 ? (             
                  messages.map((message, index) => {
                    const fecha = new Date(message.created_at).toLocaleString(
                      "es-MX",
                      {
                        dateStyle: "medium",
                        timeStyle: "short",
                      }
                    );

                    return (
                      <div
                        key={index}
                        className="mb-2 flex items-start gap-3 p-2 border border-zinc-200 rounded-lg shadow bg-white hover:shadow transition-all duration-200"
                      >
                        <div className="text-zinc-500 mt-1">
                          <HiOutlineChatBubbleLeftRight size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-zinc-800 font-semibold" style={{ lineHeight: 1.2 }}>
                            {message.name}{" "}
                            <span className="text-xs text-zinc-500">
                              ({message.phone})
                            </span>
                          </p>                          
                          <p className="text-zinc-600 my-2">
                            {message.message}
                          </p>
                          <p className="text-xs text-zinc-400">{fecha}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p
                    className={`text-zinc-50 py-2 text-center flex items-center justify-center gap-2 bg-pink-600 rounded-lg`}
                  >
                    <LuBadgeInfo /> No hay mensajes aún.
                  </p>
                )}
              </ScrollShadow>
              {messages.length > 1 && (
                <motion.div
                  initial={{ y: 0 }}
                  whileInView={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <IoIosArrowDown className="text-zinc-800 text-xl" />
                </motion.div>
              )}
            </ModalBody>
            <ModalFooter className="flex justify-center items-center">
              <button
                type="button"
                className="text-zinc-0 bg-white/0 border text-zinc-800 border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
                onClick={() => {
                  onClose();
                }}
              >
                Cerrar
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Congratulations() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    event: "boda-alondra-antonio",
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phone: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Nombre es requerido";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Teléfono es requerido";
      valid = false;
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Solo números permitidos";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensaje es requerido";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await fetch(
        "https://apirest.unaideamas.com/api/congratulations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al enviar el mensaje");
      }

      const result = await response.json();
      //console.log("Respuesta del servidor:", result);

      alert("¡Gracias por tu felicitación!");
      setFormData({
        event: formData.event, // Mantiene el mismo evento
        name: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Hubo un error al enviar tu mensaje. Por favor intenta nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="section-four"
      className="flex justify-center items-center flex-col p-4 "
      style={{ height: "100svh" }}
    >
      

      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow mb-10 text-zinc-800 z-10`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Felicitaciones
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md w-72 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className={`block text-zinc-800 mb-2 text-sm`}>
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-100 border border-zinc-600/50 rounded text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            placeholder="Escribe tu nombre aquí"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className={`block text-zinc-800 mb-2 text-sm`}>
            Teléfono:
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-100 border border-zinc-600/50 rounded text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            placeholder="Escribe tu teléfono aquí"
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className={`block text-zinc-800 mb-2 text-sm`}
          >
            Mensaje para los novios:
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-100 border border-zinc-600/50 rounded text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-400"
            placeholder="Escribe tu mensaje aquí"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            color="danger"
            className="w-full mb-2"
            type="submit"
            disabled={loading}
            isLoading={loading}
          >
            {loading ? "Enviando..." : "Enviar felicitación"}
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button color="warning" className="w-full" onClick={onOpen}>
            Ver mensajes
          </Button>
        </motion.div>
      </motion.form>

      <ModalMessages isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
}
