export function Button({ onClick, children }) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

// export function Reset({ onReset }) {
//   return (
//     <div>
//       <button onClick={() => onReset()}>Reset</button>
//     </div>
//   );
// }
