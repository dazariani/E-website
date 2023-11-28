import styled from "styled-components";
import CategoryItem from "./categoryItem/CategoryItem";

type ListType = {
  id: number;
  name: string;
  link: string;
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}[];

const listData = [
  {
    id: 1,
    name: "headPhones",
    link: "/category-headphones",
    images: {
      mobile: "/assets/shared/mobile/headphones-thumbnail.png",
      tablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
      desktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    },
  },
  {
    id: 2,
    name: "speakers",
    link: "/category-speakers",
    images: {
      mobile: "/assets/shared/mobile/speakers-thumbnail.png",
      tablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
      desktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
    },
  },
  {
    id: 3,
    name: "earphones",
    link: "/category-earphones",
    images: {
      mobile: "/assets/shared/mobile/earphones-thumbnail.png",
      tablet:
        "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
      desktop:
        "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
    },
  },
];

function CategoryList() {
  return (
    <Container>
      {listData.map((item) => {
        const {
          id,
          name,
          link,
          images: { mobile },
        } = item;
        return <CategoryItem key={id} name={name} link={link} image={mobile} />;
      })}
    </Container>
  );
}

export default CategoryList;

const Container = styled.div`
  margin-bottom: 120px;
`;
