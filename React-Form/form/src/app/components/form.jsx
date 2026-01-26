"use client";
import { useState } from 'react';
import React from 'react';
import { getFirestore, collection, addDoc, doc, getDoc, getDocs, query, where, updateDoc, deleteDoc } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);

export const form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);

    writeData();
    
  };

}

  const writeData = async() => {
    const result = await addDoc(collection(firestore, "submissions"), {
      name: name,
      email: email
    });

  return (
    <div>
      <form className='flex flex-col px-6 py-4 gap-4 bg-black rounded-md shadow-md' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name:" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <input type="email" placeholder="Enter email:" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
      </form>
    </div>
  )
}