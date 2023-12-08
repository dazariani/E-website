export interface Props {
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
}
