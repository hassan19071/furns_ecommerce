import { Link } from "react-router-dom";

export default function SecondHero({pageName,linkName,parentLink}) {
  let name = String(pageName);
  let link = String(linkName);

  if (name.includes("-")){
       name = name.split("-").join(" ");
  }

  if(link.length > 15){
    link = link.slice(0,15)+"..."
  }

  return (
    <div className="second-hero py-5 bg-light">
      <div className="container px-lg-5 py-2">
        <div className="content text-center">
          <h1 style={{
            fontSize:"22px",
            fontWeight:"700",
            textTransform:"uppercase"
          }}>{name}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-center" style={{
                fontSize:"12px",
                textTransform:"uppercase"
            }}>
              <li className="breadcrumb-item">
                <Link to={"/"} style={{color:"rgb(255, 112, 4)"}}>Home</Link>
              </li>
              {parentLink && <li className="breadcrumb-item active" aria-current="page">
                {parentLink}
              </li>}
              <li className="breadcrumb-item active" aria-current="page">
                {link}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
