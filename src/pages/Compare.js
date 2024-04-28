import CompareProducts from "./components/ComapreProducts";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";

export default function Compare() {
  return (
    <>
      <Nav />
      <SecondHero pageName="wishlist" linkName="wishlist" />
      <CompareProducts />
      <FooterSection />
    </>
  );
}
