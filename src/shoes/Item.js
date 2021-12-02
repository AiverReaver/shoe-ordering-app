import React from "react";
import classes from "./Item.module.css";

export const Item = ({ name, company, url, color, price }) => {
  return (
    <div className={classes.card}>
      <div
        className={classes.colorBar}
        style={{
          borderLeft: `3px solid ${color}`,
        }}
      ></div>

      <div className={classes.textContainer}>
        <div className={classes.grey}>{company}</div>
        <div className={classes.bold}>{name}</div>
      </div>
      <img src={url} alt={name} width="200px" />
      <div className={classes.textContainer}>
        <div className={classes.grey}>Price</div>
        <div className={classes.bold}>$ {price}</div>
      </div>
    </div>
  );
};
