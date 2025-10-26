import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#box", {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: "back.inOut",
    });

    timeline.to("#box", {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    });
  });

  return (
    <>
      <button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
        className="px-4 py-2 border border-gray-200 items-center justify-start"
      >
        Play/Pause
      </button>
      <div id="box" className="w-20 h-20 mt-5 border rounded bg-blue-500"></div>
    </>
  );
};

export default GsapTimeline;
