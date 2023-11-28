import styled from "styled-components";

function NavList() {
  return (
    <>
      <NavUList>
        <NavListItem>Home</NavListItem>
        <NavListItem>HEADPHONES</NavListItem>
        <NavListItem>SPEAKERS</NavListItem>
        <NavListItem>EARPHONES</NavListItem>
      </NavUList>
    </>
  );
}

export default NavList;

const NavUList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const NavListItem = styled.li`
  margin-bottom: 16px;
  &:last-child {
    margin: 0;
  }
`;
