import React from "react";
import ClassComponent from "./ClassComponent";

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
      section: "B",
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

  return (
    <div>
      <div>
        {classDetails.map((classDetail, index) => (
          <ClassComponent classDetails={classDetail} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ClassOverview;
