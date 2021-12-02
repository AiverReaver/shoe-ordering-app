import React from "react";
import { Item } from "./Item";
import classes from "./List.module.css";

const COLORS = ["red", "pink", "cyan", "grey", "bisque"];
export const List = ({ items = [] }) => {
  const shoeCardElements = items.map(
    ({ name, id, company, imageUrl, price }) => (
      <Item
        key={id}
        name={name}
        company={company}
        url={imageUrl}
        color={COLORS[Math.floor(Math.random() * COLORS.length)]}
        price={price}
      />
    )
  );

  return <div className={classes.cardGroup}>{shoeCardElements}</div>;
};
