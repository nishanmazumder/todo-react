import React from "react";

const withCounter = (GetComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    increamentSet = () => {
      this.setState((prvState) => ({
        count: prvState.count + 1,
      }));
    };

    render() {
      const { count } = this.state;
      return <GetComponent count={count} increamentSet={this.increamentSet} />;
    }
  }
  return NewComponent;
};

export default withCounter;
