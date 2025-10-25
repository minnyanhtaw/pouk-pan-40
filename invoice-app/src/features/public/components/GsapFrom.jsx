import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
  useGSAP(() => {
    gsap.from("#box", {
      x: 300,
      repeat: -1,
      yoyo: true,
      duration: 2,
      rotation: 360,
      ease: "elastic",
    });
  });
  return (
    <div id="box" className="w-20 h-20 mt-5 border rounded bg-blue-500"></div>
  );
};

export default GsapFrom;
