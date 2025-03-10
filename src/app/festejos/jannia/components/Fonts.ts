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
  Rouge_Script,
  Love_Light,   
  Spicy_Rice,
  Lobster_Two,
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
export const rouge = Rouge_Script({ subsets: ["latin"], weight: "400" });
export const love = Love_Light({ subsets: ["latin"], weight: "400" });
export const ruge = Lobster_Two({ subsets: ["latin"], weight: "400" });