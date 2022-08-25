import { Col, Layout, Row } from "antd";
import { FunctionComponent } from "react";
import { List } from "../components/List";
import { Navbar } from "../components/Navbar";
import PopUp from "../components/PopUp";

const Contacts: FunctionComponent = () => {
  return (
    <Layout>
      <Navbar />
      <Row className="list">
        <Col span={5}>
          <List/>
        </Col>
        <Col span={19}>
          <Row justify="end" align="middle">
            <PopUp/>
          </Row>
          <Col span={24}>zxczxczxc</Col>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contacts;
