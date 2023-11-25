import styled from "styled-components";

function ProductTwo() {
  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <Name>ZX7 SPEAKER</Name>
          <SeeBtn>See Product</SeeBtn>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default ProductTwo;

const Wrapper = styled.div`
  padding-inline: 24px;
  margin-bottom: 24px;
`;
const Container = styled.div`
  background: url("/assets/home/mobile/image-speaker-zx7.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-block: 100px;
  border-radius: 8px;
  padding-left: 24px;
`;
const ContentBox = styled.div`
  text-align: start;
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
