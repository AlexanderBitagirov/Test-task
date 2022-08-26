import { Button, Form, Input, Modal } from "antd";
import React, { FunctionComponent, useState } from "react";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";

const PopUp: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { contacts } = useCustomSelector((store) => store.contacts);
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const { setContact } = UseActions();

  const add = () => {
    let id = contacts.length;

    setContact({
      id: id,
      firstName: firstname,
      lastName: lastName,
      patronymic: patronymic,
    });
    setIsModalVisible(false)
  };
  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить
      </Button>
      <Modal
        title="Добавить контакт"
        visible={isModalVisible}
        onOk={add}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Имя">
            <Input value={firstname} onChange={e=> setFirstname(e.target.value)}/>
          </Form.Item>
          <Form.Item label="Фамилия">
            <Input value={lastName} onChange={e=> setLastname(e.target.value)}/>
          </Form.Item>
          <Form.Item label="Отчество">
            <Input value={patronymic} onChange={e=> setPatronymic(e.target.value)}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PopUp;
