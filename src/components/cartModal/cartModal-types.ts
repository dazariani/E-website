import { DataProps } from "../../data-type";

export interface Props {
  cardData: DataProps | [];
  setCardData: (props: DataProps | []) => void;
  showCart: boolean;
  setShowCart: (props: boolean) => void;
}
