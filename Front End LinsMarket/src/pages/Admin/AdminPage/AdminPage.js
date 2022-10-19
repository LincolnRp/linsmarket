import React, { useContext, useEffect } from "react";
import useProtectedPage from "../../../hooks/useProtected";
import {
  DivContainerAdmin,
  Content,
  CardPending,
  DivCardPending,
} from "./style";
import Navigation from "../components/Navegation/Navigation";
import {
  deletePendingAndUpdateStock,
  getPendings,
} from "../../../services/admin";
import { GlobalContext } from "../../../global/GlobalContext";
import {
  Button,
} from "@chakra-ui/react";

function AdminPage() {
  const values = useContext(GlobalContext);
  const setPendings = values.setPendings;
  const pendings = values.pendings;

  useEffect(() => {
    getPendings(setPendings);
  }, [pendings]);

  useProtectedPage();

  const deletePending = (p) => {
    const body = {
      user_id: p.user_id,
      id: p.product_id,
      quantity: p.quantity,
    };

    deletePendingAndUpdateStock(body);
  };
  
  return (
    <DivContainerAdmin>
      <Navigation />
      <Content>
        <h1>Pendentes</h1>
        <DivCardPending>
          {pendings.map((p, index) => {
            return (
              <CardPending key={index}>
                <p>
                  <span>Nome:</span> {p.name}.
                </p>
                <p>
                  <span>Endereço de entrega:</span> {p.city}, {p.road},{" "}
                  {p.complement}, {p.number}.
                </p>
                <p>
                  <span>Id do Produto:</span> {p.product_id}
                </p>
                <p>
                  <span>Quantidade:</span> {p.quantity}
                </p>

                <Button
                  bg={"#FFC700"}
                  _hover={{ bg: "#FFC700" }}
                  marginLeft={"16%"}
                  color={"white"}
                  width={"240px"}
                  height={"57px"}
                  marginBlock={"5vh"}
                  onClick={() => deletePending(p)}
                >
                  Concluir
                </Button>
              </CardPending>
            );
          })}
        </DivCardPending>
      </Content>
    </DivContainerAdmin>
  );
}

export default AdminPage;
