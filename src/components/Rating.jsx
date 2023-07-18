import { useState } from "react";

export function Rating() {
  const [activeStars, setActiveStars] = useState(0);
  const totalStars = 5;

  function handleClick(index) {
    setActiveStars(index + 1);
  }

  return (
    <div id="rating">
		<h2>Rate me!</h2>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={index < activeStars ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          *
        </span>
      ))}
    </div>
  );
}
