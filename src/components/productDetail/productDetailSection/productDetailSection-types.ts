import { DataProps } from "../../../data-type";

export interface Props {
  detailData: DataProps;
  thisProductData: DataProps[0];
  image: string;
  imageTab: string;
  imageDesk: string;
  isNew: boolean;
  name: string;
  description: string;
  price: number;
  features: string;
  others: {
    link: string;
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  includes: {
    quantity: number;
    item: string;
  }[];

  cardData: DataProps | [];
  setCardData: (props: DataProps | []) => void;
}
