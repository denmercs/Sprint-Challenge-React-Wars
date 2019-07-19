import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.components";

// const App = () => {
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(res => res.json())
      .then(data => this.setState({ characters: data.results }))
      .catch(res => console.log("Error", res));
  }

  render() {
    const { characters } = this.state;

    console.log("DATA", characters);

    return (
      <div className="App">
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
