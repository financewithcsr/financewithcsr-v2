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
    const newValue = Number(e.target.value.replace(/,/g, ""));

    if (!isNaN(newValue)) {
      if (newValue >= min && newValue <= max) {
        setValue(newValue);
      }
    }
  };

  const formatNumber = (number) => {
    return Number(number).toLocaleString("en-IN");
  };

  return (
    <div className="input-slider">

      <div className="slider-top">

        <label>{label}</label>

        <div className="input-box">

          {prefix && <span className="prefix">{prefix}</span>}

          <input
            type="text"
            value={formatNumber(value)}
            onChange={handleInputChange}
          />

          {suffix && <span className="suffix">{suffix}</span>}

        </div>

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