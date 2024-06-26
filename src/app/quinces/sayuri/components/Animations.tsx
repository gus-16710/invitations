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
 * Ceremony Animations
 **/

export const ceremony = {
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  },
  text03: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  text04: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 },
    },
  },
  button: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,      
      transition: { duration: 1, delay: 2.5 },
    },
  },
};

/**
 * Reception Animations
 **/

export const reception = {
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  },
  text02: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1 },
    },
  },
  text03: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 1.5 },
    },
  },
  text04: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 },
    },
  },
  button: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,      
      transition: { duration: 1, delay: 2.5 },
    },
  },
};

/**
 * GodParents Animations
 **/

export const godParents = {  
  text01: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
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
  alert: {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
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
