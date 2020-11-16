import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import BaseSyntaxSection from "./BaseSyntaxSection/BaseSyntaxSection";

export class App extends Component  {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 24 },
      { name: "Steph", age: 19 },
    ], 
    otherState: 'Some other value'
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Maximillian", age: 33 },
        { name: "Manu", age: 24 },
        { name: "Steph", age: 19 },
      ]
    });
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 33 },
        { name: event.target.value, age: 24 },
        { name: "Steph", age: 19 },
      ]
    });

  }

  render () {
    const style = {
      backgroundColor: 'gray',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
    <div className="App">
      
      <h1>This is a React App</h1>
      <BaseSyntaxSection />

      <button style={style} onClick={this.switchNameHandler}>Change Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler}
        change={this.nameChangeHandler}
      >
        My Hobbies: Running
      </Person>
      <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
      />
    </div>
    );
}

}

export default App;
