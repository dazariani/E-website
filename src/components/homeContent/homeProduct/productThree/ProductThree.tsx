import styled from "styled-components";

function ProductThree() {
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image src="/assets/home/mobile/image-earphones-yx1.jpg" />
        </ImageBox>

        <ContentBox>
          <Name>YX1 EARPHONES</Name>
          <SeeBtn>See Product</SeeBtn>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default ProductThree;

const Wrapper = styled.div`
  padding-inline: 24px;
`;
const Container = styled.div``;
const ImageBox = styled.div`
  max-width: 327px;
  border-radius: 8px;
  margin-bottom: 24px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ContentBox = styled.div`
  padding-block: 41px;
  padding-inline: 24px;
  background: ${(props) => props.theme.darkGrey};
  border-radius: 8px;
`;
const Name = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
const SeeBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-inline: 30px;
  padding-block: 15px;
  background-color: rgb(216, 125, 74, 0);
  border: 1px solid ${(props) => props.theme.black};
`;
