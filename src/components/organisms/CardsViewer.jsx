import React, { useContext, useState } from "react";
import { Box, Button, Grid, makeStyles } from "@material-ui/core";
import ProductCard from "../atoms/ProductCard";
import DetailsModal from "./DetailsModal";
import { toCurrencyFormat } from "../../helpers/formatters";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    padding: "10px",
    backgroundColor: "rgba(0, 92, 172, 0.06)",
    boxSizing: "border-box",
    overflowY: "auto",
  },

  gridContainer: {
    boxSizing: "border-box",
  },

  modalDiv: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  modalButtonsDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CardsViewer = (props) => {
  const classes = useStyles();
  const products = props.data;
  const [openModal, setOpenModal] = useState(false);
  const [singleProductData, setSingleProductData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const { cartProducts, setCartProducts } = useContext(ShoppingCartContext);

  const handleClick = (product) => {
    setSingleProductData({
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.image,
      price: product.price,
    });
    setOpenModal(true);
  };

  const handleAddToCart = () => {
    const isOnCart = cartProducts.some(
      (product) => product.id === singleProductData.id
    );

    if (!isOnCart) {
      setCartProducts((state) => [...state, singleProductData]);
    }
    setOpenModal(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.gridContainer}>
        {products.map((product) => (
          <Grid item xs={12} lg={3} md={4} sm={6}>
            <ProductCard
              onClick={() => handleClick(product)}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              rate={product.rating.rate}
            />
          </Grid>
        ))}
      </Grid>
      <DetailsModal onClose={() => setOpenModal(false)} open={openModal}>
        <div id="details-modal" className={classes.modalDiv}>
          <h2>{singleProductData.title}</h2>
          <img
            src={singleProductData.image}
            width="100px"
            alt="product images"
          />
          <p>{singleProductData.description}</p>
          <h2 style={{ color: "green" }}>
            {toCurrencyFormat(singleProductData.price)}
          </h2>
          <div className={classes.modalButtonsDiv}>
            <Button
              onClick={() => setOpenModal(false)}
              variant="outlined"
              color="secondary"
            >
              Volver
            </Button>

            <Box ml={2}>
              <Button
                onClick={handleAddToCart}
                color="secondary"
                variant="contained"
              >
                Agregar al carrito
              </Button>
            </Box>
          </div>
        </div>
      </DetailsModal>
    </div>
  );
};

export default CardsViewer;
