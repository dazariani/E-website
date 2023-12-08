import useWindowWidth from "../../../../useWindowWidth";
import { Props } from "./gallery-types";
import {
  Wrapper,
  Container,
  FirsSecondBox,
  FirstSecondImg,
  ThirdImg,
} from "./gallery-styles";

function Gallery(props: Props) {
  const { gallery } = props;

  const width = useWindowWidth();
  return (
    <Wrapper>
      <Container>
        <FirsSecondBox>
          <FirstSecondImg
            src={
              width < 768
                ? gallery.first.mobile
                : width >= 768 && width < 1440
                ? gallery.first.tablet
                : gallery.first.desktop
            }
          />
          <FirstSecondImg
            src={
              width < 768
                ? gallery.second.mobile
                : width >= 768 && width < 1440
                ? gallery.second.tablet
                : gallery.second.desktop
            }
          />
        </FirsSecondBox>
        <ThirdImg
          src={
            width < 768
              ? gallery.third.mobile
              : width >= 768 && width < 1440
              ? gallery.third.tablet
              : gallery.third.desktop
          }
        />
      </Container>
    </Wrapper>
  );
}

export default Gallery;
