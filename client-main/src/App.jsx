import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <Register />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element= {<Navigate to="/"/>} />
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;