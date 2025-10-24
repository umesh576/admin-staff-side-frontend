import React, { useEffect } from "react";
import StudentCard from "./StudentCard";

const ShowStudent = ({ studentDetails }) => {
  console.log("student det", studentDetails);
  return (
    <div>
      {/* {studentDetails.map((student, index) => {
        <StudentCard studentDetail={student} key={index} />;
      })} */}
    </div>
  );
};

export default ShowStudent;
