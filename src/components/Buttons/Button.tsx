import React from "react";
import styles from "./button.module.css";
interface ButtonProps {
  onClick?: Function;
  text: string;
}

export default function Button({ onClick, text }: ButtonProps) {
  return <div className={styles.button}>{text}</div>;
}
