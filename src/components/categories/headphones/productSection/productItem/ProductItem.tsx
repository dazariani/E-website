import { Link } from "react-router-dom";
import useWindowWidth from "../../../../../useWindowWidth";
import { Props } from "./productItem-types";
import {
  Wrapper,
  Container,
  ImageBox,
  Image,
  InfoBox,
  NewText,
  Name,
  Description,
  SeeBtn,
} from "./productItem-styles";

function ProductItem(props: Props) {
  const { isNew, name, image, description, link, imageTab, imageDesk } = props;
  const width = useWindowWidth();
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image
            src={
              width < 768
                ? image
                : width >= 768 && width < 1440
                ? imageTab
                : imageDesk
            }
          />
        </ImageBox>

        <InfoBox>
          {isNew && <NewText>NEW PRODUCT</NewText>}
          <Name>{name}</Name>
          <Description>{description}</Description>
          <Link to={link} target="_top">
            <SeeBtn>see product</SeeBtn>
          </Link>
        </InfoBox>
      </Container>
    </Wrapper>
  );
}

export default ProductItem;
