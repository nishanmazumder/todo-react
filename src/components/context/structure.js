import React, { Component } from "react";

export default class Structure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: {
        height: "150px",
        width: "150px",
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { background: props.bg };
  }

  render() {
    // console.log(this.props.bg);
    const { bg } = this.props;

    return (
      <div style={{ height: "150px", width: "150px", background: bg }}>
        test
      </div>
    );
  }
}
