import React, { useEffect } from "react";

const ClassComponent = ({ classDetail }) => {
  useEffect(() => {
    console.log(classDetail);
  }, []);
  return (
    <div>
      <h2>umesh</h2>
    </div>
  );
};

export default ClassComponent;
