import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage';
import ArtHomePage from './pages/Art-Homepage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/arthomepage' element={<ArtHomePage/>} />
      </Routes>
    </Router>
  )
}

export default App
