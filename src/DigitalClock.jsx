import ClockTime from "./Clock";
import { useState } from "react";

function Clock() {
    const [color, setColor] = useState("red");
    
    return (
        <div>
            <h2>Digital Clock in React js</h2>
            <select 
                onChange={(e) => setColor(e.target.value)}
                value={color}
            >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
            <ClockTime color={color} />
        </div>
    );
}

export default Clock;