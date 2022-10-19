import styled from "styled-components";

export const DivContainerAdmin = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  h1 {
    color: #0274bc;
    font-weight: bold;
    font-size: 40px;
    margin-left: 4%;
  }
`;

export const CardPending = styled.div`
  margin-top: 4%;
  width: 380px;
  height: 261px;
  border: 2px solid #d1d1d1;
  span {
    color: black;
  }
  p {
    font-size: 18px;
    color: #838383;
    font-weight: bold;
  }
`;

export const DivCardPending = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6%;
`;
