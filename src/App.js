import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

const kartResimler = [
  { src: "/img/bjk.png" },
  { src: "/img/gs.png" },
  { src: "/img/çorum.png" },
  { src: "/img/chelsea.png" },
  { src: "/img/fb.png" },
  { src: "/img/ts.png" },
];
function App() {
  const [kartlar, setKartlar] = useState([]);
  const karıştır = () => {
    const karıştırılmışKartlar = [...kartResimler, ...kartResimler]
      .sort(() => Math.random() - 0.5)
      .map((kart) => ({ ...kart, id: Math.random() * 10 }));
    setKartlar(karıştırılmışKartlar);
  };
  console.log(kartlar);
  return (
    <div className="App">
      <h1>React Hafıza Oyunu</h1>
      <button onClick={karıştır}>Yeni Oyun</button>
      <div className="card-grid">
        {kartlar.map((kart) => <Card kart={kart}/>)}
      </div>
    </div>
  );
}

export default App;
