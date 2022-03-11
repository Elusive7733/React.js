import React, { Fragment, useContext } from "react";
import GrandChild from "../GrandChild/GrandChild";

//Consuming First Context
import FirstContext from "../../context/FirstContext";

//Providing Second Context
import { SecondContextProvider } from "../../context/SecondContext";

const Child: React.FC = () => {
  const firstObject: any = useContext(FirstContext);

  const secondObject = {
    name: "Second Context",
    value: 2,
  };

  return (
    <div style={{ backgroundColor: "grey", height: "400px", width: "1300px" }}>
      <h1>
        Child <br />
        <em>Consuming</em>: {firstObject.name}, value: {firstObject.value}
      </h1>
      <h2>
        <h2>
          <em>Providing</em> Second Context, value: {secondObject.value}
        </h2>
      </h2>
      <div style={{ backgroundColor: "red", height: "150px", width: "1000px" }}>
        <SecondContextProvider value={secondObject}>
          <GrandChild />
        </SecondContextProvider>
      </div>

      <div
        style={{ backgroundColor: "pink", marginTop: "150px", width: "1000px" }}
      >
        <GrandChild />
      </div>
    </div>
  );
};

export default Child;
