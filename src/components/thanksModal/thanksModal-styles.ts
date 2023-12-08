import styled from "styled-components";

export const Wrapper = styled.div<{ $showThanks: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 327px;
  position: absolute;
  top: 225px;
  left: 50%;
  transform: translate(-50%);
  z-index: ${(props) => (props.$showThanks ? 5 : -1)};
  opacity: ${(props) => (props.$showThanks ? 1 : 0)};
  transition: opacity 0.3s ease-in-out 0s;
  @media (min-width: 768px) {
    width: 540px;
  }
`;
export const Container = styled.div`
  padding-inline: 24px;
  padding-block: 32px;
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 100%;
    padding: 48px;
  }
`;
export const Header = styled.div``;
export const OrderIcon = styled.img`
  margin-bottom: 23px;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.857px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    max-width: 284px;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.143px;
    margin-bottom: 24px;
  }
`;
export const Content = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 24px;
  opacity: 0.5;
  @media (min-width: 768px) {
    margin-bottom: 33px;
  }
`;
export const ProductPriceBox = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 46px;
  }
`;
export const ProductBox = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.darkGrey};
  padding-inline: 24px;
  padding-top: 24px;
  padding-bottom: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid rgb(222, 222, 222);
  @media (min-width: 768px) {
    border-radius: 0;
    border-top-left-radius: 8px;
    width: 246px;
  }
`;
export const ImageProductBox = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;
`;
export const ImageBox = styled.div`
  max-width: 50px;
  border-radius: 8px;
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const NamePriceBox = styled.div`
  display: flex;
  flex-direction: column;
`;
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
export const ProductOtherBox = styled.div`
  transition: 0.2s ease-in-out;
`;
export const Quantity = styled.span``;
export const OtherItems = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.214px;
  display: block;
  background: ${(props) => props.theme.darkGrey};
  color: rgb(121, 121, 121);
  padding-bottom: 24px;
  padding-top: 12px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  @media (min-width: 1440px) {
    cursor: pointer;
  }
`;
export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding-inline: 24px;
  padding-block: 15px 19px;
  margin-bottom: 23px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 200px;
    border-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-bottom: 0;
    padding-block: 41px;
  }
`;
export const Total = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 8px;
  opacity: 0.5;
`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;
export const BackToHomeBtn = styled.div`
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${(props) => props.theme.darkOrange};
  color: ${(props) => props.theme.white};
  padding-block: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      background: ${(props) => props.theme.lightOrange};
    }
  }
`;
