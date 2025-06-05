"use client";

import { useGetProductQuery } from "@/features/prodcut/productSplitting";
import Link from "next/link";

const ProductPage = () => {
  const { data, isError, isLoading } = useGetProductQuery("unf");
  if (isLoading) {
    return <h1>Loading........</h1>;
  }
  console.log(data?.data);
  //   let imgCatch = data.data.images[0];
  return (
    <div className=" grid grid-cols-3 gap-5">
      {data.data.map((product) => (
        <div className="border p-3" key={product.id}>
          <h3>{product.productName}</h3>
          <Link className="bg-amber-400" href={`/products/${product.id}`}>
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
