import "./NavLink.css";
import { Link } from "react-router-dom";
export const NavLink = () => {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="/">
            <a href="#" className="home">
              Home
            </a>
          </Link>
        </li>

        <li>
          <Link to="/">
            {" "}
            <a href="#" className="product">
              Product
            </a>
          </Link>
        </li>

        <li>
          <input
            type="text"
            placeholder=" Search Favourite Products"
            name="search Products"
            style={{
              width: "450px",
              marginTop: "12px",
              marginLeft: "60px",
              border: "2px solid black",
              height: "26px",
              borderRadius: "5px",
            }}
          />
        </li>
      </ul>
    </>
  );
};
