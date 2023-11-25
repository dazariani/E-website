import React from "react";
import { useEffect, useState } from "react";

import useWindowWidth from "./useWindowWidth";

interface Props {}

function ConditionalContainer(Component: () => JSX.Element) {
  return (props: Props) => (
    <div style={{ display: "flex", gap: "42px" }}>
      <Component />
    </div>
  );
}

export default ConditionalContainer;
