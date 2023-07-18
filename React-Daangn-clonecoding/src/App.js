import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NearbyStores from "./pages/NearbyStores";
import Jobs from "./pages/Jobs";
import Realty from "./pages/Realty";
import Car from "./pages/Car";
import Navbar from "./Navbar";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar/>}
      <div className="Container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/nearby-stores" element = {<NearbyStores />} />
          <Route path="/jobs" element = {<Jobs />} />
          <Route path="/realty" element = {<Realty />} />
          <Route path ="/car" element = {<Car />} />
          <Route path = "/login" element = {<Login />}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
