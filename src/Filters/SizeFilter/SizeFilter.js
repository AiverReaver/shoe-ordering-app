import React, { useCallback } from "react";
import { shoeSizes } from "../../dummyBackend/shoe";
import classes from "./SizeFilter.module.css";

export const SizeFilter = ({ name, currentValues = [], onChange }) => {
  const onClick = useCallback(
    (size) => {
      let newValues = currentValues;
      if (currentValues.includes(size)) {
        newValues = newValues.filter((val) => val !== size);
      } else {
        newValues.push(size);
      }

      onChange({ name, value: newValues });
    },
    [name, currentValues, onChange]
  );

  const getClasses = (size) => {
    const classNames = [classes.item];

    if (currentValues.includes(size)) {
      classNames.push(classes.active);
    }

    return classNames.join(" ");
  };

  return (
    <div>
      <div>Size</div>
      <div className={classes.container}>
        {shoeSizes.map((size) => (
          <div
            className={getClasses(size)}
            key={size}
            onClick={() => onClick(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};
