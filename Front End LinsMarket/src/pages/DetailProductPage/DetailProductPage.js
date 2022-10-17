import React, { useContext, useEffect, useState } from 'react'
import useProtectedPage from '../../hooks/useProtected'
import {DetailContainer, Header, ImageOval, DivProduct, 
    ImageLike, DivContainerProduct, InfoProduct, DivContainerButton, ProductQuantity} from './style'
import ovalBG from './../../assets/images/oval.png'
import Footer from './../../components/Footer/Footer'
import like from './../../assets/images/DetailLike.png'
import star from './../../assets/images/DetailStar.png'
import { Button,Icon, Stack, Input, InputGroup, InputLeftElement ,InputRightElement } from '@chakra-ui/react'
import { GlobalContext } from '../../global/GlobalContext'
import  getProduct  from '../../services/product'
import { useParams } from 'react-router-dom'

 function DetailProductPage() {


  const values = useContext(GlobalContext);
  const params = useParams()
  const {product, quantityStock}  =  getProduct(params.id);
  useProtectedPage()


  return (

    <DetailContainer>

    {product.length > 0 ?
    <div>
    <Header>
      <ImageOval src={ovalBG} alt={"Oval Image"}/>
    </Header>

    <DivContainerProduct>
    <DivProduct>    
    <img src={product[0].image}
    alt={"Image Product"}
    />
    </DivProduct>
    <ImageLike><img src={like} 
    alt={"Like and Share"}></img>
</ImageLike>
    <InfoProduct>
    <h2>{product[0].name}</h2>
    <img src={star}
    alt={"Rating product"}
    ></img>
    <h3>R${product[0].price}</h3>
    </InfoProduct>
    </DivContainerProduct>
      
    {quantityStock === 0 ?
    <ProductQuantity><h1>Produto indisponível</h1></ProductQuantity>
    :
    <DivContainerButton>
        <Button bg={"#803829"} 
        color={"white"} 
        width={"139px"} 
        height={"47px"}
        _hover={{ bg: '#803829' }}
        onClick={() => values.removeProduct(product)}
        >Remover</Button>

        <Button bg={"#0274BC"}
         color={"white"} 
         width={"139px"} 
         height={"47px"}
         _hover={{ bg: '#0274BC' }}
         onClick={() => values.addProduct(product)}
         
         >{values.car[1]  ?
         <div>{`Adicionar  ${values.car.length - 1}`}</div>
             :
        <div>{`Adicionar  0`}</div> }
        </Button>

    </DivContainerButton>
      
    }


    <Footer/>
    
    </div>

        :
<div>..carregando</div> 

}

    </DetailContainer>
  )

}

export default DetailProductPage