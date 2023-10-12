import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempora
          at ea, animi, deserunt maxime ducimus iste perspiciatis velit culpa in
          explicabo temporibus, suscipit doloribus quisquam. Maxime soluta
          accusamus laboriosam.
        </p>
        <img src={require("../img/bear.gif")} alt="Radiohead bear" />
      </>
    );
  }
}

export default Home;
