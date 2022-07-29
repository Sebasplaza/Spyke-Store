import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className='App' style={{width:"100%", height:"100%"}}>
   <Navbar/>
   <div className="container">
    <div className="d-flex m-5">
     <ItemListContainer />
     
      </div>
   </div>
   <div className="container">
    <div className="d-flex m-5">
     <ItemCount/>
      </div>
   </div>
    {/* fin de el div de app */}
   </div>
   
   
  
   
  )
}

export default App
