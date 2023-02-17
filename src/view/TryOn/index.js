import { Container } from "@mui/system";
import React from "react";
// import logo from "../../img/vartualtryimg.png";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";


const TryOn = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sm={12}
            xs={12}
            sx={{
              border: "1px solid black",
              borderRadius: ".8rem",
              p: "1%",
            }}
          >
            {/* <div className="sketchfab-embed-wrapper">
              {" "}
              <iframe
                title="Plastic Sunglasses"
                frameBorder={0}
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/d5417dcb97fb41b39f57fc8772a7ecab/embed"
              >
                {" "}
              </iframe>{" "}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: "normal",
                  margin: 5,
                  color: "#4A4A4A",
                }}
              >
                {" "}
                <a
                  href="https://sketchfab.com/3d-models/plastic-sunglasses-d5417dcb97fb41b39f57fc8772a7ecab?utm_medium=embed&utm_campaign=share-popup&utm_content=d5417dcb97fb41b39f57fc8772a7ecab"
                  target="_blank"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  {" "}
                  Plastic Sunglasses{" "}
                </a>{" "}
                by{" "}
                <a
                  href="https://sketchfab.com/incg5764?utm_medium=embed&utm_campaign=share-popup&utm_content=d5417dcb97fb41b39f57fc8772a7ecab"
                  target="_blank"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  {" "}
                  Incg5764{" "}
                </a>{" "}
                on{" "}
                <a
                  href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d5417dcb97fb41b39f57fc8772a7ecab"
                  target="_blank"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  Sketchfab
                </a>
              </p>
            </div> */}

            <div className="sketchfab-embed-wrapper">
              {" "}
              <iframe
                title="Plastic Sunglasses"
                frameBorder={0}
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                width={500}
                height={300}
                src="https://sketchfab.com/models/d5417dcb97fb41b39f57fc8772a7ecab/embed?autospin=1&autostart=1&preload=1&ui_hint=0"
                // src={img1}
                // src='https://sketchfab.com/RANYA35?utm_medium=embed&utm_campaign=share-popup&utm_content=d0d86024a30f49b7937b932f6f993f92'
              ></iframe>
              {/* <p
                style={{
                  fontSize: 13,
                  fontWeight: "normal",
                  margin: 5,
                  color: "#4A4A4A",
                }}
              >
                {" "}
                <a
                  href="https://sketchfab.com/3d-models/plastic-sunglasses-d5417dcb97fb41b39f57fc8772a7ecab?utm_medium=embed&utm_campaign=share-popup&utm_content=d5417dcb97fb41b39f57fc8772a7ecab"
                  target="_blank"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  {" "}
                  Plastic Sunglasses{" "}
                </a>{" "}
                by{" "}
                <a
                  href="https://sketchfab.com/incg5764?utm_medium=embed&utm_campaign=share-popup&utm_content=d5417dcb97fb41b39f57fc8772a7ecab"
                  target="_blank"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  {" "}
                  Incg5764{" "}
                </a>{" "}
                on{" "}
                <a
                  href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d5417dcb97fb41b39f57fc8772a7ecab"
                  target="_blank"
                  style={{ fontWeight: "bold", color: "#1CAAD9" }}
                >
                  Sketchfab
                </a>
              </p> */}
            </div>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Recomended</Typography>
          <Typography>
            <SendIcon />
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default TryOn;
