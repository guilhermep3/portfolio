"use client"
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;

      const percentage = scrollTotal > 0 ? scrollPosition / scrollTotal : 0;
      setScrollPercentage(percentage);
      setIsVisible(scrollPosition > 300);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-5 right-5 sm:bottom-10 sm:right-10 p-3 md:p-4 rounded-full bg-gray-800 z-30 transition duration-300 cursor-pointer flex overflow-hidden
         ${isVisible ? 'pointer-events-auto opacity-100' : ' pointer-events-none opacity-0'}`}
      onClick={scrollToTop}
    >
      <ArrowUp className="text-white" />
      <span
        className="absolute top-0 left-0 w-full h-full bg-[var(--primary-color)] -z-[1] origin-bottom transition-transform duration-100"
        style={{ transform: `scaleY(${scrollPercentage})` }}
      />
    </button>
  )
}