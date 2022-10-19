import React, { useContext } from "react";
import { DivContainerFooter, Car, Profile, Home } from "./style";
import { useNavigate } from "react-router-dom";
import goToPage from "../../routes/coordinator";
import CarrinhoFooter from "./../../assets/images/CarrinhoFooter.png";
import HomeFooter from "./../../assets/images/HomeFooter.png";
import ProfileFooter from "./../../assets/images/ProfileFooter.png";
import { GlobalContext } from "../../global/GlobalContext";

function Footer() {
  const Navigate = useNavigate();
  const values = useContext(GlobalContext);

  return (
    <DivContainerFooter>
      <div>
        <Home
          src={HomeFooter}
          alt={"Home Icon"}
          onClick={() => goToPage(Navigate, "")}
        ></Home>
      </div>
      <div>
        <Car
          src={CarrinhoFooter}
          alt={"Car Market Icon"}
          onClick={() => goToPage(Navigate, "cart")}
        ></Car>
      </div>

      <div>
        <Profile
          src={ProfileFooter}
          alt={"Person Icon"}
          onClick={() => goToPage(Navigate, "profile")}
        ></Profile>
      </div>
    </DivContainerFooter>
  );
}

export default Footer;
