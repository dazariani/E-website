import Checkout from "./checkout/Checkout";
import { useNavigate } from "react-router-dom";
import { Props } from "./checkoutSummaryPage-types";
import {
  Wrapper,
  Container,
  GoBack,
  ContentBox,
} from "./checkoutSummaryPage-styles";

function CheckoutSummaryPage(props: Props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <GoBack onClick={() => navigate(-1)}>Go Back</GoBack>
        <ContentBox>
          <Checkout
            setGrandTotal={props.setGrandTotal}
            cardData={props.cardData}
            setCardData={props.setCardData}
            setShowThanks={props.setShowThanks}
          />
        </ContentBox>
      </Container>
    </Wrapper>
  );
}

export default CheckoutSummaryPage;
