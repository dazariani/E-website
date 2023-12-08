import styled from "styled-components";

export const Wrapper = styled.div``;
export const Container = styled.div`
  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.white};
  padding-block: 52px 38px;
  padding-inline: 24px;
  position: relative;
  @media (min-width: 768px) {
    padding-block: 64px 46px;
    padding-inline: 40px;
  }
  @media (min-width: 1440px) {
    padding-inline: 165px;
    padding-block: 75px 48px;
  }
`;
export const OrangeBox = styled.div`
  width: 100px;
  height: 4px;
  position: absolute;
  left: 137px;
  top: 0;
  background-color: ${(props) => props.theme.darkOrange};
  @media (min-width: 1440px) {
    left: 165px;
  }
`;
export const LogoNavBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    align-items: start;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const LogoBox = styled.div`
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Logo = styled.img``;
export const NavBox = styled.div`
  margin-bottom: 48px;
  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Content = styled.p`
  opacity: 0.5;
  margin-bottom: 48px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  @media (min-width: 768px) {
    text-align: start;
    margin-bottom: 81px;
  }
  @media (min-width: 1440px) {
    max-width: 540px;
    margin-bottom: 0px;
  }
`;
export const CopyrightSocialBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    align-items: start;
  }
`;
export const CopyrightText = styled.span`
  opacity: 0.5;
  margin-bottom: 48px;
  font-size: 15px;
  font-weight: 700;
  line-height: 25px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 56px;
  }
`;
export const SocialBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (min-width: 1440px) {
    margin-top: -30px;
  }
`;
export const SocialLink = styled.a``;
export const SocialLogo1 = styled.svg`
  & > path {
    transition: 0.2s ease-in-out;
  }
  &:hover > path {
    fill: ${(props) => props.theme.darkOrange};
  }
`;
export const SocialLogo2 = styled(SocialLogo1)``;
export const SocialLogo3 = styled(SocialLogo1)``;
