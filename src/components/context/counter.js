import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   return { click: props.clickVal };
  // }

  increment = () => {
    this.setState((prvState) => ({ click: prvState.click + 1 }));
  };

  render() {
    const { children } = this.props;
    const { click } = this.state;

    return children(click, this.increment);
  }
}

export default Counter;
