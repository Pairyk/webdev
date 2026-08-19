function NumberInput({ label, value, onChange }) {
  return (
    <div>
      <h2>{label}:</h2>
      <input 
        type="number"
        placeholder="0"
        min={0}
        value={value}
        onChange={(e) => onChange(e.target.value === '' ? '' : Number(e.target.value))}  
      />
    </div>
  );
}

export default NumberInput;