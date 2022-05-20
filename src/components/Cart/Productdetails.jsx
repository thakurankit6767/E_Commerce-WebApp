import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./productdetails.css";

import { Button } from "@material-ui/core";
import { addCart } from "../../redux/product/action";

export default function Productdetails() {
  const params = useParams();
  console.log("users", params.id);
  const dispatch = useDispatch();
  const idx = params.id;
  console.log(idx);

  const data = useSelector((state) => state.data.data);
  console.log("product", data);

  var productinfo = data.filter((x) => {
    if (+x.id === +idx) {
      return x;
    }
  });
  console.log("productinfo", productinfo);

 

  const handleCart = (idb) => {
    data.forEach((elem) => {
      if (elem.id === idb) {
        dispatch(addCart(elem));
        alert("Product Added To Cart Successfully")
      }
    });
  };

  // const params = useParams();

  // const data = useSelector((state) => state.data.data);
  // console.log("product", data);

  // var user = data.filter((mn) => {
  //   if (+mn.id === +pId) {
  //     return mn;
  //   }
  // });
  // console.log("product", user);

  return (
    <div>
       
      {productinfo.map((ele) => {
        return (
          <div>
            <div id="maincontainer">
              <div id="image1data">
                <img src={ele.images.image1} />
              </div>
              <div id="div3">
                <h2>Brand Name: {ele.brand}</h2>
                <h3>Title: {ele.title}</h3>
                <h3>Color: {ele.color}</h3>
                <h3>Rating: {ele.rating}</h3>

                <h3>
                  Rs. {ele.price} <span>{ele.off_price}</span>
                  {ele.discount} % off{" "}
                </h3>

                <div id="button">
                  <Button
                    id="addtocartntn"
                    onClick={() => {
                      handleCart(ele.id);
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>

                <div id="content">
                  <ul>
                    <h5>Description: {ele.desc}</h5>
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
