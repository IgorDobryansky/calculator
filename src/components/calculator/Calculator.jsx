import { useState } from "react";
import styles from "./Calculator.module.scss";
import CalcButton from "../button/CalcButton";
import CalcInput from "../calc-input/CalcInput";

function Calculator() {
  const [input, setInput] = useState("");

  return (
    <div className={styles.Calculator}>
      <CalcInput
        text={input}
        onChange={setInput}
        onKeydown={(event) => event.key === "Enter" && setInput(eval(input))}
      />
      <div className={styles.SecondaryButtons}>
        <CalcButton onClick={setInput} text="(" />
        <CalcButton onClick={setInput} text=")" />
        <CalcButton onClick={setInput} text="AC" />
      </div>
      <div className={styles.PrimaryButtons}>
        <div className={styles.NumberButtons}>
          <div className={styles.Numbers}>
            <CalcButton onClick={setInput} text="1" />
            <CalcButton onClick={setInput} text="2" />
            <CalcButton onClick={setInput} text="3" />
          </div>
          <div className={styles.Numbers}>
            <CalcButton onClick={setInput} text="4" />
            <CalcButton onClick={setInput} text="5" />
            <CalcButton onClick={setInput} text="6" />
          </div>
          <div className={styles.Numbers}>
            <CalcButton onClick={setInput} text="7" />
            <CalcButton onClick={setInput} text="8" />
            <CalcButton onClick={setInput} text="9" />
          </div>
          <div className={styles.Numbers}>
            <CalcButton onClick={setInput} text="0" />
            <CalcButton onClick={setInput} text="." />
            <CalcButton onClick={setInput} text="=" inputValue={input} />
          </div>
        </div>
        <div>
          <CalcButton onClick={setInput} text="/" />
          <CalcButton onClick={setInput} text="*" />
          <CalcButton onClick={setInput} text="-" />
          <CalcButton onClick={setInput} text="+" />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
