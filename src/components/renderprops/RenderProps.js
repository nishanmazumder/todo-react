import React from 'react'
import ClickCounter from './ClickCounter'
import Counter from './Counter'

export default class RenderProps extends React.Component {
  render() {
    return (
      <>
      <Counter children={({count, incrementSet})=>{
        <ClickCounter count={count} incrementSet={incrementSet}/>
      }}/>
      </>
    )
  }
}
