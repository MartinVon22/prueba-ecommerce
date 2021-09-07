import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const CategoryBar = (props) => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default CategoryBar;
