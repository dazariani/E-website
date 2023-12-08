import { DataProps } from "../../../data-type";
import InTheBox from "./inTheBox/InTheBox";
import Gallery from "./gallery/Gallery";
import MayLike from "./mayLike/MayLike";
import CategoryList from "../../categoryList/CategoryList";
import AudioGear from "../../homeContent/audioGear/AudioGear";
import { useState } from "react";
import useWindowWidth from "../../../useWindowWidth";
import { Props } from "./productDetailSection-types";
import {
  Wrapper,
  Container,
  ImageInfoBox,
  ImageBox,
  Image,
  InfoBox,
  NewText,
  Name,
  Description,
  Price,
  AddToCardBox,
  CountBox,
  Minus,
  ItemNumber,
  Plus,
  AddBtn,
  FeaturesAndInTheBox,
  FeaturesBox,
  FeaturesTitle,
  FeaturesContent,
} from "./productDetailSection-styles";

function ProductDetailSection(props: Props) {
  const {
    image,
    imageTab,
    imageDesk,
    isNew,
    name,
    description,
    price,
    features,
    includes,
    gallery,
    others,
    thisProductData,
    cardData,
    setCardData,
  } = props;

  const [itemQuantity, setItemQuantity] = useState<number>(1);

  const width = useWindowWidth();

  const handleAddToCard = () => {
    let newData: DataProps | [] = [...cardData];
    if (newData.length !== 0) {
      for (let i = 0; i < newData.length; i++) {
        if (newData[i].name !== name) {
          const newData2 = [
            ...cardData,
            { ...thisProductData, NumberOfItems: itemQuantity },
          ];
          setCardData(newData2);
        } else {
          newData[i].NumberOfItems += itemQuantity;
          setCardData(newData);
          {
            break;
          }
        }
      }
    } else {
      const newData3 = [
        ...cardData,
        { ...thisProductData, NumberOfItems: itemQuantity },
      ];
      setCardData(newData3);
    }
  };

  return (
    <Wrapper>
      <Container>
        {/* Image and Info */}
        <ImageInfoBox>
          <ImageBox>
            <Image
              src={
                width < 768
                  ? image
                  : width >= 768 && width < 1440
                  ? imageTab
                  : imageDesk
              }
            />
          </ImageBox>

          <InfoBox>
            {isNew && <NewText>NEW PRODUCT</NewText>}
            <Name>{name}</Name>
            <Description>{description}</Description>
            <Price>{"$ " + price}</Price>
            <AddToCardBox>
              <CountBox>
                <Minus
                  onClick={() =>
                    itemQuantity > 1 ? setItemQuantity(itemQuantity - 1) : null
                  }
                >
                  -
                </Minus>
                <ItemNumber>{itemQuantity}</ItemNumber>
                <Plus onClick={() => setItemQuantity(itemQuantity + 1)}>+</Plus>
              </CountBox>
              <AddBtn onClick={handleAddToCard}>ADD TO CART</AddBtn>
            </AddToCardBox>
          </InfoBox>
        </ImageInfoBox>
        {/* Features and InTheBox */}
        <FeaturesAndInTheBox>
          <FeaturesBox>
            <FeaturesTitle>FEATURES</FeaturesTitle>
            <FeaturesContent>{features}</FeaturesContent>
          </FeaturesBox>
          <InTheBox includes={includes} />
        </FeaturesAndInTheBox>
        {/* Gallery */}
        <Gallery gallery={gallery} />
        {/* May also like */}
        <MayLike others={others} />
        {/* Category list */}
        <CategoryList />
        {/* Best Audio Gear */}
        <AudioGear />
      </Container>
    </Wrapper>
  );
}

export default ProductDetailSection;
