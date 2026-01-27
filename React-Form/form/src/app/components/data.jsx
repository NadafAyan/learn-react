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
    <div>
      <h2>Submissions</h2>
      <ul>
        {submissions.map(submission => (
          <li key={submission.id}>
            Name: {submission.name}, Email: {submission.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
