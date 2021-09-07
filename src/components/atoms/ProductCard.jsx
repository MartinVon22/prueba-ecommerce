import React from "react";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core";
import { toCurrencyFormat } from "../../helpers/formatters";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "300px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    cursor: "pointer",
  },

  media: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100px",
  },

  detailsDiv: {
    width: "100%",
    height: "50%",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    textAlign: "left",
    marginBottom: "5px",
  },

  price: {
    textAlign: "left",
    color: "green",
    margin: 0,
  },

  rateAndTitleDiv: {
    marginTop: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();

  return (
    <Card onClick={props.onClick} className={classes.root}>
      <div className={classes.media}>
        <img src={props.image} alt="images" className={classes.image} />
      </div>
      <div className={classes.detailsDiv}>
        <h4 className={classes.title}>{props.title}</h4>
        <div className={classes.rateAndTitleDiv}>
          <Rating name="read-only" value={props.rate} readOnly />
          <h5 className={classes.price}>{`${toCurrencyFormat(
            props.price
          )}`}</h5>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
