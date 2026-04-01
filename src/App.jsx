import { Route,Routes  } from 'react-router';
import './App.css'
import NavBar from './component/NavBar'
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
    <NavBar/>
    <main>
      <Routes>
        <Route  path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </main>
    </>

  );
}

export default App