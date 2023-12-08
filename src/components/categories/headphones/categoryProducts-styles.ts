import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div``;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding-block: 32px;
  @media (min-width: 768px) {
    padding-block: 80px 70px;
  }
`;
export const Header = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.429px;
  }
`;
export const AudioGeraBox = styled.div`
  @media (min-width: 1440px) {
    margin-top: 64px;
  }
`;
