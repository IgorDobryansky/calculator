import React from "react";
import Button from "@mui/material/Button";

export default function CalcButton({ text, onClick, inputValue, calcFunc }) {
  return (
    <Button
      variant="outlined"
      onClick={() => {
        text === "=" && onClick(eval(inputValue));
        text === "AC" && onClick("");
        text !== "=" &&
          text !== "AC" &&
          onClick((prevState) => prevState + text);
      }}
    >
      {text}
    </Button>
  );
}
