import styled from "styled-components";

export const DivContainerHome = styled.div`




`
export const  DivContent = styled.div`

display: flex;

` 
export const   DivFilter = styled.div`

margin-left: 2%;
display: flex;
flex-direction: column;


h2{
    color: #0274BC;
    font-weight: bold;
    font-size: 20px;
}

li{
    color: #989898;
    font-weight: bold;
    font-size: 18px;
    margin-top: 2%;
}   

`
export const DivProducts = styled.div`

display: flex;
flex-wrap: wrap;
justify-content: center;
row-gap: 50px;
column-gap: 4%;


`

export const CardProduct = styled.div`

img{
    width: 80px;
}

h2{
font-weight: bold;
max-width: 30vw;
color: #3A3A3A;
}

h3{
font-weight: bold;
color: #803829;
}
`