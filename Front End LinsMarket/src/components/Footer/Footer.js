import React from 'react'
import {DivContainerFooter, Car, Profile, Home} from './style'
import { useNavigate } from "react-router-dom";
import goToPage from "../../routes/coordinator";
import CarrinhoFooter from './../../assets/images/CarrinhoFooter.png'
import HomeFooter from './../../assets/images/HomeFooter.png'
import ProfileFooter from './../../assets/images/ProfileFooter.png'

function Footer() {


const Navigate = useNavigate();


  return (

    <DivContainerFooter>
  
        <Home src={HomeFooter}
        alt={"Home Icon"}
        onClick={() => goToPage(Navigate, "")}
        ></Home>

        <Car src={CarrinhoFooter}
        alt={"Car Market Icon"}
        onClick={() => goToPage(Navigate, "")}
        ></Car>
        <Profile 
        src={ProfileFooter}
        alt={"Person Icon"}
        onClick={() => goToPage(Navigate, "")}
        ></Profile>

    </DivContainerFooter>

  )
}

export default Footer