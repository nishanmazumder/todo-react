import React, { Component } from "react";

export default class Structure extends Component {
   constructor(props) {
      super(props);
      this.state = {
         box: {
            height: "150px",
            width: "150px",
         },
         theme: "green"
      };
   }

   static getDerivedStateFromProps(props, state) {
      return {
         theme: props.theme
      };
   }

   render() {
      const { theme } = this.state.theme;

      return (
         <div style={{ height: "150px", width: "150px", background: theme }}>
            test
         </div>
      );
   }
}
