import { Col, Layout, Row } from "antd";
import { FunctionComponent } from "react";
import { ContactCard } from "../components/Card";
import { useCustomSelector } from "../components/hooks/UseCustomSelector";
import { List } from "../components/List";
import { Navbar } from "../components/Navbar";
import PopUp from "../components/PopUp";

const Contacts: FunctionComponent = () => {
  const { isShow } = useCustomSelector((store) => store.card);

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
          <Col span={24}>
            {isShow && <ContactCard/>}
          </Col>
        </Col>
      </Row>
    </Layout>
  );
};

export default Contacts;
