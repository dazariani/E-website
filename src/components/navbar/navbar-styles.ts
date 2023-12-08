import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 2px solid rgb(0, 0, 0, 0.7);
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.dark};
  padding-inline: 24px;
  padding-block: 32px;
  @media (min-width: 768px) {
    padding-inline: 40px;
  }
  @media (min-width: 1440px) {
    padding-inline: 165px;
    padding-block: 35px;
  }
`;

export const BurgerBox = styled.div`
  & > svg {
    font-size: 20px;
    color: ${(props) => props.theme.white};
  }
`;
export const LogoBox = styled.div``;
export const AppLogo = styled.img``;
export const CartLogoBox = styled.div``;
export const CartLogo = styled.img``;
