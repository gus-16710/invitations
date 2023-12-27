/**
 * Header Animations
 */

export const header = {
  borderBottom: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1, delay: 2 },
    },
  },
  text01: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  },
  text02: {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2 },
    },
  },
  text03: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2.3 },
    },
  },
  timer: {
    hidden: { scale: 0, opacity: 0, rotate: 360 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, delay: 2.6 },
    },
  },
  text04: {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2.6 },
    },
  },
};

/**
 * Presentation Animations
 */

export const presentation = {
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  text01: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  divider: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 1 },
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
  text01: {
    hidden: { scale: 0, opacity: 0, rotate: 360 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  text02: {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, delay: 1 },
    },
  },
  text03: {
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

/**
 * Gallery Animations
 */

export const gallery = {
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  text01: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
};

/**
 * Gifts Animations
 */

export const gifts = {
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  text01: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  icons01: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  icons02: {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
};

/**
 * Confirm Animations
 */

export const confirm = {
  svg: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  },
  text01: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.9 },
    },
  },
  text03: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.9 },
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
