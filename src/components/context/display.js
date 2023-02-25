import React from "react";
import Button from "./Button";

class Display extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         theme: "light",
      };
   }

   render() {
      const { click, handleClick, label } = this.props;

      return (
         <div style={{ background: "red" }}>
            <h3>{click} times</h3>
            <Button handleClick={handleClick} label={label} />
         </div>
      );
   }
}

export default Display;
