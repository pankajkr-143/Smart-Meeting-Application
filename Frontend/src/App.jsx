import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


import HeroSection from './components/HeroSection'
import SignUp from './components/SignUp'
import UserSignIn from './components/UserSignIn'
import ClickHomeIcon from './components/ClickHomeIcon'



const App = ()=> {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="" element={<HeroSection />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/UserSignIn" element={<UserSignIn /> } />
            <Route path="/ClickHomeIcon" element={<ClickHomeIcon /> } />
            
        </Routes>
    </BrowserRouter>
  )
}

export default App
