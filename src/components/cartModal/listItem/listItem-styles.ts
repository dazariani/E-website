import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const ImageProductBox = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
`;
export const ImageBox = styled.div`
  max-width: 64px;
  border-radius: 8px;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const ProductBox = styled.div``;
export const ProductName = styled.h1`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
`;
export const ProductPrice = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.5;
`;
export const CountBox = styled.div`
  display: flex;
`;
export const Minus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${(props) => props.theme.darkGrey};
  padding-block: 8px;
  padding-right: 8px;
  padding-left: 13px;
  cursor: default;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.lightOrange};
    }
  }
`;
export const ItemNumber = styled(Minus)`
  color: ${(props) => props.theme.black};
  width: 37px;
  cursor: auto;
  &:hover {
    color: inherit;
  }
`;
export const Plus = styled(Minus)`
  padding-left: 8px;
  padding-right: 13px;
`;
export const SummaryCount = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  opacity: 0.5;
`;
