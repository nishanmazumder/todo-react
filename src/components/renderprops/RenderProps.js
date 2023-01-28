import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";

export default class RenderProps extends React.Component {
  state = {
    color: "red",
  };

  render() {
    const { color } = this.state;

    return (
      <>
        <Counter>
          {(count, incrementSet) => (
            <ClickCounter
              color={color}
              count={count}
              incrementSet={incrementSet}
            />
          )}
        </Counter>
      </>
    );
  }
}
