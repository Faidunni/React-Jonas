import React from "react";
import { useState } from "react";

function App() {
  return (
    <div>
      <Bill />
      <Tip>How did you like the service?</Tip>
      <Tip>How did your friend like the service</Tip>
    </div>
  );
}

function Bill() {
  const [amount, setAmount] = useState("");
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <p>{amount}</p>
    </div>
  );
}

function Tip({ children }) {
  const [tip, setTip] = useState("5");

  return (
    <div>
      <span>{children}</span>
      <select value={tip} onChange={(e) => setTip(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

export default App;
