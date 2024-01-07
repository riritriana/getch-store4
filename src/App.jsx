import { useState } from "react";
let name = "riri";

function App() {
  const [count, setCount] = useState(0);
  console.log(`name = ${name}`);
  console.log(`count = ${count}`);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <h2>{name}</h2>
        <button
          onClick={() => {
            name = "Triana";
            setCount(15);
          }}
        >
          Tambah
        </button>
      </div>
    </>
  );
}

export default App;
