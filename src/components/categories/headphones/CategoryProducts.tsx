import { useState } from "react";
import { DataProps } from "../../../data-type";
import ProductSection from "./productSection/ProductSection";
import CategoryList from "../../categoryList/CategoryList";
import AudioGear from "../../homeContent/audioGear/AudioGear";
import { Props } from "./categoryProducts-types";
import {
  Wrapper,
  Container,
  HeaderBox,
  Header,
  AudioGeraBox,
} from "./categoryProducts-styles";

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
        <AudioGeraBox>
          <AudioGear />
        </AudioGeraBox>
      </Container>
    </Wrapper>
  );
}

export default CategoryProducts;
