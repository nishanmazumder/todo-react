const ClickCounter = (props) => {

    const {count, incrementSet, color} = props
    const style = "red" === color ? {backgroundColor:"red", color:"#fff"} : {backgroundColor:"black", color:"#fff"}

  return (
    <div>
      <button style={style} onClick={incrementSet}>Clicked {count} times</button>
    </div>
  )
}

export default ClickCounter
