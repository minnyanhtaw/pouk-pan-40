import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  useGSAP(() => {
    gsap.to("#text", {
      opacity: 1,
      ease: "power1.inOut",
      y: 0,
    });
  }, []);

  return (
    <div>
      <h1
        id="text"
        className="py-2 translate-y-10 text-4xl font-bold opacity-0"
      >
        san kyi tar par
      </h1>
    </div>
  );
};

export default GsapText;
