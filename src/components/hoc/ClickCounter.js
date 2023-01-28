import withCounter from './withCounter'

const ClickCounter = (props) => {

    const {count, increamentSet} = props

  return (
    <div>
      <button onClick={increamentSet}>Clicked {count} times</button>
    </div>
  )
}

export default withCounter(ClickCounter)
