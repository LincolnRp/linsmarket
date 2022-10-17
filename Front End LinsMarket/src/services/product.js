import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL_PRODUCT } from "./../constants/urls";

const useGetProduct = (id) => {

  const [product, setProduct] = useState([]);
  let [quantityStock, setQuantityStock] = useState(0);

  useEffect(() => {
    const getProduct =  async() => {
      const token = localStorage.getItem("token");
    await  axios
        .get(`${BASE_URL_PRODUCT}/product/${id}`, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setProduct(res.data);
          setQuantityStock(res.data[0].qty_stock)
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getProduct();
  }, []);

  return {product, quantityStock};
};

export default useGetProduct;
