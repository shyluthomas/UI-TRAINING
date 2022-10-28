import React from "react";

const Count = ({ text, count }) => {
  console.log("rendering count", text);
  return (
    <div>
      {text}-{count}
    </div>
  );
};

export default Count;
