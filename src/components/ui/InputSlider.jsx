import { useState } from "react";
import "./InputSlider.css";

function InputSlider({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
  suffix = "",
  prefix = "",
}) {
  const [inputValue, setInputValue] = useState(
    Number(value).toLocaleString("en-IN")
  );

  const formatNumber = (number) => {
    if (
      number === "" ||
      number === null ||
      number === undefined
    ) {
      return "";
    }

    return Number(number).toLocaleString("en-IN");
  };

  /* =========================
     MANUAL INPUT
  ========================= */

  const handleInputChange = (e) => {
    const rawValue = e.target.value.replace(/,/g, "");

    // Allow user to clear the field temporarily
    if (rawValue === "") {
      setInputValue("");
      return;
    }

    // Allow numbers and decimal values
    if (!/^\d*\.?\d*$/.test(rawValue)) {
      return;
    }

    setInputValue(rawValue);

    const newValue = Number(rawValue);

    if (!isNaN(newValue)) {
      // Update calculator immediately
      setValue(newValue);
    }
  };

  /* =========================
     WHEN USER LEAVES INPUT
  ========================= */

  const handleBlur = () => {
    let newValue = Number(
      inputValue.replace(/,/g, "")
    );

    // Empty / invalid value
    if (
      isNaN(newValue) ||
      inputValue === ""
    ) {
      newValue = min;
    }

    // Minimum limit
    if (newValue < min) {
      newValue = min;
    }

    // Maximum limit
    if (newValue > max) {
      newValue = max;
    }

    /*
      IMPORTANT:
      No step rounding here.

      Example:
      5237 stays 5237
      12850 stays 12850
      25999 stays 25999
    */

    setValue(newValue);

    setInputValue(
      formatNumber(newValue)
    );
  };

  /* =========================
     SLIDER
  ========================= */

  const handleSliderChange = (e) => {
    const newValue = Number(
      e.target.value
    );

    setValue(newValue);

    setInputValue(
      formatNumber(newValue)
    );
  };

  return (
    <div className="input-slider">

      <div className="slider-top">

        <label>
          {label}
        </label>

        <div className="input-box">

          {prefix && (
            <span className="prefix">
              {prefix}
            </span>
          )}

          <input
            type="text"
            inputMode="decimal"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            onFocus={(e) =>
              e.target.select()
            }
          />

          {suffix && (
            <span className="suffix">
              {suffix}
            </span>
          )}

        </div>

      </div>

      <input
        className="slider-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
      />

      <div className="slider-values">

        <span>
          {prefix}
          {formatNumber(min)}
        </span>

        <span>
          {prefix}
          {formatNumber(max)}
          {suffix}
        </span>

      </div>

    </div>
  );
}

export default InputSlider;