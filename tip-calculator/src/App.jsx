import { useState } from "react";
import NumberInput from "./components/NumberInput";
import Result from "./components/Result";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  // Convert states to safe numbers for math (treats "" as 0)
  const billNum = Number(bill) || 0;
  const tipNum = Number(tip) || 0;
  const peopleNum = Number(people) || 0;

  const tipAmount = (billNum / 100) * tipNum;
  const tippedBill = billNum + tipAmount;
  const perPerson = peopleNum > 0 ? tippedBill / peopleNum : 0;

  return (
    <div>
      <NumberInput label="Bill Amount" value={bill} onChange={setBill} />
      <NumberInput label="Tip Percentage" value={tip} onChange={setTip} />

      <button onClick={() => setTip(5)}>5%</button>
      <button onClick={() => setTip(10)}>10%</button>
      <button onClick={() => setTip(15)}>15%</button>
      <button onClick={() => setTip(20)}>20%</button>

      <NumberInput label="People" value={people} onChange={setPeople} />

      <br />
      <hr />

      <Result
        tippedBill={tippedBill}
        tipAmount={tipAmount}
        perPerson={perPerson}
      />
    </div>
  );
}

export default App;
