import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ behavior = "auto" }) => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (hash) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior,
    });
  }, [pathname, search, hash, behavior]);

  return null;
};

export default ScrollToTop;
