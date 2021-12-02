import React from "react";
import { Item } from "./Item";
import classes from "./List.module.css";

export const List = ({ items = [] }) => {
  const shoeCardElements = items.map(
    ({ name, id, company, imageUrl, price, color }) => (
      <Item
        key={id}
        name={name}
        company={company}
        url={imageUrl}
        color={color}
        price={price}
      />
    )
  );

  return <div className={classes.cardGroup}>{shoeCardElements}</div>;
};
