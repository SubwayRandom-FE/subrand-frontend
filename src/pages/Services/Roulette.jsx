import { useState } from "react";
import { Wheel } from "react-custom-roulette";

import "./Services.css";

const data = [
  { option: "0" },
  { option: "1" },
  { option: "2" },
  { option: "0" },
  { option: "1" },
  { option: "2" },
  { option: "0" },
  { option: "1" },
  { option: "2" },
  { option: "0" },
  { option: "1" },
  { option: "2" },
];

function RoulettePage() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <>
      <span className="roulette">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </span>
      <button onClick={handleSpinClick} className="roulette-button">
        SPIN
      </button>
    </>
  );
}

export default RoulettePage;
