import { useState, useEffect } from "react";

// used to notify a component that it's element has been focused
// used in ContactFormElements to add outlines to invalid elements
export default function useOnBlur(wasReset: boolean) {
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const onBlur = () => setHasBeenFocused(true);

  useEffect(() => {
    if (!wasReset) return;
    setHasBeenFocused(false);
  }, [wasReset]);

  return { hasBeenFocused, onBlur };
}
