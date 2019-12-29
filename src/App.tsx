//import "babel-polyfill";
import React, { Component } from "react";
import { Name } from "./models/name";
import { NewNameForm } from "./components/NewNameForm";
import { NamesList } from "./components/NamesList";

interface State {
  newName: Name;
  names: Name[];
}

class App extends Component<{}, State> {
  state = {
    newName: {
      id: 1,
      name: ""
    },
    names: [
      {id: 1, name: "Ahmad "}, {id: 2, name: "Kabul"}
    ]
  };
//const RandomName = () =>  name[Math.floor(Math.random() * name.length)]; 

  render() {
 const abc =this.state.names ||[];
     console.log(abc);

    return (
      <div className="container">
        <h2>Front-end code test</h2>
         {/* <p>{abc[~~(abc.length * Math.random())]}</p>  */}

        <NewNameForm
          name={this.state.newName}
          onAdd={this.addName}
          onChange={this.handleNameChange}
        />
        <NamesList names={this.state.names} onDelete={this.deleteName} />
      </div>
    );
  }

  private addName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newName: {
        id: previousState.newName.id + 1,
        name: ""
      },
      names: [...previousState.names, previousState.newName]
    }));
  };

  private handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newName: {
        ...this.state.newName,
        name: event.target.value
      }
    });
  };

  private deleteName = (nameToDelete: Name) => {
    this.setState(previousState => ({
      names: [
        ...previousState.names.filter(name => name.id !== nameToDelete.id)
      ]
    }));
  };
}

export default App;
