
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
        </Routes>
      </div>
  )
}

export default App
