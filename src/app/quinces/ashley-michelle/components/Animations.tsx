/**
 * Header Animations
 **/

export const header = {
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, type: "spring", stiffness: 70, delay: 0.4 },
    },
  },
  animationText02: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.8 },
    },
  },
  animationText03: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2.5 },
    },
  },
  animationText04: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2.5 },
    },
  },
  animationText05: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 3 },
    },
  },
  animationFrame: {
    hidden: { rotate: 180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 0.8,
      transition: { duration: 1.5, delay: 1.2 },
    },
  },
  animationButton01: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  },
};

/**
 * Presentation Animations
 **/

export const presentation = {
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
    },
  },
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  animationTimer01: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.2 },
    },
  },
  animationTimer02: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.2 },
    },
  },
  animationText02: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.6 },
    },
  },
};

/**
 * Locations Animations
 */

export const locations = {
  icon: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4 } },
  },
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, type: "spring", stiffness: 70, delay: 0.8 },
    },
  },
  animationText02: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  },
  animationText03: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  },
  time01: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  button01: {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  divider: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  animationAlert: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
};

/**
 * God Parents Animations
 **/

export const godParents = {
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
    },
  },
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  animationText02: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
  animationText03: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
};

/**
 * Confirm Animations
 **/

export const confirm = {  
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
    },
  },
  animationText02: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
  animationText03: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
  buttons: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.2 },
    },
  },
};

/**
 * Confirm Animations
 **/

export const gifts = {
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
    },
  },
  animationText02: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  }, 
  animationAccordion: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  }, 
};
