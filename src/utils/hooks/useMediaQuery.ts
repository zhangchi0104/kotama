/** @format */

import { useCallback, useEffect, useRef, useState } from 'react';
export const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(window.matchMedia(query).matches);
  const matchMediaRef = useRef(window.matchMedia(query));
  const handleChange = useCallback(() => {
    if (match != matchMediaRef.current.matches) {
      setMatch(matchMediaRef.current.matches);
    }
  }, [match]);
  useEffect(() => {
    const matchMedia = matchMediaRef.current;
    matchMedia.addEventListener('change', handleChange);
    return () => matchMedia.removeEventListener('change', handleChange);
  }, [handleChange]);
  return match;
};
