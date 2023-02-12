import React from "react";
import LoadingImage from '../assets/images/img/Loading (1).svg'
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={LoadingImage} width={100}  alt="Loading..."/>
      <h4>Loading...</h4>
    </div>
  );
};

export default Loader;
