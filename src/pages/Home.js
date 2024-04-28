import Banners from "./components/Banners";
import Categories from "./components/Categories";
import FooterSection from "./components/FooterSection";
import LatestNews from "./components/LetastNews";
import MainHero from "./components/MainHero";
import Nav from "./components/Nav";
import ProductsSection from "./components/productsSection";

export default function Home() {
  return (
    <>
      <Nav />
      <MainHero />
      <Categories />
      <ProductsSection />
      <Banners />
      <LatestNews />
      <FooterSection />
    </>
  );
}
