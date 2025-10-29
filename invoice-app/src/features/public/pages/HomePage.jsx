import AboutSection from "../components/AboutSection";
import ArtSection from "../components/ArtSection";
import CocktailSection from "../components/CocktailSection";
import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CocktailSection />
      <AboutSection />
      <ArtSection />
      <MenuSection />
      <div className="min-h-screen bg-black"></div>
      <div className="min-h-screen bg-black"></div>
      <div className="min-h-screen bg-black"></div>
      <div className="min-h-screen bg-black"></div>
      <div className="min-h-screen bg-black"></div>
      <div className="min-h-screen bg-black"></div>
    </>
  );
};

export default HomePage;
