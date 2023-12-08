import styled from "styled-components";
import { Props } from "./productSection-types";
import ProductItem from "./productItem/ProductItem";
import { Container } from "./productSection-styles";

function ProductSection(props: Props) {
  const { data } = props;
  return (
    <Container>
      {data.map((item) => {
        const {
          link,
          id,
          categoryImage: { mobile, tablet, desktop },
          name,
          description,
          new: isNew,
        } = item;
        return (
          <ProductItem
            key={id}
            isNew={isNew}
            name={name}
            image={mobile}
            description={description}
            link={link}
            imageTab={tablet}
            imageDesk={desktop}
          ></ProductItem>
        );
      })}
    </Container>
  );
}

export default ProductSection;
