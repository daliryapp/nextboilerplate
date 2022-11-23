import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Close } from "@mui/icons-material";
import Backdrop from "@mui/material/Backdrop";

const AppModal = forwardRef((props, ref) => {
  const [open, setOpen] = useState(null);
  const [disableBackDropClose, setDisableBackdropClose] = useState(false);
  const [isModalImage, setIsModalImage] = useState(false);
  const [hasCloseButton, setHasCloseButton] = useState(false);

  useImperativeHandle(ref, (...rest) => ({
    show(component, disableBackDropClose, isImage, hasCloseButton) {
      setOpen(component);
      setDisableBackdropClose(disableBackDropClose);
      setIsModalImage(isImage);
      setHasCloseButton(hasCloseButton);
    },
    hide() {
      setOpen(null);
    },
  }));

  const closeHandler = (e, reason) => {
    if (!disableBackDropClose) {
      setOpen(null);
    } else if (reason !== "backdropClick") {
      setOpen(null);
    }
  };
  const style = {
    position: "absolute",
    outline: "none !important",
    top: { xs: "12%", md: "50%" },
    left: { xs: "17%", md: "50%" },
    transform: { xs: "translate(-10%, -10%)", md: "translate(-50%, -50%)" },
    bgcolor: !isModalImage
      ? (theme) =>
          theme.palette.mode === "dark" ? "card.dark" : "background.paper"
      : "transparent",
    boxShadow: !isModalImage ? 24 : 0,
    maxHeight: "95vh",
    overflowY: "auto",
  };
  return (
    <Modal
      open={!!open}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ ".MuiBox-root": { borderRadius: "6px" } }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <>
        {hasCloseButton && (
          <Box
            onClick={closeHandler}
            sx={{
              position: "fixed",
              top: 2,
              right: 2,
              p: 0.5,
              cursor: "pointer",
              zIndex: 10,
            }}
          >
            <Close sx={{ fontSize: "30px", color: "#eee", opacity: ".8" }} />
          </Box>
        )}
        <Box sx={{ ...style }}>{open && open}</Box>
      </>
    </Modal>
  );
});

export default AppModal;
