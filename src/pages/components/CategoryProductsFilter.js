import { useParams } from "react-router-dom";
import "./style/products.scss";
import { useEffect, useState } from "react";
import NoProducts from "./NoProducts";
import ProductBlog from "./ProductBlog";

let categoriesNames = [
  "dining",
  "living",
  "office-table",
  "office-chair",
  "lounge",
  "bedroom",
  "hospital-bed",
  "hospital-utility",
];
export default function CategoryProductsFilter() {
  let [thereArePros, setTherArePros] = useState(false);
  // eslint-disable-next-line
  let [cats, setCats] = useState(categoriesNames);
  let categoryName = useParams();

  useEffect(() => {
    if (cats.includes(categoryName.categoryName)) {
      setTherArePros(true);
    }
  }, [categoryName, cats]);

  return (
    <div className="products-filter py-5">
      <div className="container px-lg-5 py-3">
        {thereArePros && (
          <>
            <div className="filter d-flex align-items-center justify-content-between">
              <div className="products-number">Showing {"8"} Products</div>
              <div className="sort d-flex align-items-center">
                <span>Sort by</span>
                <select className="ms-2">
                  <option>Relevance</option>
                  <option>Name (A - Z)</option>
                  <option>Name (Z - A)</option>
                  <option>Price (Low - High)</option>
                  <option>Price (High - Low)</option>
                </select>
              </div>
            </div>
            <div className="products new-arrival">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs mt-4">
                  <ProductBlog />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs mt-4">
                  <ProductBlog />
                </div>
              </div>
            </div>{" "}
          </>
        )}
        {!thereArePros && <NoProducts msg={"There are no products!"} />}
      </div>
    </div>
  );
}
