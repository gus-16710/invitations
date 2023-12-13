import {
  Playfair_Display,
  Merriweather,
  Lora,
  Beau_Rivage,
  Whisper,
  Dancing_Script,
  Lobster_Two,
  Anton,
  Roboto
} from "next/font/google";

export const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export const rivage = Beau_Rivage({
  subsets: ["latin"],
  weight: ["400"],
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
});

export const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const whisper = Whisper({
  subsets: ["latin"],
  weight: ["400"],
});

export const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

export const lobster = Lobster_Two({
  subsets: ["latin"],
  weight: ["400"],
});

export const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
});
