import { useState } from "react";
import styled from "styled-components";
import { DataProps } from "../../../data-type";
import ProductSection from "./productSection/ProductSection";
import CategoryList from "../../categoryList/CategoryList";
import AudioGear from "../../homeContent/audioGear/AudioGear";

interface Props {
  productsData: DataProps;
}

function CategoryProducts(props: Props) {
  const { productsData } = props;

  const [data, setData] = useState<DataProps>(productsData);

  return (
    <Wrapper>
      <Container>
        <HeaderBox>
          <Header>{data[0].category}</Header>
        </HeaderBox>
        <ProductSection data={data}></ProductSection>
        <CategoryList />
        <AudioGear />
      </Container>
    </Wrapper>
  );
}

export default CategoryProducts;

const Wrapper = styled.div``;
const Container = styled.div``;
const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  padding-block: 32px;
`;
const Header = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
