
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './page/LandingPage'
import Navbar from './moleculs/Navbar'
import Header from './components/Header'

function App() {
  

  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
    </Routes>
  </Router>
  )
}

export default App
