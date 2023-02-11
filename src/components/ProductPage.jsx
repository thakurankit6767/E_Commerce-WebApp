import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import storeData, { addCart } from "../redux/product/action";
import "./productPage.css";
import Spinner from "../components/Spinner";

import ReactPaginate from "react-paginate";

const ProductPage = () => {
  const [loaded, setLoaded] = useState(false);
  const [categoryB, setCategoryB] = useState("");
  const [sort, setSort] = useState("");

  const [page, setPage] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const dispatch = useDispatch();

  const handleNavigateProduct = (productId) => {
    navigate(`Product/${productId}`);
  };
  const data = useSelector((state) => state.data.data);
  console.log(data);

  const navigate = useNavigate();

  const params = useParams();
  console.log("users", params.id);

  //  for change the page
  const itemLim = 8;
  const pagesVisit = page * itemLim;
  const changePagePagination = ({ selected }) => {
    setPage(selected);
  };

  const pageTotal = Math.ceil(data.length / itemLim);

  // StoreData to Redux
  useEffect(() => {
    fetch("https://jealous-erin-panda.cyclic.app/products")
      .then((result) => result.json())
      .then((result) => dispatch(storeData(result)))
      .catch((error) => console.log(error));
  }, []);

  const search = useSelector((state) => state.data.search);
  console.log("users", search);

  const loaderstyle = {
    position: "absolute",
    left: "50%",
    top: "35%",
  };

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

        {!loaded ? (
          <div style={loaderstyle}>
            <Spinner />
          </div>
        ) : (
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

              //serachdata
              .filter((elem) => {
                if (search == "") {
                  return elem;
                } else {
                  return elem.brand
                    .toLowerCase()
                    .includes(search.toLowerCase());
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

              //pagination
              .slice(pagesVisit, pagesVisit + itemLim)

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
                      onClick={() => handleNavigateProduct(elem.id)}
                    >
                      View Product
                    </Button>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <div id="paginationdiv">
        <ReactPaginate
          className="paginate"
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageTotal}
          onPageChange={changePagePagination}
          containerClassName={"paginationarrow"}
        />
      </div>
    </>
  );
};

export default ProductPage;
