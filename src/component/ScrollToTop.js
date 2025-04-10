"use client"
import { useEffect, useRef, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const topRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={topRef}></div>

      {isVisible && (
        <div
          onClick={handleScrollToTop}
          className="h-12 w-12 text-center bg-4 rounded-full fixed z-20 bottom-100 right-4  cursor-pointer hover:bg-3 transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          <FaArrowUp className="text-white" title="Scroll to top" />
        </div>
      )}
    </>
  );
}
