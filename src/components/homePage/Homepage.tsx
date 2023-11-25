import CategoryList from "../categoryList/CategoryList";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import HomeContent from "../homeContent/HomeContent";

function Homepage() {
  return (
    <>
      <Header />
      <CategoryList />
      <HomeContent />
      <Footer />
    </>
  );
}

export default Homepage;
