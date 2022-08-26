import { Card } from "antd";
import { FunctionComponent } from "react";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";

export const ContactCard: FunctionComponent = () => {
  const { data } = useCustomSelector((store) => store.current);
  const { deleteContact } = UseActions();
  const { showCard } = UseActions();


  const removeContact = () => {
    deleteContact(data.id);
    showCard(false);
  };

  return (
    <Card>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.patronymic}</p>
      <button onClick={() => removeContact()}> Удалить </button>
    </Card>
  );
};
