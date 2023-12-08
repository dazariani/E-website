import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/* Image and Info */
export const ImageInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 88px;
  padding-inline: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 70px;
    padding-inline: 0;
    margin-bottom: 120px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-inline: auto;
    margin-bottom: 160px;
    gap: 125px;
  }
`;
export const ImageBox = styled.div`
  width: 100%;
  background: ${(props) => props.theme.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    width: 281px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    width: 540px;
    margin-inline: auto;
  }
`;
export const Image = styled.img`
  width: 181px;
  border-radius: 8px;
  @media (min-width: 768px) {
    padding-block: 85px;
  }
  @media (min-width: 1440px) {
    width: 100%;
    padding-block: 0;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 768px) {
    max-width: 340px;
  }
  @media (min-width: 1440px) {
    max-width: none;
  }
`;
export const NewText = styled.span`
  display: block;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${(props) => props.theme.darkOrange};
`;
export const Name = styled.h1`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: start;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  text-align: start;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    max-width: 445px;
  }
`;
export const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
export const AddToCardBox = styled.div`
  display: flex;
  gap: 16px;
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
  padding: 15px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  @media (min-width: 1440px) {
    &:hover {
      color: ${(props) => props.theme.lightOrange};
    }
  }
`;
export const ItemNumber = styled(Minus)`
  color: ${(props) => props.theme.black};
  width: 50px;
  cursor: auto;
  &:hover {
    color: inherit;
  }
`;
export const Plus = styled(Minus)``;
export const AddBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkOrange};
  padding-inline: 29.5px;
  padding-block: 15px;
  text-transform: uppercase;
  border: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  @media (min-width: 1440px) {
    &:hover {
      background: ${(props) => props.theme.lightOrange};
    }
  }
`;

/* Features and InTheBox */
export const FeaturesAndInTheBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 88px;
  @media (min-width: 768px) {
    max-width: 689px;
    margin-inline: auto;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-inline: auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: start;
    gap: 125px;
    margin-bottom: 160px;
  }
`;
export const FeaturesBox = styled.div`
  text-align: start;
  margin-bottom: 24px;
  padding-inline: 24px;
  @media (min-width: 768px) {
    padding-inline: 0;
    margin-bottom: 120px;
  }
  @media (min-width: 1440px) {
    max-width: 635px;
    margin-bottom: 0;
  }
`;
export const FeaturesTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.857px;
  text-transform: uppercase;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 32px;
    letter-spacing: 1.143px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
`;
export const FeaturesContent = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
