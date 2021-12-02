import "./App.css";
import { useEffect, useState } from "react";
import { getShoes } from "./dummyBackend/shoe";
import { List } from "./shoes/List";

function App() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(getShoes());
  }, []);

  return (
    <div className="App">
      <List items={shoes} />
    </div>
  );
}

export default App;
