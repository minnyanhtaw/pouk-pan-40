import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "top 50%",
          end: "top 0",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  });
  return (
    <div
      ref={scrollRef}
      className="flex flex-col items-center justify-center py-60"
    >
      <div
        id="box"
        className="stagger-box w-32 h-32 mt-5 rounded bg-red-500"
      ></div>
      <div
        id="box"
        className="stagger-box w-32 h-32 mt-5 rounded bg-blue-500"
      ></div>
    </div>
  );
};

export default GsapScrollTrigger;
