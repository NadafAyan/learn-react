import { React, useState } from 'react';
import './counter.css';

const counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
        <p className='para'>You have clicked 0 times.</p>
        <button className='btn'>Click me</button>
    </div>
  )
}

export default counter