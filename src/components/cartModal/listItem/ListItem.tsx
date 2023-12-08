import { useEffect } from "react";
import { Props } from "./listItem-types";
import {
  Container,
  ImageProductBox,
  ImageBox,
  Image,
  ProductBox,
  ProductName,
  ProductPrice,
  CountBox,
  Minus,
  ItemNumber,
  Plus,
  SummaryCount,
} from "./listItem-styles";

function ListItem(props: Props) {
  let {
    id,
    image,
    name,
    price,
    cardData,
    setCardData,
    NumberOfItems,
    showCart,
  } = props;

  useEffect(() => {
    const newData = [...cardData];
    newData.forEach((elem, ind) => {
      if (elem.NumberOfItems == 0) {
        newData.splice(ind, 1);
        setCardData && setCardData(newData);
      }
    });
  }, [cardData]);

  return (
    <Container>
      <ImageProductBox>
        {/* Image */}
        <ImageBox>
          <Image src={image} />
        </ImageBox>
        {/* Product & price */}
        <ProductBox>
          <ProductName>{name}</ProductName>
          <ProductPrice>{"$ " + price}</ProductPrice>
        </ProductBox>
      </ImageProductBox>
      {showCart ? (
        <CountBox>
          <Minus
            onClick={() => {
              const newData = [...cardData];
              newData.forEach((elem) => {
                if (elem.id === id && elem.NumberOfItems > 0) {
                  elem.NumberOfItems = elem.NumberOfItems - 1;
                  console.log("works");
                }
                setCardData && setCardData(newData);
              });
            }}
          >
            -
          </Minus>
          <ItemNumber>{NumberOfItems}</ItemNumber>
          <Plus
            onClick={() => {
              const newData = [...cardData];
              newData.forEach((elem) => {
                if (elem.id === id) {
                  elem.NumberOfItems = elem.NumberOfItems + 1;
                  console.log("works");
                }
                setCardData && setCardData(newData);
              });
            }}
          >
            +
          </Plus>
        </CountBox>
      ) : (
        <SummaryCount>{"x" + NumberOfItems}</SummaryCount>
      )}
    </Container>
  );
}

export default ListItem;
