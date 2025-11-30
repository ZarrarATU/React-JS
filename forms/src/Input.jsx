import { useState } from "react"

function Input(){


  let [data,setData] = useState({
    name: 'usman123',
    email: '123@gmail.com',
    password: 'd...',
  })

  let [result,setResult] = useState('there is no data avaliable saar')


  function submit(e){
      e.preventDefault()
      setResult(`${data.name}, ${data.email}, ${data.password}`)
  }

  function handleChange(e){
    let {name,value} = e.target;

    setData(preData=> {return ({ 
      
      ...preData,
      [name]: value,
    })})

    
  }

    return (
      <form onSubmit={submit}>

        <label htmlFor="name">NAME</label>
        <input name="name" type="text" value={data.name} onChange={handleChange} />

        <label htmlFor="email">EMAIL</label>
        <input name="email" type="email" value={data.email} onChange={handleChange} />

        <label htmlFor="password">PASSWORD</label>
        <input name="password" type="password" value={data.password} onChange={handleChange} />

        <button type="submit">SUBMIT</button>

        <p>{result}</p>
      </form>
      
    )

}

export default Input