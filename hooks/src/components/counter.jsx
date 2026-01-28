import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [ count, setCount ] = useState(0);
  return (
    <div className="align-center text-center border-2 border-blue-500 p-4 m-4">
        <p className='para'>You have clicked {count} times.</p>
        <button className='btn' onClick={() => {
            setCount(count + 1);
        }}>Click me</button>
        <h1 className='text-9xl underline'>Ayan Nadaf</h1>
    </div>
  )
}

export default Counter;