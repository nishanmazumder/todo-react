import React from "react";
import TemparatureInput from "./TemparatureInput";
import Display from "./Display";
import { toCelsious, toFarenhite, convert } from "./lib/converter";

class Calculator extends React.Component {
  state = {
    temparature: "",
    scale: "c",
  };

  FarenhiteTocelsious;

  handleClick = (e, scale) => {
    this.setState({
      temparature: e.target.value,
      scale,
    });
  };

  render() {
    const { temparature, scale } = this.state;

    const celsious =
      scale === "f" ? convert(temparature, toCelsious) : temparature;
    const fahrenheit =
      scale === "c" ? convert(temparature, toFarenhite) : temparature;

    return (
      <div>
        <TemparatureInput
          scale="c"
          temparature={celsious}
          temparatureOnChange={this.handleClick}
        />
        <TemparatureInput
          scale="f"
          temparature={fahrenheit}
          temparatureOnChange={this.handleClick}
        />
        <Display value={temparature} />
      </div>
    );
  }
}

export default Calculator;
