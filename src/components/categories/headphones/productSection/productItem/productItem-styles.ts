import styled from "styled-components";

export const Wrapper = styled.div`
  padding-inline: 24px;
  margin-bottom: 120px;
  @media (min-width: 768px) {
    padding-inline: 0;
    max-width: 689px;
    margin-inline: auto;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-bottom: 160px;
    &:nth-child(2n) > div > div:has(img) {
      order: 2;
    }
    &:last-child {
      margin-bottom: 80px;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    padding-block: 41px 68px;
    margin-bottom: 52px;
  }
  @media (min-width: 1440px) {
    width: 540px;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;
export const Image = styled.img`
  width: 220px;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 243px;
    width: auto;
  }
  @media (min-width: 1440px) {
    width: 100%;
    height: auto;
  }
`;

export const InfoBox = styled.div`
  @media (min-width: 1440px) {
    text-align: start;
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
  @media (min-width: 768px) {
    margin-bottom: 16px;
  }
`;
export const Name = styled.h1`
  max-width: 200px;
  margin: auto;
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.429px;
    max-width: 275px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    margin: 0;
    margin-bottom: 24px;
  }
`;
export const Description = styled.p`
  max-width: 570px;
  margin: auto;
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  @media (min-width: 1440px) {
    max-width: 445px;
    margin-bottom: 40px;
  }
`;
export const SeeBtn = styled.button`
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
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.lightOrange};
  }
`;
