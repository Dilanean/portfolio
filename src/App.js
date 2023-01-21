import "./styles/main.css";
import { HashRouter as Router, Routes, Route} from "react-router-dom";


import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";




function App() {


  return (
    <div className="App">
 
     
     <Router>
        <Navbar/> 
          
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/project/:id" element={<Project/>}></Route>
            <Route path="/contacts" element={<Contacts/>}></Route>
          </Routes>
        
        <Footer/>
     </Router>
       
    </div>
  );
}

export default App;
