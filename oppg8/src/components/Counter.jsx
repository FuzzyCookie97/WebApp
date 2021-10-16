import { useState } from 'react'

//Used for understanding how to test
//Not the actual assignment

export const Counter = () => {
  const [count, setCount] = useState(0)

  const decrement = () => setCount(count => count - 1)
  const increment = () => setCount(count => count + 1)

  return (
    <div>
      <p>Count is: {count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}