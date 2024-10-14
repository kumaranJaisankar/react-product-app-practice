import { Table } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import QuantitySelector from "../components/QuantitySelector";
import { Product } from "../entities";
import { ProductType } from "../validationSchemas/productSchema";
import { Heading1 } from "../styled-components";

interface ProductResponse {
  items: ProductType[] | [];
  skip: number;
  take: number;
  totalCount: number;
}

function ProductListPage() {
  const { data: products, isLoading, error } = useProducts();

  const renderProducts = () => {
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    if (products!.items.length === 0) return <p>No product was found!</p>;

    return (
      <div className="p-3 flex justify-center">
        <ul className=" grid lg:grid-cols-5 gap-3 md:grid-cols-3 sm:grid-cols-3">
          {products?.items.map((product) => (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">
                {product.name}
              </h5>

              <p className="mb-3 font-normal text-gray-500 ">
                Go to this step by step guideline process on how to certify for
                your weekly benefits: New featuers are availabel in a new app
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                preview
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Heading1>Products</Heading1>
      {renderProducts()}
    </div>
  );
}

const useProducts = () =>
  useQuery<ProductResponse, Error>({
    queryKey: ["products"],
    queryFn: () =>
      axios.get("/api/product?take=50&skip=0&orderby=Name").then((res) => {
        console.log(res.data);
        return res.data;
      }),
  });

export default ProductListPage;
