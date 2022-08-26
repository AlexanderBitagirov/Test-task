import { Button, Row } from "antd";
import { Header } from "antd/lib/layout/layout";
import { FunctionComponent } from "react";
import { UseActions } from "./hooks/UseActions";

export const Navbar: FunctionComponent = () => {
  const { logout } = UseActions();

  return (
    <Header>
      <Row justify="end" align="middle" className="nav">
        <Button onClick={() => logout()}> Выйти</Button>
      </Row>
    </Header>
  );
};
