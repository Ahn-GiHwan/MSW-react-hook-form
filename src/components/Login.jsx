import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "reactstrap";
import ErroText from "./ErroText";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchLogin = async (info) => {
    const { data } = await axios.post("/login", info);
    if (data.result) alert(data.text);
    else alert(data.text);
  };

  return (
    <Form onSubmit={handleSubmit(fetchLogin)}>
      <label for="id">id</label>
      <input
        type="text"
        id="id"
        name="id"
        innerRef="id"
        {...register("id", { required: true })}
      />
      {errors.id?.type === "required" && <ErroText name="id" type="required" />}
      <br />
      <label for="pw">pw</label>
      <input
        type="password"
        id="pw"
        {...register("pw", { required: true, minLength: 8 })}
      />
      {errors.pw?.type === "required" && <ErroText name="pw" type="required" />}
      {errors.pw?.type === "minLength" && (
        <ErroText name="pw" type="minLength" valid={8} />
      )}
      <br />
      <Button color="primary" size="sm" block type="submit">
        click
      </Button>
    </Form>
  );
};

export default Login;
