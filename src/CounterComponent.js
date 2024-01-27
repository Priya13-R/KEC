import React, {useRef, useEffect,useState} from 'react'
const CounterComponent = () => {
    const counterRef = useRef(null);
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log("Counter Ref:", counterRef.current);
    },[count]); // Run the effect whenever the 'count' state changes
    const incrementCounter = () => {
      //Update the ref and state
      counterRef.current += 1;
      setCount((prevCount) => prevCount + 1);  
};
  return (
    <div>
      <p>Counter value (State) : {count}</p> 
      <button onClick={incrementCounter}>Increment</button>   
    </div>
  );
};
export default CounterComponent;