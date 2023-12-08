import HomeProduct from "./homeProduct/HomeProduct";
import AudioGear from "./audioGear/AudioGear";
import { Props } from "./homeContent-types";

function HomeContent(props: Props) {
  const { designData } = props;
  return (
    <>
      <HomeProduct designData={designData} />
      <AudioGear />
    </>
  );
}

export default HomeContent;
