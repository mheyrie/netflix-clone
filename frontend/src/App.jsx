import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
// import Footer from "./components/Footer";

function App() {
  const {user, isCheckingAuth} = useAuthStore();
  return (
   <>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignupPage />} />
     </Routes>
     {/* <Footer/> */}
     <Toaster />
   </>
  );
}

export default App;
