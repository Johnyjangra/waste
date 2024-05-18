import React from "react";
import { useContext } from "react";
import { Name } from "../App";

const C = () => {
  const name = useContext(Name);
  return (
    <div>
      <h1>this is my {name} components</h1>
    </div>
  );
};

export default C;
