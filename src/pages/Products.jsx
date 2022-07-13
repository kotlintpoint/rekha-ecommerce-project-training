import React, { useEffect } from "react";
import { useAuth } from "../components/AuthProvider";

const Products = ()=>{
  const {user} = useAuth();
  useEffect(()=>{
    //dispatch(getProducts(user.token))
  })

  return <>
    <h1>Products</h1>
  </>
}
export default Products;