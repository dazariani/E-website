import CategoryList from "../categoryList/CategoryList";
import Header from "../header/Header";
import HomeContent from "../homeContent/HomeContent";

function Homepage() {
  return (
    <>
      <Header />
      <CategoryList />
      <HomeContent />
    </>
  );
}

export default Homepage;
