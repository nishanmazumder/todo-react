import React, { Component } from "react";
import ColorContext from "./Color";
import Structure from "./StructureBox";

export default class Box extends Component {
   render() {
      return (
         <ColorContext.Consumer>
            {({ theme }) => {
               return <Structure theme={{ theme }} />
            }}
         </ColorContext.Consumer>
      );
   }
}
