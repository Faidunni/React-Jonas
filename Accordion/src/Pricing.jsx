// import { useState } from "react";

// function App() {
//   return <PricingCard />;
// }

// function PricingCard() {
//   const [isYearly, setIsYearly] = useState(false);

//   const plans = [
//     { name: "Basic", monthly: 10, yearly: 100 },
//     { name: "Standard", monthly: 20, yearly: 200 },
//     { name: "Premium", monthly: 30, yearly: 300 },
//   ];

//   return (
//     <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
//       <h2>Pricing Plans</h2>
//       <div style={{ margin: "20px" }}>
//         <button
//           onClick={() => setIsYearly(!isYearly)}
//           style={{
//             padding: "10px",
//             borderRadius: "10px",
//             border: "1px solid gray",
//             marginRight: "20px",
//           }}
//           className={`${!isYearly ? "button" : ""}`}
//         >
//           Monthly
//         </button>
//         <button
//           onClick={() => setIsYearly(!isYearly)}
//           style={{
//             padding: "10px",
//             borderRadius: "10px",
//             border: "1px solid gray",
//           }}
//           className={`${isYearly ? "button" : ""}`}
//         >
//           Yearly
//         </button>
//         {/* <label style={{ margin: "0 10px" }}>
//           <input
//             type="checkbox"
//             checked={isYearly}
//             onChange={() => setIsYearly(!isYearly)}
//           />
//           <span style={{ marginLeft: "5px" }}>
//             {isYearly ? "Yearly" : "Monthly"}
//           </span>
//         </label> */}
//       </div>

//       <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//         {plans.map((plan) => (
//           <div
//             key={plan.name}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "15px",
//               width: "150px",
//               textAlign: "center",
//             }}
//           >
//             <h3>{plan.name}</h3>
//             <p>${isYearly ? plan.yearly : plan.monthly}</p>
//             <button
//               style={{
//                 padding: "10px",
//                 backgroundColor: "#2196f3",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Choose
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
