import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class Hoc extends React.Component {
  render() {
    return (
      <>
      <ClickCounter/>
      <HoverCounter/>
      </>
    )
  }
}
