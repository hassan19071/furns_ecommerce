import CartProducts from "./components/CartProducts";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";

export default function Cart() {
  return (
    <>
      <Nav />
      <SecondHero pageName="Cart" linkName="cart" />
      <CartProducts />
      <FooterSection />
    </>
  );
}
