import CategoryList from "../categoryList/CategoryList";
import Header from "../header/Header";
import HomeContent from "../homeContent/HomeContent";
import { Props } from "./homepage-types";

function Homepage(props: Props) {
  const { designData } = props;
  return (
    <>
      <Header designData={designData} />
      <CategoryList />
      <HomeContent designData={designData} />
    </>
  );
}

export default Homepage;
