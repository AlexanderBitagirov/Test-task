import { Form, Input } from "antd";
import React, { FunctionComponent } from "react";

const LoginForm: FunctionComponent = () => {
  return (
    <Form>
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
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="Password"
        rules={[
          {
            required: true,
            message: "Пожалуйста введите пароль",
          },
        ]}
      >
        <Input.Password/>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
