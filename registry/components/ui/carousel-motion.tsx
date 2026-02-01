"use client";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { motion, useMotionValue, type Transition } from "motion/react";
import {
  Children,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number | ((prev: number) => number)) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
  loop: boolean;
  orientation: "horizontal" | "vertical";
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined,
);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within an CarouselProvider");
  }
  return context;
}

export type CarouselProviderProps = {
  children: ReactNode;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
  loop?: boolean;
  orientation?: "horizontal" | "vertical";
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  loop = false,
  orientation = "horizontal",
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);

  const handleSetIndex = useCallback(
    (newIndex: number | ((prev: number) => number)) => {
      if (typeof newIndex === "function") {
        setIndex((prev) => {
          const next = newIndex(prev);
          onIndexChange?.(next);
          return next;
        });
      } else {
        setIndex(newIndex);
        onIndexChange?.(newIndex);
      }
    },
    [onIndexChange],
  );

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  const contextValue = useMemo(
    () => ({
      index,
      setIndex: handleSetIndex,
      itemsCount,
      setItemsCount,
      disableDrag,
      loop,
      orientation,
    }),
    [index, handleSetIndex, itemsCount, disableDrag, loop, orientation],
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      {children}
    </CarouselContext.Provider>
  );
}

export type CarouselProps = {
  children: ReactNode;
  className?: string;
  initialIndex?: number;
  index?: number;
  onIndexChange?: (newIndex: number) => void;
  disableDrag?: boolean;
  loop?: boolean;
  orientation?: "horizontal" | "vertical";
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  loop = false,
  orientation = "horizontal",
}: CarouselProps) {
  const [internalIndex, setInternalIndex] = useState<number>(initialIndex);
  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;

  const handleIndexChange = (newIndex: number) => {
    if (!isControlled) {
      setInternalIndex(newIndex);
    }
    onIndexChange?.(newIndex);
  };

  return (
    <CarouselProvider
      initialIndex={currentIndex}
      onIndexChange={handleIndexChange}
      disableDrag={disableDrag}
      loop={loop}
      orientation={orientation}
    >
      <div className={cn("group/hover relative h-full", className)}>
        <div className="h-full overflow-hidden">{children}</div>
      </div>
    </CarouselProvider>
  );
}

export type CarouselNavigationProps = {
  className?: string;
  classNameButton?: string;
  alwaysShow?: boolean;
};

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
}: CarouselNavigationProps) {
  const { index, setIndex, itemsCount, loop, orientation } = useCarousel();
  const isVertical = orientation === "vertical";

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (loop) {
      setIndex(itemsCount - 1);
    }
  };

  const handleNextClick = () => {
    if (index < itemsCount - 1) {
      setIndex(index + 1);
    } else if (loop) {
      setIndex(0);
    }
  };

  const PrevIcon = isVertical ? ChevronUp : ChevronLeft;
  const NextIcon = isVertical ? ChevronDown : ChevronRight;

  return (
    <div
      className={cn(
        "pointer-events-none absolute flex justify-between",
        isVertical
          ? "left-1/2 top-[-12.5%] h-[125%] -translate-x-1/2 flex-col py-2"
          : "left-[-12.5%] top-1/2 w-[125%] -translate-y-1/2 px-2",
        className,
      )}
    >
      <button
        type="button"
        aria-label="Previous slide"
        className={cn(
          "pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          alwaysShow
            ? "disabled:opacity-40"
            : "group-hover/hover:disabled:opacity-40",
          classNameButton,
        )}
        disabled={!loop && index === 0}
        onClick={handlePrevClick}
      >
        <PrevIcon className="stroke-zinc-600 dark:stroke-zinc-50" size={16} />
      </button>
      <button
        type="button"
        className={cn(
          "pointer-events-auto h-fit w-fit rounded-full bg-zinc-50 p-2 transition-opacity duration-300 dark:bg-zinc-950",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          alwaysShow
            ? "disabled:opacity-40"
            : "group-hover/hover:disabled:opacity-40",
          classNameButton,
        )}
        aria-label="Next slide"
        disabled={!loop && index >= itemsCount - 1}
        onClick={handleNextClick}
      >
        <NextIcon className="stroke-zinc-600 dark:stroke-zinc-50" size={16} />
      </button>
    </div>
  );
}

export type CarouselIndicatorProps = {
  className?: string;
  classNameButton?: string;
};

function CarouselIndicator({
  className,
  classNameButton,
}: CarouselIndicatorProps) {
  const { index, itemsCount, setIndex, orientation } = useCarousel();
  const isVertical = orientation === "vertical";

  return (
    <div
      className={cn(
        "absolute z-10 flex items-center justify-center",
        isVertical
          ? "right-0 top-1/2 h-full -translate-y-1/2 flex-col"
          : "bottom-0 w-full",
        className,
      )}
    >
      <div
        className={cn("flex", isVertical ? "flex-col space-y-2" : "space-x-2")}
      >
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-opacity duration-300",
              index === i
                ? "bg-zinc-950 dark:bg-zinc-50"
                : "bg-zinc-900/50 dark:bg-zinc-100/50",
              classNameButton,
            )}
          />
        ))}
      </div>
    </div>
  );
}

export type CarouselContentProps = {
  children: ReactNode;
  className?: string;
  transition?: Transition;
};

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 90,
  damping: 18,
  duration: 0.2,
};

function CarouselContent({
  children,
  className,
  transition = DEFAULT_TRANSITION,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag, loop, orientation } =
    useCarousel();
  const [visibleItemsCount, setVisibleItemsCount] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVertical = orientation === "vertical";

  const dragValue = useMotionValue(0);
  const itemsLength = Children.count(children);

  // Detect visible items using IntersectionObserver
  useEffect(() => {
    if (!containerRef.current) return;

    const options = {
      root: containerRef.current,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleCount = entries.filter(
        (entry) => entry.isIntersecting,
      ).length;
      setVisibleItemsCount(visibleCount);
    }, options);

    const childNodes = containerRef.current.children;
    Array.from(childNodes).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, [children]);

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const onDragEnd = () => {
    const dragOffset = dragValue.get();

    if (dragOffset <= -10 && index < itemsLength - 1) {
      setIndex(index + 1);
    } else if (dragOffset >= 10 && index > 0) {
      setIndex(index - 1);
    } else if (loop) {
      if (dragOffset <= -10 && index === itemsLength - 1) {
        setIndex(0);
      } else if (dragOffset >= 10 && index === 0) {
        setIndex(itemsLength - 1);
      }
    }
  };

  const dragDirection = isVertical ? "y" : "x";
  const animateValue = isVertical
    ? { translateY: `-${index * (100 / visibleItemsCount)}%` }
    : { translateX: `-${index * (100 / visibleItemsCount)}%` };

  return (
    <motion.div
      ref={containerRef}
      drag={disableDrag ? false : dragDirection}
      dragConstraints={
        disableDrag ? undefined : { left: 0, right: 0, top: 0, bottom: 0 }
      }
      dragMomentum={disableDrag ? undefined : false}
      style={disableDrag ? undefined : { [dragDirection]: dragValue }}
      animate={animateValue}
      onDragEnd={disableDrag ? undefined : onDragEnd}
      transition={transition}
      className={cn(
        "flex h-full",
        isVertical ? "flex-col" : "items-center",
        !disableDrag && "cursor-grab active:cursor-grabbing",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  const { orientation } = useCarousel();
  const isVertical = orientation === "vertical";

  return (
    <motion.div
      className={cn(
        "shrink-0 grow-0 overflow-hidden",
        isVertical ? "h-full min-h-0 w-full" : "min-w-0 w-full",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export type UseCarouselAutoplayOptions = {
  interval?: number;
  autoStart?: boolean;
};

function useCarouselAutoplay(options: UseCarouselAutoplayOptions = {}) {
  const { interval = 3000, autoStart = true } = options;
  const { index, setIndex, itemsCount, loop } = useCarousel();
  const [isPlaying, setIsPlaying] = useState(autoStart);

  useEffect(() => {
    if (!isPlaying || itemsCount === 0) return;

    const timer = setInterval(() => {
      if (index < itemsCount - 1) {
        setIndex(index + 1);
      } else if (loop) {
        setIndex(0);
      } else {
        setIsPlaying(false);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [index, itemsCount, loop, interval, isPlaying, setIndex]);

  return {
    isPlaying,
    play: () => setIsPlaying(true),
    pause: () => setIsPlaying(false),
    toggle: () => setIsPlaying((prev) => !prev),
  };
}

export {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
  useCarousel,
  useCarouselAutoplay,
};
