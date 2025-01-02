import { Link } from "react-router-dom";
import TextAnimation from "../../utils/TextAnimation";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  return (
    <div className="relative w-[100%] h-screen">
      <div className="relative z-[1]  w-[100%]">
        <div className="absolute overflow-hidden home-hero">
          <div className="absolute top-0 first"></div>
          <div className="second absolute top-0"></div>
        </div>
        {/* Navbar  */}
        <div className="relative z-[2] nav-container">
          <div className="nav-first">
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
          </div>
        </div>

        <div className="relative main-hero">
          <div className="inner-one">
            <div className="absolute h-[100%] w-[100%] overflow-hidden">
              <div className="absolute m-0  h-[100%] w-[100%] ">
                <div className="">
                  <div className="hero-viv"></div>
                  <img
                    src="/hero.png"
                    alt=""
                    className="h-[100%] w-[100%] object-cover object-center absolute"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 z-[3] w-[100%] mx-auto text-center">
              <div className="inner-two">
                <div className="">
                  <div className="flex flex-col ">
                    <div className="">
                      <TextAnimation />

                      <h2 className="text-xl mb-4 text-white">
                        Watch anywhere. Cancel anytime.
                      </h2>
                      <p className="text-lg mb-4 text-white">
                        Ready to watch? Enter your email to create or restart
                        your membership.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full rounded">
                  <div className="flex items-center justify-center">
                    <form className="flex flex-col md:flex-row gap-2 w-1/2 justify-center">
                      <input
                        type="email"
                        placeholder="Email address"
                        className="p-3 rounded flex-1 bg-black/80 border border-gray-700 focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button className="bg-red-600 text-white text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
                        Get Started
                        <ChevronRight className="size-6" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="overflow-x-hidden relative h-[6.25rem] z-[1] box-border">
                <div className="curve">
                  <div className="curve-one"></div>
                </div>
                <div className="unk z-[2] relative text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* first section  */}
      <div className="-mt-2 py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          <div className="flex-1">
            
          </div>
          <div className="flex-1">right</div>
        </div>
      </div>
    </div>
  );
}
