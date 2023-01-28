import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextprops) {
    const { change: currentChange, local: currentLocal } = this.props;
    const { change: nextChange, local: nextLocal } = nextprops;

    if (currentChange === nextChange && currentLocal === nextLocal) {
      return false;
    }

    return true;
  }

  render() {
    const { change, local, show } = this.props;
    // console.log("render button")
    return (
      <>
        <button type="button" onClick={()=>change(local)}>
          {local === 'bn-BD' ? "Click" : "চাপ"}
        </button>

      {show && <h1>Hello</h1>}
      </>
    );
  }
}

export default Button;
