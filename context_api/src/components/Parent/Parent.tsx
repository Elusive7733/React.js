import Child from "../Child/Child";

//Providing First Context
import { FirstContextProvider } from "../../context/FirstContext";

const Parent: React.FC = () => {
  const firstObject = {
    name: "First Context",
    value: 1,
  };

  return (
    <div
      style={{
        backgroundColor: "purple",
        height: "800px",
        textAlign: "center",
        width: "1500px",
        // display: "flex",
      }}
    >
      <h1>Parent</h1>
      <br />
      <h2>
        <em>Providing</em> First Context, value: {firstObject.value}
      </h2>
      <FirstContextProvider value={firstObject}>
        <Child />
      </FirstContextProvider>
    </div>
  );
};

export default Parent;
