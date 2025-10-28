import AboutSection from "../components/AboutSection";
import ArtSection from "../components/ArtSection";
import CocktailSection from "../components/CocktailSection";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CocktailSection />
      <AboutSection />
      <ArtSection />
      <div className="min-h-screen bg-black"></div>
    </>
  );
};

export default HomePage;
