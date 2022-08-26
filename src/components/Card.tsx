import { Button, Card } from "antd";
import { FunctionComponent } from "react";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";
import PopUpEdit from "./PopUpEdit";

export const ContactCard: FunctionComponent = () => {
  const { data } = useCustomSelector((store) => store.current);
  const { deleteContact, showCard } = UseActions();

  const removeContact = () => {
    deleteContact(data.id);
    showCard(false);
  };

  return (
    <Card>
      <p>Имя: {data.firstName}</p>
      <p>Фамилия: {data.lastName}</p>
      <p>Отчество: {data.patronymic}</p>
      <PopUpEdit />
      <Button className="delete" danger onClick={() => removeContact()}>
        Удалить
      </Button>
    </Card>
  );
};
