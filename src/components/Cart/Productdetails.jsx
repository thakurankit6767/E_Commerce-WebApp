import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productdetails.css";

export default function Productdetails() {
  const params = useParams();
  const pId = params.id;
  console.log(pId);

  const data = useSelector((state) => state.data.data);
  console.log("product", data);

  var user = data.filter((mn) => {
    if (+mn.id === +pId) {
      return mn;
    }
  });
  console.log("product", user);

  return (
    <div>
      {user.map((ele) => {
        return (
          <div>
            <div id="maincontainer">
              <div id="image1data">
                <img src={ele.images.image1} />
              </div>
              <div id="div3">
                <h2>{ele.brand}</h2>
                <h3>{ele.title}</h3>
                <h3>{ele.color}</h3>
                <h3>{ele.rating}</h3>

                <h3>
                  Rs. {ele.price} <span>{ele.off_price}</span>
                  {ele.discount} % off{" "}
                </h3>

                <div id="button">
                  <button id="addtocartntn">Add To Cart</button>
                </div>

                <div id="content">
                  <ul>
                    <h5>{ele.desc}</h5>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
