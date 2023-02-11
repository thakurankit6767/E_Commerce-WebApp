import React from "react";
import { DoubleSquareLoader } from "react-loaders-kit";
import Typed from "react-typed";

export default function Spinner() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 2.5,
    colors: ["#5e22f0", "#5e22f0"],
  };

  const textstyle = {
    position: "absolute",
    left: "65%",
    bottom: "30px",
  };
  return (
    <div className="loader">
      <DoubleSquareLoader {...loaderProps} />
      <Typed
        style={textstyle}
        className="loader-text"
        strings={["Loading..."]}
        typeSpeed={50}
        backSpeed={0}
      />
    </div>
  );
}
