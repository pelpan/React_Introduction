import React from "react";
import { useState } from "react";

function FunctionComponent(props) {
  const [name, setName] = useState("FunctionComponent");
  return <h2>This is a {name}</h2>;
}

export default FunctionComponent;
