import styled from "styled-components";

export const DivContainerAdmin = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Nav = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 30vw;
  border: solid 2px #d1d1d1;
  display: flex;
  flex-direction: column;

  h1 {
    color: #0274bc;
    font-weight: bold;
    font-size: 40px;
    margin-left: 4%;
  }

  img {
    margin-left: 4%;
    margin-top: 4%;
    margin-right: 2%;
  }
  p {
    margin-top: 4%;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Content = styled.div``;

export const DivNavigation = styled.div`
  display: flex;
  align-items: center;
`;
