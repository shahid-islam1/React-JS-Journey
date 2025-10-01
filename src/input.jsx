import { useState } from "react"
function Input(){
    const [val, setVal] = useState("shahid")
    return (
        <div>
            <h1>
                get input field value </h1>
                <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Name" />
<button onClick={()=> setVal("")}>clear input</button>
                <h1>{val}</h1>
        </div>
    )
}
export default Input