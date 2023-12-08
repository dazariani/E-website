import { DataProps } from "../../data-type";

export interface Props {
  showThanks: boolean;
  setShowThanks: (props: boolean) => void;
  cardData: DataProps | [];
  grandTotal: number;
}
