import React, { useState } from "react";
import { store } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { AddressData } from "../../redux/address/Action";

import "./paymentform.css";

export default function PaymentForm() {
  const AddressDetails = useSelector(
    (store) => store.AddressDataData.AddressDataData
  );
  console.log("AddressData", AddressDetails);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCheckout = () => {
    console.log("paymentpage");
    navigate("/PaymentSuccess");
  };

  const [cardNumber, setCardNumber] = useState("");
  const [cvvNumber, setcvvNumber] = useState("");

  return (
    <>
      <div className="big-div">
        <div className="payment-div">
          <div className="ConatctDetails">
            <div>
              <p>
                <b>PAYMENT</b>
              </p>
            </div>
            <br />

            <div className="payment-symbol-div">
              <img
                src="http://www.credit-card-logos.com/images/multiple_credit-card-logos-1/credit_card_logos_23.gif"
                alt="All Cards"
              ></img>
            </div>
            <br />

            <Box>
              <InputLabel htmlFor="standard-adornment-amount">
                CARD NUMBER
              </InputLabel>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Must be 16 digit No*"
                  onChange={(elem) => {
                    {
                      setCardNumber(elem.target.value);
                      if (cardNumber.length >= 16) {
                        alert("Card Number Exceed");
                      }
                    }
                  }}
                />
              </div>

              <div>
                <div>
                  <InputLabel htmlFor="standard-adornment-amount">
                    EXP MONTH /EXP YEAR
                  </InputLabel>
                  <br />
                  <TextField id="outlined-basic" label="MM/Year*" />
                </div>
                <div>
                  <InputLabel htmlFor="standard-adornment-amount">
                    CVV
                  </InputLabel>
                  <TextField
                    id="outlined-basic"
                    label="3 digits*"
                    variant="outlined"
                    onChange={(elem) => {
                      setcvvNumber(elem.target.value);
                      if (cvvNumber.length > 2) {
                        alert("Number Exceed");
                      }
                    }}
                  />
                </div>
              </div>
            </Box>
            <button className="Make-Payment" onClick={handleCheckout}>
              <b>Make Payment</b>
            </button>
          </div>
        </div>

        <div className="address-div-list">
          <div className="address-list">
            <h3>
              <b>Your Shipping Address</b>
            </h3>
            <hr />
            <div className="all-shipping-address">
              <div className="address-div-one">
                {" "}
                <h4>Name: {AddressDetails ? AddressDetails.name : ""}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Address: {AddressDetails ? AddressDetails.address : ""}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>
                  Locality: {AddressDetails ? AddressDetails.locality : ""},
                  City / District: {AddressDetails ? AddressDetails.city : ""}
                </h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Pincode: {AddressDetails ? AddressDetails.pincode : ""}</h4>
              </div>
              <hr />
              <div className="address-div-one">
                <h4>Mobile: {AddressDetails ? AddressDetails.mobile : ""}</h4>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
