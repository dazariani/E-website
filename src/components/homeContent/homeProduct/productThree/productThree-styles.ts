import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 327px;
  margin-inline: auto;
  @media (min-width: 768px) {
    max-width: 688px;
    padding-inline: 0px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
  }
`;
export const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 11px;
    @media (min-width: 1440px) {
      gap: 24px;
    }
  }
`;
export const ImageBox = styled.div`
  max-width: 327px;
  border-radius: 8px;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 0px;
    max-width: 338px;
    min-width: 338px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0px;
    max-width: none;
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ContentBox = styled.div`
  padding-block: 41px;
  padding-inline: 24px;
  background: ${(props) => props.theme.darkGrey};
  border-radius: 8px;
  @media (min-width: 768px) {
    padding-block: 100px;
    padding-inline: 41px;
    width: 100%;
    height: 320px;
  }
  @media (min-width: 1440px) {
    padding-block: 98px;
    height: auto;
  }
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
