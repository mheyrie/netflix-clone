import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Play } from "lucide-react";

export default function HomeScreen() {
  return (
    <>
      <div className=" h-screen text-white relative">
        <Navbar />

        <img
          src="/extraction.jpg"
          alt="hero-img"
          className="absolute left-0 top-0 w-full h-full object-cover -z-50"
        />
        <div
          className="absolute left-0 top-0 w-full h-full bg-black/50 -z-50"
          aria-hidden="true"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32" />

        <div className="bg-gradient-to-b from-gray-800 via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />

        <div className="max-w-2xl">
          <h1 className="mt-4 text-6xl font-extrabold">Extraction</h1>
          <p className="mt-2 text-lg">2014 | 18+</p>
          <p className="mt-4 text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            dolores doloremque nobis excepturi voluptate quo nam alias
            consectetur dicta, ad sapiente soluta, provident nulla eaque
            voluptas totam earum tempore mollitia!
          </p>
        </div>
        <div className="flex mt-8">
          <Link to="/watch/123" className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded pr-4 flex items-center">
          <Play className="size-6 inline-block mr-2 fill-black"/>
          Play
          </Link>
        </div>
      </div>
    </>
  );
}
