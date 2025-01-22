import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/SignupPage";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser";
import { useEffect } from "react";
// import Footer from "./components/Footer";


function App() {
  const {user, isCheckingAuth, authCheck} = useAuthStore();
  console.log('auth user is here:', user);

  useEffect(() => {authCheck();}, []);
  
  return (
   <>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignupPage />} />
     </Routes>
    {/* <Footer /> */}
     <Toaster />
   </>
  );
}

export default App;
