import React from "react";
import ClockList from "./ClockList";
// import Clock from './components/Clock'

const quantities = [1, 2, 3];

export default class AppClock extends React.Component {
  render() {
    return (
      <>
        {/* <Clock /> */}
        <ClockList quantities={quantities} />
      </>
    );
  }
}
