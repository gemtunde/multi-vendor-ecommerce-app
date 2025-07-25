import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="py-2 text-2xl font-semibold text-slate-800 dark:text-slate-50">
      {title}
    </h1>
  );
};

export default Heading;
