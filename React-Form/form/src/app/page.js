import React from "react";
import { Form } from "./components/form";
import { Data } from "./components/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans text-gray-950">
      <Form />
      <Data />
    </div>
  );
}
