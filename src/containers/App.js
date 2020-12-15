import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

export class App extends Component {
  state = {
    persons: [
      { id: "asdasd", name: "Max", age: 28 },
      { id: "qweqwe", name: "Manu", age: 24 },
      { id: "zxczxc", name: "Steph", age: 19 },
    ],
    otherState: "Some other value",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (elem) => elem.id === id
    );
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangeHandler} />;
    }

    return (
      <div className="App">
        <Cockpit clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
