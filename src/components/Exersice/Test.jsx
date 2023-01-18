import { useState } from "react"

function Test () {
    const [state , setstate] = useState('+')

    function click() {
        console.log('kir')
    }

    return (
        <div>
            {console.log(state)}
            <h1 onClick={click}>saaalaaaam</h1>
            <input value={state} onChange={(event)=> setstate(event.target.value)} type="radio" />
        </div>
    )
}
export default Test