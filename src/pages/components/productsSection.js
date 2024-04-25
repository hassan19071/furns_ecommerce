
import { useState } from "react";
import NewArrivalProducts from "./NewArrivalProducts";
import "./style/products-section.scss";
import FeaturedProducts from './FeaturedProducts';
import OnSaleProducts from './OnSale';
import TrendingProducts from './TrendingProducts';

export default function ProductsSection(){
    let [activePros,setActivePros] = useState(0);

    function handleActivePros(index){
        setActivePros(index);
    }
    return(
        <div className="all-products py-5">
            <div className="container px-lg-5">
                <div className="head text-center">
                    <h3>Our Products</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
                </div>
                <div className="products-container">
                    <div className="status">
                       <ul className="list-unstyled d-flex justify-content-center">
                        <li className={activePros === 0? "active":""} onClick={()=> handleActivePros(0)}>New Arrival</li>
                        <li className={activePros === 1? "active":""} onClick={()=> handleActivePros(1)}>Featured</li>
                        <li className={activePros === 2? "active":""} onClick={()=> handleActivePros(2)}>On Sale</li>
                        <li className={activePros === 3? "active":""} onClick={()=> handleActivePros(3)}>Trending</li>
                       </ul>
                    </div>
                    {activePros === 0 && <NewArrivalProducts />}
                    {activePros === 1 && <FeaturedProducts />}
                    {activePros === 2 && <OnSaleProducts />}
                    {activePros === 3 && <TrendingProducts />}
                </div>
            </div>
        </div>
    )
}