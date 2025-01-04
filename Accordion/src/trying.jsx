import { useState } from "react";

function App() {
  const [option, setOption] = useState("");
  const [money, setMoney] = useState("");
  // const [result, setResult] = useState(null);

  // const tip = parseFloat(option);
  // const amount = parseFloat(money);
  const percentage = Math.round((money / option) * 100);

  // if (!tip || !amount) {
  //   setResult("Please provide valid inputs");
  //   return;
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   // const tip = parseFloat(option);
  //   // const amount = parseFloat(money);
  //   // const percentage = Math.round((amount / tip) * 100);

  //   // if (!tip || !amount) {
  //   //   setResult("Please provide valid inputs");
  //   //   return;
  //   // }

  //   // let calculatedResult = 0;

  //   // if (percentage === 5) {
  //   //   calculatedResult = Math.round((5 * money) / 100);
  //   // } else if (percentage === 10) {
  //   //   calculatedResult = Math.round((10 * amount) / 100);
  //   // } else if (percentage === 15) {
  //   //   calculatedResult = Math.round((15 * amount) / 100);
  //   // }

  //   // setResult(calculatedResult);
  // }

  return (
    <form>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      {/* <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="5">You picked (5%)</option>
        <option value="10">You picked (10%)</option>
        <option value="15">You picked (15%)</option>
      </select> */}
      <input
        type="number"
        value={option}
        onChange={(e) => setOption(e.target.value)}
      />
      <button type="submit">submit</button>
      <p>
        {percentage !== null
          ? `You paid ${money} with ${option} and the total tip ${percentage}`
          : "Please select an option"}
      </p>
    </form>
  );
}

export default App;
