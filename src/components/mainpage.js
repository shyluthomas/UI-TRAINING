import React, { useState } from "react";
import Button from "./button";
import Count from "./count";
import Title from "./title";

const MainPage = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  const incrementAge = () => {
    setAge(age + 1);
  };
  const incrementSalary = () => {
    setSalary(salary + 100);
  };
  return (
    <div>
      <Title />
      <Count count={age} text={"age"} />
      <Button handleChange={incrementAge}>{"increment Age"}</Button>
      <Count count={salary} text={"salary"} />
      <Button handleChange={incrementSalary}>{"increment Salary"}</Button>
    </div>
  );
};

export default MainPage;
