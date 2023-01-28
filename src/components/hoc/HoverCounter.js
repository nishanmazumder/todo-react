import withCounter from './withCounter'

const HoverCounter = (props) => {

    const {count, increamentSet} = props

  return (
    <div>
        <h3 onMouseOver={increamentSet}>Hovered {count} times</h3>
    </div>
  )
}

export default withCounter(HoverCounter)
