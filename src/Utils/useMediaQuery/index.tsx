import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia(query).matches,
  );

  useEffect(() => {
    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    const view = window.matchMedia(query);
    view.addEventListener("change", handleResize);

    return () => view.removeEventListener("change", handleResize);
  }, [query]);

  return isMobile
};

export default useMediaQuery;
