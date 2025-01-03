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
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on Smart TVs, PayStattion, Xbox, Chromecast, Apple TV,
              Blu-ray players,nd more.
            </p>
          </div>
          <div className="flex-1 relative">
            <img src="/tv.png" alt="tv image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* separator  */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* second section */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          <div className="flex-1">
            <div className="relative">
              <img
                src="/stranger-things-lg.png"
                alt="Strange thing"
                className="mt-4"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2">
                <img
                  src="/stranger-things-sm.png"
                  alt="image"
                  className="h-full"
                />
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col gap-0">
                    <span className="text-md lg:text-lg font-bold">
                      Stranger Things
                    </span>
                    <span className="text-sm text-blue-500">
                      Downloading...
                    </span>
                  </div>
                  <img src="/download-icon.gif" alt="" className="h-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:text-left text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">
              Download your shows to watch offline
            </h2>
            <p className="text-lg md:text-xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      {/* separator  */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* third section  */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
             Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img src="/device-pile.png" alt="device image" className="mt-4 z-20 relative" />
            <video
              className="absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10 max-w-[63%]"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      {/* separator  */}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />

      {/* fourth section  */}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Watch everywhere
            </h2>
            <p className="text-lg md:text-xl">
             Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
            </p>
          </div>
          <div className="flex-1 relative overflow-hidden">
            <img src="/device-pile.png" alt="device image" className="mt-4 z-20 relative" />
          
          </div>
        </div>
      </div>
    </div>
  );
}
