"use client";
import { motion } from "framer-motion";

export default function Animation({
  as = "div", // default element
  direction = "left",
  delay = 0,
  duration = 0.6,
  className = "",
  children,
}) {
  const MotionTag = motion[as]; // Dynamically pick motion.div, motion.h2, etc.

  // Determine direction offset
  const offset =
    direction === "left"
      ? { x: -30 }
      : direction === "right"
      ? { x: 30 }
      : direction === "down"
      ? { y: -30 }
       : direction === "up"
      ? { y: 30 }
      : { y: 30 };

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
