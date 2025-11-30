function Buttons({color}){

    let changeColor = ()=>{
         let main = document.querySelector('.main')

         main.style.backgroundColor = color
    }


   return <button style={{backgroundColor: color}} onClick={changeColor}>
            {color}
   </button>
}

export default Buttons