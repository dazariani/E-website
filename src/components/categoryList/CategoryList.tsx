import CategoryItem from "./categoryItem/CategoryItem";
import { listData } from "./categoryList-data";
import { Wrapper, Container } from "./categoryList-styles";

function CategoryList() {
  return (
    <Wrapper>
      <Container>
        {listData.map((item) => {
          const {
            id,
            name,
            link,
            images: { mobile },
          } = item;
          return (
            <CategoryItem key={id} name={name} link={link} image={mobile} />
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default CategoryList;
