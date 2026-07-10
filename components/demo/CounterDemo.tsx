"use client";

import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}