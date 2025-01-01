import { Link } from "react-router-dom";
import TextAnimation from "../../utils/TextAnimation";

export default function AuthScreen() {
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
        <div className="flex mt-6">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded-l-md focus:outline-none"
          />
          <button className="bg-red-600 text-white font-bold p-3 px-6 rounded-r-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
