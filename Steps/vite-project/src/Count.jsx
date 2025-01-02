import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePlus() {
    setCount((count) => count + step);
  }
  function handleMinus() {
    setCount((count) => count - step);
  }

  const d = new Date();
  d.setDate(d.getDate() + count);
  console.log(d);
  return (
    <>
      <div className="count">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <p>Step: {step} </p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={handleMinus}>-</button>
        <p>Count: {count} </p>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{d.toDateString()}</span>
      </p>
    </>
  );
}

export default Count;
