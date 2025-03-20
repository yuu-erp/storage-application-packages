"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import GradientHeading from "../gradient-heading";

function AnimatedText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const x = useTransform(smoothProgress, [0, 1], ["100%", "-200%"]);

  return (
    <motion.div ref={ref} style={{ x, willChange: "transform" }}>
      <GradientHeading
        tag="h2"
        className="text-nowrap text-[60px] font-bold lg:text-[120px]"
      >
        We Have Created Mesanovas To Change The World
      </GradientHeading>
    </motion.div>
  );
}

export default AnimatedText;
