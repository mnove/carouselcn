"use client";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  loop = false,
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
    }),
    [index, handleSetIndex, itemsCount, disableDrag, loop],
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
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  loop = false,
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
    >
      <div className={cn("group/hover relative", className)}>
        <div className="overflow-hidden">{children}</div>
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
  const { index, setIndex, itemsCount, loop } = useCarousel();

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

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-[-12.5%] top-1/2 flex w-[125%] -translate-y-1/2 justify-between px-2",
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
        <ChevronLeft
          className="stroke-zinc-600 dark:stroke-zinc-50"
          size={16}
        />
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
        disabled={!loop && index + 1 === itemsCount}
        onClick={handleNextClick}
      >
        <ChevronRight
          className="stroke-zinc-600 dark:stroke-zinc-50"
          size={16}
        />
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
  const { index, itemsCount, setIndex } = useCarousel();

  return (
    <div
      className={cn(
        "absolute bottom-0 z-10 flex w-full items-center justify-center",
        className,
      )}
    >
      <div className="flex space-x-2">
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
  transition?: {
    duration?: number;
    ease?: string;
  };
};

function CarouselContent({
  children,
  className,
  transition,
}: CarouselContentProps) {
  const { index, setIndex, setItemsCount, disableDrag, loop } = useCarousel();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const childrenArray = Children.toArray(children);
  const itemsLength = childrenArray.length;

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  const handleDragStart = (clientX: number) => {
    if (disableDrag) return;
    dragStartX.current = clientX;
  };

  const handleDragEnd = (clientX: number) => {
    if (disableDrag || dragStartX.current === null) return;

    const diff = dragStartX.current - clientX;

    if (diff > 50) {
      if (index < itemsLength - 1) {
        setIndex(index + 1);
      } else if (loop) {
        setIndex(0);
      }
    } else if (diff < -50) {
      if (index > 0) {
        setIndex(index - 1);
      } else if (loop) {
        setIndex(itemsLength - 1);
      }
    }

    dragStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    handleDragEnd(e.clientX);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (dragStartX.current !== null) {
      handleDragEnd(e.clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleDragEnd(e.changedTouches[0].clientX);
  };

  const duration = transition?.duration ?? 300;
  const ease = transition?.ease ?? "ease-out";

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center",
        !disableDrag && "cursor-grab active:cursor-grabbing",
        className,
      )}
      style={{
        transform: `translateX(-${index * 100}%)`,
        transition: `transform ${duration}ms ${ease}`,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

export type CarouselItemProps = {
  children: ReactNode;
  className?: string;
};

function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div
      className={cn(
        "w-full min-w-0 shrink-0 grow-0 overflow-hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNavigation,
  useCarousel,
};
