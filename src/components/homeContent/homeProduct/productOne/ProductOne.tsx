import { Link } from "react-router-dom";
import useWindowWidth from "../../../../useWindowWidth";
import { Props } from "./productOne-types";
import {
  Wrapper,
  Container,
  ImageBox,
  Image,
  InfoBox,
  Name,
  Content,
  SeeBtn,
} from "./productOne-styles";

function ProductOne(props: Props) {
  const width = useWindowWidth();
  const { productLink } = props;
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image
            src={`/assets/home/${
              width < 768
                ? "mobile"
                : width >= 768 && width < 1440
                ? "tablet"
                : "desktop"
            }/image-speaker-zx9.png`}
          />
        </ImageBox>

        <InfoBox>
          <Name>ZX9 SPEAKER</Name>
          <Content>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Content>
          <Link to={productLink} target="_top">
            <SeeBtn>See Product</SeeBtn>
          </Link>
        </InfoBox>
      </Container>
    </Wrapper>
  );
}

export default ProductOne;
