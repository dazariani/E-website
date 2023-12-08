import { Props } from "./header-types";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Container,
  ContentBox,
  Title,
  ProductName,
  ProductDescription,
  SeeProductBtn,
} from "./header-styles";

function Header(props: Props) {
  const { designData } = props;

  const productLink = designData.filter(
    (item) => item.name == "XX99 Mark II Headphones"
  )[0].link;

  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <Title>NEW PRODUCT</Title>
          <ProductName>XX99 Mark II Headphones</ProductName>
          <ProductDescription>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </ProductDescription>
          <Link to={productLink} target="_top">
            <SeeProductBtn>See Product</SeeProductBtn>
          </Link>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default Header;
