"use client";
import React, { useEffect, useState } from "react";

const SelectBoard = () => {
  const [student, setStudent] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [test, setTest] = useState(false);
  const [result, setResult] = useState(false);
  const writeSomething = () => {
    console.log("student button clicked");
  };
  useEffect(() => {
    writeSomething();
  }, [student]);
  return (
    <div>
      <div className="flex flex-row gap-4">
        <button
          className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black"
          onClick={() => {
            setStudent(!student);
          }}
        >
          student
        </button>
        <button className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black">
          admin{" "}
        </button>
        <button className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black">
          test
        </button>
        <button className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black">
          result
        </button>
      </div>
    </div>
  );
};

export default SelectBoard;
