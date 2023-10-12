import React, { Component } from "react";
import { greetings, goodbye } from "../js/greetings";

class About extends Component {
  render() {
    return (
      <>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button onClick={greetings}>Greet</button>
        <button onClick={goodbye}>Goodbye</button>
      </>
    );
  }
}

export default About;
