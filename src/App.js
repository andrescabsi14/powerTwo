import React from "react";
import PowerOfTwo from "./PowerTwo";
import { render } from "react-dom";
import "normalize.css";
import "./App.scss";

class App extends React.Component {
  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Power of Two detector</h1>
        </header>
        <PowerOfTwo />
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
