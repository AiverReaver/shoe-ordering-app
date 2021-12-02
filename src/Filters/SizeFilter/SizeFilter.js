import React from "react";
import { shoeSizes } from "../../dummyBackend/shoe";
import { useMultiSelect } from "../../utils/CustomHook";
import classes from "./SizeFilter.module.css";

export const SizeFilter = ({ name, currentValues = [], onChange }) => {
  const onClick = useMultiSelect({ name, currentValues, onChange });

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
