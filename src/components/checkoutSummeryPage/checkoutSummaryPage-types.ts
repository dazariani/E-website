import { DataProps } from "../../data-type";

export interface Props {
  cardData: DataProps;
  setCardData: (props: DataProps) => void;
  setGrandTotal: (props: number) => void;
  setShowThanks: (props: boolean) => void;
}
