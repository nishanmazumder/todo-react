import React from "react";
import Button from "./Button";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { date: new Date(), local: "bn-BD" };
  // }

  state = { date: new Date(), local: "bn-BD" };

  componentDidMount() {
    this.clockTime = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTime);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  localChange = (local) => {
    this.setState({ local });
  };

  render() {
    // console.log("render clock")
    const { date, local } = this.state;
    return (
      <>
        <span>{date.toLocaleTimeString(local)}</span>
        {local === "bn-BD" ? (
          <Button change={this.localChange} local="en-US" show={false}/>
        ) : (
          <Button change={this.localChange} local="bn-BD" show/>
        )}
      </>
    );
  }
}

export default Clock;
