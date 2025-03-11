"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import app1 from "@public/images/app-1.png";
import app2 from "@public/images/app-2.png";
import { Carousel, CarouselProvider, useCarousel } from "../ui/carousel";

const images = [app1, app2];

function CarouselIndicator() {
  const indicatorWidth = 320;
  const indicatorItemWidth = indicatorWidth / images.length;

  const { index } = useCarousel();

  return (
    <div className="hidden w-full justify-end lg:flex">
      <div
        style={{ width: indicatorWidth }}
        className="relative h-1 overflow-hidden rounded-sm bg-white/20"
      >
        <motion.div
          className="h-full bg-white"
          animate={{ x: (index % images.length) * indicatorItemWidth }}
          style={{
            width: indicatorItemWidth,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

function CarouselContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-0">
      <Carousel images={images} />
    </div>,
    document.body,
  );
}

function HomeCarousel() {
  return (
    <CarouselProvider>
      <CarouselIndicator />
      <CarouselContent />
    </CarouselProvider>
  );
}

export default HomeCarousel;
