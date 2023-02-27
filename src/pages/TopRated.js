import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductProvider";
import Loading from "./Loading";

const TopRated = () => {
  const { state: { products, loading, error } } = useProduct();

  let content;
  if (loading) {
    content = <Loading></Loading>
  }
  if (error) {
    content = <img src="https://i.ibb.co/zSFsH55/000-http-error-codes.png" alt="" />
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Product list is empty</p>
  }
  if (!loading && !error && products.length) {
    content = products.filter((product)=> product.rating >=4).map((product) => <ProductCard product={product}></ProductCard>)
  }

  return (
    <div>
      <h1>This is top rated page</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {content}
      </div>
    </div>
  );
};

export default TopRated;
