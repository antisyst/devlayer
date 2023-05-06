import React, { useEffect, useRef } from "react";

interface AdvancedAnimationProps {
  children: React.ReactNode;
}

const AdvancedAnimation: React.FC<AdvancedAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, bottom } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom >= 0) {
          const translateY = Math.min((1 - (top / windowHeight)) * 50, 20);
          const rotateX = (1 - (top / windowHeight)) * 90;
          const opacity = (1 - (top / windowHeight)) * 2;
          ref.current.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg)`;
          ref.current.style.opacity = `${opacity}`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="advanced-animation"
      style={{ opacity: 0, transform: "translateY(50px) rotateX(90deg)", transition: "opacity 0.5s, transform 0.5s" }}
    >
      {children}
    </div>
  );
};

export default AdvancedAnimation;