//

// let DeepAR = new DeepAR({
//   licenseKey: 'your_license_key_here',
//   canvas: document.getElementById('deepar-canvas'),
//   deeparWasmPath: 'path/to/deepar.wasm',
//   segmentationConfig: {
//      modelPath: "path/to/segmentation-192x192.bin" // Not needed if you don't use background removal effects.
//   },
//   callbacks: {
//      onInitialize: function() {
//          deepAR.startVideo(true);
//      }
//  }
// });
// // download the face tracking model
// DeepAR.downloadFaceTrackingModel('models/models-68-extreme.bin');

import React from "react";
import { DeepAR } from "deepar";
import faceTrackingModel from "deepar/models/face/models-68-extreme.bin";
import segmentationModel from "deepar/models/segmentation/segmentation-160x160-opt.bin";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useRef } from "react";

const DeepArAI = () => {
  const ref = useRef();
  // const deepar = new DeepAR({
  //   canvas: ref.current,
  //   licenseKey: '3191ea44f55358be57cf46ae9c4fd6fcc3b917e050f63a7701ae3fc3873b18a60845cd3352c96cce',
  //   deeparWasmPath: "../../../lib/wasm/deepar.wasm",
  //   footTrackingConfig: {
  //     poseEstimationWasmPath: "../lib/wasm/libxzimgPoseEstimation.wasm",
  //     detectorPath: faceTrackingModel,
       
  //     trackerPath: segmentationModel,
       
  //     objPath: "../lib/models/foot/foot-model.obj",
  //   },
  //   callbacks: {
  //     onInitialize: () => {
  //       deepar.startVideo();
  //       deepar.switchEffect(0, "mask", "/effects/Shoe_PBR");
  //     },
  //     onCameraPermissionAsked: () => console.log("onCameraPermissionAsked"),
  //     onCameraPermissionGranted: () => console.log("onCameraPermissionGranted"),
  //     onCameraPermissionDenied: () => console.log("onCameraPermissionDenied"),
  //     onVideoStarted: () => console.log("onVideoStarted"),
  //     onError: (error) => console.log("onError", error),
  //   },
  // });

  // deepar.downloadFaceTrackingModel(faceTrackingModel);

  // const effects = [
  //   "./effects/Neon_Devil_horns.deepar",
  //   "./effects/Hope.deepar",
  //   "./effects/MakeupLook.deepar",  
  //   "./effects/Ping_Pong.deepar",
  //   "./effects/galaxy_background.deepar",
  // ];
  // let currentEffectIdx = -1;
  // const handleClicked = () => {
  //   currentEffectIdx = (currentEffectIdx + 1) % effects.length;
  //   const effect = effects[currentEffectIdx];
  //   deepar.switchEffect(0, "slot", effect);
  // };

  return (
    <>
    <canvas ref={ref}  id={'deepar-canvas'} style={{ height: "50rem", width: "75%" }} > </canvas>
      <Box sx={{ height: "50rem", width: "75%" }}> 
       bharat sir
         </Box>
      <Button
        variant="outlined"
        color="primary"
        // onClick={() => handleClicked}
      ></Button>
    </>
  );
};

export default DeepArAI;
