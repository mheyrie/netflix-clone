import Navbar from "../../components/Navbar";

export default function HomeScreen() {
  return (
    <>
      <div className=" h-screen text-white relative bg-gray-900">
        <Navbar />

        <img src="/extraction.png" alt="" />
      </div>
    </>
  );
}
