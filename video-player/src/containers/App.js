import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="PlayerWindow">
        <strong>
          <ReactPlayer
            url="./videos/Demon.Slayer.Kimetsu.no.Yaiba.The.Movie.Mugen--Infinity.Train--Ressha-Hen.2020.1080p.Dual.Audio.PSN.WEBRip.x264-Rapta.mkv"
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
