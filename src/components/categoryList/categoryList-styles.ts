import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 688px;
    margin-inline: auto;
    padding-inline: 0;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
  }
`;
export const Container = styled.div`
  margin-bottom: 120px;
  width: 100%;
  max-width: 375px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    max-width: 100%;
    margin-bottom: 96px;
  }
`;
