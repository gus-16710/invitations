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
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2, type: "spring" },
    },
  },
  text01: {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, type: "spring" },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 2, type: "spring" },
    },
  },
};
