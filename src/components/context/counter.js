import React from "react";

class Counter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         click: props.click || 0,
      };
   }

   handleClick = () => {
      this.setState((prvState) => ({ click: prvState.click + 1 }));
   };

   render() {
      const { children } = this.props;
      const { click } = this.state;

      return children(click, this.handleClick);
   }
}

export default Counter;
