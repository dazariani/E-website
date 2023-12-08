import { Props } from "./inTheBox-types";
import {
  Wrapper,
  Container,
  Title,
  List,
  ListItem,
  Quantity,
  Item,
} from "./inTheBox-sryles";

function InTheBox(props: Props) {
  const { includes } = props;

  return (
    <Wrapper>
      <Container>
        <Title>in the box</Title>
        <List>
          {includes.map((elem, ind) => {
            const { quantity, item } = elem;
            return (
              <ListItem key={ind}>
                <Quantity>{quantity + "x"}</Quantity>
                <Item>{item}</Item>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Wrapper>
  );
}

export default InTheBox;
