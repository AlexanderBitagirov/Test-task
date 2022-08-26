import { Button, Card, Row } from "antd";
import { FunctionComponent } from "react";
import { IContact } from "../store/reducers/contacts/types";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";

export const List: FunctionComponent = () => {
  const { contacts } = useCustomSelector((store) => store.contacts);

  const { showCard, sentCurrentContact, editStatus } = UseActions();

  const show = (el: IContact) => {
    sentCurrentContact(el);
    showCard(true);
    editStatus(true);
  };
  return (
    <Card className="list">
      <Row>
        {contacts.map((c) => (
          <Button className="contacts" key={c.id} onClick={() => show(c)}>
            {c.firstName}
          </Button>
        ))}
      </Row>
    </Card>
  );
};
