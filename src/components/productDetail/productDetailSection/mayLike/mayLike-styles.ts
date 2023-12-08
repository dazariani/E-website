import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 688px;
  margin-inline: auto;
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-bottom: 90px;
  }
`;
export const ProductContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 11px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
  }
`;

export const Container = styled.div``;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0.857px;
  text-transform: uppercase;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.143px;
    margin-bottom: 56px;
  }
`;
