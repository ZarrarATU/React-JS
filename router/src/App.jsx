import './App.css'
import { Outlet,NavLink } from 'react-router-dom';

let App = ()=>{
  return(
    <div className="">
      <nav>
             <NavLink to={'./about/thiss is saar i phull sappart to you'}>About saar</NavLink>
             <NavLink to={'./information'}>INFORMATION</NavLink>

          NAV BAR THIS IS A NAV BAR SAAR 
      </nav>
      

      <br />
      <br />


      <Outlet></Outlet>


      <br />
      <br />

      <footer>
        THIS IS A FOOTER THAT WILL FOOT YOUR FOOT SAAR
      </footer>
    </div>
  )
  
}

export default App;
