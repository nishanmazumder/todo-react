import React, { Component } from "react";

export default class Structure extends Component {
   constructor(props) {
      super(props);
      this.state = {
         box: {
            height: "150px",
            width: "150px",
            margin: "0px auto",
            marginLeft: 0,
            background: "black"
         }
      };
   }

   static getDerivedStateFromProps(props, state) {
      let box = { ...state.box }
      box.background = props.theme.theme
      box.marginLeft = props.move
      return { box };
   }

   render() {
      return (
         <div style={this.state.box}>
            test
         </div>
      );
   }
}
