// import { ThreeSixty } from "@mui/icons-material";
import React from "react";
// import { React360Viewer } from "react-360-product-viewer";
// import ThreeSixty from 'react-360-view'
import img from "../../view/TryOn/plastic_sunglasses (1).13a5e032198c6a806ed8.glb"
import ThreeSixty from 'react-360-view'
const View360 = () => {
  return (<>
  
  

  <ThreeSixty
    amount={36}
    imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
    fileName="chair_{index}.jpg?v1"
/>

  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
    // <React360Viewer
    // autoplay
    // imagesBaseUrl={'../../view/TryOn/plastic_sunglasses (1).13a5e032198c6a806ed8.glb'}
    // imagesCount={36}
    // imagesFiletype="png"
    // mouseDragSpeed={20}
   
    // reverse
    // />
  );
};

export default View360;
