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
    animationDivider: {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.8 },
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
    animationIcon: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 1, delay: 1.9 },
      },
    },
  };