import { useParams } from "react-router";
import FooterSection from "./components/FooterSection";
import Nav from "./components/Nav";
import SecondHero from "./components/SecondHero";
import CategoryProductsFilter from "./components/CategoryProductsFilter";



export default function CategoryProducts(){
    let categoryName = useParams();

    return(
        <>
          <Nav/>
          <SecondHero pageName={categoryName.categoryName} linkName={categoryName.categoryName} parentLink={"collection"}/>
          <CategoryProductsFilter />
          <FooterSection />
        </>
    )
}