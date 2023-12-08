import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 327px;
  margin-inline: auto;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    max-width: 688px;
    padding-inline: 0px;
    margin-bottom: 32px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-bottom: 40px;
  }
`;
export const Container = styled.div`
  background: url("/assets/home/mobile/image-speaker-zx7.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block: 100px;
  border-radius: 8px;
  padding-left: 24px;
  @media (min-width: 768px) {
    background: url("/assets/home/tablet/image-speaker-zx7.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    padding-left: 62px;
  }
  @media (min-width: 1440px) {
    background: url("/assets/home/desktop/image-speaker-zx7.jpg");
    padding-left: 95px;
  }
`;
export const ContentBox = styled.div`
  text-align: start;
`;
export const Name = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
export const SeeBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-inline: 30px;
  padding-block: 15px;
  background-color: rgb(216, 125, 74, 0);
  border: 1px solid ${(props) => props.theme.black};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      background: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
    }
  }
`;
