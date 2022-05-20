import "./NavLink.css";
import { makeStyles, InputBase, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchData } from "../../redux/product/action";

export const NavLink = () => {
  const navigate = useNavigate();

  
  const [form, setForm] = useState("");
  const dispatch = useDispatch();
  dispatch(searchData(form));
  const handleInput = (e) => {
    setForm(e.target.value);
  };
  console.log(form);

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
          <Link to="/ProductPage"> Products</Link>
        </li>

        <li>
          <InputBase
            type="text"
            placeholder=" Search Favourite Products"
            
            inputProps={{ "aria-label": "search" }}
        onChange={handleInput}
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
