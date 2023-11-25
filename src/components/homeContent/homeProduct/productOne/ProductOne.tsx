import styled from "styled-components";

function ProductOne() {
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <Image src="/assets/home/mobile/image-speaker-zx9.png" />
        </ImageBox>

        <InfoBox>
          <Name>ZX9 SPEAKER</Name>
          <Content>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Content>
          <SeeBtn>See Product</SeeBtn>
        </InfoBox>
      </Container>
    </Wrapper>
  );
}

export default ProductOne;

const Wrapper = styled.div`
  padding-inline: 24px;
  margin-bottom: 24px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("/assets/home/desktop/pattern-circles.svg");
  background-position: center -120px;
  background-repeat: no-repeat;
  background-size: 560px;
  background-color: ${(props) => props.theme.darkOrange};
  padding-block: 56px;
  border-radius: 8px;
`;
const ImageBox = styled.div`
  max-width: 172px;
  margin-bottom: 32px;
`;
const Image = styled.img`
  width: 100%;
`;

const InfoBox = styled.div`
  text-align: center;
`;
const Name = styled.h1`
  max-width: 250px;
  margin: auto;
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  margin-bottom: 24px;
`;
const Content = styled.p`
  max-width: 280px;
  margin: auto;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  color: ${(props) => props.theme.white};
  opacity: 0.75;
  margin-bottom: 24px;
`;
const SeeBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-inline: 30px;
  padding-block: 15px;
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  border: none;
`;
