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
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 2 },
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