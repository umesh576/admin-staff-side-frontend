import React, { useEffect } from "react";

const ShowStudent = ({ studentDetails }) => {
  useEffect(() => {
    console.log(studentDetails);
  }, []);
  return <div>ShowStudent</div>;
};

export default ShowStudent;
