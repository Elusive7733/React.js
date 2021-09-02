import React from "react";
import ReactPlayer from "react-player";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="PlayerWindow">
        <strong>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=V3OPDTwH9os"
            controls={true}
            width="900px"
            height="500px"
          />
        </strong>
      </div>
    </div>
  );
}

export default App;
