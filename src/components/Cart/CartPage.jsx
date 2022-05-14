import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartPage.css";
import {
  decreItem,
  deleteitemcart,
  increItem,
  removecart,
} from "../../redux/product/action";

export const CartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  console.log("cartdata", data);
  const cartproducts = useSelector((state) => state.data.cart);

  const RemoveItem = (idx) => {
    dispatch(decreItem(idx));
  };
  const Additem = (idx) => {
    dispatch(increItem(idx));
  };

  const handlecartRemove = (idx) => {
    const filterproductdata = cartproducts.filter((elem) => {
      return elem.id != idx;
    });
    console.log(filterproductdata);
    dispatch(deleteitemcart(idx));
  };
  const handlecartDelete = () => {
    dispatch(removecart());
  };
  // console.log(cartproducts)
  let users = cartproducts;
  return (
    <>
      <Button onClick={() => handlecartDelete}>delete cart</Button>

      <div className="maincontainer">
        {users.map((elem) => {
          return (
            <div key={elem.id} className="cartdiv">
              <h5 className="title">{elem.brand}</h5>
              <img
                className="imguse"
                src={elem.images.image1}
                alt="productii"
              />
              <p> {elem.color}</p>
              <p> Rs {elem.price * elem.quantity}</p>
              <br />
              <div>
                {" "}
                <button
                  className="btns"
                  onClick={() => handlecartRemove(elem.id)}
                >
                  Remove Item
                </button>
              </div>

              <div id="buttonplusminusdiv">
                <button id="buttonplusminus" onClick={() => Additem(elem.id)}>
                  +
                </button>
                <p>Qty:{elem.quantity}</p>
                {elem.quantity > 1 ? (
                  <button
                    id="buttonplusminus"
                    onClick={() => RemoveItem(elem.id)}
                  >
                    -
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <Button id="checkoutbutton">
        <Link className="checkoutbuttonlink" to="/CheckOutPage">
          Proceed To CheckOut
        </Link>
      </Button>
    </>
  );
};

export default CartPage;
