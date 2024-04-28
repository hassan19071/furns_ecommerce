import "./style/products.scss";
import { useState } from "react";
import NoProducts from "./NoProducts";
import ProductBlog from "./ProductBlog";

export default function TrendingProducts() {
  // eslint-disable-next-line
  let [thereArePros, setTherArePros] = useState(false);
  if (!thereArePros) {
    return <NoProducts msg={"There are no products!"} />;
  }
  return (
    <div className="products new-arrival">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs mt-4">
          <ProductBlog />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs mt-4">
          <ProductBlog />
        </div>
      </div>
    </div>
  );
}
