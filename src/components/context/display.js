import React from "react";
import Button from "./Button";

class Display extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         bg: "red"
      };

   }

   static getDerivedStateFromProps(props, state) {
      return {
         theme: props.theme,
         click: props.click,
         handleClick: props.handleClick,
         label: props.label,
         bg: props.click % 2 === 0 ? "green" : "red"
      };
   }

   render() {
      const { click, handleClick, label } = this.props;
      const { bg } = this.state;

      return (
         <div style={{ background: bg }}>
            <h3>{click} times</h3>
            <Button handleClick={handleClick} label={label} />
         </div>
      );
   }
}

export default Display;
