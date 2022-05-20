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

  var total = 0;

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

  let users = cartproducts;
  return (
    <>
      <div className="shopping-cart-title">
        <h3>SHOPPING CART</h3>
        <Button id="clear-cart-button" onClick={() => handlecartDelete(removecart)}>Clear cart</Button>
      </div>

      <div className="main-contain">
        <div className="maincontainer-cart">
          {users.map((elem) => {
            total += elem.price * elem.quantity;
            return (
              <div key={elem.id} className="cartdiv">
                <div>
                  <div className="image-div">
                    <h3 className="title">{elem.brand}</h3>

                    <img
                      className="imguse"
                      src={elem.images.image1}
                      alt="productii"
                    />
                  </div>
                </div>

                <div className="color-div">
                  <div>
                    <h4> Color: {elem.color}</h4>
                  </div>
                  <div>
                    {" "}
                    <h4> Rs {elem.price * elem.quantity}</h4>
                  </div>
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

                  <button id="buttonplusminus" onClick={() => Additem(elem.id)}>
                    +
                  </button>
                  <h4>Qty:{elem.quantity}</h4>
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

        <div className="offer-div">
          <div className="total-div">
            <div>
              <h4>Total:</h4>
              <h4>Shipping:</h4>
              <h4>Subtotal:</h4>
            </div>
            <div>
              <h4>Rs {total}</h4>
              <h4>FREE</h4>
              <h4>
                <b>Rs {total}</b>
              </h4>
            </div>
          </div>

          <div className="checkoutbutton">
            <Button id="checkoutbutton">
              <Link className="checkoutbuttonlink" to="/CheckOutPage">
                Proceed To CheckOut
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
