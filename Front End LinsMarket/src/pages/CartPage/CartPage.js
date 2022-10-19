import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Search from "./../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import { GlobalContext } from "../../global/GlobalContext";
import cartV from "./../../assets/images/CarrinhoVazio.png";
import {
  DivImageCart,
  HeaderCart,
  Products,
  CardProduct,
  TextCard,
  DivContainProduct,
  DivContain,
  DivButton,
} from "./style";
import carHeader from "./../../assets/images/CarrinhoImage.png";
import add from "./../../assets/images/add.png";
import remove from "./../../assets/images/remove.png";
import { Button } from "@chakra-ui/react";
import goToPage from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const values = useContext(GlobalContext);
  const cart = values.car;
  const quantidadeCarrinho = values.quantidadeCarrinho;
  const Navigate = useNavigate();

  return (
    <div>
      {cart.length <= 0 ? (
        <div>
          <Search />
          <DivImageCart>
            <img src={cartV} alt={"Carrinho"}></img>
          </DivImageCart>
          <Footer />
        </div>
      ) : (
        <DivContainProduct>
          <Search />
          <HeaderCart>
            <img src={carHeader} alt={"Carrinho"}></img>
          </HeaderCart>
          <DivContain>
            <Products>
              {cart.map((products, index) => {
                return (
                  <div key={index}>
                    <CardProduct>
                      <img src={products.image} alt={"Produto Imagem"} />
                      <TextCard>
                        <h1>{products.name}</h1>
                        <h2>R$ {products.price}</h2>
                        <h3>
                          <img
                            src={remove}
                            onClick={() => values.removeProduct([products])}
                          />
                          Quantidade: {products.quantity}
                          <img
                            src={add}
                            onClick={() => values.addProduct([products])}
                          />
                        </h3>
                      </TextCard>
                    </CardProduct>
                  </div>
                );
              })}
            </Products>
            <DivButton>
              <h3>Subtotal: {quantidadeCarrinho.toFixed(2)} </h3>

              <Button
                bg={"#03D725"}
                color={"white"}
                width={"139px"}
                height={"47px"}
                marginLeft={"4%"}
                _hover={{ bg: "#03D725" }}
                w={"344px"}
                onClick={() => goToPage(Navigate, "adress")}
              >
                Finalizar Pedido
              </Button>
            </DivButton>
          </DivContain>

          <Footer />
        </DivContainProduct>
      )}
    </div>
  );
}

export default CartPage;
