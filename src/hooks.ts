import { useState, useEffect } from "react";

interface SwipeEvents {
  onSwipeUp: () => void;
  onSwipeDown: () => void;
}

export const useSwipeUpDown = (
  elementId: string,
  events: SwipeEvents,
  threshold = 5 // how much to trigger swipe event
) => {
  const [originY, setOriginY] = useState(0);
  const [endpointY, setEndpointY] = useState(0);

  const handleTouchStart = (e: TouchEvent) => setOriginY(e.touches[0].pageY);

  const handleTouchEnd = (e: TouchEvent) =>
    setEndpointY(e.changedTouches[0].pageY);

  useEffect(() => {
    if (endpointY !== 0 && originY !== 0) {
      if (endpointY - originY > threshold) events.onSwipeDown();
      if (originY - endpointY > threshold) events.onSwipeUp();
      //reset coordinates from previous swipe events
      setOriginY(0);
      setEndpointY(0);
    }
  }, [endpointY, originY]);

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (element) {
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchend", handleTouchEnd);

      return () => {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [elementId]);
};
