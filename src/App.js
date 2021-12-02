import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { getShoes } from "./dummyBackend/shoe";
import { List } from "./shoes/List";
import { SizeFilter } from "./Filters/SizeFilter/SizeFilter";
import { CategoryFilter } from "./Filters/CategoryFilter/CategoryFilter";
import { PriceRangeFilter } from "./Filters/PriceRangeFilter/PriceRangeFilter";

function App() {
  const [shoes, setShoes] = useState([]);
  const [filters, setFilters] = useState({
    sizes: [],
    types: [],
    priceMin: "",
    priceMax: "",
  });

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
          <CategoryFilter
            name="types"
            currentValues={filters.types}
            onChange={handleChange}
          />
          <PriceRangeFilter
            minName="priceMin"
            maxName="priceMax"
            minValue={filters.priceMin}
            maxValue={filters.priceMax}
            onChange={handleChange}
          />
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
