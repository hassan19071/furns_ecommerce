import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";
import WishlistProducts from "./components/WishlistProducts";

export default function Wishlist() {
  return (
    <>
      <Nav />
      <SecondHero pageName="wishlist" linkName="wishlist" />
      <WishlistProducts />
      <FooterSection />
    </>
  );
}
