import React, { createFactory, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import swal from "sweetalert";
import { BASE_URL_PRODUCT, BASE_URL_USER } from "./../constants/urls";

export default function GlobalState(props) {
  
  const Provider = GlobalContext.Provider;
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [car, setCar] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);
  const [adress, setAdress] = useState([]);
  const [name, setName] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [pendings, setPendings] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get(`${BASE_URL_PRODUCT}`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const removeProduct = (productRemoved) => {
    const arrayProductRemoved = car.filter((product) => {
      if (productRemoved[0].name === product.name && product.quantity != 0) {
        product.quantity = product.quantity - 1;

        setQuantidadeCarrinho(quantidadeCarrinho - product.price);

        if (product.quantity === 0) {
          const aux = [];

          car.filter((prc) => {
            if (prc.name !== productRemoved[0].name) {
              aux.push(...aux, prc);
            }

            setCar(aux);
          });
        }

        return swal({
          title: "Removido",
          text: `Produto removido, quantidade atual: ${product.quantity}`,
          icon: "success",
        });
      }
    });
  };

  const addProduct = (product) => {
    const productExisting = car.find((p) => p.id === product[0].id);

    if (productExisting) {
      productExisting.quantity = productExisting.quantity + 1;

      const num2 = Number(product[0].price);

      setQuantidadeCarrinho(quantidadeCarrinho + num2);

      return swal({
        title: "Adicionado",
        text: `Produto Adicionado, quantidade atual: ${productExisting.quantity}`,
        icon: "success",
      });
    } else {
      const newProduct = {
        id: product[0].id,
        name: product[0].name,
        price: product[0].price,
        qty_stock: product[0].qty_stock,
        image: product[0].image,
        quantity: 1,
      };

      const num2 = Number(newProduct.price);
      const soma = quantidadeCarrinho + num2;
      setQuantidadeCarrinho(soma);

      const aux = [...car, newProduct];
      setCar(aux);

      return swal({
        title: "Adicionado",
        text: `Produto Adicionado, quantidade atual: ${newProduct.quantity}`,
        icon: "success",
      });
    }
  };

  const values = {
    products: products,
    removeProduct: removeProduct,
    addProduct: addProduct,
    car: car,
    setCar: setCar,
    quantity: quantity,
    setQuantity: setQuantity,
    quantidadeCarrinho: quantidadeCarrinho,
    adress: adress,
    setAdress: setAdress,
    name: name,
    setName: setName,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
    pendings: pendings,
    setPendings: setPendings,
  };

  return <Provider value={values}>{props.children}</Provider>;
}
