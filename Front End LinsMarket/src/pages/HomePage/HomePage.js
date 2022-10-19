import React, { useContext } from "react";
import {
  DivContainerHome,
  DivContent,
  DivFilter,
  DivProducts,
  CardProduct,
} from "./style";
import useProtectedPage from "../../hooks/useProtected";
import Header from "../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import { GlobalContext } from "./../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import goToPage from "../../routes/coordinator";
import { useForm } from "../../hooks/useForm";

function HomePage() {
  const values = useContext(GlobalContext);
  useProtectedPage();
  const Navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({});

  return (
    <DivContainerHome>
      <Header />
      <DivContent>
        <DivFilter>
          <h2>Categoria</h2>

          <ul>
            <li>Bebidas</li>
            <li>Comida</li>
            <li>Higiene</li>
            <li>Utilidades & Casa</li>
          </ul>
        </DivFilter>
        <DivProducts>
          {values.products
            // .filter((product) =>{
            //   return product.name ===
            // })
            .map((product) => {
              return (
                <CardProduct
                  key={product.id}
                  onClick={() => goToPage(Navigate, `product/${product.id}`)}
                >
                  <img src={product.image} alt={product.name}></img>
                  <h2>{product.name}</h2>
                  <h3>R${product.price}</h3>
                </CardProduct>
              );
            })}
        </DivProducts>
      </DivContent>

      <Footer></Footer>
    </DivContainerHome>
  );
}

export default HomePage;
