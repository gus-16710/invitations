import {
  Great_Vibes,
  League_Spartan,
  Old_Standard_TT,
  Playfair_Display,
  Quicksand,
  Titillium_Web,
} from "next/font/google";

export const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const league = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const standard = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400"],
});

export const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const titillium = Titillium_Web({ subsets: ["latin"], weight: "400" });
