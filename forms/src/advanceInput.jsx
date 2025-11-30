import { useState } from "react"

let AdvanceForm = () => {

    const [data,setData] = useState({
        gender: '',
        country: 'Pakistan',
        agree: false,
    })

    function handleChange(e){
        let {name,value,type,checked} = e.target;

        setData(prev=>({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))


    }
   

    function handleSumbit(e){
   
        
    }


    return (
        <form onSubmit={handleSumbit}>

            <label >
                <input type="radio" name="gender" checked={data.gender === 'Male'} value={'Male'} onChange={handleChange} />
                MALE
            </label>

            <label >
                <input type="radio" checked={data.gender === 'Female'} name="gender" value={'Female'} onChange={handleChange} />
                FEMALE
            </label>

            <br />

            <label htmlFor="country">
                Country
                <select name="country" value={data.country} onChange={handleChange} >
                    <option value="Pakistan">Pakistan</option>
                    <option value="Jeetland">Jeetland</option>
                    <option value="Bangladesh">Bangladesh</option>
                </select>
            </label>

            <br />


            <label htmlFor="agree">
                <input type="checkbox" checked={data.agree} name="agree" onChange={handleChange} />
                I agree to the terms and conditions
            </label>


             <button type="submit">SUBMIT</button>
             <br />
             <p>Gender: {data.gender}</p>
             <p>Country: {data.country}</p>
             <p>Terms: {data.agree ? 'user is agreed' : 'user is not agreed yet.'}</p>
        </form>
    )
}

export default AdvanceForm