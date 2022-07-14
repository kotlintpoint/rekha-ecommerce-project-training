import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";

const Cart = () => {

  const cart = useSelector(state=>state.cart)

  const displayProducts = () => {
    return (
      <Container>
        <Row xs={3}>
          {cart.products.map((theProduct) => {
            return <ProductItem key={theProduct.id} product={theProduct} isCart={true} />;
          })}
        </Row>
      </Container>
    );
  };

  return (
    <>
      <h1>Cart</h1>
      { cart.products.length === 0 && <p>No Products in Cart... Continue Shopping...</p>}
      {
        cart.products.length > 0 && displayProducts()
      }
    </>
  );
};
export default Cart;
