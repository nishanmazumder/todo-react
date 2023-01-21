import React from "react";
import Button from "./Button";

import Component from "./Component";

class Clock extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { date: new Date(), local: "bn-BD" };
  // }

  state = { date: new Date(), local: "bn-BD" };

  componentDidMount() {
    this.clockTime = setInterval(()=>{
        this.tick()
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTime)
  }

  tick = () =>{
    this.setState({date: new Date()})
  }

  localChange = (local) =>{
    this.setState({ local: local });
  }

  render() {
    // console.log("render clock")
    const {date, local} = this.state
    return (
      <>
        <span>{date.toLocaleTimeString(local)}</span>
        <Button change={this.localChange.bind(this, "en-US")}> Click </Button>
        <Component/>
      </>
    );
  }
}

export default Clock;
