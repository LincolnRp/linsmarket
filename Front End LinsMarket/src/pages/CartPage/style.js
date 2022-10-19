import styled from "styled-components";

export const DivImageCart = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-left: 10%;
  }
`;

export const HeaderCart = styled.div`
  height: 164px;
  background-color: #0274bc;
`;

export const Products = styled.div``;

export const CardProduct = styled.div`
  display: flex;
  margin-top: 2%;
  padding-bottom: 10px;

  img {
    width: 84px;
  }
`;

export const TextCard = styled.div`
  h1 {
    font-weight: bold;
    color: #3a3a3a;
  }

  h2 {
    font-weight: bold;
    color: #803829;
    margin-top: 1px;
  }

  h3 {
    display: flex;
    gap: 2%;
    font-weight: bold;
    color: #3a3a3a;
    margin-top: 1px;
    img {
      width: 24px;
    }
  }
`;

export const DivContainProduct = styled.div``;

export const DivContain = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8vh;
`;

export const DivButton = styled.div`
  h3 {
    margin-top: 2%;
    color: #3a3a3a;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 2%;
  }
`;
