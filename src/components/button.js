import React from "react";
const Button = ({ handleChange, children }) => {
  console.log("rendering button");
  return (
    <div>
      <button onClick={handleChange}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
