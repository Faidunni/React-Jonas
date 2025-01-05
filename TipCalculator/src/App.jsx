import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

// import { useState } from "react";

// function App() {
//   const [money, setMoney] = useState("");
//   const [tip, setTip] = useState("0");
//   const [friend, setFriend] = useState("0");

// //  my solution which worked but tou didn't need to do all of this
//   let calculatedResult = 0;
//   const myTip = Number(tip);
//   const myfriend = Number(friend);
//   const together = (myTip + myfriend) / 2;
//   const amount = Number(money);

//   if (myTip === 0 || myfriend === 0) {
//     calculatedResult = amount + (myTip + myfriend) / 2;
//   }
//   if (myTip === 5 || myfriend === 5) {
//     calculatedResult = amount + (myTip + myfriend) / 2;
//   }
//   if (myTip === 10 || myfriend === 10) {
//     calculatedResult = amount + (myTip + myfriend) / 2;
//   }
//   if (myTip === 20 || myfriend === 20) {
//     calculatedResult = amount + (myTip + myfriend) / 2;
//   }

//   return (
//     <div>
//       <Bill amount={amount} onChange={setMoney} />
//       <Tip tip={tip} onChange={setTip}>
//         How did you like the service?
//       </Tip>
//       <Tip tip={friend} onChange={setFriend}>
//         How did your friend like the service
//       </Tip>
//       <Result result={calculatedResult} amount={amount} together={together} />
//     </div>
//   );
// }

// function Bill({ amount, onChange }) {
//   return (
//     <div>
//       <span>How much was the bill?</span>
//       <input
//         type="text"
//         value={amount}
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// }

// function Tip({ tip, onChange, children }) {
//   return (
//     <div>
//       <span>{children}</span>
//       <select value={tip} onChange={(e) => onChange(e.target.value)}>
//         <option value="0">Dissatisfied (0%)</option>
//         <option value="5">It was okay (5%)</option>
//         <option value="10">It was good (10%)</option>
//         <option value="20">Absolutely amazing! (20%)</option>
//       </select>
//     </div>
//   );
// }

// function Result({ result, amount, together }) {
//   return (
//     <>
//       <p>
//         You Pay ${result} (${amount} + ${together} tip)
//       </p>
//       <button>Reset</button>
//     </>
//   );
// }

// export default App;
