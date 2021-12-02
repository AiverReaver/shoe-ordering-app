import React from "react";
import classes from "./PriceRangeFilter.module.css";

export const PriceRangeFilter = ({
  minName,
  maxName,
  minValue = "",
  maxValue = "",
  onChange,
}) => {
  return (
    <div>
      <strong>Price</strong> <br />
      <div className={classes.container}>
        <input
          type="number"
          placeholder="$ Min"
          value={minValue}
          className={classes.field}
          onChange={(e) =>
            onChange({ name: minName, value: parseInt(e.target.value) })
          }
        />
        -
        <input
          type="number"
          placeholder="$ Max"
          value={maxValue}
          className={classes.field}
          onChange={(e) =>
            onChange({ name: maxName, value: parseInt(e.target.value) })
          }
        />
      </div>
    </div>
  );
};
