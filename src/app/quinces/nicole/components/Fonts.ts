import {
  Great_Vibes,
  Playfair_Display,
  Pinyon_Script,
  Noto_Serif_Balinese,
  Roboto,
  Titillium_Web,
  Oswald,
  Clicker_Script,
  Aref_Ruqaa,
  Rajdhani,
  Yeseva_One,
  Quicksand
} from "next/font/google";

export const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
export const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
export const pinyion = Pinyon_Script({ subsets: ["latin"], weight: ["400"] });
export const notoSerif = Noto_Serif_Balinese({
  subsets: ["latin"],
  weight: ["400"],
});
export const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });
export const oswald = Oswald({ subsets: ["latin"], weight: "400" });
export const clicker = Clicker_Script({ subsets: ["latin"], weight: "400" });
export const aref = Aref_Ruqaa({ subsets: ["latin"], weight: "400" });
export const rajdhani = Rajdhani({ subsets: ["latin"], weight: "400" });
export const yaseva = Yeseva_One({ subsets: ["latin"], weight: "400" });

export const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

//box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;