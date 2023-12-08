import styled from "styled-components";
export const Wrapper = styled.div`
  padding-inline: 24px;
  @media (min-width: 768px) {
    padding-inline: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: start;
    gap: 220px;
  }
  @media (min-width: 1440px) {
    width: 350px;
    flex-direction: column;
    justify-content: center;
    gap: 0;
  }
`;
export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.857px;
  text-transform: uppercase;
  @media (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;
export const List = styled.ul`
  list-style: none;
`;
export const ListItem = styled.li`
  margin-bottom: 8px;
`;
export const Quantity = styled.span`
  margin-right: 24px;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  color: ${(props) => props.theme.darkOrange};
`;
export const Item = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
