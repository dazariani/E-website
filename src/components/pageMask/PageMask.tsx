import { Props } from "./pageMask-types";
import { Mask } from "./pageMask-styles";

function PageMask(props: Props) {
  return (
    <Mask
      $showNavList={props.showNavList}
      $showCart={props.showCart}
      $showThanks={props.showThanks}
    ></Mask>
  );
}

export default PageMask;
