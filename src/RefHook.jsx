import { useRef } from "react";

function RefHook() {
    const inputRef = useRef(null);
    
    const InputHandler = () => {
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }

    const ToggleHandler = () => {
        if (inputRef.current.style.display !== "none") {
            inputRef.current.style.display = "none";
        } else {
            inputRef.current.style.display = "inline";
        }
    }

    return (
        <div>
            <h1>useRef Hook</h1>
            <button onClick={ToggleHandler}>Toggle</button>
            <input ref={inputRef} placeholder="inputfield" type="text" />
            <button onClick={InputHandler}>Focus in input</button>
        </div>
    )
}

export default RefHook;