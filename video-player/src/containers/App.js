import React from "react";
import ReactPlayer from "react-player";
import "./App.css";
import UI from "../Components/UI/UI";

function App() {
  return (
    <div className="App">
      <div className="PlayerWindow">
        <strong>
          <ReactPlayer
            url="./videos/pedomon.mp4"
            controls={true}
            width="900px"
            height="500px"
          />
        </strong>
        <UI />
      </div>
    </div>
  );
}

export default App;
