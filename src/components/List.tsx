import { Card } from "antd";
import { FunctionComponent } from "react";
import { useCustomSelector } from "./hooks/UseCustomSelector";

export const List: FunctionComponent = () => {
  const { contacts } = useCustomSelector((store) => store.contacts);

const test = () => {
    console.log(1)
}
  return (
    <Card className="list">
      {contacts.map((c) => (
        <p key={c.id} onClick ={()=> test()}>{c.firstName}</p>
      ))}
    </Card>
  );
};
