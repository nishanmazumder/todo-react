import React from "react";
import ColorContext from "./color";
import Counter from "./counter";
import Display from "./display";
import Box from "./box";

class Contxt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 1,
      theme: "light",
      box: "green",
    };
  }

  render() {
    const { click, box } = this.state;

    return (
      <>
        <Counter click={click}>
          {(click, handleClick) => (
            <Display click={click} handleClick={handleClick} />
          )}
        </Counter>
        <ColorContext.Provider box={{ box }}>
          <Box />;
        </ColorContext.Provider>
      </>
    );
  }
}

export default Contxt;
