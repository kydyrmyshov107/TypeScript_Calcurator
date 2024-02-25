import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  add,
  minusValue,
  multiplyValue,
  divideValue,
  reset,
} from "../redux/tools/todoSlice";
import scss from "./Calculator.module.scss";

export const Calculator = () => {
  const [valueOne, setValueOne] = useState("");
  const value = useAppSelector((state) => state.calculator.value);
  const dispatch = useAppDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueOne(e.target.value);
  };

  const handleAdd = () => {
    dispatch(add(Number(valueOne)));
    setValueOne("");
  };

  const handleMinus = () => {
    dispatch(minusValue(Number(valueOne)));
    setValueOne("");
  };

  const increAse = () => {
    dispatch(multiplyValue(Number(valueOne)));
    setValueOne("");
  };

  const sepaRate = () => {
    dispatch(divideValue(Number(valueOne)));
    setValueOne("");
  };

  return (
    <div className={scss.header}>
      <h1>Calculator:</h1>

      <div className={scss.buttons}>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={increAse}>*</button>
        <button onClick={sepaRate}>/</button>
        <button onClick={() => dispatch(reset())}>clear!</button>
      </div>
      <input
        placeholder="write number"
        type="number"
        value={valueOne}
        onChange={handleInput}
      />
      <h1>{value}</h1>
    </div>
  );
};

export default Calculator;
