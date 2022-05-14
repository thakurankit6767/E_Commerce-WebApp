import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import storeData, { addCart } from "../redux/product/action";
import "./productPage.css";

const ProductPage = () => {
  const [categoryB, setCategoryB] = useState("");
  const [sort, setSort] = useState("");

  const dispatch = useDispatch();

  const handleNavigateProduct = (productId) => {
    navigate(`product/${productId}`);
  };
  const data = useSelector((state) => state.data.data);
  console.log(data);

  // foraddtocart
  const handleCart = (idb) => {
    data.forEach((elem) => {
      if (elem.id === idb) {
        dispatch(addCart(elem));
      }
    });
  };

  const navigate = useNavigate();
  const params = useParams();
  console.log("users", params.id);

  // StoreData to Redux
  useEffect(() => {
    fetch("https://ecommercee-server-app.herokuapp.com/products")
      .then((result) => result.json())
      .then((result) => dispatch(storeData(result)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* sort hightolowbuttons */}
      <div className="sortdiv">
        <div className="sortdiv1">
         Sort By :
          <Button
            id="sortbutton"
            onClick={() => {
              setSort("lowtohigh");
            }}
          >
            Ascending
          </Button>
          <br />
          <Button
            id="sortbutton"
            onClick={() => {
              setSort("hightolow");
            }}
          >
            Descending
          </Button>
          <br />
        </div>
      </div>

      {/* all filter buttons */}
      <div className="maincontainer">
        <div className="buttoncontainer">
          <p
            className="filterbycat"
            style={{ fontWeight: "bold", color: "red" }}
          >
            Filter By Category
          </p>

          <div className="buttondiv">
            <Button
              id="sortbutton"
              onClick={() => {
                setCategoryB("Men Clothing");
              }}
            >
              Men Clothing
            </Button>
            <br />
            <Button
              id="sortbutton"
              onClick={() => {
                setCategoryB("Men Footwear");
              }}
            >
              Men Footwear
            </Button>
            <br />
            <Button
              id="sortbutton"
              className="buttonshoes"
              onClick={() => {
                setCategoryB("shoes");
              }}
            >
              Shoes
            </Button>
            <br />
            <Button
              id="sortbutton"
              onClick={() => {
                setCategoryB("shirt");
              }}
            >
              Shirt
            </Button>
            <br />

            <Button
              id="sortbutton"
              onClick={() => {
                setCategoryB("kurta");
              }}
            >
              Kurta
            </Button>
            <br />
            <Button
              id="sortbutton"
              onClick={() => {
                setCategoryB("tshirt");
              }}
            >
              T-shirt
            </Button>
            <br />
            <Button
              id="sortbutton"
              onClick={() => {
                setCategoryB("");
              }}
            >
              Remove Filter
            </Button>
          </div>
          <br />
        </div>

        <div className="allproductdiv">
          {data
            //filter data
            .filter((elem) => {
              if (categoryB == "") {
                return elem;
              } else {
                return elem.categories == categoryB;
              }
            })

            

            //sortdata
            .sort((a, b) => {
              if (sort == "") {
                return;
              } else if (sort == "lowtohigh") {
                return a.price - b.price;
              } else if (sort == "hightolow") {
                return b.price - a.price;
              }
            })

            //map all products data
            .map((elem) => {
              return (
                <div key={elem.id} className="images">
                  <img
                    src={elem.images.image1}
                    onClick={() => handleNavigateProduct(elem.id)}
                    alt="productimage"
                  />

                  <h4 className="ptitle">{elem.brand}</h4>
                  <p className="pname">{elem.title}</p>
                  <p className="pprice"> Rs {elem.price}</p>
                  <p className="pprice"> Color: {elem.color}</p>
                  <p className="pcdiscount">Discount : {elem.discount}%</p>

                  {/* // button for addtocart */}
                  <Button
                    id="addtocartbtn"
                    onClick={() => {
                      handleCart(elem.id);
                    }}
                  >
                    Add To Cart
                  </Button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
