import { useState } from "react";
import User from "./toogleUser";
function Toggle() {
    const [display, setDisplay] = useState(true)
    return (<>
        <h1>Toggle in react</h1>
        <button onClick={() => setDisplay(!display)}>Toggle</button>

        <div>
            {
                display ? <User /> : null
            }
        </div>
    </>
    )
}
export default Toggle