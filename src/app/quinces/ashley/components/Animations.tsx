/**
 * Header Animations
 **/

export const header = {
  animationText01: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: "spring", stiffness: 70, delay: 0.4 },
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
  animationFrame: {
    hidden: { rotate: 180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 0.8,
      transition: { duration: 1, delay: 1.2 },
    },
  },
  animationText03: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  animationText04: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  animationText05: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 2 },
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
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 1, delay: 0.3 } },
  },
  animationText01: {
    hidden: { scale: 0, opacity: 0, rotate: 360 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  animationText02: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
  animationText03: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
  time01: {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  button01: {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
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
};
