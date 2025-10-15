import LiftingUpUser from "./LiftingUpUser.jsx";
import LiftingUpDisplay from "./LiftingUpDisplay.jsx";
import { useState } from "react";


function LiftingState() {
        const [name,setName]=useState("")
    return (
        <div>
            <h1>
                This is Lifting State Up example
            </h1>
            <LiftingUpUser setName={setName}/>
            <LiftingUpDisplay name={name} />
        </div>
    );
}
export default LiftingState;