import React from "react";

const StudentCard = ({ studentDetail }) => {
  useEffect(() => {
    console.log("nsfjd", studentDetail);
  }, []);
  return <div>{studentDetail.name}</div>;
};

export default StudentCard;
