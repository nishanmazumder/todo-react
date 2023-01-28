import React from 'react'

export default class Brackets extends React.Component {
    bracket = (text) => `[ ${text} ]`;

  render(){
    return this.props.children({bracket:this.bracket})
  }
}
