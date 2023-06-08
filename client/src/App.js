import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import Login from "./pages/user/auth/Login";
import Register from "./pages/user/auth/Register";
import AdminLogin from "./pages/admin/auth/AdminLogin";
import AdminRegister from "./pages/admin/auth/AdminRegister";
import CreateFlight from "./pages/admin/CreateFlight";
import ViewFlights from "./pages/admin/viewFlights";
import CreateTravel from "./pages/admin/CreateTravel";
import ViewTravel from "./pages/admin/viewTravel";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Register/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/adminregister" element={<AdminRegister/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/booklist" element={<Home/>}/>
          <Route path="/createflight" element={<CreateFlight/>}/>
          <Route path="/viewflight" element={<ViewFlights/>}/>
          <Route path="/createtravel" element={<CreateTravel/>}/>
          <Route path="/viewtravel" element={<ViewTravel/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
