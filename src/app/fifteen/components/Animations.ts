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
  hidden: { scale: 2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const animation06 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, delay: 0.6 },
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
