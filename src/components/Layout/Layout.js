import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  box-sizing: border-box;
`;

const FlexRowStyled = styled.div`
  display: flex;
  width: ${props=>props.width};
  ${props=>props.styles}
`;

const GridStyled = styled.div`
  display: grid;
  p {
    margin: 0;
  }
  li {
    line-height: 1.35rem;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(auto, 300px));
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => props.cols}, minmax(${(props) => props.min}, ${(props) => props.max}));
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  }
`;

export const Grid = ({ children, cols = 2, rows = 2, min = "auto", max = "300px" }) => (
  <GridStyled min={min} max={max} cols={cols} rows={rows}>
    {children}
  </GridStyled>
);
export const FlexRow = ({ children, width = "100%", styles }) => <FlexRowStyled width={width} styles={styles}>{children}</FlexRowStyled>;
export const Container = ({ children, width = "100%" }) => <ContainerStyled width={width}>{children}</ContainerStyled>;
