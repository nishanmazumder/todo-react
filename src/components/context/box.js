import React, { Component } from "react";
import ColorContext from "./color";
import Structure from "./structure";

export default class Box extends Component {
  render() {
    return (
      // <Structure bg={"green"} />

      <ColorContext.Consumer>
        {({ box }) => {
          console.log(box);

          // <Structure bg={{ box }} />;
        }}
      </ColorContext.Consumer>
    );
  }
}
