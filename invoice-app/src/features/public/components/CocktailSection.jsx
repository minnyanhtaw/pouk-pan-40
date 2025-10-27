import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../../constants/navLinks";
import gsap from "gsap";

const CocktailSection = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline.from("#c-left-leaf", { x: -100, y: 100 });
    parallaxTimeline.from("#c-right-leaf", { x: 100, y: 100 });
  });

  return (
    <section id="cocktails" className="noisy">
      <img id="c-left-leaf" src="/images/cocktail-left-leaf.png" alt="l-leaf" />
      <img
        id="c-right-leaf"
        src="/images/cocktail-right-leaf.png"
        alt="r-leaf"
      />

      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails:</h2>

          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most loved mocktails:</h2>

          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CocktailSection;
