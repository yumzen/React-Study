import Navbar from "./Navbar";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
      <Navbar/>
      <div className="Container">
        <Routes>
          <Route path = "/" element = {<Home /> }/>
          <Route path = "/pricing" element = {<Pricing /> }/>
          <Route path = "/about" element = {<About /> }/>
        </Routes>
      </div>
    </>
  );
}

export default App;
