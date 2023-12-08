import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(21, 21, 21);
`;
export const Container = styled.div`
  background: url("/assets/home/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-position: center -90px;
  background-size: 380px;
  padding-top: 108px;
  padding-bottom: 125px;
  padding-inline: 24px;
  filter: brightness(0.78);
  @media (min-width: 768px) {
    background: url("/assets/home/tablet/image-header.jpg");
    background-position: center -90px;
    background-repeat: no-repeat;
    background-size: 750px;
    padding-bottom: 170px;
    filter: brightness(0.85);
  }
  @media (min-width: 1440px) {
    display: flex;
    background-position: 80% -90px;
    padding-inline: 165px;
    padding-block: 115px 180px;
  }
`;
export const ContentBox = styled.div`
  text-align: center;
  @media (min-width: 1440px) {
    text-align: start;
  }
`;
export const Title = styled.span`
  display: block;
  font-size: 14px;
  color: rgb(140, 140, 140);
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  margin-bottom: 16px;
`;
export const ProductName = styled.h1`
  width: 100%;
  max-width: 330px;
  margin: auto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.286px;
  color: ${(props) => props.theme.white};
  margin-bottom: 24px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    max-width: 396px;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  @media (min-width: 1440px) {
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;
export const ProductDescription = styled.p`
  width: 100%;
  max-width: 350px;
  margin: auto;
  font-size: 15px;
  color: rgb(198, 198, 198);
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    margin: 0;
    margin-bottom: 40px;
  }
`;
export const SeeProductBtn = styled.button`
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
  @media (min-width: 1440px) {
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.lightOrange};
    }
  }
`;
