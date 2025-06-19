import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

function AnimatedTextLines({ text, className }) {
  const containerRef = useRef(null);
  const linesRef = useRef([]);
  const lines = text.split("\n").filter((line) => line.trim() !== "");

  useGSAP(() => {
    if (linesRef.current.length > 0) {
      gsap.from(linesRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        }
      })
    }
  })

  return (
    <div ref={containerRef} className= {className}>
      {lines.map((line, index) => (
        <span
        key={index} 
        ref={(el) => (linesRef.current[index] = el) }
        className="block leading-relaxed tracking-wide text-pretty">{line}</span>
      ))}
    </div>
  );
}

export default AnimatedTextLines;
