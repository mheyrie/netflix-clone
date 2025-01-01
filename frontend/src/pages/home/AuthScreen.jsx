import { Link } from "react-router-dom";
import TextAnimation from "../../utils/TextAnimation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  return (
    <div className="hero-bg relative">
      {/* Navbar  */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </Link>
        <Link to={"/login"}>
          <button className="bg-red-600 text-white font-bold p-2 px-3 rounded-md">
            Sign In
          </button>
        </Link>
      </header>

      {/* Hero section  */}
      <div className="flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto">
        <TextAnimation />

        <h2 className="text-xl mb-4">Watch anywhere. Cancel anytime.</h2>
        <p className="text-lg mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="flex flex-col md:flex-row gap-2 w-1/2">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded flex-1 bg-black/80 border border-gray-700 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-600 text-white text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get Started
            <ChevronRight className="size-6"/>
          </button>
        </form>
      </div>

      {/* separator  */}
    <div className="h-2 w-full bg-[#232323]" aria-hidden='true'/>


    </div>
  );
}
