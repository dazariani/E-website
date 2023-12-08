import { DataProps } from "../../../data-type";

export interface Props {
  id: number;
  image: string;
  name: string;
  price: number;
  NumberOfItems: number;
  cardData: DataProps | [];
  setCardData?: (props: DataProps | []) => void;
  product: DataProps[0];
  showCart?: boolean;
}
