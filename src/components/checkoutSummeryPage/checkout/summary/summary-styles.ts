import styled from "styled-components";

export const Container = styled.div`
  padding-block: 32px;
  padding-inline: 24px;
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  & > a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    padding-inline: 33px;
  }
  @media (min-width: 1440px) {
    width: 350px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
`;
export const ProductTotalNumText = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;
export const ProductListBox = styled.div`
  margin-bottom: 32px;
`;
export const PriceContainer = styled.div`
  margin-bottom: 24px;
`;
export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  &:nth-child(3n) {
    margin-bottom: 24px;
  }
  &:nth-child(4n) > span:nth-child(2n) {
    color: ${(props) => props.theme.darkOrange};
  }
`;
export const TotalTitle = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
export const TotalPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const CheckoutBtn = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${(props) => props.theme.darkOrange};
  color: ${(props) => props.theme.white};
  border: none;
  padding-block: 15px;
  cursor: pointer;
  @media (min-width: 768px) {
    padding-block: 17px;
  }
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      background: ${(props) => props.theme.lightOrange};
    }
  }
`;
