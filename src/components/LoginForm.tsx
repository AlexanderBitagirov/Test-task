import { Button, Form, Input } from "antd";
import { FunctionComponent, useState } from "react";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";

const LoginForm: FunctionComponent = () => {
  const { error } = useCustomSelector((state) => state.auth);

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");

 const {login} = UseActions();  

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите имя пользователя",
          },
        ]}
      >
        <Input value={username} onChange={e=> setName(e.target.value)}/>
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите пароль",
          },
        ]}
      >
        <Input.Password  value={password} onChange={e=> setPassword(e.target.value)}/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Вход
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
