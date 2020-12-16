import React from "react";
import Person from "./Person/Person";

const persons = ({ persons, clicked, changed }) =>
  persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={() => clicked(index)}
        change={(event) => changed(event, person.id)}
        key={person.id}
      />
    );
  });

export default persons;
