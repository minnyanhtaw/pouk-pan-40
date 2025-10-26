import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#box",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 300,
        repeat: -1,
        yoyo: true,
        borderRadius: "100%",
        rotation: 360,
        ease: "bounce",
        duration: 2,
      }
    );
  });
  return (
    <div id="box" className="w-20 h-20 mt-5 border rounded bg-blue-500"></div>
  );
};

export default GsapFromTo;
