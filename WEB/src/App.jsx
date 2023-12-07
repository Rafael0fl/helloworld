import { Route,Routes } from "react-router-dom"

import Home from './components/home/home.jsx';
import Login from './components/login/login.jsx';
import Registration from './components/registration/registration.jsx';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/registration" element={<Registration />}/>
    </Routes>
  )
};

export default App
