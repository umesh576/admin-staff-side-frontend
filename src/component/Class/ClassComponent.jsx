"use client";
import React, { useEffect, useState } from "react";
// import ShowStudent from "../Student/ShowStudent";

const ClassComponent = ({ classDetail }) => {
  const [students, setStudents] = useState([]);

  return (
    <div
      className="border-2 p-4 m-4 cursor-pointer hover:bg-gray-200 "
      onClick={() => {
        setStudents(classDetail.studnet);
        // setShowClass(!showClass);
      }}
    >
      <h2>
        {classDetail.className} ({classDetail.section})
      </h2>
      <h1></h1>
      <h1>{classDetail.teacher}</h1>
    </div>
  );
};

export default ClassComponent;
