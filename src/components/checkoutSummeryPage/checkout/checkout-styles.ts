import styled from "styled-components";

export const Container = styled.div`
  max-width: 375px;
  margin: auto;
  padding-top: 24px;
  background-color: ${(props) => props.theme.white};
  border-radius: 8px;
  margin-top: 24px;
  @media (min-width: 768px) {
    max-width: 689px;
    padding-top: 30px;
  }
  @media (min-width: 1440px) {
    max-width: 1110px;
    margin-top: 38px;
    padding-top: 0;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 32px;
  padding-left: 24px;
  @media (min-width: 1440px) {
    padding-top: 54px;
    padding-left: 0;
  }
`;
export const Form = styled.form`
  background-color: ${(props) => props.theme.darkGrey};
  padding-bottom: 97px;
  @media (min-width: 1440px) {
    width: 100%;
    margin-inline: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 30px;
    padding-bottom: 140px;
  }
`;
export const CheckoutBox = styled.div`
  margin-bottom: 25px;
  background-color: ${(props) => props.theme.white};
  padding-inline: 24px;
  border-radius: 8px;
  padding-bottom: 31px;
  @media (min-width: 768px) {
    padding-inline: 30px;
  }
  @media (min-width: 1440px) {
    width: 730px;
    margin-bottom: 0;
    padding-inline: 48px;
    padding-bottom: 48px;
  }
`;
export const Field = styled.fieldset`
  border: 0;
  margin-bottom: 32px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 16px;
    margin-bottom: 53px;
  }
`;
export const Legend = styled.legend`
  font-size: 13px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.929px;
  text-transform: uppercase;
  color: ${(props) => props.theme.darkOrange};
  margin-bottom: 16px;
`;
export const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const RadioFieldBox = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.dark};
  padding-inline: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  &:nth-child(2n) {
    margin-bottom: 32px;
  }
  &:has(input:checked) {
    border-color: ${(props) => props.theme.darkOrange};
  }
  @media (min-width: 768px) {
    width: 311px;
    justify-self: end;
  }
`;
export const Label = styled.label`
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.214px;
  margin-bottom: 9px;
`;
export const RadioLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.25px;
  padding-block: 18px;
  padding-inline: 16px;
`;
export const Input = styled.input`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.25px;
  padding-block: 18px;
  padding-inline: 24px;
  border: 2px solid ${(props) => props.theme.Dark};
  opacity: 0.5;
  border-radius: 8px;
  accent-color: ${(props) => props.theme.darkOrange};
  transition: 0.2s ease-in-out;
  @media (min-width: 1440px) {
    &:focus {
      outline-color: ${(props) => props.theme.darkOrange};
    }
  }
`;
export const EMoneyDetailBox = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 16px;
    grid-column: 1/3;
    & > div {
      margin-bottom: 0;
    }
  }
`;
export const ErrorMsg = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: -0.214px;
  margin-top: 9px;
  color: red;
  margin-left: 2.5px;
`;
