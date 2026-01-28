import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
        <p className='para'>You have clicked {count} times.</p>
        <button className='btn'>Click me</button>
    </div>
  )
}

export default Counter;