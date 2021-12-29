import axios from "axios";
import React, { useEffect, useRef } from "react";

const Login = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    idRef.current.focus();
  });

  const fetchLogin = async (e) => {
    const id = idRef.current.value;
    const pw = pwRef.current.value;
    e.preventDefault();
    if (!id) {
      alert("id!!");
      idRef.current.focus();
    } else if (!pw) {
      alert("pw!!");
      pwRef.current.focus();
    } else {
      const { data } = await axios.post("/login", { id, pw });
      if (data.result) alert(data.text);
      else alert(data.text);
    }
  };
  return (
    <form onSubmit={fetchLogin}>
      <label for="id">ID</label>
      <input id="id" ref={idRef} />
      <br />
      <label for="pw">PW</label>
      <input id="pw" type="password" ref={pwRef} />
      <button type="submit">click</button>
    </form>
  );
};

export default Login;
