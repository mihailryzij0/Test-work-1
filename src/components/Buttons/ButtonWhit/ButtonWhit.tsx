import React, { MouseEventHandler } from "react";
import styles from "./button.module.css";
interface ButtonProps {
  handleClick?: MouseEventHandler;
  text: string;
}

export default function ButtonWhit({
  handleClick: handleClick,
  text,
}: ButtonProps) {
  return (
    <button onClick={handleClick} className={styles.button}>
      {text}
    </button>
  );
}
