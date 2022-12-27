import { BrowserRouter} from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Info from "./Pages/Info";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Projets from "./Pages/Projets";

function App() {
  return (
    <div>
         <BrowserRouter>
      <Header/>
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
