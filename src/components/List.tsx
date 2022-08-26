import { Card } from "antd";
import { FunctionComponent } from "react";
import { IContact } from "../store/reducers/contacts/types";
import { UseActions } from "./hooks/UseActions";
import { useCustomSelector } from "./hooks/UseCustomSelector";

export const List: FunctionComponent = () => {
const { contacts } = useCustomSelector((store) => store.contacts);

const { showCard } = UseActions();
const {sentCurrentContact} = UseActions();

//TODO

const test = (el:IContact) => {
    sentCurrentContact(el)
    showCard(true)
}
  return (
    <Card className="list">
      {contacts.map((c) => (
        <p key={c.id} onClick ={()=> test(c)}>{c.firstName}</p>
      ))}
    </Card>
  );
};
