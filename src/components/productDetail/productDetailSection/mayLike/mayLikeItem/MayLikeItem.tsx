import { Link } from "react-router-dom";
import useWindowWidth from "../../../../../useWindowWidth";
import { Props } from "./mayLikeItem-types";
import {
  Wrapper,
  Container,
  ItemBox,
  ImageBox,
  Image,
  Name,
  SeeBtn,
} from "./mayLikeItem-styles";

function MayLikeItem(props: Props) {
  const { name, image, imageTab, imageDesk, link } = props;
  const width = useWindowWidth();
  return (
    <Wrapper>
      <Container>
        <ItemBox>
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
          <Name>{name}</Name>
          <Link to={link} target="_top">
            <SeeBtn>See Product</SeeBtn>
          </Link>
        </ItemBox>
      </Container>
    </Wrapper>
  );
}

export default MayLikeItem;
