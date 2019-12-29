import React, { StatelessComponent } from "react";
import { Name } from "../models/name";
import "../Style.css";

export interface NamesListItemProps {
  name: Name;
  onDelete: (name: Name) => void;
}

export const NamesListItem: StatelessComponent<NamesListItemProps> = ({
  name,
  onDelete
}) => {
  const onClick = () => {
    onDelete(name);
  };

  return (
    <li>
      {name.name} <button onClick={onClick}>Delete</button>
      <hr></hr>
    </li>
  );
};
