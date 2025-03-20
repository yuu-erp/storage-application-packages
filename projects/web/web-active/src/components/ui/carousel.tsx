/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { animate, motion, MotionValue, useMotionValue } from "motion/react";
import Image from "next/image";

type CarouselContextType = {
  index: number;
  setIndex: Dispatch<React.SetStateAction<number>>;
};

const CarouselContext = createContext<CarouselContextType | null>(null);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

const CarouselProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(0);

  return (
    <CarouselContext.Provider value={{ index, setIndex }}>
      {children}
    </CarouselContext.Provider>
  );
};

const range = [-1, 0, 1];

const transition: any = {
  type: "spring",
  bounce: 0,
};

interface PageProps {
  index: number;
  renderPage: (props: { index: number }) => React.ReactNode;
  x: MotionValue;
}

function Page({ index, renderPage, x }: PageProps) {
  const child = useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      draggable
      drag="x"
      dragElastic={1}
      className="absolute h-full w-full"
    >
      {child}
    </motion.div>
  );
}

function VirtualizedPage({
  children,
}: {
  children: (props: { index: number }) => React.ReactNode;
}) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { index, setIndex } = useCarousel();
  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index, x]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative h-full w-full overflow-x-hidden"
    >
      {range.map((rangeValue) => {
        return (
          <Page
            key={rangeValue + index}
            x={x}
            index={rangeValue + index}
            renderPage={children}
          />
        );
      })}
    </motion.div>
  );
}

function Carousel({ images }: { images: any[] }) {
  return (
    <div className="h-screen w-screen">
      <VirtualizedPage>
        {({ index }) => {
          const modulo = index % images.length;
          const imageIndex = modulo < 0 ? images.length + modulo : modulo;
          return (
            <div className="flex h-full w-full justify-center">
              <Image
                src={images[imageIndex]}
                draggable={false}
                alt="Carousel image"
                width={1112}
                height={1080}
                className="-translate-y-20 scale-125 object-contain lg:translate-y-0 lg:scale-100"
              />
            </div>
          );
        }}
      </VirtualizedPage>
    </div>
  );
}

export { useCarousel, CarouselProvider, Carousel };
