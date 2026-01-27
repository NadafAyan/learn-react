"use client";
import { React, useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase";
const firestore = getFirestore(app);

export const Data = () => {

    const [submissions, setSubmissions] = useState([]);

    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(firestore, "submissions"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSubmissions(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className='mt-8 p-6 bg-white rounded-md shadow-md w-full max-w-md'>
      <h2 className='text-xl font-semibold mb-4'>Submissions</h2>
      <ul className='list-disc list-inside'>
        {submissions.map(submission => (
          <li key={submission.id} className='mb-2'>
            Name: {submission.name}, Email: {submission.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
