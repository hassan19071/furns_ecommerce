import { useState } from "react";
import "./style/products-section.scss";
export default function LatestNews(){
    let [articles,setArticles] = useState(false);
    return(
        <div className="letast-news py-5">
            <div className="container">
                <div className="head text-center">
                    <h3>Latest News</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore</p>
                </div>
                {articles? <div className="articles text-center mt-5">There Are Articles</div>:<div className="articles text-center mt-5">There Are No Articles Founded!</div>}
            </div>
        </div>
    )
}