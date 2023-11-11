import Landing from './pages/Landing.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
