import React from "react";
import { shoesTypes } from "../../dummyBackend/shoe";
import { useMultiSelect } from "../../utils/CustomHook";

export const CategoryFilter = ({ name, currentValues = [], onChange }) => {
  const onClick = useMultiSelect({ name, currentValues, onChange });

  return (
    <div>
      {shoesTypes.map((type) => {
        const checked = currentValues.includes(type);
        return (
          <div key={type}>
            <input
              type="checkbox"
              checked={checked}
              title={type}
              name={type}
              value={type}
              onChange={() => onClick(type)}
            />
            <label htmlFor={type}>{type} </label>
            <br />
          </div>
        );
      })}
    </div>
  );
};
