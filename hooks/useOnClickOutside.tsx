/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, RefObject } from "react";

// modified this hook from useHooks
export default function useOnClickOutside(
  ref: RefObject<any>,
  callback: () => void,
  extraRef: RefObject<any> | null = null
): void {
  // wrapping the callback in a useCallback to avoid the effect running every time
  const handler = useCallback(() => callback(), []);

  useEffect(() => {
    const clickListener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

      // Do nothing if clicking something specific outside the main ref
      // ie) clicking a close icon that's not inside the main ref
      if (
        extraRef !== null &&
        (!extraRef.current || extraRef.current.contains(event.target))
      )
        return;

      handler();
    };

    const keyListener = (event: KeyboardEvent) => {
      // Do nothing if it's not the escape key being pushed
      if (event.keyCode !== 27) return;

      handler();
    };

    document.addEventListener("mousedown", clickListener);
    document.addEventListener("touchstart", clickListener);
    document.addEventListener("keydown", keyListener);

    return () => {
      document.removeEventListener("mousedown", clickListener);
      document.removeEventListener("touchstart", clickListener);
      document.removeEventListener("keydown", keyListener);
    };
  }, [ref, handler, extraRef]);
}
