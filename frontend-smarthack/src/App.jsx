import Landing from './pages/Landing.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import Statistics from './pages/Statistics.jsx'
import Organization from './pages/Organization.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/appContext.jsx'

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/:userId' element={<Home />}></Route>
          <Route path='/statistics/:userId' element={<Statistics />}></Route>
          <Route
            path='/organization/:organizationId'
            element={<Organization />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
