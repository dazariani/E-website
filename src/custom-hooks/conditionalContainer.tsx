import { BurgerProps } from "../components/navbar/Navbar";

function ConditionalContainer(Component: any) {
  return (props: BurgerProps) => (
    <div style={{ display: "flex", gap: "42px" }}>
      <Component {...props} />
    </div>
  );
}

export default ConditionalContainer;
