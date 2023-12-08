import { Link } from "react-router-dom";
import { Props } from "./categoryItem-types";
import {
  Wrapper,
  Container,
  Image,
  Name,
  ShopBox,
  ShopText,
  Arrow,
} from "./categoryItem-styles";

function CategoryItem(props: Props) {
  const { name, image, link } = props;
  return (
    <Wrapper>
      <Link to={link} target="_top">
        <Container>
          <Image src={image} />
          <Name>{name}</Name>
          <ShopBox>
            <ShopText>SHOP</ShopText>
            <Arrow src="/assets/shared/desktop/icon-arrow-right.svg" />
          </ShopBox>
        </Container>
      </Link>
    </Wrapper>
  );
}

export default CategoryItem;
