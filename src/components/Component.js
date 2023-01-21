import React from "react";

const Component = () => {
    const [count, setCount] = React.useState(0)

    return(
        <div>
            <h1>{count}</h1>
            <button type="button" onClick={()=> {setCount(count + 1)}}>+</button>
        </div>
    )
}

export default Component

