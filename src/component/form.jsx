import React from "react";

const Form = () => {
  return (
    <form className="write-form">
      제목
      <input className="write-input" />
      내용
      <input className="write-input" />
      <button className="write-button">추가하기</button>
    </form>
  );
};

export default Form;
