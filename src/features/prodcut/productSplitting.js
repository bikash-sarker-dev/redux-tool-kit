import { productApi } from "./productApiFetch";

const reUseProductApi = productApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      query: () => "/api/v1/products",
    }),
    getSingleProduct: build.query({
      query: (id) => `/api/v1/products/${id}`,
    }),
    postProduct: build.mutation({
      query: (productCatch) => ({
        url: "/api/v1/products",
        method: "POST",
        body: productCatch,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetProductQuery,
  useGetSingleProductQuery,
  usePostProductMutation,
} = reUseProductApi;
