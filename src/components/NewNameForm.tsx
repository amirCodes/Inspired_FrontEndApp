import React, { StatelessComponent } from "react";
import { Name } from "../models/name";

export interface NewNameFormProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  name: Name;
}

export const NewNameForm: StatelessComponent<NewNameFormProps> = ({
  onChange,
  onAdd,
  name
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={name.name} placeholder="David..." required />
    <button type="submit">Add a name</button>
  </form>
);
