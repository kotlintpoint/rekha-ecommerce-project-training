import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../actions/cartActions";

const ProductItem = ({ product, isCart }) => {

    const dispatch = useDispatch();

    const handleAddToCart=()=>{
        dispatch(addProduct(product));
    }

    const handleRemove = ()=>{
        dispatch(removeProduct(product));
    }

  return (
    <Col className={"my-3"}>
      <Card style={{ height: "100%" }}>
        <Card.Img
          variant="top"
          src={product.thumbnail}
          style={{ height: "250px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          {
            isCart ? <Button variant="primary"
            onClick={handleRemove}>Remove</Button> 
            : <Button variant="primary"
            onClick={handleAddToCart}>ADD TO CART</Button>
          }
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ProductItem;
