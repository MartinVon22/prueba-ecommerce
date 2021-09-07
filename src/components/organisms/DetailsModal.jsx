import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  paper: {
    // border: "2px solid #000",
    border: "none",
    outline: "none",
    boxShadow: theme.shadows[5],
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "20px",
    maxWidth: "500px",
    width: "100%",
  },
}));

const DetailsModal = (props) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>{props.children}</div>
      </Fade>
    </Modal>
  );
};

export default DetailsModal;
