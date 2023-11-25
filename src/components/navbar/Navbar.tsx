import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import ConditionalContainer from "../../custom-hooks/conditionalContainer";
import useWindowWidth from "../../custom-hooks/useWindowWidth";

export const NavBurgerLogo = () => {
  return (
    <>
      <BurgerBox>
        <GiHamburgerMenu />
      </BurgerBox>
      <LogoBox>
        <AppLogo src="\assets\shared\desktop\logo.svg" />
      </LogoBox>
    </>
  );
};

const WrappedComponent = ConditionalContainer(NavBurgerLogo);

function Navbar() {
  const width = useWindowWidth();
  return (
    <Wrapper>
      <Container>
        {width > 768 ? <WrappedComponent /> : <NavBurgerLogo />}
        <CartLogoBox>
          <CartLogo src="\assets\shared\desktop\icon-cart.svg" />
        </CartLogoBox>
      </Container>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.div`
  border-bottom: 2px solid rgb(0, 0, 0, 0.7);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.dark};
  padding-inline: 24px;
  padding-block: 32px;
`;

const BurgerBox = styled.div`
  & > svg {
    font-size: 20px;
    color: ${(props) => props.theme.white};
  }
`;
const LogoBox = styled.div``;
const AppLogo = styled.img``;
const CartLogoBox = styled.div``;
const CartLogo = styled.img``;
