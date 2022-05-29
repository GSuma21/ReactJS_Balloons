import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./ColorBalloon.module.css";

export default function ColorBox() {
  const [colors, setColors] = useState([
    { id: 1, value: "red", key: uuidv4() },
    { id: 2, value: "green", key: uuidv4() },
    { id: 3, value: "yellow", key: uuidv4() },
    { id: 4, value: "black", key: uuidv4() },
    { id: 5, value: "aliceblue", key: uuidv4() },
  ]);
  const [values, setValues] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd(key) {
    let a = +key.trim();
    a > 5
      ? alert("please enter below 5")
      : a < 1 && alert("please enter greater than 0");

    setValues([...values, colors[a - 1]]);
    colors.splice(a - 1, 1);
    // console.log(updatedData)
    setColors(colors);
  }

  function handleBack(key, item) {
    let updated = values.filter((item) => key !== item.key);
    setValues(updated);
    let sample = [...colors, item];
    sample = sample.sort((a, b) => a.id - b.id);
    
    setColors(sample);
  }

  return (
    <>
      <h1>ReactJS Balloon</h1>   
      <br />
      <div className={style.container}>
        <div className={style.left}>
          {values.map((item) => {
            return (
              <div
                key={item.key}
                className={style.roundBoxes}
                style={{ backgroundColor: item.value }}
                onClick={() => handleBack(item.key, item)}
              ></div>
            );
          })}
        </div>
        <div className={style.middle}>
          {colors.map((item) => {
            return (
              <div
                key={item.key}
                className={style.roundBallons}
                style={{ backgroundColor: item.value }}
              ></div>
            );
          })}
        </div>

        <div className={style.last}>
        <input
        style={{ fontSize: "30px" }}
        type="number"
        placeholder="enter ball number to shoot.. "
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={() => handleAdd(inputValue)}
        style={{ fontSize: "30px" }}
      >
        shoot
      </button>
        </div>
      </div>
    </>
  );
}
