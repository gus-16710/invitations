export const animate01 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  },
};

export const animate02 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.5 },
  },
};

export const animate03 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.5 },
  },
};

export const animate04 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 1.5 },
  },
};

export const animate05 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 2.5 },
  },
};

export const animate06 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 3.5 },
  },
};

export const animate07 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 4.5 },
  },
};

export const animate08 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 5.5 },
  },
};
/** */

export const headerText01 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1 },
  },
};

export const headerText02 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 1.5 },
  },
};

export const headerText03 = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 2.3 },
  },
};

export const animation01 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
  },
};

export const animation02 = {
  hidden: { y: 100, rotate: 180, opacity: 0 },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const animationModal = {
  hidden: { y: -150, rotate: 360 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { duration: 2 },
  },
};

export const animation03 = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.8 },
  },
};

export const animation04 = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
};

export const animation05 = {
  hidden: {
    y: 0,
    //scale: 1,
    // opacity: 0, rotate: 0
  },
  visible: {
    y: [0, 10, 20, 10, 0],
    //scale: [1, 1.5, 1],
    // opacity: [0, 0.5, 1, 0.5, 0],
    // rotate: [0, 30, 60, 30, 0],
    transition: { duration: 5, repeat: Infinity },
  },
};

export const animation06 = {
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

export const animation07 = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const animationSvg01 = {
  hidden: {
    // y: 0,
    rotate: 0,
    // x: 100,
    //scale: 1,
    // opacity: 0, rotate: 0
  },
  visible: {
    //y: [0, 10, 20, 10, 0],
    //scale: [1, 1.5, 1],
    // opacity: [0, 0.5, 1, 0.5, 0],
    // x: 100,
    rotate: [310, 315, 310],
    transition: { duration: 3, repeat: Infinity },
    //transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
  },
};

export const animationSvg02 = {
  hidden: {
    // y: 0,
    //rotate: 0,
    // x: 100,
    scale: 1,
    // opacity: 0, rotate: 0
  },
  visible: {
    //y: [0, 10, 20, 10, 0],
    scale: [0.9, 1, 0.9],
    // opacity: [0, 0.5, 1, 0.5, 0],
    // x: 100,
    //rotate: [310],
    transition: { duration: 3, repeat: Infinity },
    //transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
  },
};

export const animationSvg03 = {
  hidden: {
    rotate: 280,
    scale: 1,
    // opacity: 0, rotate: 0
  },
  visible: {
    //y: [0, 10, 20, 10, 0],
    scale: [0.9, 1, 0.9],
    // opacity: [0, 0.5, 1, 0.5, 0],
    // x: 100,
    //rotate: [310],
    transition: { duration: 3, repeat: Infinity },
    //transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
  },
};

export const animationSvg04 = {
  hidden: {
    //scale: 1,
    // opacity: 0, rotate: 0
    opacity: 0,
    y: 0,
  },
  visible: {
    y: [100, 0, -200, -400, -200, 0, 100],
    //scale: [0.9, 1, 0.9],
    opacity: [0, 1, 0],
    // x: 100,
    //rotate: [310],
    transition: { duration: 30, repeat: Infinity },
    //transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
  },
};

export const animationButton01 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2, type: "spring", stiffness: 70, delay: 0.4 },
  },
};

// ── GodParents elegant entrance animations ──
export const gpTitle01 = {
  hidden: { opacity: 0, x: -50, skewX: 5 },
  visible: {
    opacity: 1, x: 0, skewX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};
export const gpName01 = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.45 },
  },
};
export const gpDot01 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 15, delay: 0.7 },
  },
};
export const gpTitle02 = {
  hidden: { opacity: 0, x: 50, skewX: -5 },
  visible: {
    opacity: 1, x: 0, skewX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
  },
};
export const gpName02 = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.15 },
  },
};
export const gpDot02 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.5, type: "spring", stiffness: 300, damping: 15, delay: 1.4 },
  },
};
export const gpTitle03 = {
  hidden: { opacity: 0, x: -50, skewX: 5 },
  visible: {
    opacity: 1, x: 0, skewX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.6 },
  },
};
export const gpName03 = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.85 },
  },
};

// ── Presentation elegant entrance animations ──
export const presentationEntry01 = {
  hidden: { opacity: 0, rotate: -120, scale: 0.4 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 60,
      damping: 14,
      delay: 0.2,
    },
  },
};

export const presentationEntry02 = {
  hidden: { opacity: 0, y: -50, scale: 1.15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 1.0,
    },
  },
};

export const presentationEntry03 = {
  hidden: { opacity: 0, y: 60, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 85,
      damping: 18,
      delay: 1.7,
    },
  },
};

export const presentationEntry04 = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: "easeOut",
      delay: 2.5,
    },
  },
};

// ── Header elegant entrance animations ──
export const headerEntry01 = {
  hidden: { opacity: 0, scale: 0.82, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.0,
      type: "spring",
      stiffness: 90,
      damping: 22,
      delay: 0.3,
    },
  },
};

export const headerEntry02 = {
  hidden: { opacity: 0, x: -60, skewX: 6 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: 1.1,
    },
  },
};

export const headerEntry03 = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
      delay: 1.75,
    },
  },
};

export const headerEntry04 = {
  hidden: { opacity: 0, y: 45, scale: 0.88 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: 2.3,
    },
  },
};

export const headerEntry05 = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
      delay: 2.9,
    },
  },
};

// ── Gifts (bands) entrance animations ──
export const giftsTitle = {
  hidden: { opacity: 0, y: -30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  },
};
export const giftsBandA = {
  hidden: { opacity: 0, x: -70, rotate: -3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 16, delay: 0.5 },
  },
};
export const giftsBandB = {
  hidden: { opacity: 0, x: 70, rotate: 3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 16, delay: 0.8 },
  },
};

// ── Reception elegant entrance animations ──
export const receptionEntry01 = {
  hidden: { opacity: 0, rotate: 25, scale: 0.5 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.0, type: "spring", stiffness: 65, damping: 14, delay: 0.2 },
  },
};
export const receptionEntry02 = {
  hidden: { opacity: 0, x: -65, skewX: 6 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 },
  },
};
export const receptionEntry03 = {
  hidden: { opacity: 0, x: -60, skewX: 5 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
  },
};
export const receptionEntry04 = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 1.2 },
  },
};
export const receptionEntry05 = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.45 },
  },
};
export const receptionEntry06 = {
  hidden: { opacity: 0, scale: 0.65 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, type: "spring", stiffness: 200, damping: 18, delay: 1.75 },
  },
};

// ── Ceremony elegant entrance animations ──
export const ceremonyEntry01 = {
  hidden: { opacity: 0, rotate: -25, scale: 0.5 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 1.0, type: "spring", stiffness: 65, damping: 14, delay: 0.2 },
  },
};
export const ceremonyEntry02 = {
  hidden: { opacity: 0, y: 55, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.55 },
  },
};
export const ceremonyEntry03 = {
  hidden: { opacity: 0, x: 65, skewX: -6 },
  visible: {
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
  },
};
export const ceremonyEntry04 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay: 1.2 },
  },
};
export const ceremonyEntry05 = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 1.45 },
  },
};
export const ceremonyEntry06 = {
  hidden: { opacity: 0, scale: 0.65 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, type: "spring", stiffness: 200, damping: 18, delay: 1.75 },
  },
};

