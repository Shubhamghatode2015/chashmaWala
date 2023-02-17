import React from "react";
import { React360Viewer } from "react-360-product-viewer";
import img from "../../assets/images/chashma.jpg";

const View360 = () => {
  return (
    <React360Viewer
    autoplay
    imagesBaseUrl="./imageSeries/"
    imagesCount={36}
    imagesFiletype="png"
    mouseDragSpeed={20}
    notifyOnPointerDown={function noRefCheck(){}}
    notifyOnPointerMoved={function noRefCheck(){}}
    notifyOnPointerUp={function noRefCheck(){}}
    reverse
    />
  );
};

export default View360;
