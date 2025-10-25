import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#box", {
      x: 200,
      duration: 2,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      ease: "elastic",
    });
  });
  return (
    <div id="box" className="w-20 h-20 mt-5 border rounded bg-blue-500"></div>
  );
};

export default GsapTo;
