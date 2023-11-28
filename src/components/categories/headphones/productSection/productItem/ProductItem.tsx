import styled from "styled-components";

interface Props {
  isNew: boolean;
  name: string;
  image: string;
  description: string;
}

function ProductItem(props: Props) {
  const { isNew, name, image, description } = props;

  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image src={image} />
        </ImageBox>

        <InfoBox>
          {isNew && <NewText>NEW PRODUCT</NewText>}
          <Name>{name}</Name>
          <Description>{description}</Description>
          <SeeBtn>see product</SeeBtn>
        </InfoBox>
      </Container>
    </Wrapper>
  );
}

export default ProductItem;

const Wrapper = styled.div`
  padding-inline: 24px;
  margin-bottom: 120px;
  &:last-child {
    margin-bottom: 170px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ImageBox = styled.div`
  width: 100%;
  background: ${(props) => props.theme.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 32px;
`;
const Image = styled.img`
  width: 220px;
`;

const InfoBox = styled.div``;
const NewText = styled.span`
  display: block;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: ${(props) => props.theme.darkOrange};
`;
const Name = styled.h1`
  max-width: 200px;
  margin: auto;
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Description = styled.p`
  max-width: 570px;
  margin: auto;
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
const SeeBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkOrange};
  padding-inline: 29.5px;
  padding-block: 15px;
  text-transform: uppercase;
  border: none;
`;
