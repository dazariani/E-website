import useWindowWidth from "../../../useWindowWidth";
import {
  Wrapper,
  Container,
  ImageBox,
  Image,
  ContentBox,
  Title,
  BestWord,
  Content,
} from "./audioGear-styles";

function AudioGear() {
  const width = useWindowWidth();
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image
            src={`/assets/shared/${
              width < 768
                ? "mobile"
                : width >= 768 && width < 1440
                ? "tablet"
                : "desktop"
            }/image-best-gear.jpg`}
          />
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
