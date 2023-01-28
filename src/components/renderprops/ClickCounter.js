const ClickCounter = (props) => {

    const {count, incrementSet} = props

  return (
    <div>
      <button onClick={incrementSet}>Clicked {count} times</button>
    </div>
  )
}

export default ClickCounter
