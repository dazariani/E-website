import styled from "styled-components";

export const Mask = styled.div<{
  $showCart: boolean;
  $showNavList: boolean;
  $showThanks: boolean;
}>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: ${(props) => (props.$showThanks ? 0 : 89)}px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${(props) =>
    props.$showCart || props.$showNavList || props.$showThanks ? 2 : -1};
  opacity: ${(props) =>
    props.$showCart || props.$showNavList || props.$showThanks ? 1 : 0};
  transition: opacity 0.3s ease-in-out 0s;
`;
