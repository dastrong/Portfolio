import { useCallback, useEffect } from "react";

// modified this hook from useHooks
export default function useOnClickOutside(ref, callback) {
  // wrapping the callback in a useCallback to avoid the effect running every time
  const handler = useCallback(() => callback(), []);

  useEffect(() => {
    const clickListener = (event: MouseEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) return;

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
  }, [ref, handler]);
}
