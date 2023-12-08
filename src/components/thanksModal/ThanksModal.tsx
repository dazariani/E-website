import { Props } from "./thanksModal-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Wrapper,
  Container,
  Header,
  OrderIcon,
  Title,
  Content,
  ProductPriceBox,
  ProductBox,
  ImageProductBox,
  ImageBox,
  Image,
  NamePriceBox,
  ProductName,
  ProductPrice,
  ProductOtherBox,
  Quantity,
  OtherItems,
  PriceBox,
  Total,
  Price,
  BackToHomeBtn,
} from "./thanksModal-styles";

function ThanksModal(props: Props) {
  const { setShowThanks, cardData, grandTotal, showThanks } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const renderList = () => {
    if (!isExpanded) {
      const shortList = cardData.filter((_, ind) => ind == 0);
      return shortList;
    } else {
      return cardData;
    }
  };

  return (
    <Wrapper $showThanks={showThanks}>
      <Container>
        <Header>
          <OrderIcon src="/assets/checkout/icon-order-confirmation.svg" />
          <Title>THANK YOU FOR YOUR ORDER</Title>
          <Content>You will receive an email confirmation shortly.</Content>
        </Header>
        <ProductPriceBox>
          <ProductOtherBox>
            {renderList().map((item) => (
              <ProductBox>
                <ImageProductBox>
                  {/* Image */}
                  <ImageBox>
                    <Image src={item.image.mobile} />
                  </ImageBox>
                  {/* Product & price */}
                  <NamePriceBox>
                    <ProductName>{item.cartName}</ProductName>
                    <ProductPrice>{"$ " + item.price}</ProductPrice>
                  </NamePriceBox>
                </ImageProductBox>
                <Quantity>{"x" + item.NumberOfItems}</Quantity>
              </ProductBox>
            ))}
            {
              <OtherItems onClick={() => setIsExpanded(!isExpanded)}>
                {!isExpanded
                  ? `and ${cardData.length - 1} other item(s)`
                  : "View less"}
              </OtherItems>
            }
          </ProductOtherBox>
          <PriceBox>
            <Total>GRAND TOTAL</Total>
            <Price>{"$ " + grandTotal}</Price>
          </PriceBox>
        </ProductPriceBox>
        <Link to="/" target="_top" onClick={() => setShowThanks(false)}>
          <BackToHomeBtn>BACK TO HOME</BackToHomeBtn>
        </Link>
      </Container>
    </Wrapper>
  );
}

export default ThanksModal;
