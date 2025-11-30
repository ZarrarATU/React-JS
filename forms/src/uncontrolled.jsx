import { useRef, useState } from "react"

let UN = ()=>{

    let emailRef = useRef('yyy')
    let passwordRef = useRef('rtrtrt')
    let [result,setResult] = useState()


    function handleSubmit(e){
        e.preventDefault()

        setResult(`${emailRef.current.value}, ${passwordRef.current.value}`)

    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="email" ref={emailRef}  />
            <br />
            <input type="password" ref={passwordRef} />
            <br />

            <button type="submit">SUBMIT</button>

            <p>{result}</p>
        </form>
    )
}

export default UN