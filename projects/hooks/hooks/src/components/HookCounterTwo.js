import React, { useState } from 'react'

function HookCounterTwo() {
    const is = 0
    const [count, setCount] = useState(is)
    const iFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count:{count}
            <button onClick={() => setCount(is)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={iFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo