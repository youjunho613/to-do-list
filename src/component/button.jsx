import React from "react";

const Button = ({ className, func, children }) => {
  return (
    <button className={className} onClick={func}>
      {children}
    </button>
  );
};

export default Button;
