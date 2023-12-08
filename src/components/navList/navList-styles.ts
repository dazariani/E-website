import styled from "styled-components";

export const Container = styled.div<{ $showNavList: boolean }>`
  max-height: 730px;
  position: absolute;
  top: 89px;
  left: 0px;
  right: 0;
  z-index: 5;
  & > div > div {
    margin-bottom: 35px;
  }
  & > div > div > div {
    margin-top: 70px;
  }
  z-index: ${(props) => (props.$showNavList ? 5 : -1)};
  opacity: ${(props) => (props.$showNavList ? 1 : 0)};
  transition: opacity 0.3s ease-in-out 0s;
  background: ${(props) => props.theme.white};
  overflow-y: auto;
`;
