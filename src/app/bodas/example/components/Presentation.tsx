
import { motion } from 'framer-motion';
import { crimson, italianno, playfair } from './Fonts';

export default function Presentation() {
  return (
    <>
    <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`${crimson.className} text-5xl text-center pt-3`}
      >
        María & Pedro
      </motion.h1>

      <div className="flex items-center">
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Han sido flechados
        </p>
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </div>

      <p className={`${playfair.className} text-justify mt-3`}>
        Con gran alegría, nos complace anunciar que hemos decidido unir nuestras
        vidas en matrimonio. Este día especial es el comienzo de un nuevo
        capítulo en nuestra historia, un capitulo que queremos escribir junto a
        ustedes, nuestros amigos y familiares más queridos.
      </p>

      <p
        className={`${crimson.className} text-center mt-5 text-lg bg-gradient-to-tl from-black via-gray-900 to-gray-600 text-white rounded-sm`}
      >
        CON LA BENDCIÓN DE NUESTROS PADRES
      </p>

      <div
        className={`${crimson.className} mt-5 flex items-center justify-center`}
      >
        <div className="w-full border-r-1 border-black">
          <p className="text-center">
            PADRES DEL NOVIO <br />
            Jose Franco Olivera Sosa <br />
            Claudia Alves Fuentes
          </p>
        </div>
        <div className="w-full">
          <p className="text-center">
            PADRES DE LA NOVIA <br />
            Jose Franco Olivera Sosa <br />
            Claudia Alves Fuentes
          </p>
        </div>
      </div>

      <p className={`${crimson.className} text-center mt-3`}>&</p>

      <p className={`${crimson.className} text-center mt-3`}>
        NUESTROS PADRINOS DE HONOR <br />
        Ronald Gómez Gutierrez <br />
        Carmen Vera Pómes
      </p>
    </>
  )
}
