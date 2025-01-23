import Navbar from "../../components/Navbar";

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
        <div className="absolute left-0 top-0 w-full h-full bg-black/50 -z-50" aria-hidden='true'/>

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32"/>

        <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10"/>
      </div>
    </>
  );
}
