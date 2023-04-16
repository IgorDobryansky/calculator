import React from "react";
import TextField from "@mui/material/TextField";

function CalcInput({text, onChange, onKeydown }) {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      style={{ width: "100%" }}
      value={text}
      onChange={(event)=>onChange(event.target.value)}
      onKeyDown={onKeydown}

    />
  );
}

export default CalcInput;
