import { useState } from 'react';

function ToggleCondition() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Multiple Condition In Toggle</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Condition Counter</button>
          {
    count === 0 ? <h3>Condition 1</h3>
    : count === 1 ? <h3>Condition for 1</h3>
    : count === 2 ? <h3>Condition 2</h3>
    : count === 3 ? <h3>Condition 3</h3>
    : count === 4 ? <h3>Condition 4</h3>
    : <h3>Other Condition</h3>
}
        </div>
    );
}

export default ToggleCondition;