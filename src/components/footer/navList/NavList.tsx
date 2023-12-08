import { Link } from "react-router-dom";
import { NavUList, NavListItem } from "./navList-styles";

function NavList() {
  return (
    <>
      <NavUList>
        <Link to="/" target="_top">
          <NavListItem>Home</NavListItem>
        </Link>

        <Link to="/category-headphones" target="_top">
          <NavListItem>HEADPHONES</NavListItem>
        </Link>

        <Link to="/category-speakers" target="_top">
          <NavListItem>SPEAKERS</NavListItem>
        </Link>

        <Link to="/category-earphones" target="_top">
          <NavListItem>EARPHONES</NavListItem>
        </Link>
      </NavUList>
    </>
  );
}

export default NavList;
