import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.darkGrey};
`;
export const Container = styled.div`
  max-width: 327px;
  margin-inline: auto;
  padding-top: 16px;
  @media (min-width: 768px) {
    max-width: 688px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    padding-top: 79px;
  }
`;
export const GoBack = styled.span`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
export const ContentBox = styled.div``;
