import { Link } from "react-router-dom";
import TextAnimation from "../utils/TextAnimation";

export default function SignupPage() {
  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </Link>
        <Link to={"/login"}>
          <button className="bg-red-600 text-white font-bold p-2 px-3 rounded-md">Sign In</button>
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-2xl p-8 space-y-4 bg-black/60 rounded-lg shadow-md">
          <TextAnimation />
          <p className=""></p>
        </div>
      </div>
    </div>
  );
}
