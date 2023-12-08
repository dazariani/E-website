import { useForm, SubmitHandler } from "react-hook-form";
import Summary from "./summary/Summary";
import { Props, Inputs } from "./checkout-types";
import {
  Container,
  Title,
  Form,
  CheckoutBox,
  Field,
  Legend,
  FieldBox,
  RadioFieldBox,
  Label,
  RadioLabel,
  Input,
  EMoneyDetailBox,
  ErrorMsg,
} from "./checkout-styles";

function Checkout(props: Props) {
  const { cardData, setCardData, setGrandTotal, setShowThanks } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  console.log(watch("payment"));

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setShowThanks(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutBox>
          <Title>CHECKOUT</Title>
          {/* Billing details */}
          <Field>
            <Legend>Billing details</Legend>
            <FieldBox>
              <Label>Name</Label>
              <Input
                placeholder="Alexei Ward"
                {...register("name", {
                  required: { value: true, message: "Field required" },
                })}
              />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </FieldBox>

            <FieldBox>
              <Label>Email Address</Label>
              <Input
                placeholder="alexei@mail.com"
                {...register("email", {
                  required: { value: true, message: "Field required" },
                  pattern: { value: /@/, message: "Wrong format" },
                })}
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </FieldBox>

            <FieldBox>
              <Label>Phone Number</Label>
              <Input
                placeholder="+1 202-555-0136"
                {...register("phone", {
                  required: { value: true, message: "Field required" },
                })}
              />
              {errors.phone && <ErrorMsg>{errors.phone.message}</ErrorMsg>}
            </FieldBox>
          </Field>

          {/* shipping info */}
          <Field>
            <Legend>shipping info</Legend>
            <FieldBox style={{ gridColumn: "1/3" }}>
              <Label>Your Address</Label>
              <Input
                placeholder="1137 Williams Avenue"
                {...register("address", {
                  required: { value: true, message: "Field required" },
                })}
              />
              {errors.address && <ErrorMsg>{errors.address.message}</ErrorMsg>}
            </FieldBox>

            <FieldBox>
              <Label>ZIP Code</Label>
              <Input
                placeholder="10001"
                {...register("zip", {
                  required: { value: true, message: "Field required" },
                })}
              />
              {errors.zip && <ErrorMsg>{errors.zip.message}</ErrorMsg>}
            </FieldBox>

            <FieldBox>
              <Label>City</Label>
              <Input
                placeholder="New York"
                {...register("city", {
                  required: { value: true, message: "Field required" },
                })}
              />
              {errors.city && <ErrorMsg>{errors.city.message}</ErrorMsg>}
            </FieldBox>

            <FieldBox>
              <Label>Country</Label>
              <Input
                placeholder="United States"
                {...register("country", {
                  required: { value: true, message: "Field required" },
                })}
              />
              {errors.country && <ErrorMsg>{errors.country.message}</ErrorMsg>}
            </FieldBox>
          </Field>

          {/* payment details */}
          <Field>
            <Legend>payment details</Legend>
            <Label>Payment Method</Label>
            <RadioFieldBox>
              <Input type="radio" value="e-money" {...register("payment")} />
              <RadioLabel>e-Money</RadioLabel>
            </RadioFieldBox>

            <RadioFieldBox style={{ gridColumn: "2/3" }}>
              <Input type="radio" value="cash" {...register("payment")} />
              <RadioLabel>Cash on Delivery</RadioLabel>
            </RadioFieldBox>

            {watch("payment") == "e-money" && (
              <EMoneyDetailBox>
                <FieldBox>
                  <Label>e-Money Number</Label>
                  <Input
                    placeholder="238521993"
                    {...register("eMoneyNumber", {
                      required: { value: true, message: "Field required" },
                    })}
                  />
                  {errors.eMoneyNumber && (
                    <ErrorMsg>{errors.eMoneyNumber.message}</ErrorMsg>
                  )}
                </FieldBox>

                <FieldBox>
                  <Label>e-Money PIN</Label>
                  <Input
                    placeholder="6891"
                    {...register("eMoneyPIN", {
                      required: { value: true, message: "Field required" },
                    })}
                  />
                  {errors.eMoneyPIN && (
                    <ErrorMsg>{errors.eMoneyPIN.message}</ErrorMsg>
                  )}
                </FieldBox>
              </EMoneyDetailBox>
            )}
          </Field>
        </CheckoutBox>
        <Summary
          cardData={cardData}
          setCardData={setCardData}
          setGrandTotal={setGrandTotal}
        />
      </Form>
    </Container>
  );
}

export default Checkout;
