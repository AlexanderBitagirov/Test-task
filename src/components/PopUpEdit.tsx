import { Button, Form, Input, Modal } from "antd";
import React, { FunctionComponent, useState } from "react";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";

const PopUpEdit: FunctionComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const {editStatus, updateContact, sentCurrentContact} = UseActions();
  const { data } = useCustomSelector((store) => store.current);
  
  const update = () => {
    const contact = {
        id: data.id,
        firstName: firstname,
        lastName: lastName,
        patronymic: patronymic,
      }
    
      updateContact(contact);

      sentCurrentContact(contact)
      setIsModalVisible(false);

  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    editStatus(false);
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Редактировать
      </Button>
      <Modal
        title="Добавить контакт"
        visible={isModalVisible}
        onOk={update}
        onCancel={handleCancel}
      >
        <Form>
          <Form.Item label="Имя">
            <Input
              value={data.firstName}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Фамилия">
            <Input
              value={data.lastName}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Отчество">
            <Input
              value={data.patronymic}
              onChange={(e) => setPatronymic(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default PopUpEdit;
