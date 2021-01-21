import React from "react";

const Error = ({ mensaje, type }) => {
  if (type === "fail") {
    return <p className="error">{mensaje}</p>;
  } else if (type === "success") {
    return <p className="success">{mensaje}</p>;
  }
};

export default Error;
