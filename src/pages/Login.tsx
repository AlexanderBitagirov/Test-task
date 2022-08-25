import { Layout, Row } from "antd";
import Card from "antd/lib/card/Card";
import React, { FunctionComponent } from "react";
import LoginForm from "../components/LoginForm";

const Login: FunctionComponent = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="test">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
