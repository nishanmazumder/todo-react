import React from "react";

class Button extends React.Component {
  render() {

    const {change} =  this.props
    // console.log("render button")
    return (
      <>
        <button type="button" onClick={change}>Tick</button>
      </>
    );
  }
}

export default Button;
