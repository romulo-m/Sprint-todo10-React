import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Todo from './pages/Todo/Todo'
import Header from './components/Header/Header'

function App() {
  
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Todo />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
