import "./App.css";
import { useEffect, useState } from "react";
import { getShoes } from "./dummyBackend/shoe";

function App() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(getShoes());
  }, []);

  return (
    <div className="App">
      {shoes.map((s) => (
        <p key={s.id}>{s.name}</p>
      ))}

      <button
        onClick={() => {
          setShoes(
            getShoes({
              size: 40,
              priceMin: 100,
              priceMax: 6000,
              type: "Flip Flops",
            })
          );
        }}
      >
        get
      </button>
    </div>
  );
}

export default App;
