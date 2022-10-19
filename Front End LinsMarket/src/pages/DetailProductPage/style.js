import styled from "styled-components";
import Circle from "./../../assets/images/circle.png";

export const DetailContainer = styled.div``;

export const Header = styled.div``;

export const ImageOval = styled.img`
  height: 20vh;
  width: 100%;
`;

export const DivProduct = styled.div`
  background-image: url(${Circle});
  background-size: cover;
  height: 28vh;
  width: 50vw;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40vw;
    border-radius: 60px;
  }
`;
export const DivContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageLike = styled.div`
  width: 100vw;
  display: flex;
  justify-content: end;
  margin-right: 4%;
  margin-top: -4%;
`;

export const InfoProduct = styled.div`
  margin-left: 2%;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  img {
    max-width: 40vw;
  }

  h2 {
    font-weight: bold;
    font-size: 20px;
    color: #3a3a3a;
  }

  h3 {
    font-weight: bold;
    color: #803829;
    font-size: 20px;
  }
`;
export const DivContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  margin-top: 10%;
`;

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  h1 {
    font-weight: bold;
    color: #803829;
    font-size: 26px;
  }
`;
