import React from "react";

const ErroText = ({ name, type, valid }) => {
  switch (type) {
    case "required":
      return <p style={{ color: "red" }}>{name}을(를) 입력해 주세요.</p>;

    case "minLength":
      return (
        <p style={{ color: "red" }}>
          {name}은(는) {valid}자 이상입니다.
        </p>
      );

    default:
      break;
  }
};

export default ErroText;
