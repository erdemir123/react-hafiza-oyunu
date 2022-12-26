import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

const kartResimler = [
  { src: "/img/bjk.png", eşleşme: false },
  { src: "/img/gs.png", eşleşme: false },
  { src: "/img/çorum.png", eşleşme: false },
  { src: "/img/chelsea.png", eşleşme: false },
  { src: "/img/fb.png", eşleşme: false },
  { src: "/img/ts.png", eşleşme: false },
];
function App() {
  const [kartlar, setKartlar] = useState([]);
  const [ilk, setilk] = useState();
  const [iki, setiki] = useState();
  const [sayı, setsayı] = useState(0);
  const [oyunbitti, setOyunbitti] = useState();
  const karıştır = () => {
    const karıştırılmışKartlar = [...kartResimler, ...kartResimler]
      .sort(() => Math.random() - 0.5)
      .map((kart) => ({ ...kart, id: Math.random() * 10 }));
    setKartlar(karıştırılmışKartlar);
  };
  const kartSeç = (kart) => {
    ilk ? setiki(kart) : setilk(kart);
    console.log(ilk,iki);
  };
  const yeniOyun=()=>{
    setOyunbitti(!oyunbitti)
  }

  useEffect(() => {
    if (ilk && iki) {
      if (ilk.src === iki.src) {
        setiki();
        setilk();
        setsayı((öncekisayı) => öncekisayı + 1);
        setKartlar((öncekiKart) => {
          return öncekiKart.map((kart) => {
            if (kart.src === ilk.src) {
              return { ...kart, eşleşme: true };

            } else {
              return kart;
            }
          });
        });
      } else {
        setiki();
        setilk();
        setsayı((öncekisayı) => öncekisayı + 1);
      }
    }
   setOyunbitti(kartlar.every((kart)=>(kart.eşleşme)))
   
  }, [ilk, iki]);
  if(oyunbitti){
    return (
      <div>
      <div>tebrikler</div>
      <button onClick={yeniOyun}>Yeni Oyun</button>
      </div>
      
    )
  }else{
    return (
      <div className="App">
        <h1>React Hafıza Oyunu</h1>
        <button onClick={karıştır}>Yeni Oyun</button>
        <div className="card-grid">
          {kartlar.map((kart) => (
            <Card kart={kart} kartSeç={kartSeç} dönüş={kart === ilk || kart === iki || kart.eşleşme} />
          ))}
        </div>
        <div>
          <p>{sayı}</p>
        </div>
      </div>
    );
  }
  
}

export default App;
