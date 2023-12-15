import { GiHamburgerMenu } from "react-icons/gi";
import ConditionalContainer from "../../custom-hooks/conditionalContainer";
import useWindowWidth from "../../custom-hooks/useWindowWidth";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NavList from "../footer/navList/NavList";
import {
  Wrapper,
  Container,
  BurgerBox,
  LogoBox,
  AppLogo,
  CartLogoBox,
  CartLogo,
} from "./navbar-styles";

export interface BurgerProps {
  showNavList: boolean;
  setShowNavList: (props: boolean) => void;
  setShowCart: (pro: boolean) => void;
}

export const NavBurgerLogo = (props: BurgerProps) => {
  const { showNavList, setShowNavList, setShowCart } = props;
  return (
    <>
      <BurgerBox
        onClick={() => {
          setShowNavList(!showNavList);
          setShowCart(false);
        }}
      >
        <GiHamburgerMenu />
      </BurgerBox>
      <Link
        to="/"
        onClick={() => {
          setShowCart(false);
          setShowNavList(false);
        }}
      >
        <LogoBox>
          <AppLogo src="\assets\shared\desktop\logo.svg" />
        </LogoBox>
      </Link>
    </>
  );
};

const WrappedComponent = ConditionalContainer(NavBurgerLogo);

interface Props {
  showCart: boolean;
  setShowCart: (props: boolean) => void;
  showNavList: boolean;
  setShowNavList: (props: boolean) => void;
}

function Navbar(props: Props) {
  const { showCart, setShowCart, showNavList, setShowNavList } = props;

  const width = useWindowWidth();

  // Prevent page scrolling when cart modal is on
  useEffect(() => {
    if (showCart || showNavList) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [showCart, showNavList]);
  return (
    <Wrapper>
      <Container>
        {width >= 768 && width < 1440 ? (
          <WrappedComponent
            setShowCart={setShowCart}
            showNavList={showNavList}
            setShowNavList={setShowNavList}
          />
        ) : width >= 1440 ? (
          <>
            <Link
              to="/"
              onClick={() => {
                setShowCart(false);
                setShowNavList(false);
              }}
            >
              <LogoBox>
                <AppLogo src="\assets\shared\desktop\logo.svg" />
              </LogoBox>
            </Link>
            <NavList />
          </>
        ) : (
          <NavBurgerLogo
            setShowCart={setShowCart}
            showNavList={showNavList}
            setShowNavList={setShowNavList}
          />
        )}
        <CartLogoBox
          onClick={() => {
            setShowCart(!showCart);
            setShowNavList(false);
          }}
        >
          <CartLogo src="\assets\shared\desktop\icon-cart.svg" />
        </CartLogoBox>
      </Container>
    </Wrapper>
  );
}

export default Navbar;
