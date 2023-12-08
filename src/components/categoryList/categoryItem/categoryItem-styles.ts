import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 90px;
  padding-inline: 24px;
  & > a {
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 768px) {
    max-width: 350px;
    width: 100%;
    padding-inline: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 120px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.darkGrey};
  border-radius: 8px;
  padding-bottom: 22px;
  @media (min-width: 768px) {
    max-width: 350px;
    width: 100%;
  }
  @media (min-width: 1440px) {
    padding-bottom: 30px;
    &:hover > div:has(span) > span {
      color: ${(props) => props.theme.darkOrange};
    }
  }
`;
export const Image = styled.img`
  max-width: fit-content;
  width: 100%;
  position: relative;
  top: -48px;
  filter: drop-shadow(0 30px 20px hsla(0deg, 0%, 0%, 0.3));
  @media (min-width: 1440px) {
    max-width: fit-content;
  }
`;
export const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.071px;
  text-transform: uppercase;
  margin-bottom: 17px;
  @media (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: 1.286px;
  }
`;
export const ShopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
export const ShopText = styled.span`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.5;
  transition: 0.2s ease-in-out;
`;
export const Arrow = styled.img``;
