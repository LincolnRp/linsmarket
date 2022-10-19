import React, { useContext } from "react";
import {Nav, DivNavigation } from "./style";
import admin1 from "./../../../../assets/images/admin1.png";
import admin2 from "./../../../../assets/images/admin2.png";
import { GlobalContext } from "../../../../global/GlobalContext";

function Navigation() {
  const values = useContext(GlobalContext);
  const pendings = values.pendings;

  return (
    <div>
      {" "}
      <Nav>
        <h1>Pedidos</h1>
        <DivNavigation>
          <img src={admin1} />
          <p>Pendentes ({pendings.length})</p>
        </DivNavigation>
        <DivNavigation>
          <img src={admin2} />
          <p>Efetuados</p>
        </DivNavigation>
      </Nav>
    </div>
  );
}

export default Navigation;
