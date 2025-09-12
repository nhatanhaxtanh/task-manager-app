// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top mỗi khi pathname (đường dẫn) thay đổi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
