import { DataProps } from "../../data-type";

export interface Props {
  detailData: DataProps;
  cardData: DataProps | [];
  setCardData: (props: DataProps | []) => void;
}
