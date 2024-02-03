import React from "react";
import { data, data1 } from "./ContextAPI1";
const ContextAPI3 = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return (
            <data1.Consumer>
              {(gender) => {
                return (
                  <h1>
                    My Name is {name} gender {gender}
                  </h1>
                );
              }}
            </data1.Consumer>
          );
        }}
      </data.Consumer>
    </>
  );
};

export default ContextAPI3;
