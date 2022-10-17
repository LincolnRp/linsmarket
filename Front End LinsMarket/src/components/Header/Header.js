import React from 'react'
import {DivContainer, DivHeader, DivContainerSearch, ImageCart, LogoMarket, DivLogoImage} from './style'
import { Input, InputGroup,InputRightElement, Icon } from '@chakra-ui/react'
import { useForm } from '../../hooks/userForm';
import carHeader from './../../assets/images/carHeader.png'
import searchHeader from './../../assets/images/searchHeader.png'
import goToPage from './../../routes/coordinator'
import { useNavigate } from "react-router-dom";
import LinsMarket from './../../assets/images/LinsMarket.png'
import SupermarketLogo from './../../assets/images/Supermarket-Logo.png'

function Header() {

  const Navigate = useNavigate();

  const [form, onChange, cleanFields] = useForm({
    search: "",
  });



  return (
    <DivContainer>
      <DivContainerSearch>
      <InputGroup width={"75%"}>

        <Input
          marginLeft={"4px"}
          width={'120%'}
          h={'25px'}
          placeholder="buscar"
          value={form.search}
          type={"text"}
          name="search"
          onChange={onChange}
          marginBlock={'1vh'}
        ></Input>
                  
       <InputRightElement>
       <img src={searchHeader} alt={"Search Icon"}></img>
       </InputRightElement>

       </InputGroup>

        <ImageCart src={carHeader}
        alt={"Car Market Icon"}
         onClick={() => goToPage(Navigate, "")}
        ></ImageCart>

        </DivContainerSearch>

    <DivHeader>
      <img src={LinsMarket} alt={"Logo Market"}></img>
    </DivHeader>
    <DivLogoImage>
      <LogoMarket src={SupermarketLogo} alt={"Super Market Icon"}/>
      <h2>Produtos</h2>
      </DivLogoImage>
    
    </DivContainer>
       
  )
}

export default Header