import styled from "styled-components";

function AudioGear() {
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image src="/assets/shared/mobile/image-best-gear.jpg" />
        </ImageBox>

        <ContentBox>
          <Title>
            Bringing you the <BestWord>best</BestWord> audio gear
          </Title>
          <Content>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Content>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default AudioGear;

const Wrapper = styled.div`
  padding-inline: 24px;
  padding-bottom: 120px;
`;
const Container = styled.div``;
const ImageBox = styled.div`
  max-width: 327px;
  border-radius: 8px;
  margin-bottom: 40px;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ContentBox = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 32px;
`;
const BestWord = styled.span`
  color: ${(props) => props.theme.darkOrange};
`;
const Content = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  opacity: 0.5;
`;
