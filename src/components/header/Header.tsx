import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Container>
        <ContentBox>
          <Title>NEW PRODUCT</Title>
          <ProductName>XX99 Mark II Headphones</ProductName>
          <ProductDescription>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </ProductDescription>
          <SeeProductBtn>See Product</SeeProductBtn>
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: rgb(21, 21, 21);
`;
const Container = styled.div`
  background: url("/assets/home/mobile/image-header.jpg");
  background-repeat: no-repeat;
  background-position: center -90px;
  background-size: 380px;
  padding-top: 108px;
  padding-bottom: 125px;
  padding-inline: 24px;
  filter: brightness(0.78);
`;
const ContentBox = styled.div`
  text-align: center;
`;
const Title = styled.span`
  display: block;
  font-size: 14px;
  color: rgb(140, 140, 140);
  font-weight: 400;
  line-height: normal;
  letter-spacing: 10px;
  margin-bottom: 16px;
`;
const ProductName = styled.h1`
  width: 100%;
  max-width: 330px;
  margin: auto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1.286px;
  color: ${(props) => props.theme.white};
  margin-bottom: 24px;
  text-transform: uppercase;
`;
const ProductDescription = styled.p`
  width: 100%;
  max-width: 350px;
  margin: auto;
  font-size: 15px;
  color: rgb(198, 198, 198);
  font-weight: 500;
  line-height: 25px;
  margin-bottom: 28px;
`;
const SeeProductBtn = styled.button`
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.darkOrange};
  padding-inline: 29.5px;
  padding-block: 15px;
  text-transform: uppercase;
`;
