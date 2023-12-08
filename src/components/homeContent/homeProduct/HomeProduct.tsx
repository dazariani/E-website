import styled from "styled-components";
import ProductOne from "./productOne/ProductOne";
import ProductTwo from "./productTwo/ProductTwo";
import ProductThree from "./productThree/ProductThree";
import { DataProps } from "../../../data-type";

interface Props {
  designData: DataProps;
}

function HomeProduct(props: Props) {
  const { designData } = props;

  // Product links for this component
  const Product1Link = designData.filter(
    (item) => item.name == "ZX9 Speaker"
  )[0].link;
  const Product2Link = designData.filter(
    (item) => item.name == "ZX7 Speaker"
  )[0].link;
  const Product3Link = designData.filter(
    (item) => item.name == "YX1 Wireless Earphones"
  )[0].link;

  return (
    <Container>
      <ProductOne productLink={Product1Link} />
      <ProductTwo productLink={Product2Link} />
      <ProductThree productLink={Product3Link} />
    </Container>
  );
}

export default HomeProduct;

const Container = styled.div`
  margin-bottom: 120px;
  @media (min-width: 768px) {
    margin-bottom: 96px;
  }
`;
