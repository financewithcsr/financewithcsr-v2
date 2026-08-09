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
  const handleInputChange = (e) => {
    const newValue = Number(e.target.value);

    if (!isNaN(newValue)) {
      if (newValue >= min && newValue <= max) {
        setValue(newValue);
      }
    }
  };

  return (
    <div className="input-slider">
      <div className="slider-header">
        <label className="slider-label">{label}</label>

        <input
          className="slider-input"
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleInputChange}
        />
      </div>

      <input
        className="slider-range"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <div className="slider-footer">
        <span>
          {prefix}
          {min.toLocaleString("en-IN")}
        </span>

        <span>
          {prefix}
          {max.toLocaleString("en-IN")}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default InputSlider;