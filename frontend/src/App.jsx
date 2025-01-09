import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import Footer from "./components/Footer";

function App() {
  return (
   <>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignupPage />} />
     </Routes>
     <Footer/>
     
   </>
  );
}

export default App;
