// components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use 'auto' if 'instant' isn't supported
    });
    
    // Fallback for older browsers/Safari
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;