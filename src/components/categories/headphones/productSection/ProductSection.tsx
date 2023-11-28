import styled from "styled-components";
import { DataProps } from "../../../../data-type";
import ProductItem from "./productItem/ProductItem";

interface Props {
  data: DataProps;
}

function ProductSection(props: Props) {
  const { data } = props;
  return (
    <Container>
      {data.map((item) => {
        const {
          id,
          categoryImage: { mobile },
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
          ></ProductItem>
        );
      })}
    </Container>
  );
}

export default ProductSection;

const Container = styled.div`
  padding-top: 64px;
`;
