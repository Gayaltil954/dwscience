// Animation variants and utilities for Framer Motion
import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { 
    y: 100, 
    opacity: 0 
  },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const rotateIn: Variants = {
  hidden: { 
    opacity: 0, 
    rotate: -180,
    scale: 0 
  },
  visible: { 
    opacity: 1, 
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any
    }
  }
};

export const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut" as any
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as any
  }
};

export const hoverLift = {
  y: -10,
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as any
  }
};

export const parallaxVariants = (speed: number = 50) => ({
  hidden: { y: 0 },
  visible: { 
    y: speed,
    transition: {
      ease: "linear" as any
    }
  }
});

// Default viewport config for scroll animations
export const defaultViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px"
};
