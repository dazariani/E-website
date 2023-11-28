import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  image: string;
  link: string;
}

function CategoryItem(props: Props) {
  const { name, image, link } = props;
  return (
    <Wrapper>
      <Link to={link}>
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

const Wrapper = styled.div`
  margin-top: 90px;
  padding-inline: 24px;
  & > a {
    color: inherit;
    text-decoration: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.darkGrey};
  border-radius: 8px;
  padding-bottom: 22px;
`;
const Image = styled.img`
  position: relative;
  top: -48px;
  filter: drop-shadow(0 30px 20px hsla(0deg, 0%, 0%, 0.3));
`;
const Name = styled.span`
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.071px;
  text-transform: uppercase;
  margin-bottom: 17px;
`;
const ShopBox = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
const ShopText = styled.span``;
const Arrow = styled.img``;
