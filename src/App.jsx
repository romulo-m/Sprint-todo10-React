import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Clientes from './Pages/Clientes/Clientes'
import Cadastrar from './Pages/Cadastrar/Cadastrar'

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Aside />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/cadastro" element={<Cadastrar />}/>
      <Route path="/clientes" element={<Clientes />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
