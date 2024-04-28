import { useParams } from "react-router";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";
import ProductDetailsSection from "./components/ProductDetailsSection";

export default function ProductDetails() {
  let productName = useParams();

  return (
    <>
      <Nav />
      <SecondHero
        pageName={productName.productName}
        linkName={productName.productName}
        parentLink={"product"}
      />
      <ProductDetailsSection />
      <FooterSection />
    </>
  );
}
