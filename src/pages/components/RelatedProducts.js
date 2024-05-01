import ProductBlog from "./ProductBlog";

export default function RelatedProduction() {
  return (
    <div className="related py-5">
      <div className="container px-lg-5 py-3">
        <h3 style={{ fontSize: "27px", fontWeight: "bold" }}>
          Related Products
        </h3>
        <div className="row mt-5">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
            <ProductBlog />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
            <ProductBlog />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
            <ProductBlog />
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 mt-3">
            <ProductBlog />
          </div>
        </div>
      </div>
    </div>
  );
}
