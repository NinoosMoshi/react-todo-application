import { useState } from 'react'
import CounterButton from './CounterButton'
import './Counter.css'


export default function Counter(){

   const [count,setCount] = useState(0);

   function increamentParent(num){
     setCount(count + num)
   }

   function decreamentParent(num){
      setCount(count - num)
    }

    function resetCounter(){
      setCount(0)
    }

 
   return(
      <>
        <span className="totalCount">{count}</span>
        <CounterButton num={1} increamentMethod={increamentParent}  decreamentMethod={decreamentParent}/>
        <CounterButton num={2} increamentMethod={increamentParent}  decreamentMethod={decreamentParent}/>
        <CounterButton num={5} increamentMethod={increamentParent}  decreamentMethod={decreamentParent}/>
        <button className="resetButton" onClick={resetCounter}>Reset</button>

      </>
   )
}









