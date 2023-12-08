import styled from "styled-components";

export const Container = styled.div<{ $showCart: boolean }>`
  width: 327px;
  max-height: 680px;
  margin: auto;
  padding-inline: 28px;
  padding-block: 32px;
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  position: absolute;
  top: 113px;
  left: 50%;
  transform: translate(-50%);
  z-index: ${(props) => (props.$showCart ? 5 : -1)};
  overflow-y: auto;
  opacity: ${(props) => (props.$showCart ? 1 : 0)};
  transition: opacity 0.3s ease-in-out 0s;
  @media (min-width: 768px) {
    width: 377px;
    left: auto;
    right: 40px;
    transform: translate(0);
    padding-inline: 32px;
  }
  @media (min-width: 1440px) {
    right: 160px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 31px;
`;
export const ProductTotalNumBox = styled.div``;
export const ProductTotalNumText = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;
export const ProductTotalNumDigit = styled.span``;
export const RemoveAll = styled.span<{ $isProduct: boolean }>`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  text-decoration-line: underline;
  opacity: ${(props) => (props.$isProduct ? 1 : 0.5)};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      color: ${(props) => props.theme.lightOrange};
    }
  }
`;
export const ProductListBox = styled.div`
  margin-bottom: 32px;
`;
export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
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
export const CheckoutBtn = styled.button`
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
  cursor: default;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.lightOrange};
    }
  }
`;
