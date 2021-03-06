import React from "react";
import PersonList from "./PersonList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  render() {
    return (
      <div className="App">
        <PersonList people={this.state.people} />
      </div>
    );
  }
}

export default App;
