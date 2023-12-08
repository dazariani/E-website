import ListItem from "./listItem/ListItem";
import { Link } from "react-router-dom";
import { Props } from "./cartModal-types";
import {
  Container,
  Header,
  ProductTotalNumBox,
  ProductTotalNumText,
  ProductTotalNumDigit,
  RemoveAll,
  ProductListBox,
  TotalBox,
  TotalTitle,
  TotalPrice,
  CheckoutBtn,
} from "./cartModal-styles";

function CartModal(props: Props) {
  const { cardData, setCardData, showCart, setShowCart } = props;

  const totalPrice = cardData
    .map((product) => product.NumberOfItems * product.price)
    .reduce((acc, current) => acc + current, 0);

  return (
    <Container $showCart={showCart}>
      {/* Header */}
      <Header>
        <ProductTotalNumBox>
          <ProductTotalNumText>
            cart
            <ProductTotalNumDigit>({cardData.length})</ProductTotalNumDigit>
          </ProductTotalNumText>
        </ProductTotalNumBox>
        <RemoveAll
          $isProduct={cardData.length > 0}
          onClick={() => setCardData([])}
        >
          Remove all
        </RemoveAll>
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
              showCart={showCart}
            />
          );
        })}
      </ProductListBox>
      <TotalBox>
        <TotalTitle>TOTAL</TotalTitle>
        <TotalPrice>{"$ " + totalPrice}</TotalPrice>
      </TotalBox>
      {cardData.length > 0 ? (
        <Link to="/checkout" target="_top">
          <CheckoutBtn onClick={() => setShowCart(false)}>checkout</CheckoutBtn>
        </Link>
      ) : (
        <CheckoutBtn>checkout</CheckoutBtn>
      )}
    </Container>
  );
}

export default CartModal;
