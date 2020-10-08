import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { intersectionOptions } from "utils";

export default function useEnterAnimation(
  skipAnimationOnRender = false
): [(node?: Element) => void, boolean, boolean] {
  const [ref, inView] = useInView(intersectionOptions);

  const mountedTime = useRef<number>();
  const [skipAnimation, setSkipAnimation] = useState(skipAnimationOnRender);

  // get a timestamp for when the element was rendered
  useEffect(() => {
    if (skipAnimationOnRender) {
      mountedTime.current = Date.now();
    }
  }, []);

  // check if the element is inView within the threshold, skip animate
  useEffect(() => {
    if (skipAnimationOnRender && inView) {
      const threshold = 100;
      const timeSinceMount = Date.now() - mountedTime.current;

      setSkipAnimation(timeSinceMount < threshold);
    }
  }, [inView]);

  return [ref, inView, skipAnimation];
}
