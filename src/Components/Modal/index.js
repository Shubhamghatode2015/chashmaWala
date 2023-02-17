import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function BasicModal({
  children,
  show,
  unShow,
  width,
  height,
  overflowY,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: width ? width : 600,
    height: height? height : 600,
    overflowY: overflowY ? "scroll" : "",
    bgcolor: "background.paper",
    border: "0px solid #000",
    boxShadow: 24,
    borderRadius: 8,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={show}
        onClose={() => unShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
