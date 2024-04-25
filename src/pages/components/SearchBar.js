import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import "./style/search-bar.scss";
import { useState } from "react";
export default function SearchBar({ handleSearch }) {

  let [searchWord,setSearchWord] = useState("");
  let navigate = useNavigate();
  let [emptyField,setEmptyField] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if (searchWord.trim().length > 0){
      navigate(`/search/${searchWord}`);
      handleSearch();
    }else{
      setEmptyField(true);
    }
  }


  return (
    <div
      className="search-bar text-center"
      onClick={(e) => {
        if (e.target.id !== "form-container") {
          handleSearch();
        }
      }}
    >
      <div
        className="form"
        id="form-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="container">
          <form action="" onSubmit={handleSubmit}>
            {emptyField && <div className="warn">Please type something</div>}
            <input type="text" placeholder="Enter your search keyword" value={searchWord} onChange={(e)=>{
              setSearchWord(e.target.value);
            }} />
            <button type="submit">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </form>
          <div className="popular-words">
            Popular Searches: <Link to={"/search/bed"}>bed</Link>{" "}
            <Link to={"/search/chair"}>chair</Link>
          </div>
          <div className="x">
            <button
              type="button"
              onClick={handleSearch}
              class="btn-close"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
