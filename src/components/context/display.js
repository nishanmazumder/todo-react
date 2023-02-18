import React from "react";
import Button from "./button";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  render() {
    const { click } = this.props;
    const { handleClick } = this.props;

    return (
      <div style={{ background: "red" }}>
        <h3>{click} times</h3>
        <Button handleClick={handleClick} />
      </div>
    );
  }
}

export default Display;
