import styled from "styled-components";

export const Wrapper = styled.div`
  padding-inline: 24px;
  padding-bottom: 120px;
  @media (min-width: 768px) {
    padding-bottom: 96px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin: auto;
    padding-bottom: 160px;
    padding-inline: 0;
  }
`;
export const Container = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
  }
`;
export const ImageBox = styled.div`
  max-width: 327px;
  margin: auto;
  border-radius: 8px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    max-width: 688px;
    margin-bottom: 63px;
  }
  @media (min-width: 1440px) {
    max-width: none;
    margin: 0;
    order: 2;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ContentBox = styled.div`
  text-align: center;
  @media (min-width: 1440px) {
    text-align: start;
    max-width: 445px;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 32px;
  @media (min-width: 768px) {
    max-width: 445px;
    margin-inline: auto;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 44px; /* 110% */
    letter-spacing: 1.429px;
    text-transform: uppercase;
  }
`;
export const BestWord = styled.span`
  color: ${(props) => props.theme.darkOrange};
`;
export const Content = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
  @media (min-width: 768px) {
    max-width: 573px;
    margin: auto;
  }
`;
