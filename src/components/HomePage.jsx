import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "./ProductPage";
function HomePage() {
  const data = useSelector((state) => state.data.data);
  console.log("home", data);
  return (
    <>
      <ProductPage />
    </>
  );
}

export default HomePage;
