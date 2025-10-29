import AboutSection from "../components/AboutSection";
import ArtSection from "../components/ArtSection";
import CocktailSection from "../components/CocktailSection";
import ContactSection from "../components/ContactSection";
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
      <ContactSection />
    </>
  );
};

export default HomePage;
