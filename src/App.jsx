import { BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Info from "./Pages/Info";
import Contact from "./Pages/Contact";
import Projets from "./Pages/Projets";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
         <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/projets" element={<Projets/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
