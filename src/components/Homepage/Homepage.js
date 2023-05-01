import styled from "styled-components";

const BulletListStyled = styled.ul`
  li {
    margin: 10px 0px;
    span {
      position: relative;
      font-style: italic;
    }
  }
`;

const CompanyStyled = styled.p`
  font-weight: 500;
`;

export const Company = ({ children }) => <CompanyStyled>{children}</CompanyStyled>;
export const BulletList = ({ children }) => <BulletListStyled>{children}</BulletListStyled>;
