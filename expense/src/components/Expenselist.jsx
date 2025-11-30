let ExpenseList = ({data,handleDeleteData})=>{



    return (
        <div className="list">


            {data.map((obj,i)=>{
                return <div key={i} className="expense">
                <span>{obj.name}</span>
                <span>{obj.amount}</span>
                <button onClick={()=>handleDeleteData(i)}>❌</button>
             </div>
            })}
             
        </div>
    )
}

export default ExpenseList