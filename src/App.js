import { useEffect, useState } from "react";
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
  const [ilk, setilk] = useState();
  const [iki, setiki] = useState();
  const [sayı, setsayı] = useState(0);
  const karıştır = () => {
    const karıştırılmışKartlar = [...kartResimler, ...kartResimler]
      .sort(() => Math.random() - 0.5)
      .map((kart) => ({ ...kart, id: Math.random() * 10 }));
    setKartlar(karıştırılmışKartlar);
  };
  const kartSeç = (kart) => {
    ilk ? setiki(kart) : setilk(kart);
  };

  useEffect(() => {
    if (ilk && iki) {
      if (ilk.src === iki.src) {
        console.log("kartlar eşleştit");
        setiki();
        setilk();
        setsayı(öncekisayı=>öncekisayı+1)
      }
      else{
        console.log("kartlar eşleşmedi");
        setiki();
        setilk()
        setsayı(öncekisayı=>öncekisayı+1)
      }
    }
    console.log(sayı)
  }, [ilk, iki]);

  return (
    <div className="App">
      <h1>React Hafıza Oyunu</h1>
      <button onClick={karıştır}>Yeni Oyun</button>
      <div className="card-grid">
        {kartlar.map((kart) => (
          <Card kart={kart} kartSeç={kartSeç} />
        ))}
      </div>
    </div>
  );
}

export default App;
