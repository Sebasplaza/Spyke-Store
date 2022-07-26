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
     <ItemListContainer nombre="One punch" imagen="https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg" tipo="Manga"/>
      <ItemListContainer nombre="Chain saw" imagen="https://img.assinaja.com/assets/tZ/050/img/131892_520x520.jpg" tipo="Manga"/>
      <ItemListContainer nombre="Monster" imagen="https://images.cdn2.buscalibre.com/fit-in/360x360/50/8a/508ae8657ccd59f01f0e438050ea4ce8.jpg" tipo="Manga"/>
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
