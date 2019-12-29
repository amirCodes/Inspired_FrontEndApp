import React, { StatelessComponent } from "react";

import { Name } from "../models/name";
import { NamesListItem } from "./NamesListItem";

export interface NamesListProps {
  names: Name[];
  onDelete: (name: Name) => void;
}

export const NamesList: StatelessComponent<NamesListProps> = ({
  names,
  onDelete
}) => (
  <ul>
    {names.map(name => (
      <NamesListItem name={name} onDelete={onDelete} key={name.id} />
    ))}
  </ul>
);
