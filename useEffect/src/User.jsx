import { useEffect, useState } from "react";

let User = ({user})=>{

   console.log('hi saar i am here');

   let [time,setTime] = useState(0)

   useEffect(()=>{
    // if(time <= 10) { 
      setTimeout(() => {
        setTime(time=>time+1)
      }, 1);
    // }
   },[time])
   

    return (
        <div>
            Hello saar! {time}  
        </div>
    )
}

export default User