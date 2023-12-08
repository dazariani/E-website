import styled from "styled-components";

export const NavUList = styled.ul`
  & > a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    margin-bottom: 16px;
  }
  & > a:last-child {
    margin-bottom: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 34px;
    & > a {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1440px) {
    & > a {
      transition: 0.2s ease-in-out;
    }
    & > a:hover {
      color: ${(props) => props.theme.lightOrange};
    }
  }
`;
export const NavListItem = styled.li``;
