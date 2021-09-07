import React, { useContext, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import DetailsModal from "../organisms/DetailsModal";
import ProductDetailListView from "../atoms/ProductDetailListView";
import { toCurrencyFormat } from "../../helpers/formatters";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "70px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderBottom: "1px solid lightgray",
    boxSizing: "border-box",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    marginLeft: "10px",
  },

  modalDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  totalDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButtonsDiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const { cartProducts, setCartProducts } = useContext(ShoppingCartContext);
  const { enqueueSnackbar } = useSnackbar();

  const [openModal, setOpenModal] = useState(false);

  const handleViewShoppingCart = () => {
    setOpenModal(true);
  };

  const getTotalPrice = () => {
    let total = 0;

    cartProducts.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  const handleDeleteProduct = (index) => {
    let tempData = [...cartProducts];
    tempData.splice(index, 1);

    setCartProducts(tempData);
  };

  const handleBuy = () => {
    setCartProducts([]);
    setOpenModal(false);
    enqueueSnackbar("Se ha realizado la compra con éxito!", {
      variant: "success",
    });
  };

  return (
    <nav className={classes.root}>
      <h2>E-commerce</h2>
      <Box mr={5}>
        <Badge color={"secondary"} badgeContent={cartProducts.length}>
          <Button
            onClick={handleViewShoppingCart}
            variant="outlined"
            color="primary"
            startIcon={<ShoppingCartIcon />}
          >
            Ver carrito
          </Button>
        </Badge>
      </Box>
      <DetailsModal onClose={() => setOpenModal(false)} open={openModal}>
        <div id="total-modal" className={classes.modalDiv}>
          <h2>Carrito de compras</h2>
          {cartProducts.map((product, index) => (
            <ProductDetailListView
              title={product.title}
              image={product.image}
              price={product.price}
              onDelete={() => handleDeleteProduct(index)}
            />
          ))}
          {cartProducts.length > 0 && (
            <div className={classes.totalDiv}>
              <h2>Total</h2>
              <h2>{toCurrencyFormat(getTotalPrice())}</h2>
            </div>
          )}
          {cartProducts.length < 1 && <p>No hay items en el carrito</p>}
          <div className={classes.modalButtonsDiv}>
            <Button
              onClick={() => setOpenModal(false)}
              variant="outlined"
              color="primary"
            >
              Volver
            </Button>

            <Box ml={2}>
              <Button
                onClick={handleBuy}
                disabled={cartProducts.length < 1}
                color="primary"
                variant="contained"
              >
                Comprar
              </Button>
            </Box>
          </div>
        </div>
      </DetailsModal>
    </nav>
  );
};

export default Navbar;
