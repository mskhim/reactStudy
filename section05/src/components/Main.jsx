import { useState } from "react";

function Main(){
  const number = 5;
  const obj = {name:"kms", age:30};
 const [count,setCount] = useState(number);
  return(
    <main>
      <h1>{(count%2===0)?"짝수":"홀수"}</h1>
      <h1 onClick={()=>setCount((count)=>count+1)}>{obj.name}</h1>
      <h1>{obj.age}</h1>
    
    </main>
  );

}

export default Main;
