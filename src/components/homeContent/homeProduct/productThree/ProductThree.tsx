import { Link } from "react-router-dom";
import useWindowWidth from "../../../../useWindowWidth";
import { Props } from "./productThree-types";
import {
  Wrapper,
  Container,
  ImageBox,
  Image,
  ContentBox,
  Name,
  SeeBtn,
} from "./productThree-styles";

function ProductThree(props: Props) {
  const width = useWindowWidth();
  const { productLink } = props;

  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image
            src={
              width < 768
                ? "/assets/home/mobile/image-earphones-yx1.jpg"
                : width >= 768 && width < 1440
                ? "/assets/home/tablet/image-earphones-yx1.jpg"
                : "/assets/home/desktop/image-earphones-yx1.jpg"
            }
          />
        </ImageBox>
        <ContentBox>
          <Name>YX1 EARPHONES</Name>
          <Link to={productLink} target="_top">
            <SeeBtn>See Product</SeeBtn>
          </Link>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default ProductThree;
