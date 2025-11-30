import { useState } from "react";

function Counter(){
    
    let [number,setNumber] = useState(1)

    function inc(){
        setNumber((n)=>{ return n+1})
        console.log(number);
        
    }

     function dec(){
        if(number > 0)
        setNumber(n=>n-1)
        console.log(number);
        
    }

    return(
      <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">The Anti-Patterns</span>
    <span class="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    )
}

export default Counter;