import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 56px;
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ItemBox = styled.div``;
export const ImageBox = styled.div`
  margin-bottom: 32px;
  border-radius: 8px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 327px;
  border-radius: 8px;
  @media (min-width: 1440px) {
    max-width: 100%;
  }
`;
export const Name = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.714px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
export const SeeBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkOrange};
  padding-inline: 29.5px;
  padding-block: 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:hover {
      background: ${(props) => props.theme.lightOrange};
    }
  }
`;
