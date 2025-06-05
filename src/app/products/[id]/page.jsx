"use client";

import { useGetSingleProductQuery } from "@/features/prodcut/productSplitting";
import { useParams } from "next/navigation";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);

  if (isLoading) {
    return <h2>loading.........</h2>;
  }
  console.log(data.data);
  return <div>{JSON.stringify(data.data)}</div>;
};

export default ProductDetails;
