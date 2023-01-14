import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.clockTime = setInterval(()=>{
        this.tick()
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTime)
  }

  tick = () =>{
    this.setState({ date: new Date() });
  }

  render() {
    return <span>{this.state.date.toLocaleTimeString(this.props.local)}</span>;
  }
}

export default Clock;
