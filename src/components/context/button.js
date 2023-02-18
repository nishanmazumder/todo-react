import React from "react";

class Button extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button type="button" onClick={handleClick}>
        Click
      </button>
    );
  }
}

export default Button;
