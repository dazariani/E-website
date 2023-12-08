import ProductDetailSection from "./productDetailSection/ProductDetailSection";
import { useNavigate } from "react-router-dom";
import { Props } from "./productDetailPage-types";
import { Wrapper, Container, GoBackBox } from "./productDetailPage-styles";

function ProductDetailPage(props: Props) {
  const { detailData, cardData, setCardData } = props;

  const prevPage = useNavigate();

  return (
    <Wrapper>
      <Container>
        <GoBackBox onClick={() => prevPage(-1)}>Go Back</GoBackBox>
        {detailData.map((item) => {
          const {
            id,
            image: { mobile, tablet, desktop },
            new: isNew,
            name,
            description,
            price,
            features,
            includes,
            gallery,
            others,
          } = item;
          return (
            <ProductDetailSection
              key={id}
              detailData={detailData}
              image={mobile}
              imageTab={tablet}
              imageDesk={desktop}
              isNew={isNew}
              name={name}
              description={description}
              price={price}
              features={features}
              includes={includes}
              gallery={gallery}
              others={others}
              cardData={cardData}
              setCardData={setCardData}
              thisProductData={item}
            />
          );
        })}
      </Container>
    </Wrapper>
  );
}

export default ProductDetailPage;
