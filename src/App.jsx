import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";



const App = () =>{
  return<>
  <h2>Welcome to mern 2023</h2>
  <Router>
    <Routes>
      <Route path="/" element ={<Home />} />
      <Route path="/about" element ={<About />} />

    </Routes>
  </Router>
  </>
};

export default App