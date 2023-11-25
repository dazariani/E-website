import styled from "styled-components";
import ProductOne from "./productOne/ProductOne";
import ProductTwo from "./productTwo/ProductTwo";
import ProductThree from "./productThree/ProductThree";

function HomeProduct() {
  return (
    <Container>
      <ProductOne />
      <ProductTwo />
      <ProductThree />
    </Container>
  );
}

export default HomeProduct;

const Container = styled.div`
  margin-bottom: 120px;
`;
