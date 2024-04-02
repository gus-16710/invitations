import {
  Pinyon_Script,
  Playfair_Display,
  Noto_Serif_Balinese,
  Anton,
  Whisper,
  Aref_Ruqaa,
} from "next/font/google";

export const aref = Aref_Ruqaa({ subsets: ["latin"], weight: "400" });
export const pinyion = Pinyon_Script({ subsets: ["latin"], weight: ["400"] });
export const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export const notoSerif = Noto_Serif_Balinese({
  subsets: ["latin"],
  weight: ["400"],
});
export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});
export const whisper = Whisper({
  subsets: ["latin"],
  weight: ["400"],
});
