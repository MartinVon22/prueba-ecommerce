import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "../molecules/Navbar";
import CardsViewer from "../organisms/CardsViewer";
import { getProductsData } from "../../helpers/requestData";
import Pagination from "@material-ui/lab/Pagination";
import { CircularProgress } from "@material-ui/core";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "calc(100vh - 120px)",
    boxSizing: "border-box",
  },

  paginationDiv: {
    position: "absolute",
    width: "100%",
    height: "50px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "lightgray",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px -2px 8px 0px",
  },
}));

const Main = () => {
  const [supportData, setSupportData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const [indexPage, setIndexPages] = useState({
    minIndex: 0,
    maxIndex: 9,
  });

  const getAllProducts = async () => {
    try {
      const response = await getProductsData();
      const productData = response.data;
      // const dataLength = productData.length;

      if (response.status >= 200 && response.status < 300) {
        setIsLoading(false);
        setSupportData(productData);
      } else {
        setIsLoading(false);
        enqueueSnackbar("Error, no se pudieron cargar los productos", {
          variant: "error",
        });
      }
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar("Error, no se pudieron cargar los productos", {
        variant: "error",
      });
    }
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaginationChange = (event, value) => {
    if (value === 1) {
      setIndexPages({ minIndex: 0, maxIndex: 9 });
    }

    if (value === 2) {
      setIndexPages({ minIndex: 10, maxIndex: 19 });
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      {isLoading && (
        <CircularProgress
          color="primary"
          style={{ position: "absolute", top: "50vh", left: "50vw" }}
        />
      )}
      <CardsViewer
        data={supportData.filter(
          (product, index) =>
            index >= indexPage.minIndex && index <= indexPage.maxIndex
        )}
      />

      <div className={classes.paginationDiv}>
        <Pagination
          onChange={handlePaginationChange}
          style={{ margin: 0 }}
          count={2}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </div>
  );
};

export default Main;
