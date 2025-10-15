import { useState } from "react"


function UseTransitionState(){
    const [isPending, setPending] = useState(false);

const HandleBtn =async() =>{
    setPending(true);
    await new Promise(res=>setTimeout(res,1000)) ;

    setPending(false);
}
    return(
        <div>
            <h1>
                useTransition Hook by using useState in react 19
            </h1>
            <button disabled={isPending} onClick={HandleBtn}>{isPending ? 'Loading...' : 'Click Me'}</button>
        </div>
    )
}

export default UseTransitionState;