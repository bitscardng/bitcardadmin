import React from "react";

const DateTime = () => {
  const showDate = new Date();
  const date = showDate.toDateString();
  const time = showDate.toLocaleTimeString();
  return (
    <div className="flex">
      <p>Today on Bitscard</p>
      <p className="mx-2">{date} ,</p>
      <p>{time}</p>
    </div>
  );
};

export default DateTime;
