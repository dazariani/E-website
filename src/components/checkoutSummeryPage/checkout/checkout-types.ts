import { DataProps } from "../../../data-type";
export interface Props {
  cardData: DataProps;
  setCardData: (props: DataProps) => void;
  setGrandTotal: (props: number) => void;
  setShowThanks: (props: boolean) => void;
}

export type Inputs = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  payment: string;
  eMoneyNumber?: string;
  eMoneyPIN: string;
};
