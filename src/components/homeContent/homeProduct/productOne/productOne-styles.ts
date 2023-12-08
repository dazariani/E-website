import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 327px;
  margin-inline: auto;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    max-width: 688px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-bottom: 40px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/assets/home/desktop/pattern-circles.svg");
  background-position: center -120px;
  background-repeat: no-repeat;
  background-size: 560px;
  background-color: ${(props) => props.theme.darkOrange};
  padding-block: 56px;
  border-radius: 8px;
  @media (min-width: 768px) {
    background-position: center -250px;
    background-size: 840px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 150px;
    background-position: -90px 35px;
    background-repeat: no-repeat;
    padding-bottom: 0;
    padding-top: 133px;
    overflow: hidden;
  }
`;
export const ImageBox = styled.div`
  max-width: 172px;
  margin-bottom: 32px;
  @media (min-width: 1440px) {
    max-width: 380px;
    margin-bottom: -12px;
  }
`;
export const Image = styled.img`
  width: 100%;
`;

export const InfoBox = styled.div`
  text-align: center;
  @media (min-width: 1440px) {
    text-align: start;
    margin-top: 15px;
  }
`;
export const Name = styled.h1`
  max-width: 250px;
  margin: auto;
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  margin-bottom: 24px;
  @media (min-width: 768px) {
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  @media (min-width: 1440px) {
    margin-inline: 0;
  }
`;
export const Content = styled.p`
  max-width: 280px;
  margin: auto;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: ${(props) => props.theme.white};
  opacity: 0.75;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
    max-width: 350px;
  }
`;
export const SeeBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-inline: 30px;
  padding-block: 15px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      background: rgb(76, 76, 76);
    }
  }
`;
