export function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the Bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
