'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        onClick={() => {
          setCount((previousCount) => previousCount + 1);
          setCount((previousCount) => previousCount + 1);
        }}
        className="btn-s btn-s-primary"
      >
        +
      </div>
      <div>Count: {count}</div>
    </>
  );
}
