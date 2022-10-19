import styled from "styled-components";

export const DivContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0274bc;
`;

export const Logo = styled.img`
  margin: 0;
  padding: 0;
  width: 300px;
  &&:hover {
    cursor: pointer;
  }
`;

export const DivContainerLogin = styled.div`
  border-radius: 34px;
  background-color: white;
  height: 418px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  b {
    cursor: pointer;
  }
`;

export const DivInput = styled.div``;

export const TextInput = styled.p`
  margin-left: 4%;
  color: gray;
  font-size: 14px;
`;

export const InputUser = styled.img``;

export const InputLock = styled.img``;

export const PText = styled.p`
  font-size: 16px;
`;

export const BlueText = styled.span`
  font-size: 16px;
  color: #0274bc;
  font-weight: 500;
`;
