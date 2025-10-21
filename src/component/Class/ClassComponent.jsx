"use client";
import React, { useEffect, useState } from "react";
import ShowStudent from "../Student/ShowStudent";

const ClassComponent = ({ classDetail }) => {
  const [students, setStudents] = useState([]);
  const [showStudents, setShowStudents] = useState(false);
  return (
    <div
      className="border-2 p-4 m-4 cursor-pointer hover:bg-gray-200 "
      onClick={() => {
        setStudents(classDetail.studnet);
        setShowStudents(!showStudents);
      }}
    >
      <h2>
        {classDetail.className} ({classDetail.section})
      </h2>
      <h1></h1>
      <h1>{classDetail.teacher}</h1>
      <div>
        {showStudents &&
          students.map((student, index) => (
            <ShowStudent studentDetails={students} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ClassComponent;
