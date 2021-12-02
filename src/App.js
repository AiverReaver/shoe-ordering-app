import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { getShoes } from "./dummyBackend/shoe";
import { List } from "./shoes/List";
import { SizeFilter } from "./Filters/SizeFilter/SizeFilter";

function App() {
  const [shoes, setShoes] = useState([]);
  const [filters, setFilters] = useState({ sizes: [] });

  useEffect(() => {
    setShoes(getShoes(filters));
  }, [filters]);

  const handleChange = useCallback(({ name, value }) => {
    setFilters((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <div>
      <strong>New Arriavals</strong>
      <div className="App">
        <div>
          <SizeFilter
            currentValues={filters.sizes}
            name="sizes"
            onChange={handleChange}
          />
        </div>
        <List items={shoes} />
      </div>
    </div>
  );
}

export default App;
