import React, { useState } from 'react';
import './style.css';


function App() {
  const [count, setCount] = useState(0);

  const isEven = count % 2 === 0 ? 'Even' : 'Odd';

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <div>
        <button
          data-testid="minusonebtn"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          -1
        </button>
        <button
          data-testid="plusonebtn"
          onClick={() => setCount(count + 1)}
        >
          +1
        </button>
        <div>
          <button
            data-testid="resetbtn"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>

      <span data-testid="counter">{count}</span>

      <div>
        <span data-testid="odd-or-even">{isEven}</span>
        <span data-testid="is-prime">{isPrime(count).toString()}</span>
      </div>
    </div>
  );
}

export default App;
