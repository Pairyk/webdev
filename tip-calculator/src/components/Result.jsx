function Result({ tippedBill, tipAmount, perPerson }) {
  return (
    <h1>
      Overall bill: ${tippedBill.toFixed(2)} <br />
      Only tip: ${tipAmount.toFixed(2)} <br />
      Per person: ${perPerson.toFixed(2)}
    </h1>
  );
}

export default Result;
