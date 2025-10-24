import React, { use } from "react";
import { useState, useEffect } from "react";
import ClassComponent from "./ClassComponent";
import StudentCard from "../Student/StudentCard";

const ClassOverview = () => {
  const classDetails = [
    {
      className: "10th Grade",
      section: "A",
      teacher: "Mr. Smith",
      studnet: [
        { name: "umesh", age: 15 },
        { name: "ram", age: 16 },
      ],
    },
    {
      className: "9th Grade",
      npm: "B",
      teacher: "Ms. Johnson",
      studnet: [
        { name: "sita", age: 14 },
        { name: "gita", age: 15 },
      ],
    },
    {
      className: "8th Grade",
      section: "C",
      teacher: "Mr. Lee",
      studnet: [
        { name: "hari", age: 13 },
        { name: "shyam", age: 14 },
      ],
    },
  ];
  const [showStudents, setShowStudents] = useState(false);
  const [showclass, setshowclass] = useState(true);
  // const [students, setStudent] = useState([]);
  const students = [];

  // useEffect(() => {
  //   console.log("showstudent", showStudents);
  //   console.log("showclass", showclass);
  //   console.log("student", students);
  // }, [showStudents, showclass, students]);
  console.log("student", students);

  return (
    <div className="w-full flex flex-row">
      <div>
        {showclass && (
          <button
            onClick={() => {
              setShowStudents(true);
              setshowclass(!showclass);
              classDetails.map((classDetail, index) => {
                students.push(classDetail.studnet);
              });
            }}
          >
            {classDetails.map((classDetail, index) => (
              <ClassComponent classDetail={classDetail} key={index} />
            ))}{" "}
          </button>
        )}
        {showStudents && (
          <div>
            <p>umesh</p>
            <p>umesh</p>
            {students.map((studentGroup, index) => {
              <StudentCard key={index} studentDetail={studentGroup} />;
            })}
          </div>
        )}
        {students.length > 0 && <p>umesh</p>}
      </div>
    </div>
  );
};

export default ClassOverview;
