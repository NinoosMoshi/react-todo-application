// import { useState } from "react";

export default function CounterButton({num, increamentMethod, decreamentMethod}){

   //  const [count,setCount] = useState(0);
 
   // function increament(){
   //    // setCount(count + num)
   //    increamentMethod(num)
   // }
 
   // function decreament(){
   // //  setCount(count - num)
   //  decreamentMethod(num)
   // }
 
 
    return(
     <div className="counter">
          {/* <span className="count">{count}</span> */}
         <div>
            <button className="counterButton" onClick={() => increamentMethod(num)}>+{num}</button>
            <button className="counterButton" onClick={() => decreamentMethod(num)}>-{num}</button>
         </div>
     </div>
    ) 
 }