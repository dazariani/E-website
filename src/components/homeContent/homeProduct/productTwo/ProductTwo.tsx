import { Link } from "react-router-dom";
import { Props } from "./productTwo-types";
import {
  Wrapper,
  Container,
  ContentBox,
  Name,
  SeeBtn,
} from "./productTwo-styles";

function ProductTwo(props: Props) {
  const { productLink } = props;
  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <Name>ZX7 SPEAKER</Name>
          <Link to={productLink} target="_top">
            <SeeBtn>See Product</SeeBtn>
          </Link>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default ProductTwo;
