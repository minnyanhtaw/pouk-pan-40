import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      //   stagger: 0.5,
      ease: "circ.inOut",
      stagger: {
        amount: 2,
        grid: [2, 1],
        axis: "y",
        // ease: "elastic",
        from: "random",
      },
    });
  });
  return (
    <div className="flex items-center gap-3 justify-center">
      <div
        id="box"
        className="stagger-box w-20 h-20 mt-5 border rounded bg-blue-500"
      ></div>
      <div
        id="box"
        className="stagger-box w-20 h-20 mt-5 border rounded bg-blue-500"
      ></div>
      <div
        id="box"
        className="stagger-box w-20 h-20 mt-5 border rounded bg-blue-500"
      ></div>
      <div
        id="box"
        className="stagger-box w-20 h-20 mt-5 border rounded bg-blue-500"
      ></div>
      <div
        id="box"
        className="stagger-box w-20 h-20 mt-5 border rounded bg-blue-500"
      ></div>
    </div>
  );
};

export default GsapStagger;
