import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "ClassComponent" };
  }
  render() {
    return <h2>This is a {this.state.name}</h2>;
  }
}

export default ClassComponent;
