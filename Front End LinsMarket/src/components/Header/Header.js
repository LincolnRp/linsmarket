import React from "react";
import { DivContainer, DivHeader, LogoMarket, DivLogoImage } from "./style";
import LinsMarket from "./../../assets/images/LinsMarket.png";
import SupermarketLogo from "./../../assets/images/Supermarket-Logo.png";
import Search from "../Search/Search";

function Header() {
  return (
    <DivContainer>
      <Search />
      <DivHeader>
        <img src={LinsMarket} alt={"Logo Market"}></img>
      </DivHeader>
      <DivLogoImage>
        <LogoMarket src={SupermarketLogo} alt={"Super Market Icon"} />
        <h2>Produtos</h2>
      </DivLogoImage>
    </DivContainer>
  );
}

export default Header;
