import { useEffect, useState } from "react";

function AnimatedNumber({
  value,
  duration = 1000,
  prefix = "₹ ",
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setDisplayValue(Math.round(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <>
      {prefix}
      {displayValue.toLocaleString("en-IN")}
    </>
  );
}

export default AnimatedNumber;