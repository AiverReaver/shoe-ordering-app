import { useCallback } from "react";

export const useMultiSelect = ({ currentValues, onChange, name }) => {
  return useCallback(
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
};
