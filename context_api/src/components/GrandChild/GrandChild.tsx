import React, { useContext } from "react";

//consuming Both Context
import FirstContext from "../../context/FirstContext";
import SecondContext from "../../context/SecondContext";

const GrandChild: React.FC = () => {
  const firstObject: any = useContext(FirstContext);
  const secondObject: any = useContext(SecondContext);

  return (
    <div style={{ margin: "30px" }}>
      <h1>Grand Child</h1>
      <h2>
        {firstObject.name}: {firstObject.value}
      </h2>
      {secondObject.name && (
        <h2>
          {secondObject.name}: {secondObject.value}
        </h2>
      )}
    </div>
  );
};

export default GrandChild;
