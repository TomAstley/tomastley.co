import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  h1 {
    margin: 0;
  }
`;

export const Header = ({ children }) => <HeaderStyled>{children}</HeaderStyled>;
