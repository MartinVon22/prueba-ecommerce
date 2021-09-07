import React from "react";
import { makeStyles } from "@material-ui/styles";
import { toCurrencyFormat } from "../../helpers/formatters";
import { IconButton, useMediaQuery } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid lightgray",
  },

  title: {
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    margin: "0px 5px",
  },
}));

const ProductDetailListView = (props) => {
  const classes = useStyles();
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.root}>
      <img src={props.image} width="20px" alt="some product img" />
      <p style={{ width: matches && "50%" }} className={classes.title}>
        {props.title}
      </p>
      <h4 style={{ marginLeft: "auto", color: "green" }}>
        {toCurrencyFormat(props.price)}
      </h4>
      <IconButton onClick={props.onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ProductDetailListView;
