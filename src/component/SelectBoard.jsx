"use client";
import React, { useEffect, useState } from "react";
import ClassOverview from "./Class/ClassOverview.jsx";

const SelectBoard = () => {
  const [selectPoint, setSelectPoint] = useState(null);

  return (
    <div className="w-full">
      <div className="flex flex-row gap-4">
        <button
          className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black"
          onClick={() => {
            setSelectPoint("student");
          }}
        >
          student
        </button>
        <button
          className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black"
          onClick={() => {
            setSelectPoint("admin");
          }}
        >
          admin{" "}
        </button>
        <button
          className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black"
          onClick={() => {
            setSelectPoint("test");
          }}
        >
          test
        </button>
        <button
          className="cursor-pointer bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black"
          onClick={() => {
            setSelectPoint("result");
          }}
        >
          result
        </button>
      </div>
      {selectPoint == "student" && (
        <div>
          <div className="w-full">
            <ClassOverview />
          </div>
        </div>
      )}
      {selectPoint == "admin" && <div>admin panel</div>}
      {selectPoint == "test" && <div>test panel</div>}
      {selectPoint == "result" && <div>result panel</div>}
    </div>
  );
};

export default SelectBoard;
