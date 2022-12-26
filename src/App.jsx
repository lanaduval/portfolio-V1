import Home from './Pages/Home'
import Nav from './Components/Nav';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Card from './Components/Card';
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/card" element={<Card/>} />
      </Routes>
     <Nav/>
 
    </div>
  );
}

export default App;
