import './App.css'
import Form from './components/Form';
import ExpenseList from './components/Expenselist';
import { useEffect, useState } from 'react';

function App(){

  let [expenseData,setExpenseData] = useState(JSON.parse(localStorage.getItem('data')) || [])

  function SaveData(){
     localStorage.setItem('data',JSON.stringify(expenseData))
  }

  let handleAddData = (expense)=>{
         setExpenseData([...expenseData, expense])
         console.log(expenseData);
         
  }

  let handleDeleteData = index=>{
      setExpenseData(expenseData.filter((_,i) => i !== index))
  }

   useEffect(()=>{
     SaveData()
   },[expenseData])

  return (
    <div className="main">
        <Form handleAddData={handleAddData}></Form>
        <ExpenseList handleDeleteData={handleDeleteData} data={expenseData}></ExpenseList>
    </div>
  )
}

export default App;