import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import {BASE_URL_PRODUCT, BASE_URL_USER} from './../constants/urls'



export default function GlobalState(props) {

  const Provider = GlobalContext.Provider;
  const token = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const [car, setCar] = useState([]);

  useEffect(() =>{
    getAllProducts()
  },[])
  
  const getAllProducts = () =>{
     axios.get(`${BASE_URL_PRODUCT}`, {
       headers: {
         auth: token 
       }
     }
     )
     .then((res) =>{
 
      setProducts(res.data)
 
     })
     .catch((err) =>{
 
       console.log(err.response)
 
     })
   }

  const removeProduct = (productRemoved) =>{

    const arrayProductRemoved = car.filter((product) => {
      return productRemoved.id !== product.id;
    });
    setCar(arrayProductRemoved)
    console.log(arrayProductRemoved)
  }

  
  const addProduct = (product) =>{

      
    const productExisting = car.find((p) =>  p.id === product[0].id);

    console.log(productExisting)

    if(productExisting){

      productExisting.quantity = productExisting.quantity +1

    }
    else{

      
      const newProduct = {
        id: product[0].id,
        name: product[0].name,
        price: product[0].price,
        qty_stock: product[0].qty_stock,
        image: product[0].image,
        quantity: 0
        }
  
  
        const aux = [...car,newProduct]
        setCar(aux)

    }
    }


    
  

  const values = {
    products: products,
    removeProduct: removeProduct,
    addProduct: addProduct,
    car: car
  };

  return <Provider value={values}>{props.children}</Provider>;

}