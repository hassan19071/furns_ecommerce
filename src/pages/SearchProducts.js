import { useParams } from "react-router";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";
import SearchProductsFilter from "./components/SearchProductsFilter";

export default function SearchProducts() {
  let searchWord = useParams();

  return (
    <>
      <Nav />
      <SecondHero
        pageName={"search"}
        linkName={searchWord.searchWord}
        parentLink={"search"}
      />
      <SearchProductsFilter />
      <FooterSection />
    </>
  );
}
