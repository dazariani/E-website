import ListItem from "../../../cartModal/listItem/ListItem";
import { Props } from "./summary-types";
import {
  Container,
  Header,
  ProductTotalNumText,
  ProductListBox,
  PriceContainer,
  TotalBox,
  TotalTitle,
  TotalPrice,
  CheckoutBtn,
} from "./summary-styles";

function Summary(props: Props) {
  const { cardData, setCardData, setGrandTotal } = props;

  //   Prices
  const shippingPrice = 50;
  const totalPrice = cardData
    .map((product) => product.NumberOfItems * product.price)
    .reduce((acc, current) => acc + current, 0);
  const vat = Number((totalPrice * 0.2).toFixed(2)); // 20%
  const GrandTotalValue = Number((shippingPrice + totalPrice + vat).toFixed(2));

  return (
    <Container>
      {/* Header */}
      <Header>
        <ProductTotalNumText>summary</ProductTotalNumText>
      </Header>
      {/* Product list */}
      <ProductListBox>
        {cardData.map((product) => {
          const {
            id,
            image: { mobile },
            cartName,
            price,
            NumberOfItems,
          } = product;
          return (
            <ListItem
              key={id}
              image={mobile}
              name={cartName}
              price={price}
              NumberOfItems={NumberOfItems}
              cardData={cardData}
              setCardData={setCardData}
              product={product}
              id={id}
            />
          );
        })}
      </ProductListBox>
      <PriceContainer>
        <TotalBox>
          <TotalTitle>TOTAL</TotalTitle>
          <TotalPrice>{"$ " + totalPrice}</TotalPrice>
        </TotalBox>

        <TotalBox>
          <TotalTitle>SHIPPING</TotalTitle>
          <TotalPrice>{"$ " + shippingPrice}</TotalPrice>
        </TotalBox>

        <TotalBox>
          <TotalTitle>VAT (INCLUDED)</TotalTitle>
          <TotalPrice>{"$ " + vat}</TotalPrice>
        </TotalBox>

        <TotalBox>
          <TotalTitle>GRAND TOTAL</TotalTitle>
          <TotalPrice>{"$ " + GrandTotalValue}</TotalPrice>
        </TotalBox>
      </PriceContainer>

      <CheckoutBtn
        onClick={() => setGrandTotal(GrandTotalValue)}
        type="submit"
        value="CONTINUE & PAY"
      />
    </Container>
  );
}

export default Summary;
