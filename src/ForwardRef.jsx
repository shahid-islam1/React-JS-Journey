import { useRef } from "react"
import InputRef from "./ForwardRefInput"

function ForwardRef(){
    const inputRef = useRef(null);
    const UpdateInputRef = ()=>{
        inputRef.current.value = "Hello World";
        inputRef.current.style.color = "red";
        inputRef.current.focus()

    }
    return (
        <div>
            <h1>
                This is ForwardRef Component.
                <InputRef ref={inputRef} />
                <button onClick={UpdateInputRef}>Update Input</button>
            </h1>
        </div>
    )
}
export default ForwardRef;