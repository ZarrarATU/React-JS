import { useState } from "react"

let Form = ({handleAddData})=>{

   let [expense,setExpense] = useState('')
   let [amount,setAmount] = useState('')


   function handleChange(e){
      let type = e.target.type
    
      if(type === 'text') setExpense(e.target.value)
      if(type === 'number') setAmount(e.target.value)
   }

   function handleAdd(){
     
   const newExpense = {
    name: expense,
    amount: amount
   }


   handleAddData(newExpense)

   }

    return (
        <div className="form">
               Expense <input type="text" value={expense} onChange={handleChange} />
               Amount <input type="number" value={amount} onChange={handleChange} />
               <button onClick={handleAdd} >ADD</button>
        </div>
    )
}

export default Form