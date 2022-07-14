import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productRequest } from "../actions/productActions";
import { useAuth } from "../components/AuthProvider";
import ProductItem from "../components/ProductItem";

const Products = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productRequest(user.token));
  }, []);

  console.log("product", product);

  const displayProducts = () => {
    return (
      <Container>
        <Row xs={3}>
          {product.products.map((theProduct) => {
            return <ProductItem key={theProduct.id} product={theProduct} />;
          })}
        </Row>
      </Container>
    );
  };

  return (
    <>
      <h1>Products</h1>
      {product.isLoading && <p>Fetching Data...</p>}
      {product.errorMessage && <p>{product.errorMessage}</p>}
      {product.products && product.products.length > 0 && displayProducts()}
    </>
  );
};
export default Products;
