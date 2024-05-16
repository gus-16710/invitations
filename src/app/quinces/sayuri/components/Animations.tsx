/**
 * Header Animations
 **/

export const header = {
  roundFrame: {
    hidden: { scale: 0, rotate: 180, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 0.8,
      transition: { duration: 1.5, delay: 0.2 },
    },
  },
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 3 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 3 },
    },
  },
  text03: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 3.5 },
    },
  },
};

/**
 * Presentation Animations
 **/

export const presentation = {
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 },
    },
  },
  timer01: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  timer02: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1.5 },
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
 * Gallery Animations
 **/

export const gallery = {
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  },
};

/**
 * Confirm Animations
 **/
export const confirm = {
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  text03: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 },
    },
  },
  button01: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { duration: 1, delay: 2 },
    },
  },
  button02: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { duration: 1, delay: 2 },
    },
  },
};
