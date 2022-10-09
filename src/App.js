import "./styles.css";
import Tile from "./Components/Tile";
import Data from "./Data";
import { useState } from "react";

export default function App() {
  const [tileData, setTileData] = useState([]);
  const dataSetPromise = new Promise((resolve, reject) => {
    if (!Data) {
      reject("Unknown Error");
    }
    setTimeout(() => resolve(Data), 2000);
  });

  dataSetPromise
    .then((data) => setTileData(data.product))
    .catch((error) => setTileData([]));

  return (
    <div className="App">
      <h1>Ecommerce page</h1>
      {tileData.length > 0 ? (
        <Tile dataSet={tileData} />
      ) : (
        <div className="spinner">Loading</div>
      )}
      <div className="spinner" />
    </div>
  );
}
