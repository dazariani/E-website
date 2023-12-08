import MayLikeItem from "./mayLikeItem/MayLikeItem";
import { Props } from "./mayLike-types";
import { Wrapper, ProductContainer, Container, Title } from "./mayLike-styles";

function MayLike(props: Props) {
  const { others } = props;
  return (
    <Wrapper>
      <Container>
        <Title>you may also like</Title>
        <ProductContainer>
          {others.map((item, ind) => {
            const {
              link,
              name,
              image: { mobile, tablet, desktop },
            } = item;
            return (
              <MayLikeItem
                key={ind}
                name={name}
                image={mobile}
                imageTab={tablet}
                imageDesk={desktop}
                link={link}
              />
            );
          })}
        </ProductContainer>
      </Container>
    </Wrapper>
  );
}

export default MayLike;
