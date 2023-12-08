import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 120px;
  padding-inline: 24px;
  @media (min-width: 768px) {
    padding-inline: 0;
    max-width: 689px;
    margin-inline: auto;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    width: 100%;
    margin-bottom: 160px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: 16px;
  }
`;
export const FirsSecondBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  @media (min-width: 1440px) {
    justify-content: space-between;
  }
`;
export const FirstSecondImg = styled.img`
  border-radius: 8px;
  margin-bottom: 24px;
  width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 0;
    object-fit: cover;
  }
`;
export const ThirdImg = styled(FirstSecondImg)`
  margin: 0;
  @media (min-width: 768px) {
    max-width: 390px;
  }
  @media (min-width: 1440px) {
    max-width: 632px;
    width: 100%;
  }
`;
