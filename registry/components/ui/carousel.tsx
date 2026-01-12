"use client";
import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CarouselContextType = {
  index: number;
  setIndex: (newIndex: number) => void;
  itemsCount: number;
  setItemsCount: (newItemsCount: number) => void;
  disableDrag: boolean;
  loop: boolean;
  infiniteLoop: boolean;
  onNextRef: React.RefObject<(() => void) | undefined>;
  onPrevRef: React.RefObject<(() => void) | undefined>;
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
  infiniteLoop?: boolean;
};

function CarouselProvider({
  children,
  initialIndex = 0,
  onIndexChange,
  disableDrag = false,
  loop = false,
  infiniteLoop = false,
}: CarouselProviderProps) {
  const [index, setIndex] = useState<number>(initialIndex);
  const [itemsCount, setItemsCount] = useState<number>(0);
  const onNextRef = useRef<(() => void) | undefined>(undefined);
  const onPrevRef = useRef<(() => void) | undefined>(undefined);

  const handleSetIndex = (newIndex: number) => {
    setIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  useEffect(() => {
    setIndex(initialIndex);
  }, [initialIndex]);

  return (
    <CarouselContext.Provider
      value={{
        index,
        setIndex: handleSetIndex,
        itemsCount,
        setItemsCount,
        disableDrag,
        loop,
        infiniteLoop,
        onNextRef,
        onPrevRef,
      }}
    >
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
  infiniteLoop?: boolean;
};

function Carousel({
  children,
  className,
  initialIndex = 0,
  index: externalIndex,
  onIndexChange,
  disableDrag = false,
  loop = false,
  infiniteLoop = false,
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
      infiniteLoop={infiniteLoop}
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
  const { index, setIndex, itemsCount, loop, infiniteLoop, onNextRef, onPrevRef } =
    useCarousel();

  const canLoop = loop || infiniteLoop;

  const handlePrevClick = () => {
    if (infiniteLoop && onPrevRef.current) {
      onPrevRef.current();
    } else if (index > 0) {
      setIndex(index - 1);
    } else if (canLoop) {
      setIndex(itemsCount - 1);
    }
  };

  const handleNextClick = () => {
    if (infiniteLoop && onNextRef.current) {
      onNextRef.current();
    } else if (index < itemsCount - 1) {
      setIndex(index + 1);
    } else if (canLoop) {
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
        disabled={!canLoop && index === 0}
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
        disabled={!canLoop && index + 1 === itemsCount}
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
  const {
    index,
    setIndex,
    setItemsCount,
    disableDrag,
    loop,
    infiniteLoop,
    onNextRef,
    onPrevRef,
  } = useCarousel();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);

  const childrenArray = Children.toArray(children);
  const itemsLength = childrenArray.length;

  // For infinite loop, we track the position including clones
  // The offset is itemsLength because we prepend one full set of clones
  const infiniteOffset = itemsLength;
  const [infiniteIndex, setInfiniteIndex] = useState(infiniteOffset + index);

  useEffect(() => {
    if (!itemsLength) {
      return;
    }

    setItemsCount(itemsLength);
  }, [itemsLength, setItemsCount]);

  // Handle the seamless reset after transition for infinite loop
  useEffect(() => {
    if (!infiniteLoop || !isTransitioning) return;

    const duration = transition?.duration ?? 300;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [infiniteLoop, isTransitioning, transition?.duration]);

  const handleDragStart = (clientX: number) => {
    if (disableDrag) return;
    dragStartX.current = clientX;
  };

  const handleNext = useCallback(() => {
    if (infiniteLoop) {
      setIsTransitioning(true);
      setInfiniteIndex((prev) => {
        const next = prev + 1;
        // If we've gone past the end clones, reset to the beginning of originals
        if (next >= itemsLength * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setInfiniteIndex(itemsLength);
          }, transition?.duration ?? 300);
        }
        return next;
      });
    }
    setIndex((index + 1) % itemsLength);
  }, [infiniteLoop, index, itemsLength, setIndex, transition?.duration]);

  const handlePrev = useCallback(() => {
    if (infiniteLoop) {
      setIsTransitioning(true);
      setInfiniteIndex((prev) => {
        const next = prev - 1;
        // If we've gone before the start clones, reset to the end of originals
        if (next <= 0) {
          setTimeout(() => {
            setIsTransitioning(false);
            setInfiniteIndex(itemsLength);
          }, transition?.duration ?? 300);
        }
        return next;
      });
    }
    setIndex((index - 1 + itemsLength) % itemsLength);
  }, [infiniteLoop, index, itemsLength, setIndex, transition?.duration]);

  // Register handlers for navigation buttons when using infiniteLoop
  useEffect(() => {
    if (infiniteLoop) {
      onNextRef.current = handleNext;
      onPrevRef.current = handlePrev;
    }
  });

  const handleDragEnd = (clientX: number) => {
    if (disableDrag || dragStartX.current === null) return;

    const diff = dragStartX.current - clientX;
    const canLoop = loop || infiniteLoop;

    if (diff > 50) {
      if (infiniteLoop) {
        handleNext();
      } else if (index < itemsLength - 1) {
        setIndex(index + 1);
      } else if (canLoop) {
        setIndex(0);
      }
    } else if (diff < -50) {
      if (infiniteLoop) {
        handlePrev();
      } else if (index > 0) {
        setIndex(index - 1);
      } else if (canLoop) {
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

  // For infinite loop, create clones at both ends
  const renderChildren = () => {
    if (!infiniteLoop) {
      return children;
    }

    // Clone all items: [clones of all] [original items] [clones of all]
    return (
      <>
        {childrenArray.map((child, i) =>
          isValidElement(child)
            ? cloneElement(child, { key: `clone-start-${i}` })
            : child,
        )}
        {childrenArray.map((child, i) =>
          isValidElement(child)
            ? cloneElement(child, { key: `original-${i}` })
            : child,
        )}
        {childrenArray.map((child, i) =>
          isValidElement(child)
            ? cloneElement(child, { key: `clone-end-${i}` })
            : child,
        )}
      </>
    );
  };

  const currentPosition = infiniteLoop ? infiniteIndex : index;
  const shouldAnimate = !infiniteLoop || isTransitioning;

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center",
        !disableDrag && "cursor-grab active:cursor-grabbing",
        className,
      )}
      style={{
        transform: `translateX(-${currentPosition * 100}%)`,
        transition: shouldAnimate ? `transform ${duration}ms ${ease}` : "none",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {renderChildren()}
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
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
};
