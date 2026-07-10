"use client";

import { useState } from "react";

export default function CounterDemo() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center" }}>
            <h2>{count}</h2>

            <button
                onClick={() => {
                    setCount((previous) => previous + 1);
                    setCount((previous) => previous + 1);
                }}
            >
                +1
            </button>
        </div>
    );
}