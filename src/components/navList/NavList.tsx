import CategoryList from "../categoryList/CategoryList";
import { Props } from "./navList-types";
import { Container } from "./navList-styles";

function NavList(props: Props) {
  const { showNavList } = props;
  return (
    <Container $showNavList={showNavList}>
      <CategoryList />
    </Container>
  );
}

export default NavList;
